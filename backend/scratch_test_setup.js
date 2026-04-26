const { db } = require('./firebase-setup');
const admin = require('firebase-admin');

async function createTestSession() {
  try {
    const testUid = 'test-user-123';
    const testToken = 'mock-token-456';

    // Ensure user exists
    const userRef = db.collection('users').doc(testUid);
    await userRef.set({
      email: 'test@example.com',
      name: 'Test User',
      created_at: admin.firestore.FieldValue.serverTimestamp(),
      quiz_best_score: 0,
      modules_completed: []
    });

    // Create session in top-level collection
    await db.collection('sessions').doc(testToken).set({
      userId: testUid,
      created_at: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log('Test session created (Top-level):', testToken);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createTestSession();
