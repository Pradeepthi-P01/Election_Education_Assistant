const { db } = require('./firebase-setup');
const admin = require('firebase-admin');

async function createTestScore() {
  try {
    const certCode = 'EW-20260425-TEST';
    await db.collection('quiz_scores').add({
      userId: 'test-user-123',
      name: 'Test User',
      score: 150,
      percentage: 75,
      grade: 'Informed Voter',
      certificate_code: certCode,
      date: admin.firestore.FieldValue.serverTimestamp(),
      verified: true
    });

    console.log('Test score created:', certCode);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createTestScore();
