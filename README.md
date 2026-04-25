# ElectWise — India's Smart Election Education Platform

### 🗳️ Why ElectWise?
Navigating the world's largest democracy shouldn't be complicated. ElectWise is built for first-time voters and curious citizens who want to move beyond the confusion of electoral rules. We transform complex legal criteria and procedures into an immersive, interactive, and educational experience.

---

## 🎯 Project Vertical: Civic Tech & Education
ElectWise sits at the intersection of **Civic Technology** and **Public Education**. Its primary goal is to increase electoral literacy in India by gamifying the learning process and providing highly accessible tools for voter preparation.

---

## 🧠 Approach & Logic
Our approach focuses on **reducing friction** and **visual storytelling**:
- **State-Based Data Architecture**: The app uses a unified data dictionary (`data.js`) to manage complex mappings of States, Districts, and constituencies, ensuring accurate mock data generation without a backend.
- **Rule-Based Eligibility Engine**: Implements a strict decision-tree logic based on the **Representation of the People Act (RPA) 1950/1951** to validate voter status.
- **Progress-Driven UX**: A central dashboard tracks user engagement across different modules, encouraging completion of the educational journey.
- **Immersive Simulation**: Uses CSS-driven animations (physics-based VVPAT drop, EVM beep logic) to create a high-fidelity "mental model" of the actual polling booth.

---

## 🛠️ How the Solution Works
ElectWise is a **zero-dependency, single-page application (SPA)** that works entirely in the browser:
1. **Frontend**: Built with semantic HTML5 and modern CSS3 (Flexbox/Grid). It uses a custom-built view-management system in `script.js` to switch between modules without page reloads.
2. **State Management**: Utilizes `localStorage` to persist user progress, simulated votes, and quiz scores, making it "offline-capable" once loaded.
3. **Multilingual Engine**: A custom i18n system dynamically updates the DOM based on a selected language key, supporting English and Hindi seamlessly.

---

## 🚀 Key Features

ElectWise provides a comprehensive suite of 9 interactive modules designed for complete electoral awareness:

1. **Eligibility Checker**: A logic-based engine to verify your voting rights based on Indian electoral laws (RPA 1950/1951).
2. **Election Timeline**: A visual, 6-step journey explaining the election phases from announcement to counting.
3. **Polling Booth Finder**: Interactive map integration to help users locate their nearest voting station across all States and UTs.
4. **Voting Simulation (EVM/VVPAT)**: A high-fidelity virtual booth experience featuring physics-based VVPAT receipt drops and EVM sound logic.
5. **Constituency Explorer**: Detailed insights and statistical data for constituencies across India to help voters know their local context.
6. **2024 Results Dashboard**: A comprehensive, data-driven tally of India's General Election results and seat distributions.
7. **Profile Insights**: Comprehensive candidate analysis and performance metrics to help make an informed choice at the ballot box.
8. **Voter IQ Challenge**: A graded awareness quiz that rewards users with a verifiable "Certificate of Civic IQ."
9. **Myth vs Fact**: Cinematic 3D interactive flip cards that debunk common electoral misinformation with facts from the ECI.

*Bonus: The platform also includes a trackable **First-Time Voter Guide** with saved progress and completion rewards.*

---

## 🔍 Evaluation Focus Areas

### 1. Code Quality & Maintainability
- **Modular Structure**: Logic is separated into clear objects (`ElectWise.eligibility`, `ElectWise.voteriq`, etc.) within `script.js`.
- **Readability**: Consistent naming conventions and detailed comments explain complex logic like the VVPAT animation or dashboard updates.
- **Clean CSS**: Uses a variables-based design system for unified colors and transitions.

### 2. Security & Privacy
- **Client-Side Storage**: User progress and settings are stored only in the user's browser via `localStorage`, never sent to an external server.
- **Safe Implementation**: All user inputs (Eligibility fields, search queries) are handled within a local context to prevent XSS and ensure data privacy.

### 3. Efficiency
- **Zero Framework Overhead**: By avoiding heavy frameworks like React or Angular, the app loads instantly and runs smoothly even on low-end devices.
- **Resource Optimization**: Animations use GPU-accelerated properties (`transform`, `opacity`) to maintain 60fps.

### 4. Accessibility (A11y)
- **Inclusive Design**: Includes a one-click **A+ Accessibility Mode** for larger fonts and enhanced contrast.
- **Semantic HTML**: Proper use of roles, labels, and keyboard-friendly interactive elements.

### 5. Google Services Integration
- **Google Calendar**: Meaningful integration for "Add Election Reminder" functionality.
- **Google Fonts**: Custom typography (Poppins) for a premium reading experience.

---

## 📋 Assumptions Made
- **Data Period**: Statistics are based on ECI 2024 data points for educational demonstration.
- **Connectivity**: Assumes a baseline internet connection for Google Fonts, but core modules work offline once cached.
- **User Agency**: Assumes users have access to a modern browser with `localStorage` enabled.

---

## ⚖️ Disclaimer
*ElectWise is an educational tool and is not officially affiliated with the Election Commission of India. All data is intended for simulation and awareness purposes only.*
