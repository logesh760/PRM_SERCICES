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
    category: "agriculture",
    description: "Deep and uniform soil ploughing to prepare fertile beds for sugarcane, tapioca, turmeric, paddy, and local village crops.",
    features: [
      "Professional Sonalika tractor attachments",
      "Optimal depth control for crop fertility",
      "Clay, loamy, and mixed soil expertise",
      "Fast & timely service during monsoon breaks"
    ],
    iconName: "Tractor",
    tag: "Most Popular"
  },
  {
    id: "mini-tractor",
    title: "Mini Tractor Services",
    category: "agriculture",
    description: "Highly versatile mini tractors ideal for cultivation in narrow spaces, coconut groves, inter-crop areas, and smaller family holdings.",
    features: [
      "Perfect for narrow inter-crop cultivation",
      "Protects roots of coconut and areca palms",
      "Fuel-efficient, cost-saving for small farms",
      "Rotavator and cultivator attachments available"
    ],
    iconName: "Compass",
    tag: "Highly Efficient"
  },
  {
    id: "bund-making",
    title: "Bund Making (Varappu Kattal)",
    category: "agriculture",
    description: "Precise field bund formation to optimize water retention, construct irrigation boundaries, and secure agricultural land segments.",
    features: [
      "Water conservation boundaries",
      "Sturdy, non-eroding mud bunds",
      "Even spacing aligned to the field layout",
      "Saves labor time and manually strenuous bunding"
    ],
    iconName: "Maximize",
  },
  {
    id: "furrows-beds",
    title: "Furrows and Beds Forming",
    category: "agriculture",
    description: "Automated ridge, furrow, and raised seedbed formation for efficient crop sowing, drip irrigation lines, and easy harvesting.",
    features: [
      "Ideal for onion, cotton, groundnut crop beds",
      "Maintains optimal microclimate for seeds",
      "Precision ridge intervals",
      "Saves weeks of manual ridge labor"
    ],
    iconName: "Grid",
  },
  {
    id: "small-tractor",
    title: "Small Tractor Services",
    category: "agriculture",
    description: "Standard light tractors with rotavator, transport trailer, and disc ploughs for day-to-day haulage and standard farm cultivation.",
    features: [
      "Versatile general land preparation",
      "Robust village road transport setups",
      "Equipped with modern mechanical rotavators",
      "Flexible hourly packages for village farmers"
    ],
    iconName: "Layers",
  },
  {
    id: "earth-movers",
    title: "JCB Earth Movers Available",
    category: "agriculture",
    description: "Heavy duty PRM Earth Movers JCB loader (TN 88 H 8077) for farm levelling, pond digging, farm boundary clearance, and loading work.",
    features: [
      "Professional experienced JCB operator",
      "Removing invasive weeds, trees, and shrubs",
      "Ditches and farm canal formation",
      "Rapid loading of agricultural goods & trailer soil"
    ],
    iconName: "Shield",
    tag: "Heavy Duty"
  },

  // Decoration category
  {
    id: "traditional-decor",
    title: "Traditional Village Decoration",
    category: "decoration",
    description: "Authentic, beautiful village setup featuring fresh marigold flower strings, mango leaves, pathar decorations, and ambient illumination.",
    features: [
      "Authentic Tamil village festival themes",
      "Thalampoo, Marigold floral arches",
      "Subtle and radiant banana trunk entries",
      "Heritage village visual identity"
    ],
    iconName: "Palette",
    tag: "Authentic Style"
  },
  {
    id: "low-budget-event",
    title: "Low Budget Event Decoration",
    category: "decoration",
    description: "Elegant, cost-effective decorative solutions tailored specifically to fit your budget for housewarming, birthday parties, and gatherings.",
    features: [
      "No hidden extra costs, absolute transparency",
      "Creative fabric drapes & color backdrops",
      "Clean execution matching local standards",
      "Beautiful look at fraction of city decor prices"
    ],
    iconName: "Sparkles",
    tag: "Budget Friendly"
  },
  {
    id: "chairs-functions",
    title: "Chairs & Tables for Functions",
    category: "decoration",
    description: "Hassle-free supply of premium quality plastic chairs, luxury seatings, dining tables, and seating configurations for events of any size.",
    features: [
      "Sturdy, sanitary clean plastic chairs",
      "Hassle-free delivery right to the venue",
      "Chairs with and without arm rests available",
      "Flexible counts from 50 up to 1000+ chairs"
    ],
    iconName: "Heart",
  },
  {
    id: "village-function-setup",
    title: "Village Function Stage Setup",
    category: "decoration",
    description: "Full stage layout including premium background screens, lighting systems, sound speakers setup, and decorative flower stages.",
    features: [
      "Sturdy stage platforms and backing structures",
      "Traditional and contemporary themes",
      "High-output warm spot-lighting",
      "Stellar backdrop photography frames"
    ],
    iconName: "Tv",
  },
  {
    id: "local-event-support",
    title: "Local Event Support",
    category: "decoration",
    description: "End-to-end ground logistics support for local temple festivals (Thiruvizha), poojas, political events, and agrarian meetings.",
    features: [
      "Complete coordination with local vendors",
      "Special sound system management",
      "Temporary shelters (Pandal / Shamiana) setup",
      "On-call volunteers for emergency support"
    ],
    iconName: "Users",
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sonalika Tractor in Action",
    category: "agriculture",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600",
    description: "Our blue Sonalika village tractor ploughing red rich soil during seedbed preparation near Salem."
  },
  {
    id: "gal-2",
    title: "Traditional Floral Entryway",
    category: "decoration",
    imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=600",
    description: "Beautiful marigold and jasmine decoration setup for a housewarming pooja ceremony in Periyakattur."
  },
  {
    id: "gal-3",
    title: "Deep Soil Rotavator Ploughing",
    category: "agriculture",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
    description: "Land preparation using a premium mechanical rotary tiller with optimal depth adjustment."
  },
  {
    id: "gal-4",
    title: "Festive Village Backdrop",
    category: "decoration",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600",
    description: "Cozy local function stage setup featuring premium colorful organic drapes and customized low-budget lighting."
  },
  {
    id: "gal-5",
    title: "Mini Tractor Grove Cultivation",
    category: "agriculture",
    imageUrl: "https://images.unsplash.com/photo-1533577116850-9cc662ad397b?auto=format&fit=crop&q=80&w=600",
    description: "Our premium compact tractor working perfectly in a tight coconut farming plantation."
  },
  {
    id: "gal-6",
    title: "Community Seating & Chairs Arrangement",
    category: "decoration",
    imageUrl: "https://images.unsplash.com/photo-1532375811409-90b14424126d?auto=format&fit=crop&q=80&w=600",
    description: "Providing pristine clean tables and sturdy seating configurations for a local temple lunch service."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "K. Ramasamy",
    role: "Sugarcane Farmer",
    location: "Mallur, Salem",
    comment: "P.R.M. Services did the land ploughing with their Sonalika tractor on very short notice. The bund making was highly accurate and water does not overflow. Very cheap prices compared to others.",
    rating: 5
  },
  {
    id: "t-2",
    name: "S. Gowtham",
    role: "Local Event Organizer",
    location: "Periyakattur",
    comment: "For our temple function, we rented 250 chairs and a stage backdrop. Their traditional decoration using organic mango leaves and marigolds was perfect. Strongly recommend for low budgets!",
    rating: 5
  },
  {
    id: "t-3",
    name: "M. Thangavel",
    role: "Coconut Grove Owner",
    location: "Veerapandi",
    comment: "I regularly use their mini tractor services for tilling mud around the coconut trees. They drive extremely carefully without hurting tree roots. Honest people.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "What geographical areas do you cover around Salem?",
    answer: "Our primary office is located in Periyakattur, Mallur (Pincode - 636203). We actively serve all farming areas, villages, and venues within 20-25 kilometers, including Salem city margins, Veerapandi, Panamarathupatti, Kakapalayam, and nearby areas."
  },
  {
    question: "How do you calculate chargers for tractor services?",
    answer: "We offer dual options: simple flat hourly pricing or contract basis (per acre) depending on the complexity, soil density, and distance. Please give us a direct call at 6381964771 to get an instant, free estimate."
  },
  {
    question: "Do you supply decorations and chairs for very small family home poojas?",
    answer: "Yes, absolutely! We support everything from large-scale village temple festivals (Thiruvizhas) down to small backyard birthday parties, housewarmings, or infant naming poojas with the same level of care and ultra-affordable pricing."
  },
  {
    question: "How many days in advance should I book decoration services?",
    answer: "For standard local setups, we can activate on a 2-day notice. However, during heavy wedding seasons, harvest times, or village festival periods, we strongly recommend booking 1-2 weeks in advance to secure the prime dates."
  },
  {
    question: "Can I book both JCB Earth Movers and Tractor ploughing together?",
    answer: "Yes! Many local land owners book our JCB loader (TN 88 H 8077) to remove thorns/shrubs or level high ridges, immediately followed by our Sonalika tractor disc plough and seedbed preparation, providing a smooth one-stop-shop transformation."
  }
];
