import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Star, Award } from 'lucide-react';
import { FAQS, TESTIMONIALS, BUSINESS_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, t } = useLanguage();

  // Dynamic injection of structured local SEO Schema (JSON-LD)
  useEffect(() => {
    const existingSchema = document.getElementById('prm-services-local-business-schema');
    if (!existingSchema) {
      const script = document.createElement('script');
      script.id = 'prm-services-local-business-schema';
      script.type = 'application/ld+json';
      
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": BUSINESS_INFO.name,
        "description": BUSINESS_INFO.description,
        "telephone": "+916381964771",
        "url": window.location.origin,
        "priceRange": "$$",
        "image": "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Periyakattur, Mallur bypass",
          "addressLocality": "Salem",
          "addressRegion": "Tamil Nadu",
          "postalCode": BUSINESS_INFO.pincode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.5594981",
          "longitude": "78.1189441"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "06:00",
          "closes": "21:00"
        }
      };

      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="faq" className="py-20 bg-slate-50 relative border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Layout for Testimonials and FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="faq-reviews-grid">
          
          {/* Reviews column */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200/60 shadow-xs space-y-6 text-left" id="faq-testimonials-side">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded mb-3 inline-block">
                {language === 'ta' ? 'விவசாயிகளின் கருத்துக்கள்' : 'AGRARIAN REVIEWS'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {language === 'ta' ? 'விவசாயிகளின் முழு நம்பிக்கை' : 'Trusted by Local Farmers & Families'}
              </h3>
              <p className="text-xs text-slate-500 mt-2 font-sans">
                {language === 'ta' 
                  ? 'மல்லூர், சேலம் சுற்றுவட்டாரப் பகுதி விவசாயப் பெருமக்கள் மற்றும் விசேஷத் தேவையாளர்கள் பகிர்ந்த உண்மையான கருத்துக்கள்:' 
                  : 'P.R.M SERVICES lives by customer word of mouth. Real experience logs from local coconut farmers and wedding organizers:'}
              </p>
            </div>

            <div className="space-y-4" id="testimonials-list">
              {TESTIMONIALS.map((review) => (
                <div key={review.id} className="bg-slate-50 p-5 rounded-2xl border border-slate-150 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider flex items-center space-x-1 border border-slate-200 bg-white px-2 py-0.5 rounded">
                      <Award className="w-3 h-3 text-emerald-700 shrink-0" />
                      <span>{language === 'ta' && review.locationTa ? review.locationTa : review.location}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-light italic font-sans">
                    "{language === 'ta' && review.commentTa ? review.commentTa : review.comment}"
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-slate-800">
                      {language === 'ta' && review.nameTa ? review.nameTa : review.name}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {language === 'ta' && review.roleTa ? review.roleTa : review.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion FAQ column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200/60 shadow-xs space-y-6 text-left" id="faq-accordion-side">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded mb-3 inline-block">
                {language === 'ta' ? 'உதவி மையம்' : 'HELP & SUPPORT CENTER'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Village Questions'}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-2 font-sans">
                {language === 'ta' 
                  ? 'எங்கள் சேவைகளின் விவரங்கள், விலைக் கட்டண மதிப்பீடுகள் மற்றும் செயல்பாடுகள் பற்றிய எளிய விளக்கங்கள்:' 
                  : 'We believe in 100% transparency. Here are honest answers regarding rates, fuel dispatch, and venue preparations:'}
              </p>
            </div>

            <div className="space-y-3" id="questions-accordion">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-2xl overflow-hidden transition-all ${
                      isOpen ? 'border-emerald-500/20 bg-emerald-50/10' : 'border-slate-150 bg-white shadow-xs'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50/55 transition"
                    >
                      <span className="font-bold text-xs sm:text-sm text-slate-800 pr-4 flex items-center space-x-2">
                        <span className="text-emerald-700 font-mono text-sm shrink-0">0{index + 1}.</span>
                        <span className="leading-tight">{language === 'ta' && faq.questionTa ? faq.questionTa : faq.question}</span>
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-emerald-850 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-slate-100 bg-slate-50/40"
                        >
                          <div className="px-5 py-4 text-xs text-slate-600 leading-relaxed font-normal font-sans">
                            {language === 'ta' && faq.answerTa ? faq.answerTa : faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
