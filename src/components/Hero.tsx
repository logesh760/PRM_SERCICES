import { Phone, Calendar, ArrowRight, ShieldCheck, Flower, Tractor } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onNavigateToEnquiry: () => void;
}

export default function Hero({ onNavigateToEnquiry }: HeroProps) {
  const { language, t } = useLanguage();

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-slate-50 border-b border-emerald-100">
      {/* Decorative Grid Overlay to fit Bento layout style */}
      <div className="absolute inset-0 bg-[grid_#047857_0.03] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hero Bento Block */}
          <div className="lg:col-span-7 bg-emerald-900 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden text-left shadow-md border border-emerald-950/40" id="hero-headlines">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/60 to-transparent z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800')`
              }}
            />

            <div className="relative z-20 space-y-6">
              <div
                className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 px-3 py-1 rounded-md text-orange-200 text-xs font-bold tracking-wider uppercase"
                id="hero-badge"
              >
                <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span>{language === 'ta' ? '🌾 உள்ளூர் விவசாயத் தொழில்நுட்ப நிபுணர் - சேலம் 636203' : '🌾 LOCAL AGRICULTURAL EXPERT — SALEM PINCODE 636203'}</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-white leading-tight"
                id="hero-title"
              >
                {language === 'ta' ? (
                  <>சிறந்த கிராமிய <br /><span className="text-orange-300">டிராக்டர் உழவு & அலங்கார</span> சேவைகள்</>
                ) : (
                  <>Premium Rural <br /><span className="text-orange-300">Tractor & Decoration</span> Services</>
                )}
              </h1>

              <p
                className="text-sm sm:text-base text-emerald-100/90 max-w-xl font-light leading-relaxed font-sans"
                id="hero-description"
              >
                {language === 'ta' ? (
                  <>பி.ஆர்.எம் சர்வீசஸ் மல்லூர் பகுதிகளில் எங்களது <strong>சோனாலிகா டிராக்டர்கள் மற்றும் ஜேசிபி எந்திரங்களை</strong> கொண்டு அதிநவீன முறையில் உழவுப் பணிகளை மிகச் சிறந்த முறையில் செய்து தருகிறது. அத்துடன் வீட்டு விசேஷங்கள் மற்றும் கோவில் திருவிழாக்களுக்கு உகந்த <strong>குறைந்த பட்ஜெட் பாரம்பரிய அலங்காரங்களையும்</strong> செய்து தருகிறோம்.</>
                ) : (
                  <>P.R.M SERVICES provides premium, high-efficiency agriculture tilling using our robust <strong>Sonalika Tractor & JCB earth movers</strong>. Combined with gorgeous, hand-themed <strong>low-budget traditional decorations</strong> for homes & local temples near Mallur.</>
                )}
              </p>
            </div>

            <div className="relative z-20 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-10" id="hero-cta-group">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center space-x-2 bg-white text-emerald-900 hover:bg-slate-100 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 group"
                id="hero-call-now-btn"
              >
                <Phone className="w-4.5 h-4.5 text-emerald-800 scale-100 group-hover:scale-105 transition-transform shrink-0" />
                <span>{language === 'ta' ? 'உடனே அழைக்கவும்' : 'Call Operator Now'}</span>
              </a>

              <button
                onClick={onNavigateToEnquiry}
                className="flex items-center justify-center space-x-2 bg-emerald-800/80 hover:bg-emerald-700/90 border border-emerald-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition"
                id="hero-enquiry-btn"
              >
                <Calendar className="w-4.5 h-4.5 text-emerald-300 shrink-0" />
                <span>{language === 'ta' ? 'இலவச மதிப்பீடு பெறுக' : 'Book Service Estimate'}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-emerald-300 shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Bento Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6" id="hero-illustrations">
            {/* Quick overview layout card */}
            <div className="bg-white rounded-3xl border border-emerald-100/80 p-8 shadow-xs flex flex-col justify-between text-left relative overflow-hidden">
              <div className="space-y-4">
                <span className="bg-emerald-50 text-emerald-800 text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-widest border border-emerald-100 inline-block">
                  {language === 'ta' ? 'விவசாய உழவு வண்டிகள்' : 'AGRI FLEET PILLAR'}
                </span>
                <h3 className="text-lg font-black text-slate-800 leading-tight">
                  {language === 'ta' ? 'நிலம் உழுதல் & சால் அமைத்தல்' : 'Tractor Ploughing & Bed Formatting'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {language === 'ta' 
                    ? 'தென்னந்தோப்புகள், குறுகிய நிலங்களுக்கு பயனுள்ள மினி கல்டிவேட்டர்கள் மற்றும் ஆழமான உழவு செய்யக்கூடிய டிராக்டர் கலப்பைகள் வசதி கொண்டது.' 
                    : 'Equipped with mini cultivators for tight coconut orchards and heavy-duty disc plows to optimize rich field hydration.'}
                </p>
              </div>

              {/* Mini counters */}
              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-6 mt-6">
                <div className="text-left">
                  <span className="block font-black text-xl text-emerald-700">100%</span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">
                    {language === 'ta' ? 'நம்பகத்தன்மை' : 'Verifiable'}
                  </span>
                </div>
                <div className="text-left border-l border-slate-100 pl-4">
                  <span className="block font-black text-xl text-orange-600">0%</span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">
                    {language === 'ta' ? 'கூடுதல் கட்டணம்' : 'Markups'}
                  </span>
                </div>
                <div className="text-left border-l border-slate-100 pl-4">
                  <span className="block font-black text-xl text-emerald-700">{language === 'ta' ? 'நேரடி' : 'Direct'}</span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">
                    {language === 'ta' ? 'மொபைல் தொடர்பு' : 'Mobile Dial'}
                  </span>
                </div>
              </div>
            </div>

            {/* Traditional Decor Highlight Card */}
            <div className="bg-brand-brown-100/50 rounded-3xl border border-brand-brown-500/10 p-8 shadow-xs flex flex-col justify-between text-left relative overflow-hidden">
              <div className="space-y-4">
                <span className="bg-brand-brown-600 text-white text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-widest inline-block">
                  {language === 'ta' ? 'அலங்காரம் & விழாக்கள்' : 'DECORATION PILLAR'}
                </span>
                <h3 className="text-lg font-black text-brand-brown-700 leading-tight">
                  {language === 'ta' ? 'குறைந்த பட்ஜெட் மேடைப் பலகை' : 'Authentic Rural & Low Budget Event Pandal'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {language === 'ta' 
                    ? 'மாவிலை தோரணங்கள், சாமந்திப்பூ வளைவுகள் மற்றும் சுத்தமான விசேஷ நாற்காலிகளுடன் கூடிய பாரம்பரிய தமிழ் விழா அழகு.' 
                    : 'Traditional Tamil village styles with custom entrance mango drapes, fresh marigold structures, and tidy function chairs.'}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-brand-brown-700">
                <span className="font-semibold flex items-center gap-1.5 text-[11px]">
                  <Flower className="w-4 h-4 text-brand-brown-600 shrink-0" />
                  {language === 'ta' ? 'சிறந்த பட்ஜெட் விழாக்கள்' : 'No.1 Budget Event Support'}
                </span>
                <span className="font-bold underline cursor-pointer" onClick={onNavigateToEnquiry}>
                  {language === 'ta' ? 'விலை விபரம் பெற' : 'Get Price Quote'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
