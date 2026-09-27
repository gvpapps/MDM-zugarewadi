/**
 * शालेय पोषण आहार (PM POSHAN) - Firebase Cloud Configuration
 * 
 * प्रत्येक शाळेसाठी / GitHub रिपॉझिटरीसाठी:
 * 1. खालील firebaseUrl मध्ये तुमच्या Google Firebase Realtime Database ची URL टाकली आहे.
 * 2. schoolUdise मध्ये शाळेचा UDISE कोड (सेटिंग्जमधून बदलल्यास आपोआप सिंक होतो).
 * 3. GitHub वरून ही लिंक लोड झाल्यावर बॅकग्राउंडमध्ये आपोआप 2-way डेटा सिंक होतो.
 */

window.MDM_CONFIG = {
  // १. Google Firebase Realtime Database URL:
  firebaseUrl: "https://mdm-zugarewadi-default-rtdb.firebaseio.com/",

  // २. शाळेचा 11 अंकी UDISE कोड:
  schoolUdise: "27240304501",

  // ३. शाळेचे नाव (डेटाबेसवरून किंवा ॲप सेटिंग्जमधून लोड होते):
  schoolName: "रा.जि.प. प्राथमिक शाळा झुगरेवाडी",

  // ४. ऑटोमॅटिक क्लाऊड बॅकग्राउंड सिंक (true = चालू):
  autoSync: true,

  // ५. सिंगल स्कूल मोड (Single School Dedicated Mode):
  singleSchoolMode: true
};
