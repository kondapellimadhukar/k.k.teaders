// AgroAssist Core Application Logic (Firebase Connected PWA)

// 1. LOCALIZATION DICTIONARY
const translations = {
  en: {
    powered_by: "Powered by K.K TRADERS",
    setup_owner: "Owner Credentials Setup",
    setup_owner_desc: "Configure your administrative access details",
    owner_name: "Owner Name *",
    business_name_label: "Business Name *",
    username: "Username *",
    password: "Password *",
    mobile_number: "Mobile Number",
    email_opt: "Email Address (Optional)",
    save_credentials: "Save & Setup Credentials",
    disclaimer_text: "AI diagnosis and fertilizer suggestions are preliminary guidance only. Please confirm with K.K TRADERS or an agriculture expert before applying fertilizer or treatment.",
    login_user_field: "Email Address",
    login: "Login",
    no_account: "Don't have a farmer account?",
    signup_now: "Sign Up as Farmer",
    farmer_signup_title: "Farmer Registration",
    farmer_signup_subtitle: "Create a free account to diagnose crop issues",
    farmer_name: "Full Name *",
    village: "Village *",
    district: "District *",
    preferred_language: "Preferred Language *",
    register_btn: "Register & Sign Up",
    already_have_account: "Already have an account?",
    farmer_dashboard_title: "AgroAssist – AI Crop Diagnosis & Fertilizer Guidance",
    problem_statement: "Farmers often face crop leaf problems such as yellow leaves, leaf spots, pest attacks, and nutrient deficiencies. Many farmers are unsure about which fertilizer or treatment is suitable. AgroAssist helps farmers upload crop images, select symptoms, and receive AI-assisted preliminary diagnosis, precautions, and fertilizer suggestions, which can be verified by K.K TRADERS.",
    weather_widget_title: "Live Weather & Crop Advisory",
    temperature: "Temperature",
    humidity: "Humidity",
    rain_chance: "Rain Status",
    condition: "Condition",
    loading: "Loading...",
    weather_unavailable: "Weather data currently unavailable.",
    upload_problem_card: "Upload Crop Problem",
    upload_problem_card_desc: "Upload crop photos from gallery or device",
    camera_capture_card: "Camera Capture",
    camera_capture_card_desc: "Diagnose crop using live camera feed",
    my_reports_card: "My Reports",
    my_reports_card_desc: "Track K.K TRADERS recommendations",
    change_language_card: "Change Language",
    change_language_card_desc: "Choose English, Telugu, or Hindi",
    back_to_dashboard: "Back to Dashboard",
    upload_crop_problem_header: "Upload Crop Problem",
    upload_crop_problem_subtitle: "Provide details and photos of the crop issue",
    crop_images_label: "Crop Images * (Max 3)",
    image_picker_text_action: "Click to upload files or capture photo",
    image_picker_subtext: "Drag and drop or select images to upload",
    crop_type: "Crop Type *",
    select_crop_option: "-- Select Crop Type --",
    crop_tomato: "Tomato",
    crop_paddy: "Paddy",
    crop_cotton: "Cotton",
    crop_chilli: "Chilli",
    crop_maize: "Maize",
    crop_groundnut: "Groundnut",
    crop_turmeric: "Turmeric",
    crop_other: "Other",
    select_symptoms: "Select Symptoms * (Choose multiple)",
    symp_yellow_leaves: "Yellow Leaves",
    symp_brown_spots: "Brown Spots",
    symp_leaf_spots: "Leaf Spots",
    symp_pest_attack: "Pest Attack",
    symp_holes_leaves: "Holes in Leaves",
    symp_dry_leaves: "Dry Leaves",
    symp_wilting: "Wilting",
    symp_slow_growth: "Slow Growth",
    symp_nutrient_def: "Nutrient Deficiency",
    symp_fungal_symptoms: "Fungal Symptoms",
    symp_unknown: "Unknown Problem",
    problem_description: "Problem Description",
    village_location: "Village / Location *",
    submit_problem: "Submit Crop Problem",
    status_pending: "Pending Review",
    ai_analysis_ready: "AI Diagnosis Report",
    submitted_date: "Submitted Date",
    ai_possible_problem: "Possible Crop Problem (AI)",
    ai_possible_cause: "Possible Cause",
    possible_fertilizer_guidance: "Possible Fertilizer Guidance",
    precautions: "Precautions",
    treatment_suggestions: "Treatment Suggestion",
    go_to_my_reports: "Go to My Reports",
    my_reports_title: "My Diagnostic Case History",
    my_reports_subtitle: "View and monitor recommendations from K.K TRADERS",
    camera_live: "Live Camera Feed",
    clear_all: "Clear All",
    notifications: "Notifications",
    no_notifications: "No notifications yet",
    notification_submitted: "Request submitted successfully. AI suggestions generated.",
    notification_reviewed: "Your request has been reviewed by K.K TRADERS.",
    notification_resolved: "Your request has been resolved. Please view suggestions.",
    // New Admin and Auth keys
    admin_dashboard_title: "K.K TRADERS - Farmer Crop Advisory Panel",
    recent_requests: "Recent Requests",
    review_request: "Review Request",
    expert_advice: "Expert Advice & Final Recommendation *",
    recommended_product: "Recommended Product / Brand (K.K TRADERS Stock)",
    action_status: "Action Status",
    submit_expert_advice: "Submit Expert Advice",
    total_requests: "Total Requests",
    pending_review: "Pending Review",
    resolved: "Resolved"
  },
  te: {
    powered_by: "కె.కె ట్రేడర్స్ ద్వారా నడుపబడుతోంది",
    setup_owner: "యజమాని ఆధారాల సెటప్",
    setup_owner_desc: "మీ పరిపాలనా ప్రాప్యత వివరాలను కాన్ఫిగర్ చేయండి",
    owner_name: "యజమాని పేరు *",
    business_name_label: "వ్యాపార పేరు *",
    username: "యూజర్ నేమ్ *",
    password: "పాస్వర్డ్ *",
    mobile_number: "మొబైల్ సంఖ్య",
    email_opt: "ఈమెయిల్ చిరునామా (ఐచ్ఛికం)",
    save_credentials: "ఆధారాలను సేవ్ చేయండి",
    disclaimer_text: "AI నిర్ధారణ మరియు ఎరువుల సూచనలు ప్రాథమిక మార్గదర్శకత్వం మాత్రమే. దయచేసి ఎరువులు లేదా చికిత్సను వర్తించే ముందు కె.కె ట్రేడర్స్ లేదా వ్యవసాయ నిపుణలతో ధృవీకరించండి.",
    login_user_field: "ఈమెయిల్ చిరునామా",
    login: "లాగిన్",
    no_account: "రైతు ఖాతా లేదా?",
    signup_now: "రైతుగా సైన్ అప్ చేయండి",
    farmer_signup_title: "రైతు రిజిస్ట్రేషన్",
    farmer_signup_subtitle: "ఉచిత ఖాతాను సృష్టించుకోండి",
    farmer_name: "పూర్తి పేరు *",
    village: "గ్రామం *",
    district: "జిల్ల్లా *",
    preferred_language: "ఇష్టపడే భాష *",
    register_btn: "రిజిస్టర్ & సైన్ అప్",
    already_have_account: "ఇప్పటికే ఖాతా ఉందా?",
    farmer_dashboard_title: "AgroAssist - AI పంట నిర్ధారణ & ఎరువుల మార్గదర్శకత్వం",
    problem_statement: "రైతులు తరచుగా పసుపు ఆకులు, ఆకు మచ్చలు, తెగుళ్లు దాడి మరియు పోషకాల లోపాలు వంటి పంట ఆకు సమస్యలను ఎదుర్కొంటారు. ఏ ఎరువులు లేదా చికిత్స పంటకు సరిపోతుందో చాలా మంది రైతులకు తెలియదు. AgroAssist రైతులకు పంట చిత్రాలను అప్లోడ్ చేయడానికి, లక్షణాలను ఎంచుకోవడానికి మరియు AI-సహాయక ప్రాథమిక నిర్ధారణ, నివారణలు మరియు ఎరువుల సూచనలను స్వీకరించడానికి సహాయపడుతుంది, వీటిని కె.కె ట్రేడర్స్ ధృవీకరించవచ్చు.",
    weather_widget_title: "ప్రత్యక్ష వాతావరణం & పంట సలహా",
    temperature: "ఉష్ణోగ్రత",
    humidity: "తేమ",
    rain_chance: "వర్షం పరిస్థితి",
    condition: "వాతావరణం",
    loading: "లోడ్ అవుతోంది...",
    weather_unavailable: "వాతావరణ సమాచారం ప్రస్తుతం అందుబాటులో లేదు.",
    upload_problem_card: "పంట సమస్యను అప్‌లోడ్ చేయండి",
    upload_problem_card_desc: "పంట ఫోటోలను అప్‌లోడ్ చేయండి",
    camera_capture_card: "కెమెరా క్యాప్చర్",
    camera_capture_card_desc: "లైవ్ కెమెరా ద్వారా గుర్తించండి",
    my_reports_card: "నా నివేదికలు",
    my_reports_card_desc: "కె.కె ట్రేడర్స్ సలహాలను చూడండి",
    change_language_card: "భాషను మార్చండి",
    change_language_card_desc: "ఇంగ్లీష్, తెలుగు లేదా హిందీని ఎంచుకోండి",
    back_to_dashboard: "డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళండి",
    upload_crop_problem_header: "పంట సమస్యను అప్‌లోడ్ చేయండి",
    upload_crop_problem_subtitle: "పంట సమస్య వివరాలు మరియు ఫోటోలను అందించండి",
    crop_images_label: "పంట చిత్రాలు * (గరిష్టంగా 3)",
    image_picker_text_action: "ఫోటో తీయడానికి లేదా ఫైల్ అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి",
    image_picker_subtext: "అప్‌లోడ్ చేయడానికి చిత్రాలను లాగండి లేదా ఎంచుకోండి",
    crop_type: "పంట రకం *",
    select_crop_option: "-- పంట రకాన్ని ఎంచుకోండి --",
    crop_tomato: "టమోటా",
    crop_paddy: "వరి (ప్యాడీ)",
    crop_cotton: "పత్తి",
    crop_chilli: "మిరప",
    crop_maize: "مొక్కజొన్న",
    crop_groundnut: "వేరుశనగ",
    crop_turmeric: "పసుపు",
    crop_other: "ఇతర పంట",
    select_symptoms: "లక్షణాలను ఎంచుకోండి * (బహుళ ఎంపిక)",
    symp_yellow_leaves: "పసుపు ఆకులు",
    symp_brown_spots: "గోధుమ రంగు మచ్చలు",
    symp_leaf_spots: "ఆకు మచ్చలు",
    symp_pest_attack: "తెగులు దాడి",
    symp_holes_leaves: "ఆకులలో రంధ్రాలు",
    symp_dry_leaves: "ఎండిన ఆకులు",
    symp_wilting: "వడలిపోవడం",
    symp_slow_growth: "నెమ్మదిగా పెరగడం",
    symp_nutrient_def: "పోషకాల లోపం",
    symp_fungal_symptoms: "శిలీంధ్ర లక్షణాలు",
    symp_unknown: "తెలియని సమస్య",
    problem_description: "సమస్య వివరణ",
    village_location: "గ్రామం / స్థానం *",
    submit_problem: "సమస్యను సమర్పించండి",
    status_pending: "సమీక్షలో ఉంది",
    ai_analysis_ready: "AI నిర్ధారణ నివేదిక",
    submitted_date: "సమర్పించిన తేదీ",
    ai_possible_problem: "సాధ్యమయ్యే పంట సమస్య (AI)",
    ai_possible_cause: "సాధ్యమయ్యే కారణం",
    possible_fertilizer_guidance: "సాధ్యమయ్యే ఎరువుల సూచన",
    precautions: "జాగ్రత్తలు",
    treatment_suggestions: "చికిత్స సూచన",
    go_to_my_reports: "నా నివేదికలకు వెళ్లండి",
    my_reports_title: "నా కేసు చరిత్ర",
    my_reports_subtitle: "కె.కె ట్రేడర్స్ నుండి సిఫార్సులను పర్యవేక్షించండి",
    camera_live: "ప్రత్యక్ష కెమెరా ఫీడ్",
    clear_all: "అన్నీ తొలగించు",
    notifications: "నోటిఫికేషన్లు",
    no_notifications: "నోటిఫికేషన్‌లు లేవు",
    notification_submitted: "సమర్పణ విజయవంతమైంది. AI విశ్లేషణ సిద్ధంగా ఉంది.",
    notification_reviewed: "మీ అభ్యర్థన కె.కె ట్రేడర్స్ చే సమీక్షించబడింది.",
    notification_resolved: "పరిష్కారం లభించింది. దయచేసి చూడండి.",
    // New keys
    admin_dashboard_title: "కె.కె ట్రేడర్స్ - రైతు పంట సలహా ప్యానెల్",
    recent_requests: "ఇటీవలి అభ్యర్థనలు",
    review_request: "సమీక్ష అభ్యర్థన",
    expert_advice: "నిపుణుల సలహా & తుది సిఫార్సు *",
    recommended_product: "సిఫార్సు చేసిన ఉత్పత్తి / బ్రాండ్ (కె.కె ట్రేడర్స్ స్టాక్)",
    action_status: "చర్య స్థితి",
    submit_expert_advice: "నిపుణుల సలహాను సమర్పించండి",
    total_requests: "మొత్తం అభ్యర్థనలు",
    pending_review: "సమీక్ష పెండింగ్‌లో ఉంది",
    resolved: "పరిష్కరించబడింది"
  },
  hi: {
    powered_by: "के.के ट्रेडर्स द्वारा संचालित",
    setup_owner: "मालिक प्रमाण-पत्र सेटअप",
    setup_owner_desc: "अपने प्रशासनिक विवरणों को कॉन्फ़िगर करें",
    owner_name: "मालिक का नाम *",
    business_name_label: "व्यवसाय का नाम *",
    username: "यूज़रनेम *",
    password: "पासवर्ड *",
    mobile_number: "मोबाइल नंबर",
    email_opt: "ईमेल पता (वैकल्पिक)",
    save_credentials: "विवरण सहेजें",
    disclaimer_text: "एआई निदान और उर्वरक सुझाव केवल प्रारंभिक मार्गदर्शन हैं। कृपया उर्वरक या उपचार लागू करने से पहले के.के ट्रेडर्स या किसी कृषि विशेषज्ञ से पुष्टि करें।",
    login_user_field: "ईमेल पता",
    login: "लॉगिन",
    no_account: "किसान खाता नहीं है?",
    signup_now: "किसान के रूप में पंजीकरण करें",
    farmer_signup_title: "किसान पंजीकरण",
    farmer_signup_subtitle: "मुफ़्त खाता बनाएं",
    farmer_name: "पूरा नाम *",
    village: "गाँव *",
    district: "जिला *",
    preferred_language: "पसंदीदा भाषा *",
    register_btn: "रजिस्टर और साइन अप",
    already_have_account: "पहले से खाता मौजूद है?",
    farmer_dashboard_title: "AgroAssist - एआई फसल निदान और उर्वरक मार्गदर्शन",
    problem_statement: "किसानों को अक्सर पीले पत्ते, पत्तों के धब्बे, कीटों के हमले और पोषक तत्वों की कमी जैसी फसल की पत्ती की समस्याओं का सामना करना पड़ता है। कई किसान असमंजस में रहते हैं कि कौन सा उर्वरक या उपचार सही है। AgroAssist किसानों को फसल की तस्वीरें अपलोड करने, लक्षणों का चयन करने और एआई-सहायता प्राप्त प्रारंभिक निदान, सावधानियां और उर्वरक सुझाव प्राप्त करने में मदद करता है, जिसे के.के ट्रेडर्स द्वारा सत्यापित किया जा सकता है।",
    weather_widget_title: "लाइव मौसम और फसल सलाह",
    temperature: "तापमान",
    humidity: "आर्द्रता (ह्यूमिडिटी)",
    rain_chance: "बारिश की स्थिति",
    condition: "मौसम",
    loading: "लोड हो रहा है...",
    weather_unavailable: "मौसम का डेटा वर्तमान में अनुपलब्ध है।",
    upload_problem_card: "फसल की समस्या अपलोड करें",
    upload_problem_card_desc: "फसल के फोटो अपलोड करें",
    camera_capture_card: "कैमरा कैप्चर",
    camera_capture_card_desc: "लाइव कैमरा से निदान करें",
    my_reports_card: "मेरी रिपोर्ट",
    my_reports_card_desc: "के.के ट्रेडर्स की सिफारिशें देखें",
    change_language_card: "भाषा बदलें",
    change_language_card_desc: "अंग्रेजी, तेलुगु या हिंदी चुनें",
    back_to_dashboard: "डैशबोर्ड पर वापस जाएं",
    upload_crop_problem_header: "फसल की समस्या अपलोड करें",
    upload_crop_problem_subtitle: "फसल की समस्या और फोटो का विवरण दें",
    crop_images_label: "फसल की तस्वीरें * (अधिकतम 3)",
    image_picker_text_action: "तस्वीर खींचने या फाइल अपलोड करने के लिए क्लिक करें",
    image_picker_subtext: "अपलोड करने के लिए चित्र खींचें या चुनें",
    crop_type: "फसल का प्रकार *",
    select_crop_option: "-- फसल प्रकार चुनें --",
    crop_tomato: "टमाटर",
    crop_paddy: "धान (धान्य)",
    crop_cotton: "कपास",
    crop_chilli: "मिर्च",
    crop_maize: "मक्का",
    crop_groundnut: "मूंगफली",
    crop_turmeric: "हल्दी",
    crop_other: "अन्य फसल",
    select_symptoms: "लक्षण चुनें * (बहु-विकल्प)",
    symp_yellow_leaves: "पीली पत्तियां",
    symp_brown_spots: "भूरे धब्बे",
    symp_leaf_spots: "पत्ती के धब्बे",
    symp_pest_attack: "कीट हमला",
    symp_holes_leaves: "पत्तियों में छेद",
    symp_dry_leaves: "सूखी पत्तियां",
    symp_wilting: "मुरझाना",
    symp_slow_growth: "धीमी वृद्धि",
    symp_nutrient_def: "पोषक तत्वों की कमी",
    symp_fungal_symptoms: "कवक (फंगल) के लक्षण",
    symp_unknown: "अज्ञात समस्या",
    problem_description: "समस्या का विवरण",
    village_location: "गाँव / स्थान *",
    submit_problem: "समस्या जमा करें",
    status_pending: "समीक्षा लंबित",
    ai_analysis_ready: "एआई निदान रिपोर्ट",
    submitted_date: "जमा करने की तिथि",
    ai_possible_problem: "संभावित फसल समस्या (एआई)",
    ai_possible_cause: "संभावित कारण",
    possible_fertilizer_guidance: "संभावित उर्वरक सलाह",
    precautions: "सावधानियां",
    treatment_suggestions: "उपचार का सुझाव",
    go_to_my_reports: "मेरी रिपोर्ट पर जाएं",
    my_reports_title: "मेरा केस इतिहास",
    my_reports_subtitle: "के.के ट्रेडर्स की सिफारिशों की निगरानी करें",
    camera_live: "लाइव कैमरा फीड",
    clear_all: "सभी साफ करें",
    notifications: "सूचनाएं",
    no_notifications: "अभी तक कोई सूचना नहीं",
    notification_submitted: "सफलतापूर्वक जमा किया गया। एआई विश्लेषण तैयार है।",
    notification_reviewed: "के.के ट्रेडर्स ने आपकी रिपोर्ट की समीक्षा की है।",
    notification_resolved: "समस्या का समाधान हो गया है। कृपया देखें।",
    // New keys
    admin_dashboard_title: "के.के ट्रेडर्स - किसान फसल सलाहकार पैनल",
    recent_requests: "हाल के अनुरोध",
    review_request: "अनुरोध की समीक्षा करें",
    expert_advice: "विशेषज्ञ की सलाह और अंतिम सिफारिश *",
    recommended_product: "अनुशंसित उत्पाद / ब्रांड (के.के ट्रेडर्स स्टॉक)",
    action_status: "कार्रवाई की स्थिति",
    submit_expert_advice: "विशेषज्ञ की सलाह सबमिट करें",
    total_requests: "कुल अनुरोध",
    pending_review: "समीक्षा लंबित",
    resolved: "हल किया गया"
  }
};

// 2. STATE VARIABLES & CONFIGURATION
let currentUser = null;
let currentUserProfile = null;
let currentLanguage = 'en';
let uploadedImages = [];
let cameraStream = null;
let activeReportId = null;

// Firebase listeners references
let farmerRequestsListener = null;
let notificationsListener = null;
let adminRequestsListener = null;
let isRegistering = false;

// Firebase error code translator
function translateFirebaseError(code) {
  const map = {
    'auth/user-not-found': 'No account found with this email address.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-email': 'Invalid email format. Please check and retry.',
    'auth/invalid-credential': 'Invalid login credentials. Please check your email and password.',
    'auth/email-already-in-use': 'This email is already registered. Please login instead.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
    'auth/network-request-failed': 'Network error. Please check your internet connection.',
    'auth/user-disabled': 'This account has been disabled. Contact K.K TRADERS for support.',
    'auth/operation-not-allowed': 'Email/password sign-in is not enabled. Contact support.',
    'permission-denied': 'Access denied. Your account may not have the required permissions.',
    'unavailable': 'Service temporarily unavailable. Please try again later.',
  };
  return map[code] || (code ? code.split('/').pop().replace(/-/g, ' ') : 'An unknown error occurred.');
}

// 3. ROUTER / NAVIGATION CONTROL
function showPage(pageId) {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });

  // Display targeted section
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hook views for special updates
  if (pageId === 'view-farmer-dashboard') {
    loadWeatherData();
  }
}

// Global Navigation Guard
function checkAuthAndRoute() {
  const headerBName = document.getElementById('header-business-name');
  if (headerBName) headerBName.textContent = "K.K TRADERS";

  if (!currentUser) {
    showPage('view-login');
  } else if (currentUserProfile && currentUserProfile.role === 'admin') {
    showPage('view-admin-dashboard');
  } else {
    showPage('view-farmer-dashboard');
  }
}

// 4. LANGUAGE TRANSLATIONS ENGINE
function setLanguage(lang) {
  currentLanguage = lang;
  document.getElementById('lang-select').value = lang;

  // Translate everything matching data-i18n tags
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translationKey = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][translationKey]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][translationKey];
      } else {
        element.textContent = translations[lang][translationKey];
      }
    }
  });
}

// 5. LIVE WEATHER ADVISORY (OPEN-METEO REST API INTEGRATION)
function loadWeatherData() {
  const weatherTemp = document.getElementById('weather-temp');
  const weatherHumidity = document.getElementById('weather-humidity');
  const weatherRain = document.getElementById('weather-rain');
  const weatherCondition = document.getElementById('weather-condition');
  const weatherLocationName = document.getElementById('weather-location-name');
  const weatherDataContent = document.getElementById('weather-data-content');
  const weatherErrorBox = document.getElementById('weather-error-box');
  const weatherAlertZone = document.getElementById('weather-alert-zone');

  weatherAlertZone.innerHTML = ''; // reset alerts

  if (!navigator.geolocation) {
    showWeatherError();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(4);
      const lon = position.coords.longitude.toFixed(4);
      weatherLocationName.textContent = `GPS: ${lat}, ${lon}`;

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,rain,weather_code&timezone=auto`;

      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error("API Connection Failed");
          return response.json();
        })
        .then(data => {
          const current = data.current;
          const temp = current.temperature_2m;
          const hum = current.relative_humidity_2m;
          const rainMm = current.rain;
          const code = current.weather_code;

          weatherTemp.textContent = `${temp}°C`;
          weatherHumidity.textContent = `${hum}%`;
          weatherRain.textContent = `${rainMm} mm`;

          const conditionText = decodeWeatherCode(code);
          weatherCondition.textContent = conditionText;

          weatherDataContent.style.display = 'grid';
          weatherErrorBox.style.display = 'none';

          evaluateWeatherHazards(temp, hum, rainMm);
        })
        .catch(() => {
          showWeatherError();
        });
    },
    () => {
      showWeatherError();
    }
  );

  function showWeatherError() {
    weatherDataContent.style.display = 'none';
    weatherErrorBox.style.display = 'block';
  }
}

function decodeWeatherCode(code) {
  const dict = {
    0: { en: "Sunny / Clear Sky", te: "ఎండగా ఉంది / స్పష్టమైన ఆకాశం", hi: "धूप / साफ आसमान" },
    1: { en: "Mainly Clear", te: "ప్రధానంగా స్పష్టంగా ఉంది", hi: "मुख्यतः साफ" },
    2: { en: "Partly Cloudy", te: "పాక్షికంగా మేఘావృతం", hi: "आंशिक रूप से बादल छाए हैं" },
    3: { en: "Overcast", te: "పూర్తిగా మేఘావృతం", hi: "बादल छाए हुए हैं" },
    45: { en: "Foggy conditions", te: "పొగమంచు", hi: "कोहरा" },
    51: { en: "Light Drizzle", te: "చినుకులు పడుతున్నాయి", hi: "हल्की बूंदाबांदी" },
    61: { en: "Slight Rain", te: "చిన్న వర్షం", hi: "हल्की बारिश" },
    63: { en: "Moderate Rain", te: "సాధారణ వర్షం", hi: "मध्यम बारिश" },
    65: { en: "Heavy Rain Storm", te: "భారీ వర్షం", hi: "भारी बारिश" },
    80: { en: "Rain Showers", te: "వర్షపు జల్లులు", hi: "बारिश की बौछारें" },
    95: { en: "Thunderstorms", te: "ఉరుములతో కూడిన వర్షం", hi: "गरज के साथ तूफान" }
  };

  const select = dict[code] || { en: "Cloudy Weather", te: "మేఘావృత వాతావరణం", hi: "बादल छाए हैं" };
  return select[currentLanguage] || select['en'];
}

function evaluateWeatherHazards(temp, humidity, rainMm) {
  const alertZone = document.getElementById('weather-alert-zone');
  let alerts = [];

  if (humidity > 85) {
    alerts.push({
      type: 'warning',
      en: "⚠️ Humidity Disease Risk: Extreme relative humidity detected. Spore pathogens thrive. Avoid water sprays.",
      te: "⚠️ హ్యూమిడిటీ డిసీజ్ రిస్క్: అధిక తేమ ఉంది. తెగుళ్లు సోకే అవకాశం ఉంది. ఆకులపై నీటి స్ప్రేలు నివారించండి.",
      hi: "⚠️ उच्च आर्द्रता रोग जोखिम: अधिक नमी होने के कारण फंगल रोगों का खतरा है। पत्तों पर सीधे पानी छिड़कने से बचें।"
    });
  }

  if (rainMm > 5) {
    alerts.push({
      type: 'danger',
      en: "🌧️ Heavy Rainfall Alert: Current precipitation requires good drainage. Empty flooded channels to prevent root-rot.",
      te: "🌧️ భారీ వర్షపాత హెచ్చరిక: చేనులో నిలిచిన నీటిని త్వరగా బయటకు పంపండి, లేదంటే వేరు కుళ్లు తెగులు రావచ్చు.",
      hi: "🌧️ भारी बारिश की चेतावनी: खेतों में जलजमाव न होने दें। जल निकासी की व्यवस्था दुरुस्त करें ताकि जड़ें न सड़ें।"
    });
  }

  if (temp > 40) {
    alerts.push({
      type: 'warning',
      en: "🔥 High Temperature Stress: Heat waves desiccate leaves. Perform light irrigation in evening or early morning.",
      te: "🔥 అధిక ఉష్ణోగ్రత ఒత్తిడి: వేడి తీవ్రత ఆకులను ఎండిపోయేలా చేస్తుంది. సాయంత్రం లేదా ఉదయాన్నే తడి అందించండి.",
      hi: "🔥 उच्च तापमान का तनाव: तेज गर्मी से पत्तियां सूख सकती हैं। शाम को या सुबह जल्दी हल्की सिंचाई करें।"
    });
  }

  alerts.forEach(al => {
    const box = document.createElement('div');
    box.className = 'weather-alert-box';
    if (al.type === 'danger') box.style.borderLeftColor = 'var(--danger)';
    box.textContent = al[currentLanguage] || al['en'];
    alertZone.appendChild(box);
  });
}

// 6. CAMERA & MULTIPLE IMAGES MANAGEMENT
function initCameraMedia() {
  const cameraOverlay = document.getElementById('camera-overlay');
  const video = document.getElementById('camera-video');

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then(stream => {
      cameraStream = stream;
      video.srcObject = stream;
      cameraOverlay.classList.add('active');
    })
    .catch(() => {
      showToast("Camera Access Denied", "Unable to start webcam stream. Please choose file upload mode instead.", "danger");
      document.getElementById('file-uploader-input').click();
    });
}

function closeCameraStream() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
  document.getElementById('camera-overlay').classList.remove('active');
}

function captureVideoFrame() {
  const video = document.getElementById('camera-video');
  const canvas = document.getElementById('camera-canvas');
  const ctx = canvas.getContext('2d');

  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const base64Data = canvas.toDataURL('image/jpeg');

    if (uploadedImages.length < 3) {
      uploadedImages.push(base64Data);
      renderImagePreviews();
      showToast("Photo Captured", "Image added to diagnostic list.", "success");
    } else {
      showToast("Maximum Files Limit", "You can upload a maximum of 3 images.", "warning");
    }

    closeCameraStream();
    showPage('view-farmer-upload');
  }
}

function handleGalleryUploads(e) {
  const files = e.target.files;
  if (!files || files.length === 0) return;

  const filesToProcess = Math.min(files.length, 3 - uploadedImages.length);
  if (filesToProcess <= 0) {
    showToast("Limit Reached", "Already loaded 3 crop files.", "warning");
    return;
  }

  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/bmp'];
  const readPromises = [];

  for (let i = 0; i < filesToProcess; i++) {
    const file = files[i];
    if (!validTypes.includes(file.type)) {
      showToast("Invalid File", `${file.name} is not a supported image type.`, "warning");
      continue;
    }
    readPromises.push(new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.readAsDataURL(file);
    }));
  }

  Promise.all(readPromises).then((results) => {
    uploadedImages.push(...results);
    renderImagePreviews();
  });
}

function setupDragDropHandlers() {
  const dropZone = document.getElementById('image-drag-zone');
  const fileInput = document.getElementById('file-uploader-input');

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.style.borderColor = 'var(--primary)';
    dropZone.style.backgroundColor = '#eaf6ed';
  });

  dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.style.borderColor = 'var(--accent)';
    dropZone.style.backgroundColor = 'var(--bg-farmer)';
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.style.borderColor = 'var(--accent)';
    dropZone.style.backgroundColor = 'var(--bg-farmer)';
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      fileInput.files = e.dataTransfer.files;
      handleGalleryUploads({ target: { files: e.dataTransfer.files } });
    }
  });
}

function renderImagePreviews() {
  const container = document.getElementById('image-previews-list');
  container.innerHTML = '';

  uploadedImages.forEach((img, idx) => {
    const card = document.createElement('div');
    card.className = 'image-preview-card fade-in';

    const image = document.createElement('img');
    image.src = img;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-img-btn';
    removeBtn.innerHTML = '&times;';
    removeBtn.type = 'button';
    removeBtn.onclick = () => {
      uploadedImages.splice(idx, 1);
      renderImagePreviews();
    };

    card.appendChild(image);
    card.appendChild(removeBtn);
    container.appendChild(card);
  });
}

// 7. RULE-BASED AI Crop DIAGNOSIS
function calculateAIDiagnosis(crop, symptoms) {
  const hasYellow = symptoms.includes('yellow_leaves');
  const hasSlow = symptoms.includes('slow_growth');
  const hasLeafSpots = symptoms.includes('leaf_spots') || symptoms.includes('brown_spots');
  const hasPest = symptoms.includes('pest_attack') || symptoms.includes('holes_leaves');
  const hasWilting = symptoms.includes('wilting') || symptoms.includes('dry_leaves');
  const hasFungal = symptoms.includes('fungal_symptoms');

  let result = {
    problem: "General Nutrient Lack Suspected",
    category: "Balanced Fertilizer Guidance",
    recommended: "NPK 19-19-19 Soluble Fertilizer",
    usageNote: "Dissolve 5g per Litre of water and spray on the foliage. Repeat every 14 days.",
    confidence: "70%"
  };

  if (hasYellow) {
    if (crop === 'Tomato') {
      result.problem = "Nitrogen deficiency possible";
      result.category = "Nitrogen-rich Fertilizer";
      result.recommended = "Urea 46%";
      result.usageNote = "Apply 50kg per acre in two split doses. Water lightly after application.";
    } else if (crop === 'Paddy') {
      result.problem = "Zinc & Nitrogen deficiency likely";
      result.category = "Zinc & Nitrogen Nutrient Blend";
      result.recommended = "Zinc Sulphate 33% & Urea";
      result.usageNote = "Mix 10kg Zinc Sulphate with 50kg Urea per acre and broadcast evenly on damp soil.";
    } else if (crop === 'Cotton') {
      result.problem = "Magnesium deficiency likely";
      result.category = "Secondary Plant Nutrient";
      result.recommended = "Magnesium Sulphate (Epsom Salt)";
      result.usageNote = "Dissolve 5g per Litre of water and perform foliar spray in early morning.";
    } else {
      result.problem = "Nitrogen deficiency suspected";
      result.category = "Nitrogen Fertilizer";
      result.recommended = "Urea 46%";
      result.usageNote = "Apply 40kg per acre near crop rows. Ensure sufficient soil moisture.";
    }
  }
  else if (hasLeafSpots || hasFungal) {
    if (crop === 'Tomato') {
      result.problem = "Early Blight Fungus suspected";
      result.category = "Fungal Foliage Disease Control";
      result.recommended = "Mancozeb 75% WP";
      result.usageNote = "Mix 2.5g per Litre of water and spray thoroughly on foliage at first spot detection.";
    } else if (crop === 'Paddy') {
      result.problem = "Brown Leaf Spot Disease possible";
      result.category = "Systemic Fungal Fungicide";
      result.recommended = "Hexaconazole 5% EC";
      result.usageNote = "Mix 2ml per Litre of water and spray. Keep water standing in field channels.";
    } else if (crop === 'Chilli') {
      result.problem = "Anthracnose / Dieback infection";
      result.category = "Contact Fungicide Treatment";
      result.recommended = "Copper Oxychloride 50% WP";
      result.usageNote = "Mix 3g per Litre of water and spray. Prune and destroy dead twigs beforehand.";
    } else {
      result.problem = "Fungal Pathogen infestation";
      result.category = "Broad-Spectrum Systemic Fungicide";
      result.recommended = "Carbendazim 50% WP";
      result.usageNote = "Mix 2g per Litre of water and spray on foliage. Avoid spraying in rain.";
    }
  }
  else if (hasPest) {
    if (crop === 'Tomato') {
      result.problem = "Fruit Borer / Caterpillar attack";
      result.category = "Targeted Insecticide Control";
      result.recommended = "Spinosad 45% SC";
      result.usageNote = "Mix 0.3ml per Litre of water. Spray in late evening to target nocturnal larvae.";
    } else if (crop === 'Paddy') {
      result.problem = "Stem Borer / Leaf Folder attack";
      result.category = "Granular Insecticide Treatment";
      result.recommended = "Cartap Hydrochloride 4G";
      result.usageNote = "Apply 10kg per acre in standing water. Maintain water levels for 3 days.";
    } else if (crop === 'Maize') {
      result.problem = "Fall Armyworm damage suspected";
      result.category = "Specialized Insecticide";
      result.recommended = "Emamectin Benzoate 5% SG";
      result.usageNote = "Mix 0.4g per Litre of water. Direct the spray nozzle into leaf whorls.";
    } else {
      result.problem = "Foliar Chewing Pest infestation";
      result.category = "Botanical Pest Control";
      result.recommended = "Neem Oil 10000 ppm";
      result.usageNote = "Mix 5ml per Litre of water with 1ml liquid soap. Spray underneath leaves.";
    }
  }
  else if (hasWilting) {
    if (crop === 'Tomato' || crop === 'Chilli') {
      result.problem = "Bacterial Wilt / Damp rot";
      result.category = "Soil Beneficial Bio-Agent";
      result.recommended = "Trichoderma viride";
      result.usageNote = "Mix 2kg per acre with 100kg organic compost. Apply directly around roots.";
    } else {
      result.problem = "Root Rot / Water drainage stress";
      result.category = "Soil Conditioner & Stimulant";
      result.recommended = "Humic Acid 98%";
      result.usageNote = "Drench soil with 2g Humic Acid per Litre of water to repair plant root hairs.";
    }
  }

  const count = symptoms.length;
  if (count === 1) result.confidence = "75%";
  else if (count === 2) result.confidence = "85%";
  else result.confidence = "92%";

  return result;
}

// 8. FARMER FLOW ACTIONS
async function handleFarmerSubmit(e) {
  e.preventDefault();

  if (uploadedImages.length === 0) {
    showToast("Image Required", "Please capture a crop photo or upload an image.", "warning");
    return;
  }

  const cropType = document.getElementById('upload-crop-type').value;
  const description = document.getElementById('upload-desc').value;
  const location = document.getElementById('upload-location').value;

  const symptoms = [];
  document.querySelectorAll('.symptom-tag-card input[type="checkbox"]:checked').forEach(cb => {
    symptoms.push(cb.value);
  });

  if (symptoms.length === 0) {
    showToast("Symptoms Required", "Please select at least one symptom checkbox.", "warning");
    return;
  }

  const btn = document.getElementById('btn-submit-problem');
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span> Analyzing crop using Gemini AI...`;

  try {
    let diagnosis = null;
    console.log("AI diagnosis started via backend API");

    try {
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cropType: cropType,
          symptoms: symptoms,
          description: description,
          images: uploadedImages
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      diagnosis = await response.json();
      console.log("AI diagnosis completed");
    } catch (apiErr) {
      console.error("Backend API error:", apiErr);
      console.warn("Using local rule-based fallback...");
      diagnosis = calculateAIDiagnosis(cropType, symptoms);
    }

    // Fallback constants
    const fbPrediction = "Possible nutrient deficiency or crop stress";
    const fbCause = "Based on selected symptoms, the issue may be related to nutrient deficiency, pest attack, water stress, or disease.";
    const fbFertilizer = "Use balanced NPK fertilizer or micronutrient mixture only after confirmation from K.K TRADERS.";
    const fbTreatment = "Avoid applying fertilizer or pesticide blindly. Owner verification is required.";
    const fbPrecautions = "Check soil moisture, avoid waterlogging, observe pest presence, and consult K.K TRADERS.";

    const newRequest = {
      userId: currentUser.uid || '',
      farmerName: currentUserProfile ? (currentUserProfile.fullName || currentUserProfile.name || 'Farmer') : 'Farmer',
      farmerMobile: currentUserProfile ? (currentUserProfile.mobile || '') : '',
      village: location || '',
      cropType: cropType || '',
      selectedCropType: (diagnosis && diagnosis.selectedCropType) || cropType || 'Other',
      detectedCropType: (diagnosis && diagnosis.detectedCropType) || 'Unknown Crop – Please confirm with K.K TRADERS',
      symptoms: Array.isArray(symptoms) ? symptoms : [],
      description: description || '',
      images: uploadedImages || [],

      // New highly detailed Gemini fields with strict fallbacks
      diseaseName: (diagnosis && (diagnosis.diseasePrediction || diagnosis.diseaseName)) || fbPrediction,
      confidence: (diagnosis && diagnosis.confidence) || "75%",
      severity: (diagnosis && diagnosis.severity) || "Medium",
      reasoning: (diagnosis && Array.isArray(diagnosis.reasoning) && diagnosis.reasoning.length > 0) ? diagnosis.reasoning : [fbCause],
      possibleCause: (diagnosis && (diagnosis.possibleCauses || diagnosis.possibleCause)) || fbCause,
      recommendedFertilizerType: (diagnosis && diagnosis.recommendedFertilizerType) || fbFertilizer,
      organicTreatment: (diagnosis && diagnosis.organicTreatment) || fbTreatment,
      chemicalTreatment: (diagnosis && diagnosis.chemicalTreatment) || fbTreatment,
      immediateAction: (diagnosis && diagnosis.immediateAction) || "Consult agricultural expert immediately.",
      preventionTips: (diagnosis && diagnosis.preventionTips) || fbPrecautions,
      estimatedRecoveryTime: (diagnosis && diagnosis.estimatedRecoveryTime) || "1-2 weeks",
      recommendedExpert: "K.K Traders",

      // Legacy fallback fields for backward compatibility
      aiProblem: (diagnosis && (diagnosis.diseaseName || diagnosis.diseasePrediction || diagnosis.problem)) || fbPrediction,
      aiCategory: (diagnosis && (diagnosis.recommendedFertilizer || diagnosis.fertilizerRecommendation || diagnosis.category)) || 'Nutrients',
      aiRecommended: (diagnosis && (diagnosis.chemicalTreatment || diagnosis.recommended)) || fbTreatment,
      aiUsageNote: (diagnosis && (diagnosis.organicTreatment || diagnosis.usageNote)) || fbTreatment,
      aiConfidence: (diagnosis && diagnosis.confidence) || '75%',

      status: 'AI Analysis Ready',
      submittedDate: new Date().toISOString().split('T')[0],
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Sanitize object to guarantee no undefined values for Firestore
    Object.keys(newRequest).forEach(key => {
      if (newRequest[key] === undefined) {
        newRequest[key] = '';
      }
    });

    const docRef = await db.collection('farmerRequests').add(newRequest);
    newRequest.id = docRef.id;
    console.log("Firestore request saved");

    // Add notification
    await addNotification(currentUser.uid, translations[currentLanguage].notification_submitted, 'info');

    // Attach images for local display but don't save to firestore
    newRequest.images = uploadedImages;
    renderAIResultPage(newRequest);

    uploadedImages = [];
    document.getElementById('crop-upload-form').reset();
    renderImagePreviews();

    showToast("Case Diagnosed", "AI diagnosis report generated.", "success");
    console.log("Redirecting to result page");
    showPage('view-farmer-result');
  } catch (err) {
    console.error("Farmer submit error:", err);
    showToast("Submission Failed", err.message, "danger");
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<span data-i18n="submit_problem">Submit Crop Problem</span>`;
    setLanguage(currentLanguage);
  }
}



function renderAIResultPage(report) {
  // Helper to format string into bullet points if it's not already
  const formatBulletPoints = (text) => {
    if (!text) return '';
    if (Array.isArray(text)) return text.map(item => `<li>${item.replace(/^[•\-\*]\s*/, '')}</li>`).join('');
    const points = text.split('\n').filter(p => p.trim() !== '');
    return points.map(item => `<li>${item.replace(/^[•\-\*]\s*/, '')}</li>`).join('');
  };

  // Top Summary Bar
  document.getElementById('result-top-req-id').textContent = report.id ? `#${report.id.substring(0, 8).toUpperCase()}` : '#NEW';
  document.getElementById('result-top-crop').textContent = report.cropType === 'Other' && report.detectedCropType ? `Other (${report.detectedCropType})` : report.cropType;
  
  const symptomsArray = Array.isArray(report.symptoms) ? report.symptoms : [];
  const translatedSymptoms = symptomsArray.map(s => translations[currentLanguage] ? (translations[currentLanguage][`symp_${s}`] || s) : s).join(', ');
  document.getElementById('result-top-symptoms').textContent = translatedSymptoms || 'None';
  document.getElementById('result-top-status').textContent = report.status || 'Analysis Ready';

  // Uploaded Image (Left Column)
  const imgContainer = document.getElementById('result-images-container');
  imgContainer.innerHTML = '';
  if (report.images && report.images.length > 0) {
    const imgUrl = report.images[0];
    const img = document.createElement('img');
    img.src = imgUrl;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.cursor = 'zoom-in';
    img.onclick = () => openImageZoom(imgUrl);
    imgContainer.appendChild(img);
  } else {
    imgContainer.innerHTML = '<span style="color: #64748b;">No Image Uploaded</span>';
  }

  // AI Diagnosis (Middle Column)
  document.getElementById('result-disease-prediction').textContent = report.diseaseName || report.diseasePrediction || report.aiProblem || 'No disease detected';
  document.getElementById('result-confidence').textContent = report.confidence || report.aiConfidence || 'N/A';
  
  const severityEl = document.getElementById('result-severity');
  severityEl.textContent = report.severity || 'Low';
  severityEl.style.color = report.severity === 'High' ? '#b91c1c' : (report.severity === 'Medium' ? '#d97706' : '#15803d');

  const possibleCauses = report.reasoning || report.possibleCause || report.possibleCauses || 'Based on visual analysis.';
  document.getElementById('result-possible-causes').textContent = Array.isArray(possibleCauses) ? possibleCauses.join(' ') : possibleCauses;

  document.getElementById('result-fertilizer-recommendation').textContent = report.recommendedFertilizerType || report.recommendedFertilizer || report.fertilizerRecommendation || report.aiCategory || 'General Nutrients';

  // Build AI treatment list
  let treatments = [];
  if (report.organicTreatment) treatments.push(`Organic: ${report.organicTreatment}`);
  if (report.chemicalTreatment) treatments.push(`Chemical: ${report.chemicalTreatment}`);
  if (report.immediateAction) treatments.push(`Action: ${Array.isArray(report.immediateAction) ? report.immediateAction[0] : report.immediateAction}`);
  
  const treatmentList = document.getElementById('result-ai-treatment-list');
  if (treatments.length > 0) {
    treatmentList.innerHTML = formatBulletPoints(treatments);
  } else {
    treatmentList.innerHTML = '<li>No specific treatments suggested.</li>';
  }

  // Owner Recommendation & Bottom Banner
  const ownerCol = document.getElementById('result-owner-col');
  const productBanner = document.getElementById('result-product-banner');
  const hasRecommendation = report.status === 'Completed' || report.status === 'Product Recommended' || report.adminProductSuggestion || report.adminRecommendation;

  if (hasRecommendation) {
    ownerCol.style.display = 'block';
    productBanner.style.display = 'block';

    const brand = report.adminSelectedBrand || 'K.K TRADERS Choice';
    const finalProduct = report.finalProductName || report.adminProductSuggestion || 'Custom Blend';
    
    // Right Column Data
    document.getElementById('result-owner-brand').textContent = brand;
    document.getElementById('result-owner-product').textContent = finalProduct;
    document.getElementById('result-owner-dosage').textContent = report.adminDosage || 'See instructions';
    document.getElementById('result-owner-method').textContent = report.adminAppMethod || 'See instructions';
    document.getElementById('result-owner-advice').textContent = report.adminRecommendation || 'No additional advice provided.';

    // Bottom Banner Data
    document.getElementById('result-product-name').textContent = finalProduct;
    document.getElementById('result-product-type').textContent = report.adminProductType || `${brand} Product`;
    document.getElementById('result-product-npk').textContent = report.adminProductNpk || '-';
    document.getElementById('result-product-content').textContent = report.adminProductContent || '-';
    document.getElementById('result-product-usefor').textContent = report.adminProductUseFor || '-';
    document.getElementById('result-product-benefits').textContent = report.adminProductBenefits || '-';
    document.getElementById('result-product-price').textContent = report.adminProductPrice || '-';
    
    const availabilityEl = document.getElementById('result-product-availability');
    if (report.adminProductAvailability === 'Out of Stock') {
      availabilityEl.innerHTML = `<span style="display: inline-block; width: 8px; height: 8px; background: #dc2626; border-radius: 50%;"></span> Out of Stock`;
      availabilityEl.style.color = '#dc2626';
    } else {
      availabilityEl.innerHTML = `<span style="display: inline-block; width: 8px; height: 8px; background: #16a34a; border-radius: 50%;"></span> In Stock`;
      availabilityEl.style.color = '#16a34a';
    }

    document.getElementById('result-product-owner-advice').textContent = report.adminRecommendation || 'No additional advice provided.';

    // Product Images
    const smallImg = document.getElementById('result-owner-product-small-img');
    const largeImg = document.getElementById('result-product-large-img');
    const noImgText = document.getElementById('result-product-no-img');

    if (report.adminProductImageBase64) {
      smallImg.src = report.adminProductImageBase64;
      smallImg.style.display = 'block';
      largeImg.src = report.adminProductImageBase64;
      largeImg.style.display = 'block';
      noImgText.style.display = 'none';
    } else {
      smallImg.style.display = 'none';
      largeImg.style.display = 'none';
      noImgText.style.display = 'block';
    }

    // Set up Order Buttons
    const btnOrder = document.getElementById('btn-place-order');
    if(btnOrder) btnOrder.onclick = () => submitOrderRequest(report);
    
    const btnCall = document.getElementById('btn-call-shop');
    if(btnCall) btnCall.onclick = () => window.location.href = 'tel:+916301916531';
    
    const btnWa = document.getElementById('btn-whatsapp-shop');
    if(btnWa) btnWa.onclick = () => window.open(`https://wa.me/916301916531?text=Hello K.K Traders, I want to order ${encodeURIComponent(finalProduct)} for my ${report.cropType}.`, '_blank');

  } else {
    // Hide Owner elements
    ownerCol.style.display = 'none';
    productBanner.style.display = 'none';
  }
}

// Real-time user reports history loader
function setupFarmerRequestsListener() {
  if (farmerRequestsListener) farmerRequestsListener(); // unsubscribe

  const container = document.getElementById('reports-history-list');
  container.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 0.95rem; padding: 40px 0;">Loading history...</p>`;

  farmerRequestsListener = db.collection('farmerRequests')
    .where('userId', '==', currentUser.uid)
    .onSnapshot((snapshot) => {
      container.innerHTML = '';
      const reports = [];
      snapshot.forEach(doc => {
        reports.push({ id: doc.id, ...doc.data() });
      });

      // Sort client-side by date/timestamp safely
      reports.sort((a, b) => {
        const dateA = a.submittedDate || '';
        const dateB = b.submittedDate || '';
        return dateB.localeCompare(dateA);
      });

      if (reports.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 0.95rem; padding: 40px 0;">No diagnostic history records yet.</p>`;
        return;
      }

      reports.forEach(r => {
        const card = document.createElement('div');
        card.className = 'report-row-card fade-in';

        const img = document.createElement('img');
        img.src = (r.images && r.images.length > 0) ? r.images[0] : 'logo.svg';
        img.className = 'report-row-thumb';
        img.onclick = (e) => {
          e.stopPropagation();
          openImageZoom(img.src);
        };

        const info = document.createElement('div');
        info.className = 'report-row-info';
        const translatedSymptoms = r.symptoms.map(s => translations[currentLanguage][`symp_${s}`] || s).join(', ');

        info.innerHTML = `
          <div class="report-row-crop">${r.cropType === 'Other' && r.detectedCropType ? `Other (${r.detectedCropType})` : r.cropType}</div>
          <div class="report-row-symptoms"><strong>Symptoms:</strong> ${translatedSymptoms}</div>
          <div class="report-row-footer">
            <span class="report-row-date">${r.submittedDate}</span>
            <span class="diag-badge status-${r.status.toLowerCase().replace(/\s/g, '')}" style="margin-bottom:0;">${r.status}</span>
          </div>
        `;

        card.appendChild(img);
        card.appendChild(info);

        card.onclick = () => {
          renderAIResultPage(r);
          showPage('view-farmer-result');
        };

        container.appendChild(card);
      });
    }, (err) => {
      console.error("Requests history error:", err);
      container.innerHTML = `<p style="text-align: center; color: var(--danger); font-size: 0.95rem; padding: 40px 0;">Failed to load history.</p>`;
    });
}

// 9. ADMIN DASHBOARD OPERATIONS
function setupAdminRequestsListener() {
  if (adminRequestsListener) adminRequestsListener(); // unsubscribe

  const container = document.getElementById('admin-requests-list');
  const filterSelect = document.getElementById('admin-status-filter');

  const renderList = (snapshot) => {
    container.innerHTML = '';
    const requests = [];
    let pendingCount = 0;
    let resolvedCount = 0;

    snapshot.forEach(doc => {
      const data = { id: doc.id, ...doc.data() };
      requests.push(data);
      if (data.status === 'AI Analysis Ready') pendingCount++;
      if (data.status === 'Resolved' || data.status === 'Reviewed') resolvedCount++;
    });

    document.getElementById('admin-stat-total').textContent = requests.length;
    document.getElementById('admin-stat-pending').textContent = pendingCount;
    document.getElementById('admin-stat-resolved').textContent = resolvedCount;

    const filterVal = filterSelect.value;
    const filteredRequests = requests.filter(r => filterVal === 'all' || r.status === filterVal);

    if (filteredRequests.length === 0) {
      container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 24px;">No requests found.</p>`;
      return;
    }

    filteredRequests.forEach(r => {
      const card = document.createElement('div');
      card.className = 'admin-request-card fade-in';
      if (activeReportId === r.id) card.classList.add('active');

      card.innerHTML = `
        <div class="admin-req-header">
          <span class="admin-req-crop">${r.cropType === 'Other' && r.detectedCropType ? `Other (${r.detectedCropType})` : r.cropType}</span>
          <span class="diag-badge status-${r.status.toLowerCase().replace(/\s/g, '')}">${r.status}</span>
        </div>
        <div class="admin-req-farmer">Farmer: ${r.farmerName} (${r.farmerMobile || 'N/A'})</div>
        <div class="admin-req-village">Location: ${r.village}</div>
        <div class="admin-req-date" style="margin-top: 6px;">Submitted: ${r.submittedDate}</div>
      `;

      card.onclick = () => {
        document.querySelectorAll('.admin-request-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        loadAdminRequestDetail(r);
      };

      container.appendChild(card);
    });
  };

  adminRequestsListener = db.collection('farmerRequests')
    .orderBy('submittedDate', 'desc')
    .onSnapshot(renderList, (err) => {
      console.error("Admin dashboard listener error:", err);
    });

  filterSelect.onchange = () => {
    const container = document.getElementById('admin-requests-list');
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 24px;">Filtering...</p>`;
    db.collection('farmerRequests').orderBy('submittedDate', 'desc').get()
      .then((snapshot) => renderList(snapshot))
      .catch((err) => {
        console.error("Admin filter query error:", err);
        container.innerHTML = `<p style="text-align: center; color: var(--danger); padding: 24px;">Failed to load requests.</p>`;
      });
  };
}

function loadAdminRequestDetail(request) {
  activeReportId = request.id;
  document.getElementById('admin-active-request-id').value = request.id;

  const detailPanel = document.getElementById('admin-detail-panel');
  const detailContent = document.getElementById('admin-detail-content');

  detailPanel.style.display = 'flex';

  const translatedSymptoms = request.symptoms.map(s => translations[currentLanguage][`symp_${s}`] || s).join(', ');
  
  // Format the date if available
  let submissionDate = request.timestamp ? new Date(request.timestamp.toDate ? request.timestamp.toDate() : request.timestamp).toLocaleString() : 'Unknown';

  detailContent.innerHTML = `
    <!-- Large Image Preview -->
    <div style="margin-bottom: 20px; text-align: center; background: #000; border-radius: 8px; overflow: hidden; max-height: 300px;">
      ${request.images && request.images.length > 0 ? `<img src="${request.images[0]}" alt="Crop Preview" style="max-width: 100%; max-height: 300px; object-fit: contain; cursor: pointer;" onclick="openImageZoom('${request.images[0]}')">` : '<div style="color: #fff; padding: 40px;">No image provided</div>'}
    </div>

    <!-- Farmer Details Card Grid -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
      <div style="background: #f1f5f9; padding: 12px; border-radius: 8px;">
        <div class="detail-section-title" style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Farmer Name</div>
        <div class="detail-section-val" style="font-weight: 600;">${request.farmerName}</div>
      </div>
      <div style="background: #f1f5f9; padding: 12px; border-radius: 8px;">
        <div class="detail-section-title" style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Mobile Number</div>
        <div class="detail-section-val" style="font-weight: 600;">${request.farmerMobile || 'No Mobile'}</div>
      </div>
      <div style="background: #f1f5f9; padding: 12px; border-radius: 8px;">
        <div class="detail-section-title" style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Location / Village</div>
        <div class="detail-section-val" style="font-weight: 600;">${request.village}</div>
      </div>
      <div style="background: #f1f5f9; padding: 12px; border-radius: 8px;">
        <div class="detail-section-title" style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Date Submitted</div>
        <div class="detail-section-val" style="font-weight: 600;">${submissionDate}</div>
      </div>
      <div style="background: #f1f5f9; padding: 12px; border-radius: 8px;">
        <div class="detail-section-title" style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Crop Type</div>
        <div class="detail-section-val" style="font-weight: 600;">${request.cropType === 'Other' && request.detectedCropType ? `Other <br><span style="font-size: 0.85rem; color: #166534;">AI Detected: ${request.detectedCropType}</span>` : request.cropType}</div>
      </div>
      <div style="background: #f1f5f9; padding: 12px; border-radius: 8px;">
        <div class="detail-section-title" style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Symptoms</div>
        <div class="detail-section-val" style="color: #b91c1c; font-weight: 600;">${translatedSymptoms}</div>
      </div>
      <div style="background: #f1f5f9; padding: 12px; border-radius: 8px; grid-column: span 2;">
        <div class="detail-section-title" style="color: #64748b; font-size: 0.8rem; margin-bottom: 4px;">Farmer Description</div>
        <div class="detail-section-val">${request.description || 'No additional description provided.'}</div>
      </div>
    </div>

    <!-- Full AI Diagnosis Card -->
    <div style="border: 1px solid #c7d2fe; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
      <div style="background-color: #e0e7ff; padding: 12px 16px; font-weight: bold; color: #3730a3; display: flex; align-items: center; gap: 8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        AI Diagnosis Report
      </div>
      <div style="padding: 16px; display: flex; flex-direction: column; gap: 16px; background-color: #fafafa;">
        
        <div style="display: flex; gap: 12px;">
          <div style="flex: 2;">
            <strong style="color: #4f46e5; font-size: 0.85rem; display: block;">Disease Prediction:</strong>
            <div style="font-weight: 700; color: #b91c1c; font-size: 1.1rem;">${request.diseaseName || request.aiProblem || 'Unknown'}</div>
          </div>
          <div style="flex: 1; text-align: right;">
            <strong style="color: #4f46e5; font-size: 0.85rem; display: block;">Confidence:</strong>
            <div style="font-weight: 600;">${request.confidence || '-'}</div>
          </div>
          <div style="flex: 1; text-align: right;">
            <strong style="color: #4f46e5; font-size: 0.85rem; display: block;">Severity:</strong>
            <div style="font-weight: 600; color: ${request.severity === 'High' ? '#b91c1c' : request.severity === 'Medium' ? '#d97706' : '#15803d'};">${request.severity || '-'}</div>
          </div>
        </div>

        <div>
          <strong style="color: #4f46e5; font-size: 0.85rem; display: block;">Possible Cause:</strong>
          <div style="color: #333; font-size: 0.95rem;">${(request.reasoning && request.reasoning.length > 0) ? request.reasoning.join(' ') : 'Unknown'}</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div style="background: #f0fdf4; padding: 12px; border-left: 4px solid #16a34a; border-radius: 4px;">
            <strong style="color: #166534; font-size: 0.85rem; display: block; margin-bottom: 4px;">AI Suggested Fertilizer Type:</strong>
            <div id="admin-ai-fertilizer-type" style="color: #14532d; font-size: 0.9rem; font-weight: 600;">${request.recommendedFertilizerType || request.recommendedFertilizer || request.aiRecommended || 'None specified'}</div>
          </div>
          <div style="background: #fffbeb; padding: 12px; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <strong style="color: #b45309; font-size: 0.85rem; display: block; margin-bottom: 4px;">Immediate Action:</strong>
            <div style="color: #92400e; font-size: 0.9rem;">${request.immediateAction || request.aiUsageNote || 'No immediate action advised'}</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div style="background: #f4fbf7; padding: 12px; border-left: 4px solid #10b981; border-radius: 4px;">
            <strong style="color: #047857; font-size: 0.85rem; display: block; margin-bottom: 4px;">Organic Treatment:</strong>
            <div style="color: #064e3b; font-size: 0.9rem;">${request.organicTreatment || 'None'}</div>
          </div>
          <div style="background: #fef2f2; padding: 12px; border-left: 4px solid #ef4444; border-radius: 4px;">
            <strong style="color: #b91c1c; font-size: 0.85rem; display: block; margin-bottom: 4px;">Chemical Treatment:</strong>
            <div style="color: #7f1d1d; font-size: 0.9rem;">${request.chemicalTreatment || 'None'}</div>
          </div>
        </div>

        <div style="background: #eff6ff; padding: 12px; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <strong style="color: #1d4ed8; font-size: 0.85rem; display: block; margin-bottom: 4px;">Prevention Tips:</strong>
          <div style="color: #1e3a8a; font-size: 0.9rem;">${request.preventionTips || 'None provided'}</div>
        </div>
      </div>
    </div>
  `;

  // Pre-populate admin advisory inputs with any existing data
  document.getElementById('admin-product-suggest').value = request.adminProductSuggestion || request.adminSelectedBrand || '';
  document.getElementById('admin-dosage').value = request.adminDosage || '';
  document.getElementById('admin-app-method').value = request.adminAppMethod || '';
  document.getElementById('admin-rec-text').value = request.adminRecommendation || '';
  document.getElementById('admin-followup-date').value = request.adminFollowupDate || '';
  
  // New Product Specs
  document.getElementById('admin-product-price').value = request.adminProductPrice || '';
  document.getElementById('admin-product-availability').value = request.adminProductAvailability || 'In Stock';
  document.getElementById('admin-product-npk').value = request.adminProductNpk || '';
  document.getElementById('admin-product-type').value = request.adminProductType || '';
  document.getElementById('admin-product-content').value = request.adminProductContent || '';
  document.getElementById('admin-product-use-for').value = request.adminProductUseFor || '';
  document.getElementById('admin-product-benefits').value = request.adminProductBenefits || '';
  
  // Image Preview
  document.getElementById('admin-product-image-base64').value = request.adminProductImageBase64 || '';
  const adminImgPreview = document.getElementById('admin-image-preview-img');
  if (request.adminProductImageBase64) {
    adminImgPreview.src = request.adminProductImageBase64;
    adminImgPreview.style.display = 'block';
  } else {
    adminImgPreview.src = '';
    adminImgPreview.style.display = 'none';
  }
  
  // Set status. If brand new, set to 'Pending'.
  document.getElementById('admin-rec-status').value = request.status === 'AI Analysis Ready' ? 'Pending' : (request.status || 'Pending');

  // Also bind event listeners for the new dual-button system dynamically to avoid duplicates
  const saveDraftBtn = document.getElementById('btn-admin-save-draft');
  
  saveDraftBtn.onclick = (e) => handleAdminSubmitRec(e, false);
  const el_admin_recommendation_form = document.getElementById('admin-recommendation-form');
  if (el_admin_recommendation_form) el_admin_recommendation_form.onsubmit = (e) => handleAdminSubmitRec(e, true);
}

async function handleAdminSubmitRec(e, isSendToFarmer = false) {
  if (e) e.preventDefault();

  const requestId = document.getElementById('admin-active-request-id').value;
  const recommendation = document.getElementById('admin-rec-text').value;
  const product = document.getElementById('admin-product-suggest').value;
  const dosage = document.getElementById('admin-dosage').value;
  const appMethod = document.getElementById('admin-app-method').value;
  const followupDate = document.getElementById('admin-followup-date').value;
  
  // If sending to farmer, force status to "Product Recommended" or "Completed" if not already set to something final
  let status = document.getElementById('admin-rec-status').value;
  if (isSendToFarmer && (status === 'Pending' || status === 'Under Review')) {
    // The brand is read from the input, wait we removed `product = ...` at the top. Let's fix that too.
    const brandCheck = document.getElementById('admin-product-suggest').value;
    status = brandCheck ? 'Product Recommended' : 'Completed';
    document.getElementById('admin-rec-status').value = status;
  }

  if (!requestId) {
    showToast("No Request Selected", "Please click on a request from the list first.", "warning");
    return;
  }

  const btnSave = document.getElementById('btn-admin-save-draft');
  const btnSend = document.getElementById('btn-admin-submit-rec');
  
  if (btnSave) btnSave.disabled = true;
  if (btnSend) {
    btnSend.disabled = true;
    btnSend.textContent = "Saving advisory...";
  }

  try {
    const docRef = db.collection('farmerRequests').doc(requestId);
    const doc = await docRef.get();
    if (!doc.exists) throw new Error("Document not found.");

    const reqData = doc.data();

    // Create Final Product Name
    const brand = document.getElementById('admin-product-suggest').value;
    const aiType = reqData.recommendedFertilizerType || reqData.recommendedFertilizer || reqData.aiRecommended || '';
    const finalProductName = brand ? `${brand} ${aiType}`.trim() : '';
    
    // Get new product specs
    const adminProductPrice = document.getElementById('admin-product-price').value;
    const adminProductAvailability = document.getElementById('admin-product-availability').value;
    const adminProductNpk = document.getElementById('admin-product-npk').value;
    const adminProductType = document.getElementById('admin-product-type').value;
    const adminProductContent = document.getElementById('admin-product-content').value;
    const adminProductUseFor = document.getElementById('admin-product-use-for').value;
    const adminProductBenefits = document.getElementById('admin-product-benefits').value;
    const adminProductImageBase64 = document.getElementById('admin-product-image-base64').value;

    await docRef.update({
      adminRecommendation: recommendation,
      adminSelectedBrand: brand,
      finalProductName: finalProductName,
      adminProductSuggestion: brand, // keeping for backward compatibility

      adminDosage: dosage,
      adminAppMethod: appMethod,
      adminFollowupDate: followupDate,
      status: status,
      adminDate: new Date().toISOString().split('T')[0],
      
      // New Specs
      adminProductPrice,
      adminProductAvailability,
      adminProductNpk,
      adminProductType,
      adminProductContent,
      adminProductUseFor,
      adminProductBenefits,
      adminProductImageBase64
    });

    if (isSendToFarmer) {
      const notifMsg = `K.K TRADERS updated fertilizer advice for your ${reqData.cropType} request. Status: ${status}.`;
      await addNotification(reqData.userId, notifMsg, 'success', requestId);
      showToast("Advisory Sent", "Your final advisory recommendation has been submitted to the farmer.", "success");
      document.getElementById('admin-detail-panel').style.display = 'none';
      activeReportId = null;
    } else {
      showToast("Draft Saved", "Recommendation draft saved successfully.", "success");
    }
  } catch (err) {
    console.error("Admin submit advice error:", err);
    showToast("Save Failed", err.message, "danger");
  } finally {
    if (btnSave) btnSave.disabled = false;
    if (btnSend) {
      btnSend.disabled = false;
      btnSend.textContent = "Send Recommendation to Farmer";
    }
  }
}


// 9.b ADMIN ORDERS LISTENER
let adminOrdersListener = null;

function setupAdminOrdersListener() {
  if (adminOrdersListener) adminOrdersListener(); // unsubscribe

  const container = document.getElementById('admin-orders-list');
  const filterSelect = document.getElementById('admin-order-status-filter');

  if (!container || !filterSelect) return;

  const renderList = (snapshot) => {
    container.innerHTML = '';
    const orders = [];

    snapshot.forEach(doc => {
      orders.push({ id: doc.id, ...doc.data() });
    });

    const filterVal = filterSelect.value;
    const filteredOrders = orders.filter(o => filterVal === 'all' || o.orderStatus === filterVal);

    if (filteredOrders.length === 0) {
      container.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 24px; color: var(--text-muted);">No orders found.</td></tr>`;
      return;
    }

    filteredOrders.forEach(o => {
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid #e2e8f0';

      tr.innerHTML = `
        <td style="padding: 12px;"><strong>${o.farmerName}</strong></td>
        <td style="padding: 12px;">${o.mobile || '-'}</td>
        <td style="padding: 12px;"><strong style="color: #166534;">${o.finalProductName}</strong></td>
        <td style="padding: 12px;">${o.quantityRequested}</td>
        <td style="padding: 12px;">${o.village}</td>
        <td style="padding: 12px;"><span class="diag-badge status-${(o.orderStatus || '').toLowerCase().replace(/\s/g, '')}">${o.orderStatus}</span></td>
        <td style="padding: 12px; text-align: center;">
          <select class="form-control" style="padding: 4px; font-size: 0.8rem; width: auto; display: inline-block;" onchange="updateOrderStatus('${o.id}', this.value, '${o.farmerId}', '${o.finalProductName}')">
            <option value="Order Requested" ${o.orderStatus === 'Order Requested' ? 'selected' : ''}>Requested</option>
            <option value="Confirmed" ${o.orderStatus === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="Ready for Pickup" ${o.orderStatus === 'Ready for Pickup' ? 'selected' : ''}>Ready for Pickup</option>
            <option value="Delivered" ${o.orderStatus === 'Delivered' ? 'selected' : ''}>Delivered</option>
            <option value="Cancelled" ${o.orderStatus === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>
      `;
      container.appendChild(tr);
    });
  };

  adminOrdersListener = db.collection('orders')
    .orderBy('createdAt', 'desc')
    .onSnapshot(renderList, (err) => {
      console.error("Admin orders listener error:", err);
    });

  filterSelect.onchange = () => {
    container.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 24px; color: var(--text-muted);">Filtering orders...</td></tr>`;
    db.collection('orders').orderBy('createdAt', 'desc').get()
      .then(renderList)
      .catch(err => {
        console.error("Admin orders filter error:", err);
      });
  };
}

window.updateOrderStatus = async function(orderId, newStatus, farmerId, productName) {
  try {
    await db.collection('orders').doc(orderId).update({
      orderStatus: newStatus
    });
    showToast("Status Updated", `Order status changed to ${newStatus}`, "success");
    
    // Notify farmer
    const notifMsg = `Your order for ${productName} is now: ${newStatus}`;
    await addNotification(farmerId, notifMsg, 'info');
  } catch (err) {
    console.error("Error updating order status:", err);
    showToast("Update Failed", "Could not update order status.", "danger");
  }
};

// 10. REAL-TIME NOTIFICATIONS
function setupNotificationsListener() {
  if (notificationsListener) notificationsListener(); // unsubscribe

  notificationsListener = db.collection('notifications')
    .where('userId', '==', currentUser.uid)
    .onSnapshot((snapshot) => {
      const notifs = [];
      snapshot.forEach(doc => {
        notifs.push({ id: doc.id, ...doc.data() });
      });

      // Sort descending by timestamp
      notifs.sort((a, b) => {
        const t1 = a.timestamp ? a.timestamp.toMillis() : Date.now();
        const t2 = b.timestamp ? b.timestamp.toMillis() : Date.now();
        return t2 - t1;
      });

      renderNotificationsList(notifs);
      updateNotificationsCount(notifs);
    }, (err) => {
      console.error("Notifications listener error:", err);
    });
}

function updateNotificationsCount(notifs) {
  const unreadCount = notifs.filter(n => !n.read).length;
  const badge = document.getElementById('unread-count');
  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

function renderNotificationsList(notifs) {
  const container = document.getElementById('notification-list');
  container.innerHTML = '';

  if (notifs.length === 0) {
    container.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted); text-align: center; padding: 16px 0;" data-i18n="no_notifications">No notifications yet</p>`;
    return;
  }

  notifs.forEach(n => {
    const item = document.createElement('div');
    item.style.padding = '10px';
    item.style.borderRadius = '8px';
    item.style.backgroundColor = n.read ? 'transparent' : '#f0fdf4';
    item.style.borderBottom = '1px solid #f1f5f9';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.alignItems = 'flex-start';
    item.style.gap = '8px';
    item.style.cursor = 'pointer';

    let actionButton = '';
    if (n.requestId) {
      actionButton = `<button style="margin-top: 8px; font-size: 0.75rem; padding: 4px 12px;" class="btn-primary">View Details</button>`;
    }

    item.innerHTML = `
      <div style="flex-grow: 1;">
        <div style="font-size: 0.85rem; color: var(--text-main); font-weight: ${n.read ? 'normal' : 'bold'}">${n.message}</div>
        ${actionButton}
      </div>
      <div style="font-size: 0.7rem; color: var(--text-muted); flex-shrink: 0; margin-left: 8px;">${n.date || ''}</div>
    `;

    item.onclick = async () => {
      if (!n.read) {
        try {
          await db.collection('notifications').doc(n.id).update({ read: true });
        } catch (err) {
          console.error("Error reading notification:", err);
        }
      }

      if (n.requestId) {
        try {
          const doc = await db.collection('farmerRequests').doc(n.requestId).get();
          if (doc.exists) {
            const requestData = { id: doc.id, ...doc.data() };
            renderAIResultPage(requestData);
            showPage('view-farmer-result'); // Ensure we switch the view to the result page!
            document.getElementById('notification-panel').style.display = 'none';
          } else {
            showToast("Not Found", "The original request could not be found.", "warning");
          }
        } catch (err) {
          console.error("Error fetching request from notification:", err);
        }
      }
    };

    container.appendChild(item);
  });
}

async function addNotification(userId, message, type = 'info', requestId = null) {
  try {
    await db.collection('notifications').add({
      userId: userId,
      message: message,
      type: type,
      requestId: requestId,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (err) {
    console.error("Error adding notification:", err);
  }
}
// 10.b ORDER MANAGEMENT
async function submitOrderRequest(report) {
  const btn = document.getElementById('btn-place-order');
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Placing Order...";
  }

  try {
    const finalProductName = report.finalProductName || report.adminProductSuggestion || 'None specified';
    
    // Using a default quantity of 1 for now, can be expanded later
    await db.collection('orders').add({
      farmerId: report.userId,
      farmerName: report.farmerName,
      mobile: report.farmerMobile || '',
      requestId: report.id,
      cropType: report.cropType,
      aiSuggestedFertilizer: report.recommendedFertilizerType || report.recommendedFertilizer || report.aiRecommended || '',
      ownerSelectedBrand: report.adminSelectedBrand || report.adminProductSuggestion || '',
      finalProductName: finalProductName,
      quantityRequested: "1 Unit", // Default for now
      village: report.village || '',
      orderStatus: "Order Requested",
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    showToast("Order Requested", `We have sent your order request for ${finalProductName} to K.K Traders. They will contact you shortly!`, "success");
    if (btn) btn.textContent = "Order Placed!";
  } catch (err) {
    console.error("Error submitting order request:", err);
    showToast("Order Failed", "Could not place order request. Please try again.", "danger");
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Place Order Request";
    }
  }
}

// 11. IN-APP TOAST & IMAGE ZOOM HELPERS
function showToast(title, desc, type = 'info', action = null) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const actionHtml = action
    ? `<button class="toast-action-btn">${action.label}</button>`
    : '';

  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${desc}</div>
      ${actionHtml}
    </div>
    <button class="toast-close">&times;</button>
  `;

  toast.querySelector('.toast-close').onclick = () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  };

  if (action) {
    toast.querySelector('.toast-action-btn').onclick = () => {
      toast.remove();
      action.callback();
    };
  }

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4500);
}

function openImageZoom(imgSrc) {
  const overlay = document.getElementById('zoom-overlay');
  const img = document.getElementById('zoom-img');
  img.src = imgSrc;
  overlay.classList.add('active');
}

function closeImageZoom() {
  document.getElementById('zoom-overlay').classList.remove('active');
}

// 12. INITIALIZATION EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {

  // Unregister service workers to avoid stale app cache during testing
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let r of registrations) {
        r.unregister().then(() => console.log('Service Worker unregistered.'));
      }
    });
  }

  // Firebase Auth State listener
  auth.onAuthStateChanged(async (user) => {
    if (isRegistering) {
      // If user is currently registering, let the signup submit handler complete the database write
      return;
    }

    if (user) {
      currentUser = user;
      console.log("Login Firebase UID:", user.uid);
      try {
        const docRef = doc(db, 'users', user.uid);
        let userDocSnap;

        try {
          userDocSnap = await getDoc(docRef);
        } catch (readErr) {
          console.error("Firestore read error during login:", readErr);
          // Fallback simulation: document not found so we can trigger default creation or memory fallback
          userDocSnap = { exists: false };
        }

        const docExists = userDocSnap && (typeof userDocSnap.exists === 'function' ? userDocSnap.exists() : userDocSnap.exists);

        if (docExists) {
          currentUserProfile = userDocSnap.data();
        } else {
          console.log("User profile document not found in Firestore for UID, creating automatically:", user.uid);
          const defaultProfile = {
            uid: user.uid,
            fullName: user.displayName || "Farmer Demo",
            email: user.email || "",
            mobile: "",
            village: "Default Village",
            district: "Default District",
            preferredLanguage: "en",
            role: user.email && user.email.toLowerCase().trim() === 'ramesh@gmail.com' ? 'admin' : 'farmer',
            createdAt: serverTimestamp()
          };

          try {
            await setDoc(docRef, defaultProfile);
            console.log("Automatically created default user profile in Firestore.");
            currentUserProfile = defaultProfile;
          } catch (writeErr) {
            console.error("Firestore write error during auto-profile creation:", writeErr);
            // Log to console, but keep using defaultProfile in memory to avoid Access Denied screen
            currentUserProfile = defaultProfile;
          }
        }

        if (!currentUserProfile.role) {
          currentUserProfile.role = user.email && user.email.toLowerCase().trim() === 'ramesh@gmail.com' ? 'admin' : 'farmer';
        }

        console.log("User role found or default assigned:", currentUserProfile.role);

        // Apply Language
        setLanguage(currentUserProfile.preferredLanguage || currentLanguage);
        document.getElementById('signout-btn').style.display = 'block';

        // Show proper dashboard based on role
        if (currentUserProfile.role.toLowerCase() === 'admin') {
          document.body.classList.add('owner-theme');
          document.getElementById('notification-btn').style.display = 'none';
          showPage('view-admin-dashboard');
          setupAdminRequestsListener();
          setupAdminOrdersListener();
        } else {
          document.body.classList.remove('owner-theme');
          document.getElementById('notification-btn').style.display = 'block';
          showPage('view-farmer-dashboard');
          setupFarmerRequestsListener();
          setupNotificationsListener();
        }
      } catch (err) {
        console.error("Auth profile sync general error:", err);
        // Fallback session config in case of any exceptions
        currentUserProfile = {
          uid: user.uid,
          fullName: user.displayName || "Farmer Demo",
          email: user.email || "",
          role: user.email && user.email.toLowerCase().trim() === 'ramesh@gmail.com' ? 'admin' : 'farmer',
          preferredLanguage: 'en'
        };
        setLanguage(currentLanguage);
        document.getElementById('signout-btn').style.display = 'block';
        if (currentUserProfile.role === 'admin') {
          document.body.classList.add('owner-theme');
          showPage('view-admin-dashboard');
          setupAdminRequestsListener();
          setupAdminOrdersListener();
        } else {
          document.body.classList.remove('owner-theme');
          showPage('view-farmer-dashboard');
          setupFarmerRequestsListener();
          setupNotificationsListener();
        }
      }
    } else {
      currentUser = null;
      currentUserProfile = null;

      // Cleanup real-time listeners
      if (farmerRequestsListener) farmerRequestsListener();
      if (notificationsListener) notificationsListener();
      if (adminRequestsListener) adminRequestsListener();
      if (adminOrdersListener) adminOrdersListener();

      document.getElementById('signout-btn').style.display = 'none';
      document.getElementById('notification-btn').style.display = 'none';
      document.body.classList.remove('owner-theme');
      showPage('view-login');
    }
  });

  // Login Submit Event
  document.getElementById('login-form').onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const btn = document.getElementById('btn-login-submit');

    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Logging in...`;

    try {
      // Perform Firebase Auth Sign In directly
      await auth.signInWithEmailAndPassword(email, password);
      showToast("Signed In", "Welcome back!", "success");
    } catch (err) {
      console.error("Login failure:", err);
      let errorMsg = err.message;
      if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found') {
        errorMsg = "Incorrect email or password.";
      } else {
        errorMsg = translateFirebaseError(err.code);
      }
      showToast("Access Denied", errorMsg, "danger");
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<span data-i18n="login">Login</span>`;
      setLanguage(currentLanguage);
    }
  };

  // Farmer Registration Submit Event
  document.getElementById('signup-form').onsubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const mobile = document.getElementById('signup-mobile').value;
    const village = document.getElementById('signup-village').value;
    const district = document.getElementById('signup-district').value;
    const lang = document.getElementById('signup-lang').value;
    const btn = document.getElementById('btn-signup-submit');

    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Registering...`;

    isRegistering = true; // Block auth state change race condition

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      console.log("Signup Firebase UID:", user.uid);

      // Register profile details in Firestore users collection
      const isRameshAdmin = email.toLowerCase().trim() === 'ramesh@gmail.com';
      const profile = {
        uid: user.uid,
        fullName: name,
        email: email.toLowerCase().trim(),
        mobile: mobile,
        role: isRameshAdmin ? 'admin' : 'farmer', // lowercase exactly
        village: village,
        district: district,
        preferredLanguage: lang,
        createdAt: serverTimestamp()
      };

      try {
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, profile);
        console.log("Firestore user document created for UID:", user.uid);
      } catch (dbErr) {
        console.error("Firestore error during profile creation:", dbErr);
        // Throw it to be caught by outer block
        throw dbErr;
      }

      currentUser = user;
      currentUserProfile = profile;

      setLanguage(lang);
      document.getElementById('signout-btn').style.display = 'block';
      showToast("Registered", "Signup successful.", "success");

      // Redirect user based on role
      if (profile.role === 'admin') {
        document.body.classList.add('owner-theme');
        document.getElementById('notification-btn').style.display = 'none';
        showPage('view-admin-dashboard');
        setupAdminRequestsListener();
      } else {
        document.body.classList.remove('owner-theme');
        document.getElementById('notification-btn').style.display = 'block';
        showPage('view-farmer-dashboard');
        setupFarmerRequestsListener();
        setupNotificationsListener();
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.code === 'auth/email-already-in-use') {
        showToast("Email Already Registered", "This email is already registered. Please login.", "warning");
      } else {
        showToast("Sign Up Failed", translateFirebaseError(err.code || err.message), "danger");
      }
      await auth.signOut();
    } finally {
      isRegistering = false;
      btn.disabled = false;
      btn.innerHTML = `<span data-i18n="register_btn">Register & Sign Up</span>`;
      setLanguage(currentLanguage);
    }
  };

  // Sign out click event
  document.getElementById('signout-btn').onclick = async () => {
    try {
      await auth.signOut();
      showToast("Logged Out", "Session ended successfully.", "success");
    } catch (err) {
      console.error("Signout error:", err);
    }
  };

  // Login/Signup route links
  document.getElementById('link-to-signup').onclick = (e) => {
    e.preventDefault();
    showPage('view-signup');
  };
  document.getElementById('link-to-login').onclick = (e) => {
    e.preventDefault();
    showPage('view-login');
  };

  // Close Admin detailed view panel
  document.getElementById('admin-close-detail-btn').onclick = () => {
    document.getElementById('admin-detail-panel').style.display = 'none';
    activeReportId = null;
    document.querySelectorAll('.admin-request-card').forEach(c => c.classList.remove('active'));
  };

  // Header click goes to dash/login guard
  document.getElementById('header-logo-click').onclick = () => {
    checkAuthAndRoute();
  };

  // Dashboard grid clicks - reset form when navigating to upload
  document.getElementById('btn-dashboard-upload').onclick = () => {
    uploadedImages = [];
    document.getElementById('crop-upload-form').reset();
    renderImagePreviews();
    showPage('view-farmer-upload');
  };

  document.getElementById('btn-dashboard-camera').onclick = () => {
    uploadedImages = [];
    initCameraMedia();
  };

  const el_btn_dashboard_reports = document.getElementById('btn-dashboard-reports');
  if (el_btn_dashboard_reports) el_btn_dashboard_reports.onclick = () => showPage('view-farmer-reports');

  document.getElementById('btn-dashboard-lang').onclick = () => {
    const sel = document.getElementById('lang-select');
    sel.focus();
    sel.style.border = '2px solid var(--primary)';
    setTimeout(() => sel.style.border = '', 1000);
  };

  // Navigation Back buttons
  const uploadBackBtn = document.getElementById('upload-back-btn');
  if (uploadBackBtn) uploadBackBtn.onclick = () => showPage('view-farmer-dashboard');
  
  const resultBackBtn = document.getElementById('result-back-btn');
  if (resultBackBtn) resultBackBtn.onclick = () => showPage('view-farmer-dashboard');
  
  const reportsBackBtn = document.getElementById('reports-back-btn');
  if (reportsBackBtn) reportsBackBtn.onclick = () => showPage('view-farmer-dashboard');
  
  // "Send to Shop Owner" button on diagnosis result page (already submitted; confirm to farmer)
  const btnSendOwnerRec = document.getElementById('btn-send-owner-rec');
  if (btnSendOwnerRec) {
    btnSendOwnerRec.onclick = () => {
      showToast("Already Submitted", "Your request and AI diagnosis report are already submitted to K.K TRADERS for review.", "success");
    };
  }

  const btnResultViewReports = document.getElementById('btn-result-view-reports');
  if (btnResultViewReports) btnResultViewReports.onclick = () => showPage('view-farmer-reports');

  // Admin Dashboard Tabs
  const tabRequests = document.getElementById('admin-tab-requests');
  const tabOrders = document.getElementById('admin-tab-orders');
  
  if (tabRequests) {
    tabRequests.onclick = (e) => {
      tabRequests.classList.add('active-tab');
      tabRequests.style.borderBottom = '3px solid var(--primary-dark)';
      tabRequests.style.color = 'var(--primary-dark)';
      
      if (tabOrders) {
        tabOrders.classList.remove('active-tab');
        tabOrders.style.borderBottom = 'none';
        tabOrders.style.color = 'var(--text-muted)';
      }
      
      const viewReq = document.getElementById('admin-view-requests');
      if (viewReq) viewReq.style.display = 'block';
      const viewOrd = document.getElementById('admin-view-orders');
      if (viewOrd) viewOrd.style.display = 'none';
    };
  }

  if (tabOrders) {
    tabOrders.onclick = (e) => {
      tabOrders.classList.add('active-tab');
      tabOrders.style.borderBottom = '3px solid var(--primary-dark)';
      tabOrders.style.color = 'var(--primary-dark)';
      
      if (tabRequests) {
        tabRequests.classList.remove('active-tab');
        tabRequests.style.borderBottom = 'none';
        tabRequests.style.color = 'var(--text-muted)';
      }
      
      const viewReq = document.getElementById('admin-view-requests');
      if (viewReq) viewReq.style.display = 'none';
      const viewOrd = document.getElementById('admin-view-orders');
      if (viewOrd) viewOrd.style.display = 'block';
    };
  }
  // Admin Product Image Upload Logic
  const adminImgBox = document.getElementById('admin-image-preview-box');
  const adminImgInput = document.getElementById('admin-product-image-input');
  const adminImgPreview = document.getElementById('admin-image-preview-img');
  const adminImgBase64 = document.getElementById('admin-product-image-base64');
  
  if (adminImgBox && adminImgInput) {
    adminImgBox.onclick = () => adminImgInput.click();
    
    adminImgInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // Compress image to fit within Firestore 1MB limits safely
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 400;
          const MAX_HEIGHT = 400;
          let width = img.width;
          let height = img.height;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
          adminImgBase64.value = compressedDataUrl;
          adminImgPreview.src = compressedDataUrl;
          adminImgPreview.style.display = 'block';
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    };
  }

  // Submit forms hooks
  const el_crop_upload_form = document.getElementById('crop-upload-form');
  if (el_crop_upload_form) el_crop_upload_form.onsubmit = handleFarmerSubmit;
  const el_admin_recommendation_form = document.getElementById('admin-recommendation-form');
  if (el_admin_recommendation_form) el_admin_recommendation_form.onsubmit = handleAdminSubmitRec;

  // Image Drag zone trigger input click + drag-and-drop support
  document.getElementById('image-drag-zone').onclick = () => {
    document.getElementById('file-uploader-input').click();
  };
  const el_file_uploader_input = document.getElementById('file-uploader-input');
  if (el_file_uploader_input) el_file_uploader_input.onchange = handleGalleryUploads;
  setupDragDropHandlers();

  // Media close and zoom bindings
  const el_camera_close_btn = document.getElementById('camera-close-btn');
  if (el_camera_close_btn) el_camera_close_btn.onclick = closeCameraStream;
  const el_camera_shutter_btn = document.getElementById('camera-shutter-btn');
  if (el_camera_shutter_btn) el_camera_shutter_btn.onclick = captureVideoFrame;
  const el_zoom_overlay = document.getElementById('zoom-overlay');
  if (el_zoom_overlay) el_zoom_overlay.onclick = closeImageZoom;

  // Notification Modal Trigger Dropdown panel toggle
  const el_notif_btn = document.getElementById('notification-btn');
  if (el_notif_btn) {
    el_notif_btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const panel = document.getElementById('notification-panel');
      if (panel) {
        const isHidden = panel.style.display === 'none' || panel.style.display === '';
        panel.style.display = isHidden ? 'block' : 'none';
      }
    });
  }

  const el_clear_notifs = document.getElementById('clear-notifications');
  if (el_clear_notifs) {
    el_clear_notifs.addEventListener('click', async (e) => {
      e.stopPropagation();
      try {
        if (!currentUser) return;
        const q = await db.collection('notifications').where('userId', '==', currentUser.uid).get();
        const batch = db.batch();
        q.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
      } catch (err) {
        console.error("Clear notifications error:", err);
      }
    });
  }

  document.addEventListener('click', (e) => {
    const panel = document.getElementById('notification-panel');
    const clickedBtn = e.target.closest('#notification-btn');
    if (panel && panel.style.display === 'block' && !panel.contains(e.target) && !clickedBtn) {
      panel.style.display = 'none';
    }
  });

  // Language selectors change binds
  document.getElementById('lang-select').onchange = async (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    if (currentUser && currentUserProfile) {
      currentUserProfile.preferredLanguage = lang;
      try {
        await db.collection('users').doc(currentUser.uid).update({ preferredLanguage: lang });
      } catch (err) {
        console.error("Language save profile error:", err);
      }
    }
  };

  // Remove loading state splash screen
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) splash.classList.add('hidden');
    checkAuthAndRoute();
  }, 1800);
});
