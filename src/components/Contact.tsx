import { MapPin, Phone, Clock, Mail, Share2, Compass, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();

  const handleShareDetails = () => {
    if (navigator.share) {
      navigator.share({
        title: 'P.R.M SERVICES - Tractor & Decoration Salem',
        text: 'Hire affordable tilling tractors and awesome village decoration configs in Salem Mallur!',
        url: window.location.href,
      }).catch(err => console.log('Error sharing website', err));
    } else {
      // Fallback
      navigator.clipboard.writeText(`P.R.M SERVICES, Phone: ${BUSINESS_INFO.phone}, Location: Periyakattur, Mallur, Salem 636203`);
      alert(language === 'ta' ? "முகவரி விவரங்கள் நகலெடுக்கப்பட்டது!" : "Business contact details copied to clipboard!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded inline-block mb-3">
            {language === 'ta' ? 'எங்கள் இருப்பிடம்' : 'WHERE TO FIND US / GEOGRAPHY'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {language === 'ta' ? 'எங்களது சேவை வழங்கப்படும் பகுதிகள்' : 'Our Mallur-Salem Operating Region'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-xl mx-auto leading-relaxed font-sans">
            {language === 'ta' 
              ? 'நாங்கள் மல்லூர், பெரியகாட்டூர் பகுதியில் இருந்து சேலம், வீரபாண்டி, பனமரத்துப்பட்டி மற்றும் அருகில் உள்ள கிராமங்களுக்கு 25 கி.மீ சுற்றளவு எல்லை வரை உழவு மற்றும் அலங்கார வேலைகள் செய்து தருகிறோம்.' 
              : 'We operate directly from Periyakattur, Mallur, offering agricultural tractor tilling and custom low-budget stage setups in a 25 kilometere diameter covering Salem, Veerapandi, and nearby areas.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="contact-outer-block">
          
          {/* Detail cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="contact-text-cards">
            
            {/* Address Banner Card */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl text-left shadow-xs">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-4 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{language === 'ta' ? 'அலுவலகத் தொடர்பு முகவரி' : 'Our Business Address'}</span>
              </h4>
              
              <div className="space-y-2 font-sans font-light">
                <p className="text-lg font-extrabold text-slate-900 leading-tight">P.R.M SERVICES</p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {language === 'ta' ? (
                    <>பெரியகாட்டூர் கிராமம், மல்லூர் பைபாஸ் அருகில்,<br />
                      சேலம் மாவட்டம், தமிழ்நாடு, இந்தியா.<br />
                      அஞ்சல் குறியீடு: <strong className="font-semibold text-emerald-800 font-mono">636203</strong>
                    </>
                  ) : (
                    <>Periyakattur village, near Mallur Bypass,<br />
                      Salem District, Tamil Nadu, India.<br />
                      Pincode: <strong className="font-semibold text-emerald-800 font-mono">636203</strong>
                    </>
                  )}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium font-sans">
                  {language === 'ta' ? '📌 சரிபார்க்கப்பட்ட இருப்பிடம்' : '📌 Location Ground Verified'}
                </span>
                <button
                  onClick={handleShareDetails}
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-bold flex items-center space-x-1 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{language === 'ta' ? 'முகவரியை பகிர்க' : 'Share Address'}</span>
                </button>
              </div>
            </div>

            {/* Quick Contact metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              
              <div className="bg-slate-50/50 border border-slate-200/80 p-5 rounded-2xl shadow-2xs">
                <Phone className="w-4 h-4 text-emerald-700 mb-2.5" />
                <span className="block text-[10px] uppercase font-bold text-slate-400 font-sans">
                  {language === 'ta' ? 'நேரடி மொபைல் எண்' : 'Mobile Direct'}
                </span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block font-black text-sm text-slate-800 hover:underline mt-0.5 font-mono">
                  6381964771
                </a>
                <span className="text-[10px] text-slate-500 mt-1 block font-sans">
                  {language === 'ta' ? 'உரிமையாளரிடம் பேசுக' : 'Owner Contact Link'}
                </span>
              </div>

              <div className="bg-slate-50/50 border border-slate-200/80 p-5 rounded-2xl shadow-2xs">
                <Clock className="w-4 h-4 text-emerald-700 mb-2.5" />
                <span className="block text-[10px] uppercase font-bold text-slate-400 font-sans">
                  {language === 'ta' ? 'செயலூக்க நேரங்கள்' : 'Active Hours'}
                </span>
                <span className="block font-black text-xs text-slate-800 mt-0.5 leading-snug font-sans">
                  {language === 'ta' ? 'காலை 6:00 - இரவு 9:00 வரை' : BUSINESS_INFO.operatingHours}
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block font-sans">
                  {language === 'ta' ? 'வாரத்தின் 7 நாட்களும்' : 'Open all 7 days'}
                </span>
              </div>

            </div>

            {/* Geo Boundary list */}
            <div className="bg-emerald-50/30 border border-emerald-100 p-6 rounded-3xl text-left">
              <h5 className="font-bold text-[11px] uppercase tracking-wider text-emerald-850 mb-3 flex items-center space-x-1.5 font-sans">
                <Compass className="w-3.5 h-3.5 text-emerald-700" />
                <span>{language === 'ta' ? 'சேவைக்கு உகந்த ஊர்கள்' : 'Operational Service Radius'}</span>
              </h5>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {["Mallur", "Periyakattur", "Salem Core", "Veerapandi", "Panamarathupatti", "Gajjalnaickenpatti", "Kakapalayam", "Kondalampatti"].map((loc, i) => (
                  <span key={i} className="bg-white border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded font-medium shadow-2xs text-[11px] font-sans">
                    📍 {loc}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-3 italic leading-relaxed font-sans">
                {language === 'ta' 
                  ? 'உங்கள் ஊர் மல்லூர், சேலம் சுற்றுவட்டாரப் பகுதியில் இருந்தால், உடனே தொடர்பு கொண்டு டிராக்டர் உழவு அல்லது ஜேசிபி முன்பதிவு செய்யவும்!'
                  : 'If your village lies near Mallur, feel free to submit an Enquiry or Call! We readily mobilize services for field preparations.'}
              </p>
            </div>

          </div>

          {/* Interactive Google Map embed column */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="contact-map-block">
            <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-xs relative bg-slate-50" id="google-map-iframe-container">
              <iframe
                title="P.R.M SERVICES Mallur Salem Google Maps Operational Location"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="gmaps-actual-iframe"
              />
            </div>
            
            {/* Map Action Button */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left font-sans">
              <div className="text-xs text-slate-450 font-medium">
                {language === 'ta' 
                  ? '🗺️ வரைபட இருப்பிடம்: மல்லூர், பெரியகாட்டூர், சேலம் பைபாஸ்' 
                  : '🗺️ Location Pin: Mallur, Periyakattur, Salem bypass (TN)'}
              </div>
              
              <a
                href="https://maps.app.goo.gl/ykuZj9prdZfqpcC46"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition"
                id="maps-mobile-direct-redirect"
              >
                <span>{language === 'ta' ? 'கூகுள் மேப்பில் பார்க்க' : 'Navigate in Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
