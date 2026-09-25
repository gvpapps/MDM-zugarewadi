/**
 * शालेय पोषण आहार (PM POSHAN) - Firebase Cloud Configuration
 * 
 * प्रत्येक शाळेसाठी / GitHub रिपॉझिटरीसाठी:
 * 1. खालील firebaseUrl मध्ये तुमच्या Google Firebase Realtime Database ची URL टाका.
 * 2. schoolUdise मध्ये शाळेचा 11 अंकी UDISE कोड टाका.
 * 3. GitHub वर सेव्ह/पुश करा. ॲप आपोआप या डेटाबेसशी कनेक्ट होईल.
 */

window.MDM_CONFIG = {
  // १. Google Firebase Realtime Database URL:
  // उदा. "https://your-school-rtdb.firebaseio.com"
  firebaseUrl: "https://mdm-zugarewadi-default-rtdb.firebaseio.com/",

  // २. शाळेचा 11 अंकी UDISE कोड:
  // उदा. "27240304501"
  schoolUdise: "27240215801",

  // ३. शाळेचे नाव (ऐच्छिक - डेटाबेसवरून आपोआप लोड होते):
  schoolName: "रा.जि.प. प्राथमिक शाळा मेंगाळवाडी",

  // ४. ऑटोमॅटिक क्लाऊड सिंक सुरू ठेवायचे का? (true = होय, आपोआप सेव्ह करा)
  autoSync: true,

  // ५. सिंगल स्कूल मोड (Single School Dedicated Mode)
  singleSchoolMode: true
};
