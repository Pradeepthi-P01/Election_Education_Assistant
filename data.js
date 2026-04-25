const ElectWiseData = {
  // ===== ElectWise DATA CONFIGURATION =====

  translations: {
    en: {
      "nav_home": "Home", "nav_eligibility": "Eligibility", "nav_timeline": "Timeline",
      "nav_simulation": "Simulation", "nav_constituency": "Constituency",
      "nav_results": "Results", "nav_candidate": "Candidate",
      "nav_quiz": "Quiz", "nav_myths": "Myth vs Fact", "nav_guide": "Guide",
      "hero_h1_1": "96 Crore Voters.", "hero_h1_2": "One Decision.", "hero_h1_3": "Make It Count.",
      "hero_subtitle": "India's smartest election guide — learn, practice, and vote with confidence.",
      "hero_cta1": "Check My Eligibility", "hero_cta2": "Start Learning",
      "stat_voters": "Registered Voters", "stat_booths": "Polling Booths",
      "stat_seats": "Lok Sabha Constituencies", "stat_first": "First-Time Voters (2024)",
      "dash_title": "Your Personalized Progress", "dash_el": "Eligibility Check:",
      "dash_qz": "Quiz:", "dash_sm": "Voting Simulation:",
      "dash_gd": "First-Time Guide:", "dash_btn": "Your Next Step →",
      "qn_1_t": "Eligibility Checker", "qn_1_d": "Am I eligible to vote?",
      "qn_2_t": "Election Timeline", "qn_2_d": "How does an election work?",
      "qn_booth_t": "Polling Booth Finder", "qn_booth_d": "Where do I vote?",
      "qn_sim_t": "Voting Simulation", "qn_sim_d": "Practice the voting process",
      "qn_3_t": "Constituency Explorer", "qn_3_d": "Discover local leaders & stats",
      "qn_4_t": "2024 Results Dashboard", "qn_4_d": "View India's General Election tally",
      "qn_5_t": "Profile Insights", "qn_5_d": "Make an informed choice",
      "qn_6_t": "Voter IQ Challenge", "qn_6_d": "Find out your Voter IQ!",
      "qn_myth_t": "Myth vs Fact", "qn_myth_d": "Click cards to bust election myths.",
      "btn_go": "Go →",
      "section_myth": "Myth vs Fact", "myth_sub": "Click cards to bust election myths.",
      "sec_el_title": "Eligibility Checker", "lbl_name": "Full Name", "lbl_age": "Age",
      "lbl_state": "State / UT", "lbl_citizen": "Are you an Indian Citizen?",
      "lbl_reside": "Are you ordinarily residing in India?", "lbl_mind": "Are you of sound mind?",
      "lbl_crime": "Are you currently serving a criminal sentence?",
      "btn_check_el": "Check Eligibility", "btn_copy": "Copy Result",
      "sec_tl_title": "Election Timeline", "sec_booth_title": "Find Polling Booth",
      "lbl_b_state": "Select State / UT", "lbl_b_dist": "Select District",
      "booth_note": "Booth data is illustrative. Find your actual booth at voters.eci.gov.in",
      "sec_sim_title": "Voting Simulation", "sim_1_t": "Step 1: Enter Booth",
      "sim_1_d": "Welcome to the polling station. Please keep your phone away.",
      "btn_enter_booth": "Enter Booth →", "sim_2_t": "Step 2: Identity Verification",
      "btn_verify": "Verify ID", "btn_proceed_evm": "Proceed to EVM →",
      "sim_3_t": "Step 3: Cast Your Vote", "btn_confirm_vote": "Confirm Vote →",
      "sim_4_t": "Step 4: VVPAT Receipt", "sim_4_d": "Your vote has been recorded.",
      "btn_proceed": "Proceed →", "sim_5_t": "Step 5: Ink Mark",
      "sim_5_d": "You have successfully voted!", "btn_see_res": "See Results →",
      "sim_6_t": "Live Mock Tally", "btn_reset_sim": "Reset Simulation",
      "btn_vote_again": "Vote Again", "btn_start_quiz": "Start IQ Test →",
      "btn_flip_all": "Flip All", "btn_flip_reset": "Reset",
      "sec_cal_title": "Election Reminders", "btn_add_rem": "📅 Add Reminder",
      "cal_note": "⚠️ Dates are indicative based on electoral cycles.",
      "sec_gd_title": "First-Time Voter Guide", "btn_prev": "Previous", "btn_next": "Next",
      "sec_const_title": "Constituency Explorer", "sec_const_sub": "Discover your Lok Sabha & Vidhan Sabha constituency",
      "lbl_find_area": "Find Your Area", "opt_choose_state": "Choose State...", "opt_choose_dist": "Choose District / Region...", "btn_analyze": "Analyze Data",
      "const_disclaimer": "⚠️ Constituency data shown here is illustrative/mock and may not be accurate.",
      "sec_results_title": "📊 2024 Lok Sabha Results", "sec_results_sub": "India's 18th General Election — Final Results",
      "lbl_view_state": "View State Results:", "opt_all_india": "All India (National)",
      "res_total_seats_lbl": "🗳️ Total Seats", "res_nda_maj_lbl": "🏆 NDA Majority", "res_turnout_lbl": "📊 Turnout", "res_polling_lbl": "🗓️ Polling", "res_results_date_lbl": "📋 Results Date",
      "res_majority_badge": "MAJORITY", "res_opposition_badge": "OPPOSITION", "res_nda_alliance": "NDA Alliance", "res_nda_desc": "BJP + TDP + JD(U) + others", "res_india_alliance": "INDIA Alliance", "res_india_desc": "INC + SP + AITC + DMK + others", "res_seats_lbl": "Seats", "res_maj_mark": "Majority Mark: 272 Seats",
      "sec_cand_title": "📰 Profile Insights", "sec_cand_sub": "Professional profiles and electoral performance metrics for key candidates.", "sec_cand_source": "⚠️ Data source: ECI Affidavits 2024. Verify exact details at affidavit.eci.gov.in",
      "lbl_filter_party": "Filter by Party", "opt_all_parties": "All Parties", "btn_search": "🔍 Search", "cand_disclaimer": "⚠️ This data is illustrative. Always verify candidate information at affidavit.eci.gov.in before voting.",
      "sec_quiz_title": "🎯 Voter IQ Challenge", "sec_quiz_sub": "How well do you know Indian democracy? Find out your Voter IQ!",
      "iq_start_title": "Are you a Democracy Champion?", "iq_start_desc": "Answer 10 adaptive questions across 3 difficulty levels.",
      "lbl_your_name": "Your Name (for certificate)", "ph_enter_name": "Enter your full name",
      "iq_comp_title": "Challenge Completed!", "iq_total_score_lbl": "Your Total Score:", "iq_out_of_lbl": "out of 200 possible points",
      "btn_download_cert": "🖨️ Download Certificate", "btn_share_score": "📤 Share Score", "btn_retake": "🔄 Retake",
      "footer_title": "🗳️ ElectWise — Empowering Every Voter", "footer_source": "Data sourced from Election Commission of India.", "footer_eci": "Election Commission of India", "footer_helpline": "Voter Helpline (1950)", "footer_portal": "voters.eci.gov.in", "footer_copy": "© 2026 ElectWise | Educational Platform",
      "myth_badge": "MYTH", "fact_badge": "FACT", "myth_click": "👆 Click to reveal the fact",
      "cert_civic_iq": "Certificate of Civic IQ", "cert_proudly": "This is to proudly certify that", "cert_achieved": "has achieved a Voter IQ Score of", "cert_title_earned": "earning the distinguished title of", "cert_date": "Date", "cert_platform": "Election Education Platform", "cert_verified": "VERIFIED",
      "sim_error_name": "❌ Error: Name should only contain alphabets and spaces.", "sim_error_id": "❌ Error: Voter ID should only contain numbers (integers).", "sim_error_age": "❌ Error: You are not eligible to vote (Age must be 18+).", "sim_success_verify": "✅ Identity Verified. Proceed to vote.",
      "sim_lbl_name": "Voter Name (Alphabets & Spaces only)", "sim_lbl_id": "Voter ID (Numbers only)", "sim_lbl_age": "Voter Age (18+ only)",
      "res_2024_seats": "2024 Seats", "res_mp_lbl": "Member of Parliament", "res_stats_title": "2024 Election Stats", "res_margin_lbl": "Margin", "res_voters_lbl": "Voters", "res_disclaimer": "⚠️ Constituency data is indicative. Verify exact MP/MLA details at eci.gov.in",
      "cand_overview_tab": "Overview", "cand_election_tab": "Election Info", "cand_role_lbl": "Role", "cand_exp_lbl": "Experience", "cand_party_lbl": "Party", "cand_const_lbl": "Constituency", "cand_alliance_lbl": "Alliance", "cand_prev_res_lbl": "Prev Result", "cand_votes_lbl": "Votes", "cand_vote_share_lbl": "Vote Share", "cand_margin_lbl": "Margin", "no_candidates_found": "No candidates found for this party.",
      "please_fill_all": "Please fill all fields", "click_to": "Click to", "learn_more": "learn more", "expand": "expand", "sim_please_fill": "Please enter Name, Voter ID, and Age."
    },
    hi: {
      "nav_home": "होम", "nav_eligibility": "पात्रता", "nav_timeline": "समयरेखा",
      "nav_simulation": "मतदान अभ्यास", "nav_constituency": "निर्वाचन क्षेत्र",
      "nav_results": "परिणाम", "nav_candidate": "उम्मीदवार",
      "nav_quiz": "प्रश्नोत्तरी", "nav_myths": "मिथक बनाम तथ्य", "nav_guide": "मार्गदर्शिका",
      "hero_h1_1": "96 करोड़ मतदाता।", "hero_h1_2": "एक निर्णय।", "hero_h1_3": "इसे गिनें।",
      "hero_subtitle": "भारत का सबसे स्मार्ट चुनाव गाइड — सीखें, अभ्यास करें और आत्मविश्वास से मतदान करें।",
      "hero_cta1": "मेरी पात्रता जाँचें", "hero_cta2": "सीखना शुरू करें",
      "stat_voters": "पंजीकृत मतदाता", "stat_booths": "मतदान केंद्र",
      "stat_seats": "लोकसभा सीटें", "stat_first": "पहली बार मतदाता (2024)",
      "dash_title": "आपकी व्यक्तिगत प्रगति", "dash_el": "पात्रता जाँच:",
      "dash_qz": "प्रश्नोत्तरी:", "dash_sm": "मतदान अभ्यास:",
      "dash_gd": "पहली बार मार्गदर्शिका:", "dash_btn": "आपका अगला कदम →",
      "qn_1_t": "पात्रता जाँचकर्ता", "qn_1_d": "क्या मैं वोट देने के लिए पात्र हूँ?",
      "qn_2_t": "चुनाव समयरेखा", "qn_2_d": "चुनाव कैसे काम करता है?",
      "qn_booth_t": "मतदान केंद्र खोजक", "qn_booth_d": "मैं कहाँ वोट दूँ?",
      "qn_sim_t": "मतदान अभ्यास", "qn_sim_d": "मतदान प्रक्रिया का अभ्यास करें",
      "qn_3_t": "निर्वाचन क्षेत्र एक्सप्लोरर", "qn_3_d": "स्थानीय नेताओं और आँकड़ों की खोज करें",
      "qn_4_t": "2024 परिणाम डैशबोर्ड", "qn_4_d": "भारत के आम चुनाव की गणना देखें",
      "qn_5_t": "प्रोफ़ाइल अंतर्दृष्टि", "qn_5_d": "एक सूचित विकल्प चुनें",
      "qn_6_t": "मतदाता IQ चुनौती", "qn_6_d": "अपना मतदाता IQ पता करें!",
      "qn_myth_t": "मिथक बनाम तथ्य", "qn_myth_d": "चुनाव संबंधी मिथकों को दूर करने के लिए कार्ड पर क्लिक करें।",
      "btn_go": "जाएं →",
      "section_myth": "मिथक बनाम तथ्य", "myth_sub": "चुनाव संबंधी मिथकों को दूर करने के लिए कार्ड पर क्लिक करें।",
      "sec_el_title": "पात्रता जाँचकर्ता", "lbl_name": "पूरा नाम", "lbl_age": "आयु",
      "lbl_state": "राज्य / केंद्र शासित प्रदेश", "lbl_citizen": "क्या आप भारतीय नागरिक हैं?",
      "lbl_reside": "क्या आप सामान्यतः भारत में रह रहे हैं?", "lbl_mind": "क्या आप स्वस्थ दिमाग के हैं?",
      "lbl_crime": "क्या आप वर्तमान में आपराधिक सजा काट रहे हैं?",
      "btn_check_el": "पात्रता जाँचें", "btn_copy": "परिणाम कॉपी करें",
      "sec_tl_title": "चुनाव समयरेखा", "sec_booth_title": "मतदान केंद्र खोजें",
      "lbl_b_state": "राज्य / केंद्र शासित प्रदेश चुनें", "lbl_b_dist": "जिला चुनें",
      "booth_note": "बूथ डेटा उदाहरणात्मक है। अपना वास्तविक बूथ voters.eci.gov.in पर खोजें",
      "sec_sim_title": "मतदान अभ्यास", "sim_1_t": "चरण 1: बूथ में प्रवेश करें",
      "sim_1_d": "मतदान केंद्र में आपका स्वागत है। कृपया अपना फोन दूर रखें।",
      "btn_enter_booth": "बूथ में प्रवेश करें →", "sim_2_t": "चरण 2: पहचान सत्यापन",
      "btn_verify": "आईडी सत्यापित करें", "btn_proceed_evm": "ईवीएम पर आगे बढ़ें →",
      "sim_3_t": "चरण 3: अपना वोट डालें", "btn_confirm_vote": "वोट की पुष्टि करें →",
      "sim_4_t": "चरण 4: VVPAT रसीद", "sim_4_d": "आपका वोट रिकॉर्ड कर लिया गया है।",
      "btn_proceed": "आगे बढ़ें →", "sim_5_t": "चरण 5: स्याही का निशान",
      "sim_5_d": "आपने सफलतापूर्वक मतदान कर दिया है!", "btn_see_res": "परिणाम देखें →",
      "sim_6_t": "लाइव मॉक टैली", "btn_reset_sim": "सिमुलेशन रीसेट करें",
      "btn_vote_again": "फिर से वोट करें", "btn_start_quiz": "IQ टेस्ट शुरू करें →",
      "btn_flip_all": "सभी पलटें", "btn_flip_reset": "रीसेट करें",
      "sec_cal_title": "चुनाव अनुस्मारक", "btn_add_rem": "📅 अनुस्मारक जोड़ें",
      "cal_note": "⚠️ तारीखें चुनावी चक्रों के आधार पर सांकेतिक हैं।",
      "sec_gd_title": "पहली बार मतदाता गाइड", "btn_prev": "पिछला", "btn_next": "अगला",
      "sec_const_title": "निर्वाचन क्षेत्र एक्सप्लोरर", "sec_const_sub": "अपने लोकसभा और विधानसभा निर्वाचन क्षेत्र की खोज करें",
      "lbl_find_area": "अपना क्षेत्र खोजें", "opt_choose_state": "राज्य चुनें...", "opt_choose_dist": "जिला / क्षेत्र चुनें...", "btn_analyze": "डेटा का विश्लेषण करें",
      "const_disclaimer": "⚠️ यहां दिखाया गया निर्वाचन क्षेत्र डेटा उदाहरणात्मक/मॉक है और सटीक नहीं हो सकता है।",
      "sec_results_title": "📊 2024 लोकसभा परिणाम", "sec_results_sub": "भारत का 18वां आम चुनाव — अंतिम परिणाम",
      "lbl_view_state": "राज्य परिणाम देखें:", "opt_all_india": "अखिल भारतीय (राष्ट्रीय)",
      "res_total_seats_lbl": "🗳️ कुल सीटें", "res_nda_maj_lbl": "🏆 एनडीए बहुमत", "res_turnout_lbl": "📊 मतदान प्रतिशत", "res_polling_lbl": "🗓️ मतदान", "res_results_date_lbl": "📋 परिणाम तिथि",
      "res_majority_badge": "बहुमत", "res_opposition_badge": "विपक्ष", "res_nda_alliance": "एनडीए गठबंधन", "res_nda_desc": "भाजपा + टीडीपी + जद(यू) + अन्य", "res_india_alliance": "इंडिया गठबंधन", "res_india_desc": "कांग्रेस + सपा + टीएमसी + द्रमुक + अन्य", "res_seats_lbl": "सीटें", "res_maj_mark": "बहुमत का आंकड़ा: 272 सीटें",
      "sec_cand_title": "📰 प्रोफ़ाइल अंतर्दृष्टि", "sec_cand_sub": "प्रमुख उम्मीदवारों के लिए पेशेवर प्रोफ़ाइल और चुनावी प्रदर्शन मेट्रिक्स।", "sec_cand_source": "⚠️ डेटा स्रोत: ईसीआई हलफनामा 2024। affidavit.eci.gov.in पर सटीक विवरण सत्यापित करें",
      "lbl_filter_party": "पार्टी द्वारा फ़िल्टर करें", "opt_all_parties": "सभी पार्टियाँ", "btn_search": "🔍 खोजें", "cand_disclaimer": "⚠️ यह डेटा उदाहरणात्मक है। मतदान से पहले हमेशा affidavit.eci.gov.in पर उम्मीदवार की जानकारी सत्यापित करें।",
      "sec_quiz_title": "🎯 मतदाता IQ चुनौती", "sec_quiz_sub": "आप भारतीय लोकतंत्र को कितनी अच्छी तरह जानते हैं? अपना मतदाता IQ पता करें!",
      "iq_start_title": "क्या आप लोकतंत्र के चैंपियन हैं?", "iq_start_desc": "3 कठिनाई स्तरों में 10 अनुकूली प्रश्नों के उत्तर दें।",
      "lbl_your_name": "आपका नाम (प्रमाण पत्र के लिए)", "ph_enter_name": "अपना पूरा नाम दर्ज करें",
      "iq_comp_title": "चुनौती पूरी हुई!", "iq_total_score_lbl": "आपका कुल स्कोर:", "iq_out_of_lbl": "200 संभावित अंकों में से",
      "btn_download_cert": "🖨️ प्रमाण पत्र डाउनलोड करें", "btn_share_score": "📤 स्कोर साझा करें", "btn_retake": "🔄 पुन: प्रयास करें",
      "footer_title": "🗳️ ElectWise — हर मतदाता को सशक्त बनाना", "footer_source": "भारत निर्वाचन आयोग से प्राप्त डेटा।", "footer_eci": "भारत निर्वाचन आयोग", "footer_helpline": "मतदाता हेल्पलाइन (1950)", "footer_portal": "voters.eci.gov.in", "footer_copy": "© 2026 ElectWise | शैक्षिक मंच",
      "myth_badge": "मिथक", "fact_badge": "तथ्य", "myth_click": "👆 तथ्य जानने के लिए क्लिक करें",
      "cert_civic_iq": "नागरिक IQ प्रमाण पत्र", "cert_proudly": "यह गर्व के साथ प्रमाणित किया जाता है कि", "cert_achieved": "ने मतदाता IQ स्कोर प्राप्त किया है", "cert_title_earned": "ने प्रतिष्ठित उपाधि अर्जित की है", "cert_date": "दिनांक", "cert_platform": "चुनाव शिक्षा मंच", "cert_verified": "सत्यापित",
      "sim_error_name": "❌ त्रुटि: नाम में केवल अक्षर और स्थान होने चाहिए।", "sim_error_id": "❌ त्रुटि: मतदाता आईडी में केवल अंक (पूर्णांक) होने चाहिए।", "sim_error_age": "❌ त्रुटि: आप वोट देने के पात्र नहीं हैं (आयु 18+ होनी चाहिए)।", "sim_success_verify": "✅ पहचान सत्यापित। वोट देने के लिए आगे बढ़ें।",
      "sim_lbl_name": "मतदाता का नाम (केवल अक्षर और स्थान)", "sim_lbl_id": "मतदाता आईडी (केवल संख्याएं)", "sim_lbl_age": "मतदाता की आयु (केवल 18+)",
      "res_2024_seats": "2024 सीटें", "res_mp_lbl": "संसद सदस्य", "res_stats_title": "2024 चुनाव आँकड़े", "res_margin_lbl": "जीत का अंतर", "res_voters_lbl": "मतदाता", "res_disclaimer": "⚠️ निर्वाचन क्षेत्र डेटा उदाहरणात्मक है। eci.gov.in पर सटीक विवरण सत्यापित करें",
      "cand_overview_tab": "विवरण", "cand_election_tab": "चुनाव जानकारी", "cand_role_lbl": "भूमिका", "cand_exp_lbl": "अनुभव", "cand_party_lbl": "पार्टी", "cand_const_lbl": "निर्वाचन क्षेत्र", "cand_alliance_lbl": "गठबंधन", "cand_prev_res_lbl": "पिछला परिणाम", "cand_votes_lbl": "वोट", "cand_vote_share_lbl": "वोट प्रतिशत", "cand_margin_lbl": "जीत का अंतर", "no_candidates_found": "इस पार्टी के लिए कोई उम्मीदवार नहीं मिला।",
      "please_fill_all": "कृपया सभी फ़ील्ड भरें", "click_to": "क्लिक करें", "learn_more": "अधिक जानें", "expand": "विस्तार करें", "sim_please_fill": "कृपया नाम, मतदाता आईडी और आयु दर्ज करें।"
    }
  },
  mythData: [
    { myth: "You must have a Voter ID card to vote.", fact: "12 alternative documents are accepted including Aadhaar, Passport, PAN card, Driving Licence, and more.", source: "ECI Notification, 2019" },
    { myth: "NRIs living abroad can vote from their country.", fact: "NRI voters must be physically present in India at their registered constituency to cast their vote.", source: "RPA 1950 — Section 20A" },
    { myth: "Your vote can be traced back to you — it is not secret.", fact: "EVMs record only total counts. Individual votes cannot be traced. Ballot secrecy is constitutionally guaranteed.", source: "Article 326, Constitution of India" },
    { myth: "Any criminal cannot stand for election in India.", fact: "Only those convicted and sentenced to 2+ years imprisonment are disqualified from contesting.", source: "RPA 1951 — Section 8" },
    { myth: "Voting is compulsory in India.", fact: "Voting is a fundamental right, not a legal obligation. No national law mandates compulsory voting.", source: "Constitution of India — Article 326" }
  ],
  stateDistrictData: {
    "Andhra Pradesh": {
      lat: 15.9129, lon: 79.7400,
      districts: {
        "Visakhapatnam": { lat: 17.6868, lon: 83.2185 },
        "Vijayawada (Krishna)": { lat: 16.5062, lon: 80.6480 },
        "Guntur": { lat: 16.3067, lon: 80.4365 },
        "Tirupati (Chittoor)": { lat: 13.6288, lon: 79.4192 },
        "Kurnool": { lat: 15.8281, lon: 78.0373 },
        "Nellore": { lat: 14.4426, lon: 79.9865 },
        "Kadapa": { lat: 14.4673, lon: 78.8242 },
        "Anantapur": { lat: 14.6819, lon: 77.6006 },
        "Eluru (West Godavari)": { lat: 16.7107, lon: 81.0952 },
        "Rajamahendravaram (East Godavari)": { lat: 17.0005, lon: 81.8040 },
        "Srikakulam": { lat: 18.2949, lon: 83.8938 },
        "Vizianagaram": { lat: 18.1066, lon: 83.3956 },
        "Prakasam (Ongole)": { lat: 15.5057, lon: 80.0499 }
      }
    },
    "Telangana": {
      lat: 17.1232, lon: 79.2088,
      districts: {
        "Hyderabad": { lat: 17.3850, lon: 78.4867 },
        "Warangal": { lat: 17.9689, lon: 79.5941 },
        "Nizamabad": { lat: 18.6725, lon: 78.0941 },
        "Karimnagar": { lat: 18.4386, lon: 79.1288 },
        "Khammam": { lat: 17.2473, lon: 80.1514 },
        "Nalgonda": { lat: 17.0575, lon: 79.2671 },
        "Mahbubnagar": { lat: 16.7376, lon: 77.9869 },
        "Adilabad": { lat: 19.6640, lon: 78.5320 },
        "Medak": { lat: 18.0479, lon: 78.2678 },
        "Rangareddy": { lat: 17.2403, lon: 78.3808 }
      }
    },
    "Delhi (NCT)": {
      lat: 28.7041, lon: 77.1025,
      districts: {
        "Central Delhi": { lat: 28.6508, lon: 77.2167 },
        "East Delhi": { lat: 28.6279, lon: 77.2952 },
        "New Delhi": { lat: 28.6139, lon: 77.2090 },
        "North Delhi": { lat: 28.7041, lon: 77.1025 },
        "North East Delhi": { lat: 28.6867, lon: 77.3131 },
        "North West Delhi": { lat: 28.7495, lon: 77.0785 },
        "Shahdara": { lat: 28.6700, lon: 77.2900 },
        "South Delhi": { lat: 28.5355, lon: 77.2090 },
        "South East Delhi": { lat: 28.5533, lon: 77.2739 },
        "South West Delhi": { lat: 28.5731, lon: 77.0595 },
        "West Delhi": { lat: 28.6588, lon: 77.0548 }
      }
    },
    "Maharashtra": {
      lat: 19.7515, lon: 75.7139,
      districts: {
        "Mumbai City": { lat: 18.9388, lon: 72.8355 },
        "Mumbai Suburban": { lat: 19.1136, lon: 72.8697 },
        "Pune": { lat: 18.5204, lon: 73.8567 },
        "Nagpur": { lat: 21.1458, lon: 79.0882 },
        "Thane": { lat: 19.2183, lon: 72.9781 },
        "Nashik": { lat: 19.9975, lon: 73.7898 },
        "Aurangabad": { lat: 19.8762, lon: 75.3433 },
        "Solapur": { lat: 17.6805, lon: 75.9064 },
        "Kolhapur": { lat: 16.7050, lon: 74.2433 },
        "Amravati": { lat: 20.9374, lon: 77.7796 },
        "Satara": { lat: 17.6805, lon: 74.0183 },
        "Raigad": { lat: 18.5158, lon: 73.1804 }
      }
    },
    "Karnataka": {
      lat: 15.3173, lon: 75.7139,
      districts: {
        "Bengaluru Urban": { lat: 12.9716, lon: 77.5946 },
        "Bengaluru Rural": { lat: 13.1986, lon: 77.5688 },
        "Mysuru": { lat: 12.2958, lon: 76.6394 },
        "Belagavi": { lat: 15.8497, lon: 74.4977 },
        "Mangaluru (Dakshina Kannada)": { lat: 12.9141, lon: 74.8560 },
        "Hubballi-Dharwad": { lat: 15.3647, lon: 75.1240 },
        "Kalaburagi": { lat: 17.3297, lon: 76.8343 },
        "Ballari": { lat: 15.1394, lon: 76.9214 },
        "Shivamogga": { lat: 13.9299, lon: 75.5681 },
        "Tumakuru": { lat: 13.3379, lon: 77.1173 },
        "Hassan": { lat: 13.0033, lon: 76.0997 },
        "Vijayapura": { lat: 16.8302, lon: 75.7100 }
      }
    },
    "Tamil Nadu": {
      lat: 11.1271, lon: 78.6569,
      districts: {
        "Chennai": { lat: 13.0827, lon: 80.2707 },
        "Coimbatore": { lat: 11.0168, lon: 76.9558 },
        "Madurai": { lat: 9.9252, lon: 78.1198 },
        "Tiruchirappalli": { lat: 10.7905, lon: 78.7047 },
        "Salem": { lat: 11.6643, lon: 78.1460 },
        "Tirunelveli": { lat: 8.7139, lon: 77.7567 },
        "Erode": { lat: 11.3410, lon: 77.7172 },
        "Vellore": { lat: 12.9165, lon: 79.1325 },
        "Thanjavur": { lat: 10.7870, lon: 79.1378 },
        "Thoothukudi": { lat: 8.7642, lon: 78.1348 },
        "Dindigul": { lat: 10.3624, lon: 77.9695 },
        "Kancheepuram": { lat: 12.8185, lon: 79.6947 }
      }
    },
    "Kerala": {
      lat: 10.8505, lon: 76.2711,
      districts: {
        "Thiruvananthapuram": { lat: 8.5241, lon: 76.9366 },
        "Kochi (Ernakulam)": { lat: 9.9312, lon: 76.2673 },
        "Kozhikode": { lat: 11.2588, lon: 75.7804 },
        "Thrissur": { lat: 10.5276, lon: 76.2144 },
        "Kollam": { lat: 8.8932, lon: 76.6141 },
        "Kannur": { lat: 11.8745, lon: 75.3704 },
        "Palakkad": { lat: 10.7867, lon: 76.6548 },
        "Alappuzha": { lat: 9.4981, lon: 76.3388 },
        "Malappuram": { lat: 11.0510, lon: 76.0711 },
        "Kottayam": { lat: 9.5916, lon: 76.5222 },
        "Idukki": { lat: 9.9189, lon: 77.1025 },
        "Wayanad": { lat: 11.6854, lon: 76.1320 }
      }
    },
    "Uttar Pradesh": {
      lat: 26.8467, lon: 80.9462,
      districts: {
        "Lucknow": { lat: 26.8467, lon: 80.9462 },
        "Varanasi": { lat: 25.3176, lon: 82.9739 },
        "Agra": { lat: 27.1767, lon: 78.0081 },
        "Kanpur": { lat: 26.4499, lon: 80.3319 },
        "Allahabad (Prayagraj)": { lat: 25.4358, lon: 81.8463 },
        "Meerut": { lat: 28.9845, lon: 77.7064 },
        "Ghaziabad": { lat: 28.6692, lon: 77.4538 },
        "Noida (Gautam Buddh Nagar)": { lat: 28.5355, lon: 77.3910 },
        "Mathura": { lat: 27.4924, lon: 77.6737 },
        "Bareilly": { lat: 28.3670, lon: 79.4304 },
        "Gorakhpur": { lat: 26.7606, lon: 83.3732 },
        "Aligarh": { lat: 27.8974, lon: 78.0880 }
      }
    },
    "West Bengal": {
      lat: 22.9868, lon: 87.8550,
      districts: {
        "Kolkata": { lat: 22.5726, lon: 88.3639 },
        "Howrah": { lat: 22.5958, lon: 88.2636 },
        "North 24 Parganas": { lat: 22.8450, lon: 88.4168 },
        "South 24 Parganas": { lat: 22.1530, lon: 88.4543 },
        "Darjeeling": { lat: 27.0360, lon: 88.2627 },
        "Hooghly": { lat: 22.9000, lon: 88.3941 },
        "Burdwan": { lat: 23.2324, lon: 87.8615 },
        "Malda": { lat: 25.0108, lon: 88.1418 },
        "Murshidabad": { lat: 24.1852, lon: 88.2752 },
        "Nadia": { lat: 23.4700, lon: 88.5553 },
        "Bankura": { lat: 23.2324, lon: 87.0753 },
        "Purulia": { lat: 23.3326, lon: 86.3663 }
      }
    },
    "Rajasthan": {
      lat: 27.0238, lon: 74.2179,
      districts: {
        "Jaipur": { lat: 26.9124, lon: 75.7873 },
        "Jodhpur": { lat: 26.2389, lon: 73.0243 },
        "Kota": { lat: 25.2138, lon: 75.8648 },
        "Bikaner": { lat: 28.0229, lon: 73.3119 },
        "Ajmer": { lat: 26.4499, lon: 74.6399 },
        "Udaipur": { lat: 24.5854, lon: 73.7125 },
        "Bharatpur": { lat: 27.2152, lon: 77.4941 },
        "Alwar": { lat: 27.5530, lon: 76.6346 },
        "Sikar": { lat: 27.6094, lon: 75.1399 },
        "Sri Ganganagar": { lat: 29.9038, lon: 73.8772 },
        "Pali": { lat: 25.7711, lon: 73.3234 },
        "Nagaur": { lat: 27.2019, lon: 73.7335 }
      }
    },
    "Gujarat": {
      lat: 22.2587, lon: 71.1924,
      districts: {
        "Ahmedabad": { lat: 23.0225, lon: 72.5714 },
        "Surat": { lat: 21.1702, lon: 72.8311 },
        "Vadodara": { lat: 22.3072, lon: 73.1812 },
        "Rajkot": { lat: 22.3039, lon: 70.8022 },
        "Bhavnagar": { lat: 21.7645, lon: 72.1519 },
        "Jamnagar": { lat: 22.4707, lon: 70.0577 },
        "Junagadh": { lat: 21.5222, lon: 70.4579 },
        "Gandhinagar": { lat: 23.2156, lon: 72.6369 },
        "Anand": { lat: 22.5645, lon: 72.9289 },
        "Mehsana": { lat: 23.5880, lon: 72.3693 },
        "Bharuch": { lat: 21.7051, lon: 72.9959 },
        "Kutch": { lat: 23.7337, lon: 69.8597 }
      }
    },
    "Bihar": {
      lat: 25.0961, lon: 85.3131,
      districts: {
        "Patna": { lat: 25.5941, lon: 85.1376 },
        "Gaya": { lat: 24.7955, lon: 84.9994 },
        "Muzaffarpur": { lat: 26.1209, lon: 85.3647 },
        "Bhagalpur": { lat: 25.2425, lon: 86.9842 },
        "Darbhanga": { lat: 26.1522, lon: 85.8979 },
        "Purnia": { lat: 25.7771, lon: 87.4753 },
        "Aurangabad": { lat: 24.7517, lon: 84.3742 },
        "Begusarai": { lat: 25.4182, lon: 86.1272 },
        "Nawada": { lat: 24.8896, lon: 85.5436 },
        "Nalanda": { lat: 25.1390, lon: 85.4440 },
        "Rohtas": { lat: 24.9880, lon: 83.7841 },
        "Sitamarhi": { lat: 26.5910, lon: 85.4898 }
      }
    },
    "Punjab": {
      lat: 31.1471, lon: 75.3412,
      districts: {
        "Amritsar": { lat: 31.6340, lon: 74.8723 },
        "Ludhiana": { lat: 30.9010, lon: 75.8573 },
        "Jalandhar": { lat: 31.3260, lon: 75.5762 },
        "Patiala": { lat: 30.3398, lon: 76.3869 },
        "Bathinda": { lat: 30.2110, lon: 74.9455 },
        "Mohali (SAS Nagar)": { lat: 30.7046, lon: 76.7179 },
        "Gurdaspur": { lat: 32.0396, lon: 75.4058 },
        "Hoshiarpur": { lat: 31.5143, lon: 75.9111 },
        "Firozpur": { lat: 30.9254, lon: 74.6130 },
        "Kapurthala": { lat: 31.3802, lon: 75.3808 },
        "Sangrur": { lat: 30.2349, lon: 75.8440 },
        "Faridkot": { lat: 30.6742, lon: 74.7573 }
      }
    },
    "Madhya Pradesh": {
      lat: 22.9734, lon: 78.6569,
      districts: {
        "Bhopal": { lat: 23.2599, lon: 77.4126 },
        "Indore": { lat: 22.7196, lon: 75.8577 },
        "Jabalpur": { lat: 23.1815, lon: 79.9864 },
        "Gwalior": { lat: 26.2183, lon: 78.1828 },
        "Ujjain": { lat: 23.1765, lon: 75.7885 },
        "Sagar": { lat: 23.8388, lon: 78.7378 },
        "Rewa": { lat: 24.5362, lon: 81.2996 },
        "Satna": { lat: 24.5731, lon: 80.8322 },
        "Dewas": { lat: 22.9623, lon: 76.0522 },
        "Ratlam": { lat: 23.3315, lon: 75.0367 },
        "Chhindwara": { lat: 22.0574, lon: 78.9382 },
        "Morena": { lat: 26.4964, lon: 77.9999 }
      }
    },
    "Odisha": {
      lat: 20.9517, lon: 85.0985,
      districts: {
        "Bhubaneswar (Khordha)": { lat: 20.2961, lon: 85.8245 },
        "Cuttack": { lat: 20.4625, lon: 85.8830 },
        "Berhampur": { lat: 19.3149, lon: 84.7941 },
        "Rourkela (Sundargarh)": { lat: 22.2604, lon: 84.8536 },
        "Sambalpur": { lat: 21.4669, lon: 83.9812 },
        "Puri": { lat: 19.8134, lon: 85.8315 },
        "Balasore": { lat: 21.4927, lon: 86.9316 },
        "Baripada (Mayurbhanj)": { lat: 21.9329, lon: 86.7323 },
        "Koraput": { lat: 18.8121, lon: 82.7098 },
        "Kendrapara": { lat: 20.4964, lon: 86.4226 }
      }
    },
    "Himachal Pradesh": {
      lat: 31.1048, lon: 77.1734,
      districts: {
        "Shimla": { lat: 31.1048, lon: 77.1734 },
        "Dharamshala (Kangra)": { lat: 32.2190, lon: 76.3234 },
        "Mandi": { lat: 31.7084, lon: 76.9318 },
        "Solan": { lat: 30.9045, lon: 77.0967 },
        "Kullu": { lat: 31.9579, lon: 77.1095 },
        "Una": { lat: 31.4686, lon: 76.2701 },
        "Hamirpur": { lat: 31.6843, lon: 76.5218 },
        "Bilaspur": { lat: 31.3399, lon: 76.7602 }
      }
    },
    "Assam": {
      lat: 26.2006, lon: 92.9376,
      districts: {
        "Guwahati (Kamrup Metro)": { lat: 26.1445, lon: 91.7362 },
        "Dibrugarh": { lat: 27.4728, lon: 94.9120 },
        "Silchar": { lat: 24.8333, lon: 92.7789 },
        "Jorhat": { lat: 26.7509, lon: 94.2037 },
        "Tezpur (Sonitpur)": { lat: 26.6338, lon: 92.7926 },
        "Nagaon": { lat: 26.3478, lon: 92.6843 },
        "Tinsukia": { lat: 27.4888, lon: 95.3573 },
        "Barpeta": { lat: 26.3212, lon: 91.0026 }
      }
    },
  },
  electionResults2024: {
    "All India": {
      "totalSeats": 543,
      "parties": {
        "BJP": 240, "INC": 99, "SP": 37, "AITC": 29, "DMK": 22, "TDP": 16, "JDU": 12, "Others": 88
      }
    },
    "Andhra Pradesh": {
      "totalSeats": 25,
      "parties": { "TDP": 16, "YSRCP": 9 }
    },
    "Assam": {
      "totalSeats": 14,
      "parties": { "BJP": 9, "INC": 3, "AGP": 1, "AIUDF": 1 }
    },
    "Bihar": {
      "totalSeats": 40,
      "parties": { "BJP": 12, "JDU": 12, "RJD": 4, "INC": 3, "LJP": 5, "Others": 4 }
    },
    "Delhi": {
      "totalSeats": 7,
      "parties": { "BJP": 7 }
    },
    "Gujarat": {
      "totalSeats": 26,
      "parties": { "BJP": 25, "INC": 1 }
    },
    "Himachal Pradesh": {
      "totalSeats": 4,
      "parties": { "BJP": 4 }
    },
    "Karnataka": {
      "totalSeats": 28,
      "parties": { "BJP": 17, "INC": 9, "JDS": 2 }
    },
    "Kerala": {
      "totalSeats": 20,
      "parties": { "INC": 14, "CPI(M)": 5, "BJP": 1 }
    },
    "Madhya Pradesh": {
      "totalSeats": 29,
      "parties": { "BJP": 29 }
    },
    "Maharashtra": {
      "totalSeats": 48,
      "parties": { "INC": 13, "BJP": 9, "SHS": 7, "NCP": 8, "Others": 11 }
    },
    "Odisha": {
      "totalSeats": 21,
      "parties": { "BJP": 20, "BJD": 1 }
    },
    "Punjab": {
      "totalSeats": 13,
      "parties": { "INC": 7, "AAP": 3, "BJP": 2, "SAD": 1 }
    },
    "Rajasthan": {
      "totalSeats": 25,
      "parties": { "BJP": 14, "INC": 8, "Others": 3 }
    },
    "Tamil Nadu": {
      "totalSeats": 39,
      "parties": { "DMK": 22, "INC": 9, "AIADMK": 1, "Others": 7 }
    },
    "Telangana": {
      "totalSeats": 17,
      "parties": { "INC": 8, "BJP": 8, "AIMIM": 1 }
    },
    "Uttar Pradesh": {
      "totalSeats": 80,
      "parties": { "SP": 37, "BJP": 33, "INC": 6, "RLD": 2, "Others": 2 }
    },
    "West Bengal": {
      "totalSeats": 42,
      "parties": { "AITC": 29, "BJP": 12, "INC": 1 }
    }
  },
  voterIqData: [
    { q: "What is the minimum age to vote in India?", o: ["16", "18", "21", "25"], a: 1, exp: "The 61st Amendment (1988) lowered the voting age from 21 to 18.", diff: 1, pts: 10 },
    { q: "Which body conducts Lok Sabha elections in India?", o: ["Supreme Court", "Parliament", "Election Commission of India", "President's Office"], a: 2, exp: "The ECI is an autonomous constitutional authority.", diff: 1, pts: 10 },
    { q: "What does EVM stand for?", o: ["Electronic Voting Machine", "Electoral Verification Method", "Election Vote Marker", "Electronic Voter Module"], a: 0, exp: "EVMs record votes electronically.", diff: 1, pts: 10 },
    { q: "What is the Silent Period before elections?", o: ["24 hours", "48 hours", "72 hours", "12 hours"], a: 1, exp: "Section 126 of RPA 1951 prohibits public campaigning 48 hours before polling.", diff: 2, pts: 20 },
    { q: "What is NOTA?", o: ["A political party", "None of the Above", "National Online Tally App", "Not Open To All"], a: 1, exp: "NOTA allows voters to express dissent.", diff: 1, pts: 10 },
    { q: "Under which Article of the Constitution is the Election Commission established?", o: ["Article 370", "Article 324", "Article 21A", "Article 356"], a: 1, exp: "Article 324 vests superintendence of elections in the ECI.", diff: 3, pts: 30 },
    { q: "Can an NRI vote from abroad?", o: ["Yes, via postal ballot", "No, must vote in person in India", "Yes, at embassies", "Yes, online"], a: 1, exp: "NRIs must be physically present at their polling station in India.", diff: 2, pts: 20 },
    { q: "What happens if NOTA gets the highest votes?", o: ["Election is cancelled", "Re-election occurs", "The candidate with the next highest votes wins", "President's rule is declared"], a: 2, exp: "Currently, NOTA doesn't invalidate an election; the runner-up wins.", diff: 3, pts: 30 },
    { q: "Who was the first Chief Election Commissioner of India?", o: ["Sukumar Sen", "T.N. Seshan", "V.S. Ramadevi", "Kalyan Sundaram"], a: 0, exp: "Sukumar Sen served as the first CEC from 1950 to 1958.", diff: 3, pts: 30 },
    { q: "What is the maximum limit on election expenditure for a Lok Sabha constituency (as of 2024)?", o: ["₹50 Lakhs", "₹75 Lakhs", "₹95 Lakhs", "₹1.5 Crores"], a: 2, exp: "The limit was raised to ₹95 lakhs for larger states.", diff: 3, pts: 30 },
    { q: "Who appoints the Chief Election Commissioner of India?", o: ["Prime Minister", "President of India", "Chief Justice of India", "Parliament"], a: 1, exp: "The President appoints the CEC based on the recommendations of a committee.", diff: 2, pts: 20 },
    { q: "What is the term of a member of the Rajya Sabha?", o: ["5 years", "6 years", "4 years", "Life term"], a: 1, exp: "Members of Rajya Sabha are elected for 6 years, with one-third retiring every 2 years.", diff: 2, pts: 20 },
    { q: "Which state has the highest number of Lok Sabha constituencies?", o: ["Maharashtra", "West Bengal", "Uttar Pradesh", "Bihar"], a: 2, exp: "Uttar Pradesh has 80 Lok Sabha seats, the highest in India.", diff: 1, pts: 10 },
    { q: "What is the full form of VVPAT?", o: ["Voter Verifiable Paper Audit Trail", "Voter Verification and Portability Audit Tool", "Verified Voter Paper Account Trail", "Visual Voter Paper Audit Trace"], a: 0, exp: "VVPAT allows voters to verify that their vote was cast correctly.", diff: 2, pts: 20 },
    { q: "What is the minimum age to contest for Lok Sabha elections?", o: ["18", "21", "25", "30"], a: 2, exp: "A candidate must be at least 25 years old to contest Lok Sabha elections.", diff: 2, pts: 20 },
    { q: "Which constitutional amendment introduced the Anti-Defection Law?", o: ["42nd", "44th", "52nd", "73rd"], a: 2, exp: "The 52nd Amendment (1985) added the Tenth Schedule regarding disqualification on grounds of defection.", diff: 3, pts: 30 },
    { q: "Who was the first female Chief Election Commissioner of India?", o: ["V.S. Ramadevi", "Kiran Bedi", "Pratibha Patil", "Sushma Swaraj"], a: 0, exp: "V.S. Ramadevi served as the first female CEC in 1990.", diff: 3, pts: 30 },
    { q: "In which year were the first General Elections held in independent India?", o: ["1947", "1950", "1951-52", "1955"], a: 2, exp: "The first general elections were held between October 1951 and February 1952.", diff: 3, pts: 30 },
    { q: "What is the 'Model Code of Conduct'?", o: ["A law passed by Parliament", "Guidelines for candidates and parties", "A set of rules for voters", "A manual for polling officers"], a: 1, exp: "The MCC is a set of guidelines issued by the ECI for conduct of political parties and candidates during elections.", diff: 2, pts: 20 },
    { q: "What is the maximum number of members in the Lok Sabha as per the Constitution?", o: ["543", "545", "550", "552"], a: 3, exp: "The Constitution provides for a maximum of 552 members.", diff: 2, pts: 20 }
  ],
  candidateData: [
    /* ================= BJP ================= */
    {
      name: "Narendra Modi",
      party: "BJP",
      const: "Varanasi (Uttar Pradesh)",
      role: "Prime Minister",
      exp: "35+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "54.24%",
        margin: "1,52,513 votes",
        votes: "6,12,970"
      }
    },
    {
      name: "Amit Shah",
      party: "BJP",
      const: "Gandhinagar (Gujarat)",
      role: "Home Minister",
      exp: "30+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "74.5%",
        margin: "7,44,716 votes",
        votes: "10,10,972"
      }
    },
    {
      name: "Rajnath Singh",
      party: "BJP",
      const: "Lucknow (Uttar Pradesh)",
      role: "Defence Minister",
      exp: "40+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "56%",
        margin: "1,35,000+ votes",
        votes: "6,50,000+"
      }
    },
    /* ================= INC ================= */
    {
      name: "Rahul Gandhi",
      party: "INC",
      const: "Raebareli (Uttar Pradesh)",
      role: "Leader",
      exp: "20+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "66.17%",
        margin: "3,90,000+ votes",
        votes: "6,87,649"
      }
    },
    {
      name: "Shashi Tharoor",
      party: "INC",
      const: "Thiruvananthapuram (Kerala)",
      role: "MP",
      exp: "15+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "49%",
        margin: "16,000+ votes",
        votes: "4,30,000+"
      }
    },
    {
      name: "Mallikarjun Kharge",
      party: "INC",
      const: "Kalaburagi (Karnataka)",
      role: "Party President",
      exp: "50+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Lost (Lok Sabha 2019)",
        voteShare: "45%",
        margin: "Lost by ~95,000 votes",
        votes: "5,00,000+"
      }
    },
    /* ================= TDP ================= */
    {
      name: "N. Chandrababu Naidu",
      party: "TDP",
      const: "Kuppam (Andhra Pradesh)",
      role: "Chief Minister",
      exp: "40+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Won (Assembly 2024)",
        voteShare: "60%+",
        margin: "Large margin",
        votes: "N/A"
      }
    },
    {
      name: "Nara Lokesh",
      party: "TDP",
      const: "Mangalagiri (Andhra Pradesh)",
      role: "Minister",
      exp: "10+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Won (Assembly 2024)",
        voteShare: "High",
        margin: "Strong margin",
        votes: "N/A"
      }
    },
    {
      name: "Kinjarapu Ram Mohan Naidu",
      party: "TDP",
      const: "Srikakulam (Andhra Pradesh)",
      role: "MP",
      exp: "10+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "55%+",
        margin: "Large margin",
        votes: "N/A"
      }
    },
    /* ================= AIMIM ================= */
    {
      name: "Asaduddin Owaisi",
      party: "AIMIM",
      const: "Hyderabad (Telangana)",
      role: "MP",
      exp: "20+ Yrs",
      overview: { alliance: "Others" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "59%",
        margin: "3,38,000+ votes",
        votes: "5,84,000+"
      }
    },
    {
      name: "Akbaruddin Owaisi",
      party: "AIMIM",
      const: "Chandrayangutta (Telangana)",
      role: "MLA",
      exp: "20+ Yrs",
      overview: { alliance: "Others" },
      electionInfo: {
        prevResult: "Won (Assembly 2023)",
        voteShare: "60%+",
        margin: "Huge margin",
        votes: "N/A"
      }
    },
    {
      name: "Syed Ahmed Pasha Quadri",
      party: "AIMIM",
      const: "Yakutpura (Telangana)",
      role: "Leader",
      exp: "10+ Yrs",
      overview: { alliance: "Others" },
      electionInfo: {
        prevResult: "Won (Assembly)",
        voteShare: "Approx 50%",
        margin: "Moderate",
        votes: "N/A"
      }
    },
    /* ================= DMK ================= */
    {
      name: "M. K. Stalin",
      party: "DMK",
      const: "Kolathur (Tamil Nadu)",
      role: "Chief Minister",
      exp: "40+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Assembly 2021)",
        voteShare: "55%+",
        margin: "Huge margin",
        votes: "N/A"
      }
    },
    {
      name: "Kanimozhi Karunanidhi",
      party: "DMK",
      const: "Thoothukudi (Tamil Nadu)",
      role: "MP",
      exp: "15+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "54%",
        margin: "2,00,000+ votes",
        votes: "5,40,000+"
      }
    },
    {
      name: "Dayanidhi Maran",
      party: "DMK",
      const: "Chennai Central",
      role: "MP",
      exp: "20+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "58%",
        margin: "2,50,000+ votes",
        votes: "5,80,000+"
      }
    },
    /* ================= AAP ================= */
    {
      name: "Arvind Kejriwal",
      party: "AAP",
      const: "New Delhi",
      role: "Chief Minister",
      exp: "15+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Assembly 2020)",
        voteShare: "54%",
        margin: "21,000+ votes",
        votes: "N/A"
      }
    },
    {
      name: "Raghav Chadha",
      party: "AAP",
      const: "Punjab (Rajya Sabha)",
      role: "MP",
      exp: "10+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Elected (Rajya Sabha)",
        voteShare: "N/A",
        margin: "N/A",
        votes: "N/A"
      }
    },
    {
      name: "Atishi",
      party: "AAP",
      const: "Kalkaji (Delhi)",
      role: "Minister",
      exp: "10+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Assembly)",
        voteShare: "High",
        margin: "Strong",
        votes: "N/A"
      }
    },
    /* ================= SP ================= */
    {
      name: "Akhilesh Yadav",
      party: "SP",
      const: "Kannauj (Uttar Pradesh)",
      role: "Leader",
      exp: "20+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "52%",
        margin: "1,70,000+ votes",
        votes: "5,50,000+"
      }
    },
    {
      name: "Dimple Yadav",
      party: "SP",
      const: "Mainpuri",
      role: "MP",
      exp: "10+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha)",
        voteShare: "54%",
        margin: "2,80,000+ votes",
        votes: "6,00,000+"
      }
    },
    {
      name: "Ram Gopal Yadav",
      party: "SP",
      const: "Rajya Sabha",
      role: "MP",
      exp: "30+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Elected",
        voteShare: "N/A",
        margin: "N/A",
        votes: "N/A"
      }
    },
    /* ================= RJD ================= */
    {
      name: "Tejashwi Yadav",
      party: "RJD",
      const: "Raghopur (Bihar)",
      role: "MP",
      exp: "10+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "52%",
        margin: "85,000+ votes",
        votes: "5,00,000+"
      }
    },
    {
      name: "Manoj Jha",
      party: "RJD",
      const: "Rajya Sabha",
      role: "MP",
      exp: "15+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Elected (Rajya Sabha)",
        voteShare: "N/A",
        margin: "N/A",
        votes: "N/A"
      }
    },
    /* ================= JD(U) ================= */
    {
      name: "Nitish Kumar",
      party: "JD(U)",
      const: "Nalanda (Bihar)",
      role: "Chief Minister",
      exp: "35+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Won (Assembly influence)",
        voteShare: "N/A",
        margin: "N/A",
        votes: "N/A"
      }
    },
    {
      name: "Rajiv Ranjan Singh (Lalan Singh)",
      party: "JD(U)",
      const: "Munger (Bihar)",
      role: "MP",
      exp: "25+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "54%",
        margin: "1,50,000+ votes",
        votes: "6,00,000+"
      }
    },
    {
      name: "Sanjay Kumar Jha",
      party: "JD(U)",
      const: "Rajya Sabha",
      role: "MP",
      exp: "15+ Yrs",
      overview: { alliance: "NDA" },
      electionInfo: {
        prevResult: "Elected (Rajya Sabha)",
        voteShare: "N/A",
        margin: "N/A",
        votes: "N/A"
      }
    },
    /* ================= BRS (TRS) ================= */
    {
      name: "K. Chandrashekar Rao",
      party: "BRS",
      const: "Gajwel (Telangana)",
      role: "Former CM",
      exp: "35+ Yrs",
      overview: { alliance: "Regional" },
      electionInfo: {
        prevResult: "Won (Assembly 2023)",
        voteShare: "55%",
        margin: "45,000+ votes",
        votes: "1,00,000+"
      }
    },
    {
      name: "K. T. Rama Rao",
      party: "BRS",
      const: "Sircilla (Telangana)",
      role: "Leader",
      exp: "15+ Yrs",
      overview: { alliance: "Regional" },
      electionInfo: {
        prevResult: "Won (Assembly 2023)",
        voteShare: "60%",
        margin: "50,000+ votes",
        votes: "1,10,000+"
      }
    },
    {
      name: "T. Harish Rao",
      party: "BRS",
      const: "Siddipet (Telangana)",
      role: "Senior Leader",
      exp: "25+ Yrs",
      overview: { alliance: "Regional" },
      electionInfo: {
        prevResult: "Won (Assembly 2023)",
        voteShare: "65%",
        margin: "80,000+ votes",
        votes: "1,20,000+"
      }
    },
    /* ================= YSRCP ================= */
    {
      name: "Y. S. Jagan Mohan Reddy",
      party: "YSRCP",
      const: "Pulivendula (Andhra Pradesh)",
      role: "Former CM",
      exp: "15+ Yrs",
      overview: { alliance: "Regional" },
      electionInfo: {
        prevResult: "Won (Assembly 2019)",
        voteShare: "50%+",
        margin: "Large margin",
        votes: "N/A"
      }
    },
    {
      name: "Mithun Reddy",
      party: "YSRCP",
      const: "Rajampet (Andhra Pradesh)",
      role: "MP",
      exp: "10+ Yrs",
      overview: { alliance: "Regional" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "55%",
        margin: "1,50,000+ votes",
        votes: "6,50,000+"
      }
    },
    {
      name: "Y. V. Subba Reddy",
      party: "YSRCP",
      const: "Ongole (Andhra Pradesh)",
      role: "Senior Leader",
      exp: "20+ Yrs",
      overview: { alliance: "Regional" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2019)",
        voteShare: "55%+",
        margin: "1,50,000+ votes",
        votes: "6,00,000+"
      }
    },
    /* ================= CPI(M) ================= */
    {
      name: "Pinarayi Vijayan",
      party: "CPI(M)",
      const: "Dharmadam (Kerala)",
      role: "Chief Minister",
      exp: "40+ Yrs",
      overview: { alliance: "INDIA (LDF)" },
      electionInfo: {
        prevResult: "Won (Assembly 2021)",
        voteShare: "52%",
        margin: "50,000+ votes",
        votes: "1,00,000+"
      }
    },
    {
      name: "Sitaram Yechury",
      party: "CPI(M)",
      const: "N/A",
      role: "General Secretary",
      exp: "40+ Yrs",
      overview: { alliance: "INDIA" },
      electionInfo: {
        prevResult: "Organizational Role",
        voteShare: "N/A",
        margin: "N/A",
        votes: "N/A"
      }
    },
    {
      name: "K. Radhakrishnan",
      party: "CPI(M)",
      const: "Alathur (Kerala)",
      role: "MP",
      exp: "20+ Yrs",
      overview: { alliance: "INDIA (LDF)" },
      electionInfo: {
        prevResult: "Won (Lok Sabha 2024)",
        voteShare: "51%",
        margin: "20,000+ votes",
        votes: "4,50,000+"
      }
    }
  ],
  mythData_en: [
    { myth: "EVMs can be hacked via Bluetooth or Wi-Fi.", fact: "EVMs are stand-alone machines with no network connectivity. They cannot be accessed remotely.", source: "ECI Manual" },
    { myth: "A voter can vote twice if they have two ID cards.", fact: "Your name is linked to a single booth. Once you are inked, you cannot vote again anywhere else.", source: "Conduct of Election Rules" },
    { myth: "VVPAT slip is just for show.", fact: "VVPAT allows you to verify that your vote went to the candidate you selected. It's a physical audit trail.", source: "Supreme Court Ruling" },
    { myth: "If I don't like any candidate, I must stay home.", fact: "You can use NOTA (None of the Above) to express your dissatisfaction with all candidates.", source: "ECI Guidelines" },
    { myth: "Only a Passport is valid for voting identity.", fact: "ECI accepts 12+ documents including Aadhaar, MNREGA card, and Driving License.", source: "Voter Guide 2024" },
    { myth: "Elections are only about the Prime Minister.", fact: "General elections are to elect Members of Parliament (MPs) for your specific constituency.", source: "Indian Constitution" }
  ],
  mythData_hi: [
    { myth: "EVM को ब्लूटूथ या वाई-फाई के जरिए हैक किया जा सकता है।", fact: "EVM बिना किसी नेटवर्क कनेक्टिविटी वाली स्टैंड-अलोन मशीनें हैं। उन्हें रिमोटली एक्सेस नहीं किया जा सकता।", source: "ईसीआई मैनुअल" },
    { myth: "यदि किसी मतदाता के पास दो आईडी कार्ड हैं तो वह दो बार वोट दे सकता है।", fact: "आपका नाम एक ही बूथ से जुड़ा है। एक बार स्याही लग जाने के बाद, आप कहीं और दोबारा वोट नहीं दे सकते।", source: "चुनाव संचालन नियम" },
    { myth: "VVPAT पर्ची सिर्फ दिखावे के लिए है।", fact: "VVPAT आपको यह सत्यापित करने की अनुमति देता है कि आपका वोट आपके द्वारा चुने गए उम्मीदवार को गया है। यह एक भौतिक ऑडिट ट्रेल है।", source: "सुप्रीम कोर्ट का फैसला" },
    { myth: "यदि मुझे कोई उम्मीदवार पसंद नहीं है, तो मुझे घर पर ही रहना चाहिए।", fact: "आप सभी उम्मीदवारों के प्रति अपनी असंतोष व्यक्त करने के लिए नोटा (नोटा - इनमें से कोई नहीं) का उपयोग कर सकते हैं।", source: "ईसीआई दिशानिर्देश" },
    { myth: "मतदान पहचान के लिए केवल पासपोर्ट ही मान्य है।", fact: "ईसीआई आधार, मनरेगा कार्ड और ड्राइविंग लाइसेंस सहित 12+ दस्तावेजों को स्वीकार करता है।", source: "मतदाता मार्गदर्शिका 2024" },
    { myth: "चुनाव केवल प्रधानमंत्री के बारे में होते हैं।", fact: "आम चुनाव आपके विशिष्ट निर्वाचन क्षेत्र के लिए संसद सदस्यों (सांसदों) को चुनने के लिए होते हैं।", source: "भारतीय संविधान" }
  ],
  timelineData_en: [
    { t: "1. Election Announcement", d: "ECI announces schedule via Model Code of Conduct (MCC). MCC kicks in immediately." },
    { t: "2. Nomination Filing", d: "Candidates file nominations. Scrutiny period follows. Last date ~2 weeks before voting." },
    { t: "3. Election Campaign", d: "Parties campaign. Paid news rules apply. Campaign ends 48hrs before polling." },
    { t: "4. Silent Period", d: "48-hour campaign blackout before polling day. No canvassing, no ads." },
    { t: "5. Voting Day", d: "Polls open 7AM–6PM. EVMs used. Voter verifies ID, votes, gets ink mark." },
    { t: "6. Counting & Results", d: "EVMs opened, votes tallied, results declared. Winning candidate takes oath." }
  ],
  timelineData_hi: [
    { t: "1. चुनाव की घोषणा", d: "ईसीआई आदर्श आचार संहिता (एमसीसी) के माध्यम से कार्यक्रम की घोषणा करता है। एमसीसी तुरंत लागू हो जाती है।" },
    { t: "2. नामांकन दाखिल करना", d: "उम्मीदवार नामांकन दाखिल करते हैं। इसके बाद जांच अवधि होती है। मतदान से लगभग 2 सप्ताह पहले अंतिम तिथि होती है।" },
    { t: "3. चुनाव प्रचार", d: "पार्टियां प्रचार करती हैं। पेड न्यूज के नियम लागू होते हैं। मतदान से 48 घंटे पहले प्रचार समाप्त हो जाता है।" },
    { t: "4. शांत अवधि", d: "मतदान के दिन से पहले 48 घंटे का प्रचार ब्लैकआउट। कोई प्रचार नहीं, कोई विज्ञापन नहीं।" },
    { t: "5. मतदान का दिन", d: "मतदान सुबह 7 बजे से शाम 6 बजे तक होता है। EVM का उपयोग किया जाता है। मतदाता आईडी सत्यापित करता है, वोट देता है, स्याही का निशान प्राप्त करता है।" },
    { t: "6. गिनती और परिणाम", d: "EVM खोले जाते हैं, वोटों की गिनती होती है, परिणाम घोषित किए जाते हैं। जीतने वाला उम्मीदवार शपथ लेता है।" }
  ]
};