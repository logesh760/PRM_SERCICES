import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.faq': 'Reviews & FAQ',
    'nav.enquiry': 'Free Enquiry',
    'nav.contact': 'Contact Us',
    'nav.callNow': 'Call Operator',
    
    // Hero
    'hero.badge': '📍 Trustworthy Service in Mallur, Salem',
    'hero.titleText': 'PRM Services',
    'hero.titleAccent': 'Professional Tractor Tilling & Event Decor',
    'hero.description': 'Serving Periyakattur, Mallur, and nearby Salem villages with reliable Sonalika blue tractors, JCB loaders, and gorgeous event setups.',
    'hero.ctaEnquire': 'Get Free Estimate',
    'hero.ctaCall': 'Call Operator',
    'hero.tractorTitle': 'TRACTOR FLEET',
    'hero.tractorDesc': 'Sonalika & Mini-Tractor tilling',
    'hero.decorTitle': 'EVENT SETUP',
    'hero.decorDesc': 'Traditional backdrop decoration',

    // Services
    'services.badge': 'OUR SERVICES',
    'services.title': 'What We Offer in Periyakattur',
    'services.description': 'We handle precision land tilling with modern Sonalika tractors and earthmoving, along with high-quality budget decorations for all village functions.',
    'services.all': 'All Services',
    'services.agriculture': 'Agricultural Tractor Services',
    'services.decoration': 'Event & Table Decor',
    'services.featuresTitle': 'What is included:',
    'services.btnEnquire': 'Enquire for Price',
    'services.selected': 'Selected:',
    'services.tagPopular': 'Most Popular',
    'services.tagEfficient': 'Highly Efficient',
    'services.tagHeavy': 'Heavy Duty',
    'services.tagStyle': 'Authentic Style',
    'services.tagBudget': 'Budget Friendly',

    // Gallery
    'gallery.badge': 'PORTFOLIO SHOWCASE',
    'gallery.title': 'Our Work Gallery',
    'gallery.description': 'Real-world visual proof of our Blue Sonalika tractor plucking and traditional floral event backdrops across local Salem holdings.',
    'gallery.all': 'All Images',
    'gallery.agriculture': 'Agriculture & Soil tilling',
    'gallery.decoration': 'Stage & Seating setup',

    // FAQ
    'faq.reviewsBadge': 'AGRARIAN REVIEWS',
    'faq.reviewsTitle': 'Trusted by Local Farmers & Families',
    'faq.reviewsDesc': 'P.R.M SERVICES lives by customer word of mouth. Real experience logs from local coconut farmers and wedding organizers:',
    'faq.supportBadge': 'HELP & SUPPORT CENTER',
    'faq.supportTitle': 'Frequently Asked Village Questions',
    'faq.supportDesc': 'We believe in 100% transparency. Here are honest answers regarding rates, fuel dispatch, and venue preparations:',

    // Enquiry
    'enquiry.badge': 'INSTANT QUOTATION ESTIMATES',
    'enquiry.title': 'Get Your Service Estimate in 15 Mins',
    'enquiry.desc': 'Fill out this quick enquiry with your specific village location near Mallur. Whether you are looking for tractor tilling patterns, JCB earthmover bookings, or function setup chair rentals, we respond with absolute clarity.',
    'enquiry.directDial': 'Direct Dial Operator',
    'enquiry.directDialTiming': 'Call anytime between 6:00 AM - 9:00 PM',
    'enquiry.verifiedLand': 'Verified Land Servicing',
    'enquiry.verifiedLocation': 'Serving Mallur, Salem District & Periyakattur neighborhoods (Pincode: 636203)',
    'enquiry.immediateResponse': 'Need immediate response?',
    'enquiry.whatsappHint': 'Please use the floating green WhatsApp widget on the bottom right of the page to chat with the business owner directly via mobile.',
    'enquiry.formTitle': '📋 Service Booking Form',
    'enquiry.selectedBadge': 'Selected:',
    'enquiry.labelName': 'Your Name',
    'enquiry.placeholderName': 'e.g. Ramesh Kumar',
    'enquiry.labelPhone': 'Phone Number',
    'enquiry.placeholderPhone': 'e.g. 9876543210 (10 digits)',
    'enquiry.labelService': 'Select Required Service',
    'enquiry.labelDate': 'Preferred Date',
    'enquiry.labelLocation': 'Your Village / Delivery Location',
    'enquiry.labelMessage': 'Extra instructions / details (Optional)',
    'enquiry.placeholderMessage': 'e.g. Acre count for weeding / Number of plastic chairs required / Floral theme preferences...',
    'enquiry.btnSubmit': 'Send Secure Enquiry',
    'enquiry.submitSuccessTitle': 'Request Logged & Dispatched!',
    'enquiry.submitSuccessDesc': 'We have received your details. The operator will contact you shortly. Your request has also been stored locally below under "My Enquiries".',
    'enquiry.trackerTitle': 'My Enquiries',
    'enquiry.savedLocally': 'Saved Locally in Browser',
    'enquiry.requestedTag': 'Requested:',
    'enquiry.submittedAt': 'Submitted at',
    'enquiry.removeEstimateTitle': 'Remove logged request',

    // Contact
    'contact.badge': 'WHERE TO FIND US / GEOGRAPHY',
    'contact.title': 'Our Mallur-Salem Operating Region',
    'contact.desc': 'We operate directly from Periyakattur, Mallur, offering agricultural tractor tilling and custom low-budget stage setups in a 25 kilometere diameter covering Salem, Veerapandi, and nearby areas.',
    'contact.labelAddress': 'Our Business Address',
    'contact.groundVerified': '📌 Location Ground Verified',
    'contact.btnShare': 'Share Address',
    'contact.labelPhone': 'Mobile Direct',
    'contact.phoneDesc': 'Owner Contact Link',
    'contact.labelHours': 'Active Hours',
    'contact.hoursDesc': 'Open all 7 days',
    'contact.labelRadius': 'Operational Service Radius',
    'contact.radiusHint': 'If your village lies near Mallur, feel free to submit an Enquiry or Call! We readily mobilize services for field preparations.',
    'contact.locationPin': '🗺️ Location Pin: Mallur, Periyakattur, Salem bypass (TN)',
    'contact.btnNavigate': 'Navigate in Google Maps',

    // Footer
    'footer.description': 'We specialize in affordable Sonalika tractor cultivation, mini tilling, and JCB earth moving jobs near Salem Mallur, alongside gorgeous, low-budget decorative setups for your household functions.',
    'footer.license': '100% Licensed Operator',
    'footer.registered': 'Periyakattur Registered',
    'footer.navTitle': 'Explore Services',
    'footer.officeTitle': 'Operational Office Info',
    'footer.activeHoursHeader': 'Active Fleet Hours',
    'footer.seoText': 'SEO Optimized for Google Local Business search algorithms in Salem, Mallur, Tamil Nadu under pincode 636203.',
    'footer.rights': 'All rights reserved.',

    // WhatsApp Button
    'whatsapp.tooltip': 'Chat with the Operator directly!'
  },
  ta: {
    // Navbar
    'nav.home': 'முகப்பு',
    'nav.services': 'சேவைகள்',
    'nav.gallery': 'புகைப்படங்கள்',
    'nav.faq': 'மதிப்புரைகள் & கேள்விகள்',
    'nav.enquiry': 'விளக்கம் கேட்க',
    'nav.contact': 'தொடர்பு & வரைபடம்',
    'nav.callNow': 'விளக்கம் கேட்க',
    
    // Hero
    'hero.badge': '📍 மல்லூர், சேலம் - நம்பகமான கிராமிய சேவை',
    'hero.titleText': 'பி.ஆர்.எம் சர்வீசஸ்',
    'hero.titleAccent': 'டிராக்டர் உழவு & விழா மேடை அலங்காரம்',
    'hero.description': 'பெரியகாட்டூர், மல்லூர் மற்றும் சுற்றுவட்டார சேலம் கிராமங்களுக்கு சோனாலிகா உழவு வண்டிகள், ஜேசிபி எர்த்மூவர்கள் மற்றும் கண்கவர் குறைந்த பட்ஜெட் விழா அலங்கார சேவைகள்.',
    'hero.ctaEnquire': 'மதிப்பீடு பெறுக',
    'hero.ctaCall': 'அழைக்க',
    'hero.tractorTitle': 'டிராக்டர் சேவைகள்',
    'hero.tractorDesc': 'சோனாலிகா & மினி டிராக்டர் உழவு',
    'hero.decorTitle': 'அலங்காரப் பணிகள்',
    'hero.decorDesc': 'பாரம்பரிய மேடை மற்றும் விழா அலங்காரம்',

    // Services
    'services.badge': 'எங்கள் சேவைகள்',
    'services.title': 'நாங்கள் வழங்கும் சேவைகள்',
    'services.description': 'நவீன சோனாலிகா டிராக்டர்கள் மூலம் விவசாய நிலம் சமப்படுத்துதல், உழவு ஓட்டுதல் மற்றும் அனைத்து சுப நிகழ்ச்சிகளுக்கும் தரமான மேடை அலங்காரங்கள், நாற்காலிகள் வாடகைக்கு வழங்குதல் போன்றவற்றை குறைந்த செலவில் செய்து தருகிறோம்.',
    'services.all': 'அனைத்து சேவைகளும்',
    'services.agriculture': 'டிராக்டர் & உழவு சேவைகள்',
    'services.decoration': 'அலங்காரம் & நாற்காலி வாடகை',
    'services.featuresTitle': 'சேவையில் அடங்குபவை:',
    'services.btnEnquire': 'விலை விபரம் கேட்க',
    'services.selected': 'தேர்வு செய்யப்பட்டது:',
    'services.tagPopular': 'மிகவும் பிரபலம்',
    'services.tagEfficient': 'சிறந்த திறன்',
    'services.tagHeavy': 'கனரக வேலை',
    'services.tagStyle': 'பாரம்பரிய நடை',
    'services.tagBudget': 'குறைந்த பட்ஜெட்',

    // Gallery
    'gallery.badge': 'பணிகளின் புகைப்படங்கள்',
    'gallery.title': 'எங்கள் பணிகளின் கேலரி',
    'gallery.description': 'மல்லூர், பெரியகாட்டூர் மற்றும் சுற்றுவட்டாரத்தில் சோனாலிகா டிராக்டர் உழவு மற்றும் பாரம்பரிய விழா மேடை அலங்காரங்களின் நேரடி நிழற்படங்கள்.',
    'gallery.all': 'அனைத்து புகைப்படங்கள்',
    'gallery.agriculture': 'விவசாய உழவு பணிகள்',
    'gallery.decoration': 'மேடை & இருக்கை அலங்காரம்',

    // FAQ
    'faq.reviewsBadge': 'விவசாயிகள் மற்றும் வாடிக்கையாளர் கருத்துக்கள்',
    'faq.reviewsTitle': 'உள்ளூர் மக்கள் மற்றும் விவசாயிகள் நம்பிக்கை',
    'faq.reviewsDesc': 'பி.ஆர்.எம் சர்வீசஸ் நேர்மையான சேவையால் வளர்கிறது. எங்கள் சேவையைப் பயன்படுத்திய நில உரிமையாளர்கள் மற்றும் விழா ஏற்பாட்டாளர்களின் அனுபவப் பதிவுகள்:',
    'faq.supportBadge': 'உதவி மற்றும் தகவல் மையம்',
    'faq.supportTitle': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'faq.supportDesc': 'நாங்கள் வெளிப்படையான கட்டணங்களை நம்புகிறோம். உழவு கட்டணம், ஜேசிபி வாடகை மற்றும் விழா ஏற்பாடுகள் பற்றிய தகவல்கள் பின்வருமாறு:',

    // Enquiry
    'enquiry.badge': 'உடனடி விலை விபரங்கள்',
    'enquiry.title': '15 நிமிடங்களில் இலவச மதிப்பீடு பெறுக',
    'enquiry.desc': 'மல்லூர் அருகே உள்ள உங்கள் கிராமத்தின் பெயர் மற்றும் தேவையான தேதியை உள்ளிடவும். டிராக்டர் உழவு, ஜேசிபி தேவைகள் அல்லது பிளாஸ்டிக் நாற்காலிகள் வாடகை எதுவாக இருந்தாலும் நாங்கள் உங்களுக்கு வெளிப்படையான தகவலை வழங்குவோம்.',
    'enquiry.directDial': 'நேரடி அழைப்பு',
    'enquiry.directDialTiming': 'காலை 6:00 மணி முதல் இரவு 9:00 மணி வரை எப்போது வேண்டுமானாலும் அழைக்கவும்',
    'enquiry.verifiedLand': 'உறுதிசெய்யப்பட்ட விநியோகப் பகுதி',
    'enquiry.verifiedLocation': 'மல்லூர், சேலம் மாவட்டம் & பெரியகாட்டூர் மற்றும் அதனைச் சுற்றியுள்ள கிராமங்கள் (அஞ்சல் குறியீடு: 636203)',
    'enquiry.immediateResponse': 'உடனடி பதில் வேண்டுமா?',
    'enquiry.whatsappHint': 'வலதுபுறம் கீழே உள்ள பச்சை நிற வாட்ஸ்அப் பட்டனைப் பயன்படுத்தி நேரடியாக உரிமையாளரிடம் மிக எளிதாக வாட்ஸ்அப்பில் அரட்டையடிக்கலாம்.',
    'enquiry.formTitle': '📋 சேவை முன்பதிவு / விசாரணை படிவம்',
    'enquiry.selectedBadge': 'தேர்ந்தெடுக்கப்பட்ட பணி:',
    'enquiry.labelName': 'உங்கள் பெயர்',
    'enquiry.placeholderName': 'எ.கா. ரமேஷ் குமார்',
    'enquiry.labelPhone': 'தொலைபேசி எண்',
    'enquiry.placeholderPhone': 'எ.கா. 9876543210 (10 இலக்க எண்)',
    'enquiry.labelService': 'தேவையான சேவையைத் தேர்ந்தெடுக்கவும்',
    'enquiry.labelDate': 'விருப்பமான தேதி',
    'enquiry.labelLocation': 'உங்கள் ஊர் / நிலம் அமைந்துள்ள இடம்',
    'enquiry.labelMessage': 'கூடுதல் விபரங்கள் (விருப்பப்பட்டால் எழுதலாம்)',
    'enquiry.placeholderMessage': 'எ.கா. உழவு செய்ய வேண்டிய ஏக்கர் / தேவைப்படும் நாற்காலிகளின் எண்ணிக்கை / பூங்கள் அலங்கார விருப்பங்கள்...',
    'enquiry.btnSubmit': 'விசாரணை படிவத்தை சமர்ப்பி',
    'enquiry.submitSuccessTitle': 'விசாரணை வெற்றிகரமாக பதிவு செய்யப்பட்டது!',
    'enquiry.submitSuccessDesc': 'உங்கள் விபரங்கள் பெறப்பட்டுள்ளன. எங்களது ஆபரேட்டர் விரைவில் உங்கள் தொலைபேசி எண்ணில் உங்களைத் தொடர்பு கொள்வார். உங்கள் பதிவு கீழே "எனது விசாரணைகள்" பகுதியில் உள்ளூர் சேமிப்பில் வைக்கப்பட்டுள்ளது.',
    'enquiry.trackerTitle': 'எனது விசாரணைகள்',
    'enquiry.savedLocally': 'உலாவி சேமிப்பில் உள்ளது',
    'enquiry.requestedTag': 'விசாரிக்கப்பட்டது:',
    'enquiry.submittedAt': 'பதிவு செய்யப்பட்ட நேரம்',
    'enquiry.removeEstimateTitle': 'பதிவை நீக்க',

    // Contact
    'contact.badge': 'எங்கள் முகவரி / வரைபடம்',
    'contact.title': 'எங்கள் மல்லூர்-சேலம் சேவைப் பகுதி',
    'contact.desc': 'நாங்கள் மல்லூர் பைபாஸ் அருகே உள்ள பெரியகாட்டூரில் இருந்து செயல்படுகிறோம். மல்லூர், சேலம், வீரபாண்டி மற்றும் சுற்றுவட்டார 25 கி.மீ எல்லைக்குள் எங்கள் டிராக்டர் சேவைகளும் விழா அலங்காரங்களும் கிடைக்கும்.',
    'contact.labelAddress': 'எங்கள் தொழில் முகவரி',
    'contact.groundVerified': '📌 முகவரி சரிபார்க்கப்பட்டது',
    'contact.btnShare': 'முகவரியைப் பகிர்க',
    'contact.labelPhone': 'நேரடி மொபைல் எண்',
    'contact.phoneDesc': 'உரிமையாளருடன் தொடர்பு கொள்ள',
    'contact.labelHours': 'வேலை நேரம்',
    'contact.hoursDesc': 'வாரத்தின் 7 நாட்களும் செயல்படுகிறது',
    'contact.labelRadius': 'எங்கள் சேவைப் பகுதிகள்',
    'contact.radiusHint': 'உங்கள் நிலம் மல்லூர் பைபாஸ் அருகில் இருந்தால், எங்களைத் தொடர்பு கொள்ளலாம்! விவசாய உழவுகளுக்கு பெரிய நிலங்களுக்கும் நாங்கள் டிராக்டர் கொண்டு வருவோம்.',
    'contact.locationPin': '🗺️ இருப்பிடக் குறியீடு: மல்லூர், பெரியகாட்டூர், சேலம் பைபாஸ் (TN)',
    'contact.btnNavigate': 'கூகுள் மேப்பில் வழிகாட்டி பெறுக',

    // Footer
    'footer.description': 'நாங்கள் சேலம் மல்லூர் அருகில் சோனாலிகா டிராக்டர் மூலமாக குறைந்த விலையில் சிறந்த உழவுப் பணிகளையும், வீட்டு விசேஷங்கள் மற்றும் கோவில் திருவிழாக்களுக்கு தேவையான நாற்காலிகள், சுபமுகூர்த்த மேடை அலங்காரங்களையும் பாரம்பரிய முறைப்படி செய்கிறோம்.',
    'footer.license': '100% சான்றளிக்கப்பட்ட ஆபரேட்டர்',
    'footer.registered': 'பெரியகாட்டூர் பதிவுபெற்றது',
    'footer.navTitle': 'முக்கிய இணைப்புகள்',
    'footer.officeTitle': 'அலுவலக முகவரி விபரம்',
    'footer.activeHoursHeader': 'டிராக்டர் இயக்க நேரம்',
    'footer.seoText': 'சேலம், மல்லூர், தமிழ்நாடு வட்டாரத்தில் வாழும் விவசாயிகளுக்கான உள்ளூர் தேடலில் உகந்தவாறு வடிவமைக்கப்பட்டுள்ளது.',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',

    // WhatsApp Button
    'whatsapp.tooltip': 'உரிமையாளருடன் நேரடித் தொடர்புக்கு!'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('prm_language');
    if (saved === 'en' || saved === 'ta') {
      return saved;
    }
    return 'en'; // default to English
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('prm_language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
