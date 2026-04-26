# ElectWise — India's Smart Election Education Platform

### 🗳️ Why ElectWise?
Navigating the world's largest democracy shouldn't be complicated. ElectWise is built for first-time voters and curious citizens who want to move beyond the confusion of electoral rules. We transform complex legal criteria and procedures into an immersive, interactive, and educational experience.

---

## 🎯 Project Vertical: Civic Tech & Education
ElectWise sits at the intersection of **Civic Technology** and **Public Education**. Its primary goal is to increase electoral literacy in India by gamifying the learning process and providing highly accessible tools for voter preparation.

---

## 🧠 Approach & Logic
Our approach focuses on **reducing friction** and **visual storytelling**:
- **Full-Stack Architecture**: Unlike basic static sites, ElectWise features a robust Node.js/Express backend that handles secure data processing and storage.
- **Persistent Verification System**: Utilizes **Google Firebase Firestore** to store and verify "Certificates of Civic IQ," ensuring that educational achievements are authentic and trackable.
- **Rule-Based Eligibility Engine**: Implements a strict decision-tree logic based on the **Representation of the People Act (RPA) 1950/1951** to validate voter status.
- **Multilingual Support**: A custom i18n system dynamically updates the entire platform in both English and Hindi.

---

## 🛠️ Technology Stack
- **Frontend**: HTML5, CSS3 (Modern Grid/Flexbox), JavaScript (Vanilla ES6+).
- **Backend**: Node.js & Express.js.
- **Database**: Google Firebase Admin SDK & Firestore.
- **Infrastructure**: Configured for **Google Cloud Platform (App Engine/Cloud Run)**.
- **Security**: Environment-variable based credential management and public verification endpoints.

---

## 🚀 Key Features

ElectWise provides a comprehensive suite of 9 interactive modules:

1. **Eligibility Checker**: A logic-based engine to verify voting rights based on Indian electoral laws.
2. **Election Timeline**: A visual, 6-step journey explaining election phases from announcement to counting.
3. **Polling Booth Finder**: Interactive station locator across all States and UTs.
4. **Voting Simulation (EVM/VVPAT)**: A high-fidelity virtual booth experience featuring physics-based VVPAT drops and EVM audio logic.
5. **Constituency Explorer**: Detailed insights and statistical data for every constituency in India.
6. **2024 Results Dashboard**: A data-driven tally of India's 18th General Election results.
7. **Profile Insights**: Comprehensive candidate analysis and performance metrics.
8. **Voter IQ Challenge & Verified Certification**: A graded awareness quiz that generates a **unique, database-backed Certificate ID** for every user.
9. **Certificate Verification Portal**: A dedicated public portal where any organization can verify a user's Voter IQ Certificate using their unique ID.

---

## 🔍 Evaluation Focus Areas

### 1. Robustness & Scalability
- **Production-Ready**: The app includes `app.yaml` and root `package.json` configurations for instant deployment to Google Cloud.
- **Database Integrity**: Uses Firestore's server-side timestamps and unique code generation to prevent duplicate or fake certificates.

### 2. User Experience (UX)
- **Zero-Login Flow**: Removed authentication barriers to ensure maximum accessibility. Users can learn and earn certificates instantly without complex sign-ups.
- **Accessibility (A11y)**: Includes a one-click **A+ Accessibility Mode** for larger fonts and enhanced contrast.

### 3. Google Ecosystem Integration
- **Google Cloud Platform**: Full integration for App Engine hosting.
- **Firebase Firestore**: Scalable, real-time NoSQL database for civic records.
- **Google Calendar**: Native integration for election reminders.
- **Google Fonts**: Custom typography (Poppins/Outfit) for a premium interface.

---

## 📋 Deployment Instructions (GCP)
1. **Configure Environment**: Add your Firebase Service Account keys to `app.yaml`.
2. **Login**: `gcloud auth login`
3. **Deploy**: `gcloud app deploy`

---

## ⚖️ Disclaimer
*ElectWise is an educational tool and is not officially affiliated with the Election Commission of India. All data is intended for simulation and awareness purposes only.*
