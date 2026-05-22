import { MapPin, Phone, Clock, Mail, Share2, Compass, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
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
      alert("Business contact details copied to clipboard!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded inline-block mb-3">
            WHERE TO FIND US / GEOGRAPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Our Mallur-Salem Operating Region
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-xl mx-auto leading-relaxed">
            We operate directly from Periyakattur, Mallur, offering agricultural tractor tilling and custom low-budget stage setups in a 25 kilometere diameter covering Salem, Veerapandi, and nearby areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="contact-outer-block">
          
          {/* Detail cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="contact-text-cards">
            
            {/* Address Banner Card */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl text-left shadow-xs">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-4 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Our Business Address</span>
              </h4>
              
              <div className="space-y-2">
                <p className="text-lg font-extrabold text-slate-900 leading-tight">P.R.M SERVICES</p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Periyakattur village, near Mallur Bypass,<br />
                  Salem District, Tamil Nadu, India.<br />
                  Pincode: <strong className="font-semibold text-emerald-800 font-mono">636203</strong>
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium font-sans">📌 Location Ground Verified</span>
                <button
                  onClick={handleShareDetails}
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-bold flex items-center space-x-1"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Address</span>
                </button>
              </div>
            </div>

            {/* Quick Contact metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              
              <div className="bg-slate-50/50 border border-slate-200/80 p-5 rounded-2xl shadow-2xs">
                <Phone className="w-4 h-4 text-emerald-700 mb-2.5" />
                <span className="block text-[10px] uppercase font-bold text-slate-400">Mobile Direct</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block font-black text-sm text-slate-800 hover:underline mt-0.5">
                  6381964771
                </a>
                <span className="text-[10px] text-slate-500 mt-1 block">Owner Contact Link</span>
              </div>

              <div className="bg-slate-50/50 border border-slate-200/80 p-5 rounded-2xl shadow-2xs">
                <Clock className="w-4 h-4 text-emerald-700 mb-2.5" />
                <span className="block text-[10px] uppercase font-bold text-slate-400">Active Hours</span>
                <span className="block font-black text-xs text-slate-800 mt-0.5 leading-snug">
                  {BUSINESS_INFO.operatingHours}
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block">Open all 7 days</span>
              </div>

            </div>

            {/* Geo Boundary list */}
            <div className="bg-emerald-50/30 border border-emerald-100 p-6 rounded-3xl text-left">
              <h5 className="font-bold text-[11px] uppercase tracking-wider text-emerald-850 mb-3 flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-700" />
                <span>Operational Service Radius</span>
              </h5>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {["Mallur", "Periyakattur", "Salem Core", "Veerapandi", "Panamarathupatti", "Gajjalnaickenpatti", "Kakapalayam", "Kondalampatti"].map((loc, i) => (
                  <span key={i} className="bg-white border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded font-medium shadow-2xs text-[11px]">
                    📍 {loc}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-3 italic leading-relaxed">
                If your village lies near Mallur, feel free to submit an Enquiry or Call! We readily mobilize services for field preparations.
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
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="text-xs text-slate-405 font-medium">
                🗺️ Location Pin: Mallur, Periyakattur, Salem bypass (TN)
              </div>
              
              <a
                href="https://maps.app.goo.gl/ykuZj9prdZfqpcC46"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition"
                id="maps-mobile-direct-redirect"
              >
                <span>Navigate in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
