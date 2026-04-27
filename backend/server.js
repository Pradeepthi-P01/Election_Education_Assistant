require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { db } = require('./firebase-setup');

const app = express();
const PORT = process.env.PORT || 8081;

// === AI Initialization ===
const { VertexAI } = require('@google-cloud/vertexai');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Vertex AI (for GCP Credits)
const vertex_ai = new VertexAI({
  project: process.env.FIREBASE_PROJECT_ID || 'electwise-18848',
  location: 'asia-south1',
  googleAuthOptions: {
    credentials: {
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined
    }
  }
});

// AI Studio (Fallback)
const genAI = new GoogleGenerativeAI((process.env.GEMINI_API_KEY || "").trim());

// === Middleware ===
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));

// === AI Chat Endpoint ===
app.post('/api/ai/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  const models = ['gemini-2.0-flash', 'gemini-2.5-flash', 'gemini-flash-latest'];

  // 1. Try Vertex AI First
  for (const modelName of models) {
    try {
      console.log(`🤖 AI: Trying Vertex (${modelName})...`);
      const model = vertex_ai.getGenerativeModel({ model: modelName });
      const result = await model.generateContent({ contents: [{ role: 'user', parts: [{ text: message }] }] });
      const text = result.response.candidates[0].content.parts[0].text;
      console.log(`✅ AI: Success with Vertex (${modelName})`);
      return res.json({ reply: text });
    } catch (e) {
      console.warn(`⚠️ Vertex (${modelName}) failed: ${e.message}`);
    }
  }

  // 2. Try API Key Fallback
  console.log("🔄 Vertex failed entirely. Trying API Key fallback...");
  for (const modelName of models) {
    try {
      console.log(`🤖 AI: Trying API Key (${modelName})...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(message);
      const text = result.response.text();
      console.log(`✅ AI: Success with API Key (${modelName})`);
      return res.json({ reply: text });
    } catch (e) {
      console.warn(`⚠️ API Key (${modelName}) failed: ${e.message}`);
    }
  }

  console.error("❌ AI: All models and methods failed.");
  res.status(500).json({ reply: "I'm having trouble connecting to all AI brains. Please check your internet and API keys!" });
});

// === Data Endpoints ===
app.get('/api/candidates', async (req, res) => {
  try {
    const { state, district } = req.query;
    let query = db.collection('candidates');
    if (state) query = query.where('state', '==', state);
    if (district) query = query.where('district', '==', district);
    const snap = await query.get();
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/trends', async (req, res) => {
  try {
    const snap = await db.collection('vote_trends').get();
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/news', async (req, res) => {
  try {
    const snap = await db.collection('news').orderBy('timestamp', 'desc').limit(10).get();
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/myths', async (req, res) => {
  try {
    const snap = await db.collection('myths').get();
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/quiz/questions', async (req, res) => {
  try {
    const snap = await db.collection('quiz_questions').get();
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/certificate/generate', async (req, res) => {
  try {
    const { name, score } = req.body;
    const code = 'EW-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const docRef = await db.collection('certificates').add({ name, score, certificate_code: code, timestamp: new Date() });
    const doc = await docRef.get();
    const d = doc.data();
    res.json({ success: true, id: doc.id, name: d.name, score: d.score, date: d.timestamp.toDate().toLocaleDateString('en-IN'), certificate_code: d.certificate_code });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.listen(PORT, () => {
  console.log(`🚀 ElectWise running on http://localhost:${PORT}`);
});
