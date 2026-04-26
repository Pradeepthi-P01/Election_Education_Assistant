const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Initialize environment variables
dotenv.config();

// Import Firebase database instance
const { db } = require('./firebase-setup');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, '../')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "ok", app: "ElectWise" });
});

// Database health check
app.get('/api/health/db', async (req, res) => {
  try {
    if (!db) throw new Error("Firestore not initialized");
    await db.listCollections();
    res.json({ database: "connected" });
  } catch (error) {
    res.status(500).json({ database: "error", message: error.message });
  }
});

/**
 * POST /api/quiz/submit (Public)
 * Submits quiz score and generates certificate
 */
app.post('/api/quiz/submit', async (req, res) => {
  const { score, name } = req.body;

  if (typeof score !== 'number' || score < 0 || score > 200) {
    return res.status(400).json({ error: "Score must be 0-200" });
  }
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    let grade = "Beginner Voter";
    if (score >= 180) grade = "Democracy Champion";
    else if (score >= 140) grade = "Informed Voter";
    else if (score >= 100) grade = "Civic Learner";

    const percentage = Math.round((score / 200) * 100);

    const date = new Date();
    const dateStr = date.toISOString().split('T')[0].replace(/-/g, '');
    const certificateCode = `EW-${dateStr}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const scoreData = {
      name: name.trim(),
      score,
      percentage,
      grade,
      certificate_code: certificateCode,
      date: admin.firestore.FieldValue.serverTimestamp(),
      verified: true
    };

    const scoreRef = await db.collection('quiz_scores').add(scoreData);

    res.json({
      certificateId: scoreRef.id,
      grade,
      certificate_code: certificateCode,
      verified: true,
      score,
      percentage
    });
  } catch (error) {
    console.error("Quiz submission error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

/**
 * GET /api/verify/:certificateCode (Public)
 * Publicly verify a certificate
 */
app.get('/api/verify/:certificateCode', async (req, res) => {
  const { certificateCode } = req.params;
  try {
    const scoreQuery = await db.collection('quiz_scores')
      .where('certificate_code', '==', certificateCode)
      .limit(1)
      .get();

    if (scoreQuery.empty) {
      return res.status(404).json({ valid: false, message: "Certificate not found" });
    }

    const data = scoreQuery.docs[0].data();
    const dateObj = data.date ? data.date.toDate() : new Date();

    res.json({
      valid: true,
      userName: data.name,
      score: data.score,
      percentage: data.percentage,
      grade: data.grade,
      date: dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
      certificate_code: data.certificate_code
    });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(PORT, () => {
  console.log(`ElectWise backend running on port ${PORT}`);
});
