import { Tractor, CalendarCheck, Phone, Mail, MapPin, Building, Globe, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onNavigateToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  const handleLinkClick = (id: string) => {
    onNavigateToSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: language === 'ta' ? 'முகப்புத் திரை' : 'Home Landing Screen', id: 'home' },
    { name: language === 'ta' ? 'டிராக்டர் உழுவை சேவைகள்' : 'Agriculture tractor fleet', id: 'services' },
    { name: language === 'ta' ? 'அலங்கார புகைப்படத் தொகுப்பு' : 'Our Recent decor Gallery', id: 'gallery' },
    { name: language === 'ta' ? 'கேள்விகள் & பதில்கள்' : 'Common FAQs & Rates', id: 'faq' },
    { name: language === 'ta' ? 'இருப்பிடம் & முகவரி' : 'Location Coordinates', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden" id="prm-services-main-footer">
      <div className="absolute inset-0 bg-[grid_#fff_0.02] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-1 lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="bg-slate-900 text-white p-2 rounded-xl border border-slate-800">
                <Tractor className="w-4 h-4 text-emerald-400 font-sans" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white uppercase font-sans">
                P.R.M <span className="text-emerald-500 font-sans">SERVICES</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light font-sans">
              {language === 'ta'
                ? 'நாங்கள் மல்லூர், சேலம் சுற்றுவட்டாரப் பகுதியில் சோனாலிகா டிராக்டர் கொண்டு மலிவான விலையில் உழவுப்பணிகள், ஜேசிபி மண் வேலைகள் மற்றும் விசேஷங்களுக்கு குறைந்த பட்ஜெட்டில் பாரம்பரிய பந்தல், நாற்காலிகள் மற்றும் மேடை அலங்காரம் செய்து தருகிறோம்.'
                : 'We specialize in affordable Sonalika tractor cultivation, mini tilling, and JCB earth moving jobs near Salem Mallur, alongside gorgeous, low-budget decorative setups for your household functions.'}
            </p>

            {/* Micro badges for trust */}
            <div className="flex flex-wrap gap-2 pt-2 font-sans">
              <span className="bg-slate-900/80 border border-slate-800 px-2.5 py-0.5 rounded text-[10px] font-semibold text-slate-300 flex items-center space-x-1">
                <Shield className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>{language === 'ta' ? '100% உரிமம் பெற்ற ஆபரேட்டர்' : '100% Licensed Operator'}</span>
              </span>
              <span className="bg-slate-900/80 border border-slate-800 px-2.5 py-0.5 rounded text-[10px] font-semibold text-slate-300 flex items-center space-x-1 font-sans">
                <Building className="w-3 h-3 text-emerald-400" />
                <span>{language === 'ta' ? 'பெரியகாட்டூர் பதிவுபெற்றது' : 'Periyakattur Registered'}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2 font-sans">
              {language === 'ta' ? 'முக்கிய இணைப்புகள்' : 'Explore Services'}
            </p>
            <nav className="flex flex-col space-y-2.5" id="footer-navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-xs text-slate-400 hover:text-emerald-400 transition text-left font-medium block cursor-pointer font-sans"
                  id={`footer-link-${link.id}`}
                >
                  ➜ {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Regional contact metadata */}
          <div className="md:col-span-1 lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2 font-sans">
              {language === 'ta' ? 'தொடர்பு முகவரி' : 'Operational Office Info'}
            </p>
            <div className="space-y-3 text-xs text-slate-400 font-medium">
              <div className="flex items-start space-x-2.5 font-sans">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {language === 'ta'
                    ? 'பெரியகாட்டூர் கிராமம், மல்லூர், சேலம் மாவட்டம், தமிழ்நாடு, 636203'
                    : 'Periyakattur village, Mallur, Salem District, Tamil Nadu, 636203'}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline hover:text-white font-mono text-xs">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl font-sans">
                <span className="block font-bold text-[9px] text-emerald-400 uppercase tracking-widest">
                  {language === 'ta' ? 'தொடர்பு கொள்ள உகந்த நேரம்' : 'Active Fleet Hours'}
                </span>
                <span className="block text-xs mt-0.5 text-slate-300 font-light font-mono">
                  {language === 'ta' ? 'காலை 6:00 - இரவு 9:00 வரை' : BUSINESS_INFO.operatingHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Banner: SEO sitemap-ready specs & Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-sans">
          <div className="space-y-1.5 text-center md:text-left">
            <p>© {currentYear} <strong>{BUSINESS_INFO.name}</strong>. {language === 'ta' ? 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' : 'All rights reserved.'}</p>
            <p className="text-[10px] text-slate-650 font-sans">
              {language === 'ta'
                ? 'சேலம், மல்லூர், பெரியகாட்டூர் வட்டாரப் பகுதியில் கூகுள் லோக்கல் தேடல்களுக்கு உகந்த உழவுத்தள பக்கம்.'
                : 'SEO Optimized for Google Local Business search algorithms in Salem, Mallur, Tamil Nadu under pincode 636203.'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-slate-600 font-medium">
            <span>Sitemap.xml Compatible</span>
            <span>Robots.txt Ready</span>
            <span className="text-emerald-500/80">
              {language === 'ta' ? '✔ மொபைலில் சரியாக இயங்கும் பக்கம்' : '✔ Mobile Responsive Core Web Vitals'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
