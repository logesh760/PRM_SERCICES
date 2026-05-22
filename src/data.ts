import { ServiceItem, GalleryItem, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: "P.R.M SERVICES",
  phone: "6381964771",
  phoneDisplay: "+91 6381964771",
  address: "Periyakattur, Mallur, Salem District, Tamil Nadu",
  pincode: "636203",
  whatsappUrl: "https://wa.me/916381964771?text=Hello%20P.R.M%20SERVICES,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me.",
  googleMapsUrl: "https://maps.google.com/?q=Periyakattur,+Mallur,+Salem,+636203",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.393457199127!2d78.1189441!3d11.5594981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef0e3da10a27%3A0xc34b684cb32db4aa!2sMallur%2C%20Tamil%20Nadu%20636203!5e0!3m2!1sen!2sin!4v1716380000000!5m2!1sen!2sin",
  description: "P.R.M SERVICES provides highly professional, affordable farming tractor services and low-budget traditional village decoration services for local customers, village families, and farmers in and around Mallur, Salem.",
  operatingHours: "6:00 AM - 9:00 PM (Everyday)",
  fleetDetails: {
    tractor: "Sonalika Blue Tractor with Multi-Color Utility Trailer",
    earthMover: "JCB Earth Mover (TN 88 H 8077) with Front Loader and Backhoe"
  }
};

export const SERVICES: ServiceItem[] = [
  // Agriculture category
  {
    id: "land-ploughing",
    title: "Land Ploughing",
    titleTa: "நிலம் உழுதல் (உழவு ஓட்டுதல்)",
    category: "agriculture",
    description: "Deep and uniform soil ploughing to prepare fertile beds for sugarcane, tapioca, turmeric, paddy, and local village crops.",
    descriptionTa: "உயர்தர சோனாலிகா டிராக்டர் கொண்டு கரும்பு, மரவள்ளி, மஞ்சள், நெல் போன்ற பயிர்களுக்கு ஏற்றவாறு களிமண் மற்றும் செம்மண் நிலங்களை ஆழமாகவும் சமமாகவும் உழுதல்.",
    features: [
      "Professional Sonalika tractor attachments",
      "Optimal depth control for crop fertility",
      "Clay, loamy, and mixed soil expertise",
      "Fast & timely service during monsoon breaks"
    ],
    featuresTa: [
      "நவீன சோனாலிகா டிராக்டர் கருவிகள்",
      "பயிர்களுக்கு உகந்த ஆழ கட்டுப்பாடு",
      "செம்மண், களிமண் மற்றும் அனைத்து மண் நிபுணத்துவம்",
      "மழைக்கால இடைவெளியில் அதிவேக சேவை"
    ],
    iconName: "Tractor",
    tag: "Most Popular",
    tagTa: "மிகவும் பிரபலம்"
  },
  {
    id: "mini-tractor",
    title: "Mini Tractor Services",
    titleTa: "மினி டிராக்டர் உளவுப் பணிகள்",
    category: "agriculture",
    description: "Highly versatile mini tractors ideal for cultivation in narrow spaces, coconut groves, inter-crop areas, and smaller family holdings.",
    descriptionTa: "தேங்காய் தோப்புகள், பாக்கு மரங்களுக்கு இடையே, குறைந்த இடைவெளி உள்ள விவசாய நிலங்கள் மற்றும் குறுகிய வழிகள் கொண்ட நிலங்களில் உழுவதற்கு ஏற்ற சிறிய ரக டிராக்டர் சேவைகள்.",
    features: [
      "Perfect for narrow inter-crop cultivation",
      "Protects roots of coconut and areca palms",
      "Fuel-efficient, cost-saving for small farms",
      "Rotavator and cultivator attachments available"
    ],
    featuresTa: [
      "குறுகிய பயிர் இடைவெளிகளுக்கு மிகவும் சிறந்தது",
      "தென்னை மற்றும் பாக்கு மர வேர்களுக்கு சேதம் ஏற்படாது",
      "குறைந்த விலையில் எரிபொருள் சிக்கன உழவு",
      "ரோட்டவேட்டர் மற்றும் கலப்பை வசதிகள்"
    ],
    iconName: "Compass",
    tag: "Highly Efficient",
    tagTa: "சிறந்த திறன்"
  },
  {
    id: "bund-making",
    title: "Bund Making (Varappu Kattal)",
    titleTa: "வரப்பு கட்டுதல் (வரப்பு கட்டல்)",
    category: "agriculture",
    description: "Precise field bund formation to optimize water retention, construct irrigation boundaries, and secure agricultural land segments.",
    descriptionTa: "நீர் மேலாண்மை மற்றும் பாசன வசதியை மேம்படுத்தவும், விவசாய நிலத்தின் எல்லைகளைப் பாதுகாக்கவும் துல்லியமான வரப்பு அமைக்கும் பணிகள்.",
    features: [
      "Water conservation boundaries",
      "Sturdy, non-eroding mud bunds",
      "Even spacing aligned to the field layout",
      "Saves labor time and manually strenuous bunding"
    ],
    featuresTa: [
      "நீர் சேமிப்பு வரப்பு எல்லைகள்",
      "வலுவான மற்றும் கரையாத மண் வரப்புகள்",
      "நில அமைப்பிற்கு ஏற்ப சமமான வரப்புகள் அமைத்தல்",
      "கடினமான கை உழைப்பு மற்றும் நேரத்தை சேமிக்கும்"
    ],
    iconName: "Maximize",
  },
  {
    id: "furrows-beds",
    title: "Furrows and Beds Forming",
    titleTa: "பாத்திகள் மற்றும் சால் அமைத்தல்",
    category: "agriculture",
    description: "Automated ridge, furrow, and raised seedbed formation for efficient crop sowing, drip irrigation lines, and easy harvesting.",
    descriptionTa: "வெங்காயம், பருத்தி, கடலை போன்ற பயிர்களை நடுவதற்கு வசதியாகவும் சொட்டு நீர் பாசன குழாய்களை அமைக்கவும் பாத்திகள் மற்றும் சால் அமைக்கும் பணிகள்.",
    features: [
      "Ideal for onion, cotton, groundnut crop beds",
      "Maintains optimal microclimate for seeds",
      "Precision ridge intervals",
      "Saves weeks of manual ridge labor"
    ],
    featuresTa: [
      "வெங்காயம், பருத்தி, கடலை பயிர்களுக்கு ஏற்றது",
      "விதைகளுக்கு உகந்த ஈரப்பதம் பராமரிப்பு",
      "துல்லியமான இடைவெளிகளில் பாத்திகள்",
      "நாட்கள் நீடிக்கும் மனித உழைப்பைச் சேமிக்கும்"
    ],
    iconName: "Grid",
  },
  {
    id: "small-tractor",
    title: "Small Tractor Services",
    titleTa: "சிறிய டிராக்டர் சேவைகள்",
    category: "agriculture",
    description: "Standard light tractors with rotavator, transport trailer, and disc ploughs for day-to-day haulage and standard farm cultivation.",
    descriptionTa: "தினசரி விவசாய தேவைகள் மற்றும் சுமை ஏற்றிச் செல்ல ரோட்டவேட்டர், டிரெய்லர் மற்றும் கலப்பைகள் கொண்ட சிறிய ரக டிராக்டர்கள் வாடகைக்கு.",
    features: [
      "Versatile general land preparation",
      "Robust village road transport setups",
      "Equipped with modern mechanical rotavators",
      "Flexible hourly packages for village farmers"
    ],
    featuresTa: [
      "பல்நோக்கு விவசாய நில தயாரிப்பு",
      "வலுவான கிராமிய போக்குவரத்து அமைப்புகள்",
      "நவீன ரோட்டவேட்டர் கருவிகள்",
      "விவசாயிகளுக்கு தகுந்த மணிநேர பேக்கேஜ்கள்"
    ],
    iconName: "Layers",
  },
  {
    id: "earth-movers",
    title: "JCB Earth Movers Available",
    titleTa: "ஜேசிபி எர்த்மூவர் எந்திரங்கள்",
    category: "agriculture",
    description: "Heavy duty PRM Earth Movers JCB loader (TN 88 H 8077) for farm levelling, pond digging, farm boundary clearance, and loading work.",
    descriptionTa: "நிலங்களை சமன்படுத்தவும், குளம் அல்லது கால்வாய் தோண்டவும், தோப்புகளில் உள்ள முட்செடிகள், மரங்களை அகற்றவும் எங்களது கனரக ஜேசிபி எந்திரங்கள் (TN 88 H 8077).",
    features: [
      "Professional experienced JCB operator",
      "Removing invasive weeds, trees, and shrubs",
      "Ditches and farm canal formation",
      "Rapid loading of agricultural goods & trailer soil"
    ],
    featuresTa: [
      "அனுபவம் வாய்ந்த ஜேசிபி ஆபரேட்டர்",
      "தேவையற்ற காட்டாமணக்கு, முட்செடி அகற்றுதல்",
      "விவசாய வடிகால் வாய்க்கால் அமைத்தல்",
      "விவசாய பொருட்கள் மற்றும் மண் அதிவேகமாக ஏற்றுதல்"
    ],
    iconName: "Shield",
    tag: "Heavy Duty",
    tagTa: "கனரக வேலை"
  },

  // Decoration category
  {
    id: "traditional-decor",
    title: "Traditional Village Decoration",
    titleTa: "பாரம்பரிய விழா அலங்காரம்",
    category: "decoration",
    description: "Authentic, beautiful village setup featuring fresh marigold flower strings, mango leaves, pathar decorations, and ambient illumination.",
    descriptionTa: "புதுமனை புகுவிழா, காதுகுத்து மற்றும் பூப்புனித நீராட்டு விழா போன்றவற்றிற்கு பசுமையான மாவிலை தோரணங்கள், சாமந்திப்பூ மாலைகள் மற்றும் வண்ண விளக்குகளுடன் கூடிய பாரம்பரிய அலங்காரங்கள்.",
    features: [
      "Authentic Tamil village festival themes",
      "Thalampoo, Marigold floral arches",
      "Subtle and radiant banana trunk entries",
      "Heritage village visual identity"
    ],
    featuresTa: [
      "பாரம்பரிய தமிழ் கிராமிய திருவிழா தீம்கள்",
      "தாழம்பூ மற்றும் சாமந்தி தோரண வளைவுகள்",
      "கண்கவர் வாழைமரம் வரவேற்பு நுழைவாயில்",
      "பாரம்பரிய கிராமத்து கலை அழகு மற்றும் நேர்த்தி"
    ],
    iconName: "Palette",
    tag: "Authentic Style",
    tagTa: "பாரம்பரிய நடை"
  },
  {
    id: "low-budget-event",
    title: "Low Budget Event Decoration",
    titleTa: "குறைந்த பட்ஜெட் விழா அலங்காரம்",
    category: "decoration",
    description: "Elegant, cost-effective decorative solutions tailored specifically to fit your budget for housewarming, birthday parties, and gatherings.",
    descriptionTa: "பிறந்தநாள் விழாக்கள், காம்பவுண்ட் பூஜைகள் போன்ற வீட்டு விஷேசங்களுக்கு உங்கள் பட்ஜெட்டிற்கு ஏற்றவாறு துணி திரைகள் மற்றும் பின்னணி அலங்காரங்கள்.",
    features: [
      "No hidden extra costs, absolute transparency",
      "Creative fabric drapes & color backdrops",
      "Clean execution matching local standards",
      "Beautiful look at fraction of city decor prices"
    ],
    featuresTa: [
      "எந்தவொரு கூடுதல் கட்டணமும் இல்லாத வெளிப்படைத்தன்மை",
      "வண்ணமயமான துணி மற்றும் பேக்டிராப் திரை அமைப்புகள்",
      "தரமான நேர்த்தியான உள்ளூர் வடிவமைப்பு",
      "நகரத்து விலையை விட மிகக் குறைந்த கட்டணங்கள்"
    ],
    iconName: "Sparkles",
    tag: "Budget Friendly",
    tagTa: "குறைந்த பட்ஜெட்"
  },
  {
    id: "chairs-functions",
    title: "Chairs & Tables for Functions",
    titleTa: "விழாக்களுக்கு நாற்காலிகள் & மேஜைகள்",
    category: "decoration",
    description: "Hassle-free supply of premium quality plastic chairs, luxury seatings, dining tables, and seating configurations for events of any size.",
    descriptionTa: "அனைத்து விசேஷங்களுக்கும் தேவையான தரமான பிளாஸ்டிக் நாற்காலிகள், டைனிங் டேபிள்கள் மற்றும் இருக்கைகள் வாடகைக்கு வழங்கி, விழா இடத்திற்கே பாதுகாப்பாக கொண்டு வந்து சேர்க்கப்படும்.",
    features: [
      "Sturdy, sanitary clean plastic chairs",
      "Hassle-free delivery right to the venue",
      "Chairs with and without arm rests available",
      "Flexible counts from 50 up to 1000+ chairs"
    ],
    featuresTa: [
      "சுத்தமான மற்றும் தரமான பிளாஸ்டிக் நாற்காலிகள்",
      "விழா நடைபெறும் இடத்திற்கே நேரடி டெலிவரி",
      "கைப்பிடி உள்ள மற்றும் இல்லாத நாற்காலிகள் கிடைக்கும்",
      "50 முதல் 1000-க்கும் மேற்பட்ட நாற்காலிகள் ஆர்டர் வசதி"
    ],
    iconName: "Heart",
  },
  {
    id: "village-function-setup",
    title: "Village Function Stage Setup",
    titleTa: "விழா மேடை (ஸ்டேஜ்) அமைப்புகள்",
    category: "decoration",
    description: "Full stage layout including premium background screens, lighting systems, sound speakers setup, and decorative flower stages.",
    descriptionTa: "வண்ணமயமான பின்னணி திரைகள், பிரகாசமான வண்ண ஸ்பாட் லைட்டுகள் மற்றும் ஒளிபெருக்கி (ஸ்பீக்கர்) அமைப்புகளுடன் கூடிய சுபமுகூர்த்த விழா மேடைகள்.",
    features: [
      "Sturdy stage platforms and backing structures",
      "Traditional and contemporary themes",
      "High-output warm spot-lighting",
      "Stellar backdrop photography frames"
    ],
    featuresTa: [
      "வறுவான ஸ்டேஜ் மேடைகள் மற்றும் பிரேம்கள்",
      "பாரம்பரிய மற்றும் நவீன தீம்கள்",
      "பிரகாசமான வார்ம் ஸ்பாட் விளக்குகள்",
      "புகைப்படம் எடுக்க உகந்த அழகான பின்னணி"
    ],
    iconName: "Tv",
  },
  {
    id: "local-event-support",
    title: "Local Event Support",
    titleTa: "உள்ளூர் விழாக்கள் மற்றும் திருவிழா ஆதரவு",
    category: "decoration",
    description: "End-to-end ground logistics support for local temple festivals (Thiruvizha), poojas, political events, and agrarian meetings.",
    descriptionTa: "கிராமத்து கோவில் திருவிழாக்கள் (ஆடி பண்டிகை), பூமி பூஜைகள் மற்றும் அரசியல்/சமூக விவசாய கூட்டங்களுக்கான பந்தல் அமைப்புகள் மற்றும் ஒலிபெருக்கி மேலாண்மை.",
    features: [
      "Complete coordination with local vendors",
      "Special sound system management",
      "Temporary shelters (Pandal / Shamiana) setup",
      "On-call volunteers for emergency support"
    ],
    featuresTa: [
      "உள்ளூர் விண்டோர்களுடன் முழு ஒருங்கிணைப்பு",
      "சிறந்த சவுண்ட் சிஸ்டம் ஒலிபெருக்கி மேலாண்மை",
      "தற்காலிக பந்தல் மற்றும் ஷாமியானா அமைப்புகள்",
      "அவசரகால உதவிக்கு உடனடி அழைப்பு வசதி"
    ],
    iconName: "Users",
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sonalika Tractor in Action",
    titleTa: "செயல்பாட்டில் சோனாலிகா டிராக்டர்",
    category: "agriculture",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600",
    description: "Our blue Sonalika village tractor ploughing red rich soil during seedbed preparation near Salem.",
    descriptionTa: "மல்லூர் அருகே செம்மண் விவசாய நிலத்தில் உழவு ஓட்டி விதைப்பதற்கான நிலத்தை தயாரிக்கும் எங்களது சோனாலிகா டிராக்டர்."
  },
  {
    id: "gal-2",
    title: "Traditional Floral Entryway",
    titleTa: "பாரம்பரிய பூ அலங்கார நுழைவாயில்",
    category: "decoration",
    imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=600",
    description: "Beautiful marigold and jasmine decoration setup for a housewarming pooja ceremony in Periyakattur.",
    descriptionTa: "பெரியகாட்டூரில் நடைபெற்ற ஒரு புதுமனை புகுவிழாவிற்கான பசுமை மாவிலை மற்றும் சாமந்தி, மல்லிகை பூக்கள் அலங்காரம்."
  },
  {
    id: "gal-3",
    title: "Deep Soil Rotavator Ploughing",
    titleTa: "ரோட்டவேட்டர் மூலம் ஆழமான உழவு",
    category: "agriculture",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
    description: "Land preparation using a premium mechanical rotary tiller with optimal depth adjustment.",
    descriptionTa: "சிறந்த சுழலக கலப்பை (rotary tiller) கொண்டு மண்ணை மிருதுவாகவும் சமமாகவும் மாற்றும் ஆழமான உழவுப் பணி."
  },
  {
    id: "gal-4",
    title: "Festive Village Backdrop",
    titleTa: "வண்ணமயமான மேடை பின்னணி",
    category: "decoration",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600",
    description: "Cozy local function stage setup featuring premium colorful organic drapes and customized low-budget lighting.",
    descriptionTa: "வலை மற்றும் துணிகள் கொண்டு நேர்த்தியாகவும், குறைந்த பட்ஜெட்டிலும் அமைக்கப்பட்ட ஒரு அழகான வீட்டு விசேஷ மேடை அலங்காரம்."
  },
  {
    id: "gal-5",
    title: "Mini Tractor Grove Cultivation",
    titleTa: "மினி டிராக்டர் தென்னந்தோப்பு உழவு",
    category: "agriculture",
    imageUrl: "https://images.unsplash.com/photo-1533577116850-9cc662ad397b?auto=format&fit=crop&q=80&w=600",
    description: "Our premium compact tractor working perfectly in a tight coconut farming plantation.",
    descriptionTa: "பாக்கு மற்றும் தென்னந்தோப்பில் மரங்களுக்கு இடையே குறுகிய இடங்களில் வேர்கள் பாதிக்கப்படாமல் உழவு ஓட்டும் எங்களது சிறிய டிராக்டர்."
  },
  {
    id: "gal-6",
    title: "Community Seating & Chairs Arrangement",
    titleTa: "பொது இருக்கை மற்றும் மேசை ஏற்பாடுகள்",
    category: "decoration",
    imageUrl: "https://images.unsplash.com/photo-1532375811409-90b14424126d?auto=format&fit=crop&q=80&w=600",
    description: "Providing pristine clean tables and sturdy seating configurations for a local temple lunch service.",
    descriptionTa: "உள்ளூர் கோவில் திருவிழா அன்னதான தர்மத்திற்கு நேர்த்தியாக வரிசையாக அமைக்கப்பட்ட பிளாஸ்டிக் நாற்காலிகள் மற்றும் மேஜைகள்."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "K. Ramasamy",
    nameTa: "K. ராமசாமி",
    role: "Sugarcane Farmer",
    roleTa: "கரும்பு விவசாயி",
    location: "Mallur, Salem",
    locationTa: "மல்லூர், சேலம்",
    comment: "P.R.M. Services did the land ploughing with their Sonalika tractor on very short notice. The bund making was highly accurate and water does not overflow. Very cheap prices compared to others.",
    commentTa: "பி.ஆர்.எம். சர்வீசஸ் மூலம் அவசரமாக சோனாலிகா டிராக்டர் உழவு கேட்டோம், உடனே வந்து செய்து கொடுத்தார்கள். வரப்பு கட்டியது மிகத் துல்லியமாக உள்ளதால் நீர் வழிந்து ஓடவில்லை. மற்றவர்களை விட மிகக் குறைந்த கட்டணம் விபரம்." ,
    rating: 5
  },
  {
    id: "t-2",
    name: "S. Gowtham",
    nameTa: "S. கௌதம்",
    role: "Local Event Organizer",
    roleTa: "உள்ளூர் விழா ஏற்பாட்டாளர்",
    location: "Periyakattur",
    locationTa: "பெரியகாட்டூர்",
    comment: "For our temple function, we rented 250 chairs and a stage backdrop. Their traditional decoration using organic mango leaves and marigolds was perfect. Strongly recommend for low budgets!",
    commentTa: "எங்கள் கோவில் விழாவிற்கு 250 நாற்காலிகள் மற்றும் ஸ்டேஜ் பேக்டிராப் வாடகைக்கு எடுத்தோம். மாம்பழ இலைகள் மற்றும் சாமந்திப் பூக்கள் கொண்ட அவர்களின் பாரம்பரிய அலங்காரம் அருமையாக இருந்தது. குறைந்த பட்ஜெட்டில் அருமையான சேவை!",
    rating: 5
  },
  {
    id: "t-3",
    name: "M. Thangavel",
    nameTa: "M. தங்கவேல்",
    role: "Coconut Grove Owner",
    roleTa: "தென்னந்தோப்பு உரிமையாளர்",
    location: "Veerapandi",
    locationTa: "வீரபாண்டி",
    comment: "I regularly use their mini tractor services for tilling mud around the coconut trees. They drive extremely carefully without hurting tree roots. Honest people.",
    commentTa: "தென்னை மரங்களைச் சுற்றி மண்ணைக் கிளற இவர்களது சிறிய டிராக்டர் சேவையைத் தான் நான் வழக்கமாகப் பயன்படுத்துகிறேன். மரங்களின் வேர்களுக்குப் பாதிப்பு ஏற்படாதவாறு மிகவும் கவனமாக வண்டி ஓட்டுகிறார்கள். மிகவும் நேர்மையான மனிதர்கள்.",
    rating: 5
  }
];

export interface FaqItemType {
  question: string;
  questionTa?: string;
  answer: string;
  answerTa?: string;
}

export const FAQS: FaqItemType[] = [
  {
    question: "What geographical areas do you cover around Salem?",
    questionTa: "சேலம் மல்லூர் சுற்றியுள்ள எந்தெந்தப் பகுதிகளுக்குச் சேவை செய்கிறீர்கள்?",
    answer: "Our primary office is located in Periyakattur, Mallur (Pincode - 636203). We actively serve all farming areas, villages, and venues within 20-25 kilometers, including Salem city margins, Veerapandi, Panamarathupatti, Kakapalayam, and nearby areas.",
    answerTa: "எங்கள் முதன்மை அலுவலகம் மல்லூர், பெரியகாட்டூரில் (அஞ்சல் குறியீடு - 636203) அமைந்துள்ளது. மல்லூர் பைபாஸ், சேலம் மாநகர எல்லைகள், வீரபாண்டி, பனமரத்துப்பட்டி, காக்காபாளையம் மற்றும் 25 கிலோமீட்டர் சுற்றளவில் உள்ள அனைத்து விவசாய நிலங்களுக்கும், விழா இடங்களுக்கும் நாங்கள் நேரடியாகச் சேவை வழங்குகிறோம்."
  },
  {
    question: "How do you calculate chargers for tractor services?",
    questionTa: "டிராக்டர் உளவுப் பணிகளுக்கான கட்டணத்தை எவ்வாறு கணக்கிடுகிறீர்கள்?",
    answer: "We offer dual options: simple flat hourly pricing or contract basis (per acre) depending on the complexity, soil density, and distance. Please give us a direct call at 6381964771 to get an instant, free estimate.",
    answerTa: "நாங்கள் இரண்டு முறைகளில் கட்டணங்களை வழங்குகிறோம்: மணிநேர உழவுக் கணக்கு அல்லது நிலத்தின் பரப்பளவை (ஏக்கர் கணக்கு) பொறுத்து. நிலத்தின் தன்மை, தூரம் மற்றும் வேலையைப் பொறுத்து கட்டணங்கள் மாறுபடும். உடனடி இலவச மதிப்பீட்டைப் பெற எங்களை நேரடித் தொலைபேசியில் (6381964771) தொடர்பு கொள்ளவும்."
  },
  {
    question: "Do you supply decoration and chairs for very small family home poojas?",
    questionTa: "வீட்டில் நடக்கும் சிறிய பூஜைகளுக்கு நாற்காலிகள் மற்றும் அலங்காரப் பொருட்களை வழங்குவீர்களா?",
    answer: "Yes, absolutely! We support everything from large-scale village temple festivals (Thiruvizhas) down to small backyard birthday parties, housewarmings, or infant naming poojas with the same level of care and ultra-affordable pricing.",
    answerTa: "ஆமாம், நிச்சயமாக! பெரிய கிராமக் கோயில் திருவிழாக்கள் முதல், வீட்டின் சிறிய பிறந்தநாள் விழாக்கள், புதுமனை புகுவிழா பூஜா, காதுகுத்து மற்றும் மஞ்சள் நீராட்டு விழாக்கள் வரை அனைத்திற்கும் சமமான கவனத்துடனும், குறைந்த செலவிலும் சேவைகளை வழங்குகிறோம்."
  },
  {
    question: "How many days in advance should I book decoration services?",
    questionTa: "அலங்காரச் சேவைகளுக்கு எத்தனை நாட்களுக்கு முன்பே முன்பதிவு செய்ய வேண்டும்?",
    answer: "For standard local setups, we can activate on a 2-day notice. However, during heavy wedding seasons, harvest times, or village festival periods, we strongly recommend booking 1-2 weeks in advance to secure the prime dates.",
    answerTa: "உள்ளூர் அலங்காரங்களுக்கு, 2 நாட்களுக்கு முன் தகவல் தெரிவித்தால் போதுமானது. ஆனால் திருமண சீசன்கள், அறுவடை நேரங்கள் அல்லது கிராம திருவிழா காலங்களில் உகந்த தேதிகளை முன்பதிவு செய்ய 1 அல்லது 2 வாரங்களுக்கு முன்பே பதிவு செய்ய பரிந்துரைக்கிறோம்."
  },
  {
    question: "Can I book both JCB Earth Movers and Tractor ploughing together?",
    questionTa: "JCB எர்த்மூவர் மற்றும் டிராக்டரை ஒரே நேரத்தில் ஒன்றாகப் பதிவு செய்ய முடியுமா?",
    answer: "Yes! Many local land owners book our JCB loader (TN 88 H 8077) to remove thorns/shrubs or level high ridges, immediately followed by our Sonalika tractor disc plough and seedbed preparation, providing a smooth one-stop-shop transformation.",
    answerTa: "ஆம்! பல உள்ளூர் நில உரிமையாளர்கள் முதலில் எங்களது JCB எந்திரம் (TN 88 H 8077) மூலம் காடுகளைச் சுத்தம் செய்வார்கள் அல்லது வரப்புகளை உயர்த்துவார்கள், அதைத் தொடர்ந்து உடனடியாக சோனாலிகா டிராக்டர் கொண்டு உழவு ஓட்டி செப்பனிடுவார்கள். இது ஒரே இடத்தில் வேலையை முடிக்க மிகவும் எளிமையாக இருக்கும்."
  }
];
