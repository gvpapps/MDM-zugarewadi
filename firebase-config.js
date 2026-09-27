/**
 * शालेय पोषण आहार (PM POSHAN) - Firebase Cloud Configuration
 * 
 * प्रत्येक शाळेसाठी / GitHub रिपॉझिटरीसाठी:
 * 1. firebaseUrl: तुमच्या Google Firebase Realtime Database ची मुख्य URL
 * 2. schoolUdise: शाळेचा अचूक 11 अंकी UDISE क्रमांक
 * 3. schoolName: शाळेचे अधिकृत नाव
 * 4. autoSync: बॅकग्राउंडमध्ये 2-Way ऑटो सिंक चालू (true)
 * 5. singleSchoolMode: सिंगल स्कूल मोड (true)
 */

window.MDM_CONFIG = {
  // १. Google Firebase Realtime Database URL:
  firebaseUrl: "https://mdm-zugarewadi-default-rtdb.firebaseio.com/",

  // २. शाळेचा 11 अंकी UDISE कोड:
  schoolUdise: "27240215801",

  // ३. शाळेचे नाव:
  schoolName: "रा.जि.प. प्राथमिक शाळा झुगारेवाडी",

  // ४. ऑटोमॅटिक क्लाऊड बॅकग्राउंड सिंक (true = चालू):
  autoSync: true,

  // ५. सिंगल स्कूल मोड (Single School Dedicated Mode):
  singleSchoolMode: true
};
