const admin = require('firebase-admin');
const dotenv = require('dotenv');

// Load environment variables if not already loaded
dotenv.config();

let db;

try {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY 
    ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') 
    : undefined;

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Missing Firebase configuration in environment variables.");
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    })
  });

  db = admin.firestore();
  console.log("Firebase Firestore initialized successfully.");
} catch (error) {
  console.error("Firebase initialization failed:", error.message);
  // We don't exit the process; let the server run without DB features
}

module.exports = { db };
