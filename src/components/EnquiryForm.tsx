import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, PhoneCall, CheckCircle, Clock, Trash2, ShieldCheck, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';
import { Enquiry } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface EnquiryFormProps {
  prefilledService: string;
  onClearPrefill: () => void;
}

export default function EnquiryForm({ prefilledService, onClearPrefill }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Land Ploughing');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Periyakattur');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEnquiries, setSubmittedEnquiries] = useState<Enquiry[]>([]);
  const { language, t } = useLanguage();

  // Sync Prefill when it gets passed from parent
  useEffect(() => {
    if (prefilledService) {
      setServiceType(prefilledService);
    }
  }, [prefilledService]);

  // Load existing enquiries from localStorage
  useEffect(() => {
    const local = localStorage.getItem('prm_enquiries');
    if (local) {
      try {
        setSubmittedEnquiries(JSON.parse(local));
      } catch (e) {
        console.error("Could not parse previous local enquiries", e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const newEnquiry: Enquiry = {
      id: "enq-" + Date.now(),
      name,
      phone,
      serviceType,
      date: date || new Date().toISOString().split('T')[0],
      location,
      message,
      status: 'new',
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    };

    const updated = [newEnquiry, ...submittedEnquiries];
    setSubmittedEnquiries(updated);
    localStorage.setItem('prm_enquiries', JSON.stringify(updated));

    // Clear Form fields
    setName('');
    setPhone('');
    setDate('');
    setMessage('');
    setIsSubmitted(true);
    onClearPrefill(); // clear the parent selection state

    // Automatically dismiss success banner after 8 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  };

  const handleDeleteEnquiry = (id: string) => {
    const filtered = submittedEnquiries.filter(item => item.id !== id);
    setSubmittedEnquiries(filtered);
    localStorage.setItem('prm_enquiries', JSON.stringify(filtered));
  };

  return (
    <section id="enquiry" className="py-20 bg-slate-50 border-b border-emerald-100 relative">
      <div className="absolute inset-0 bg-[grid_#047857_0.02] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Information Column */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200/60 shadow-xs space-y-6 text-left" id="enquiry-info-column">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded inline-block mb-3">
                {language === 'ta' ? 'இலவச விலைக் கணிப்பு' : 'INSTANT QUOTATION ESTIMATES'}
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {language === 'ta' ? 'விபரங்களை அனுப்பி 15 நிமிடத்தில் கட்டண விபரம் பெறுக' : 'Get Your Service Estimate in 15 Mins'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-505 mt-3 leading-relaxed font-sans">
                {language === 'ta' 
                  ? 'உங்களது உழவு நிலம் இருக்கும் கிராமம் மற்றும் தேவையான அலங்கார வேலைகளை கீழே பூர்த்தி செய்து அனுப்பவும். எங்களது ஆபரேட்டர் உடனடியாக உங்களைத் தொடர்புகொண்டு மிகச் சரியான விலைக் கணிப்பை வழங்குவார்.' 
                  : 'Fill out this quick enquiry with your specific village location near Mallur. Whether you are looking for tractor tilling patterns, JCB earthmover bookings, or function setup chair rentals, we respond with absolute clarity.'}
              </p>
            </div>

            <div className="space-y-4 pt-2 font-sans">
              <div className="flex items-start space-x-3.5 p-4 bg-slate-50 rounded-2xl border border-slate-150">
                <div className="p-2.5 bg-emerald-800 text-white rounded-xl">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">
                    {language === 'ta' ? 'நேரடி ஆபரேட்டர் தொடர்பு' : 'Direct Dial Operator'}
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 mt-1 font-mono">📞 6381964771</p>
                  <p className="text-[11px] text-slate-500 font-light">
                    {language === 'ta' ? 'காலை 6:00 மணி முதல் இரவு 9:00 மணிக்குள் அழைக்கலாம்' : 'Call anytime between 6:00 AM - 9:00 PM'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 bg-slate-50 rounded-2xl border border-slate-150">
                <div className="p-2.5 bg-brand-brown-600 text-white rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">
                    {language === 'ta' ? 'உறுதி செய்யப்பட்ட உழவுச் சேவை' : 'Verified Land Servicing'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                    {language === 'ta' 
                      ? 'மல்லூர், பெரியகாட்டூர் மற்றும் சேலம் மாவட்டம் முழுதும் உழவுப்பணிகள் வழங்கப்படுகிறது (குறியீடு: 636203)' 
                      : 'Serving Mallur, Salem District & Periyakattur neighborhoods (Pincode: 636203)'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-xs text-slate-600 font-sans">
              <p className="font-semibold text-emerald-800 mb-1 flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>{language === 'ta' ? 'உடனடி பதில் வேண்டுமா?' : 'Need immediate response?'}</span>
              </p>
              {language === 'ta' 
                ? 'வலது கீழ் பகுதியில் உள்ள வாட்ஸ்அப் பட்டனை கிளிக் செய்து உரிமையாளருடன் நேரடியாக அரட்டையடிக்கலாம்.' 
                : 'Please use the floating green WhatsApp widget on the bottom right of the page to chat with the business owner directly via mobile.'}
            </div>
          </div>

          {/* Form Block and Bookings status panel */}
          <div className="lg:col-span-7 space-y-8" id="enquiry-elements">
            
            {/* Real Submission confirmation notice */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-2xl text-left shadow relative font-sans"
                >
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="absolute top-3 right-3 text-emerald-500 hover:text-emerald-700 text-xs font-bold shrink-0 cursor-pointer"
                  >
                    {language === 'ta' ? '✕ நீக்குக' : '✕ Dismiss'}
                  </button>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold text-sm">{language === 'ta' ? 'முன்பதிவு வெற்றிகரமாகப் பதியப்பட்டது!' : 'Request Logged & Dispatched!'}</p>
                      <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                        {language === 'ta' 
                          ? 'தங்கள் விவரங்களைப் பெற்றுக்கொண்டோம். ஆபரேட்டர் விரைவாக விபரங்களுடன் உங்களைத் தொடர்புகொள்வார். தங்களின் வினவல் கீழே உள்ள "எனது வினவல்கள்" பிரிவில் பதிவு செய்யப்பட்டுள்ளது.' 
                          : 'We have received your details. The operator will contact you shortly. Your request has also been stored locally below under "My Enquiries".'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xs p-6 sm:p-10 text-left">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between font-sans">
                <span>{language === 'ta' ? '📋 சேவை முன்பதிவுப் படிவம்' : '📋 Service Booking Form'}</span>
                {prefilledService && (
                  <span className="bg-brand-brown-100 border border-brand-brown-600/20 text-brand-brown-700 text-[10px] uppercase font-bold px-3 py-1 rounded">
                    {language === 'ta' ? `தேர்வு: ${prefilledService}` : `Selected: ${prefilledService}`}
                  </span>
                )}
              </h4>

              <form onSubmit={handleSubmit} className="space-y-5" id="prm-booking-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="customer-name" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-sans">
                      {language === 'ta' ? 'உங்கள் பெயர்' : 'Your Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      required
                      placeholder={language === 'ta' ? 'எ.கா. ரமேஷ் குமார்' : 'e.g. Ramesh Kumar'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 transition outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="customer-phone" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-sans">
                      {language === 'ta' ? 'தொலைபேசி எண்' : 'Phone Number'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 transition outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service-type" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-sans">
                      {language === 'ta' ? 'தேவையான சேவை வகை' : 'Select Required Service'}
                    </label>
                    <select
                      id="service-type"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-700 transition outline-none font-sans"
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>
                          {language === 'ta' && s.titleTa ? s.titleTa : s.title} ({s.category === 'agriculture' ? (language === 'ta' ? 'டிராக்டர்' : 'Tractor') : (language === 'ta' ? 'அலங்காரம்' : 'Decor')})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service-date" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-sans">
                      {language === 'ta' ? 'விருப்பமான தேதி' : 'Preferred Date'}
                    </label>
                    <input
                      id="service-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-700 transition outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label htmlFor="service-location" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-sans">
                      {language === 'ta' ? 'உங்கள் கிராமம் / வார்டு' : 'Your Village / Delivery Location'}
                    </label>
                    <select
                      id="service-location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-700 transition outline-none font-sans"
                    >
                      <option value="Periyakattur">{language === 'ta' ? 'பெரியகாட்டூர்' : 'Periyakattur'}</option>
                      <option value="Mallur">{language === 'ta' ? 'மல்லூர்' : 'Mallur'}</option>
                      <option value="Salem">{language === 'ta' ? 'சேலம் நகரம்' : 'Salem City Limits'}</option>
                      <option value="Veerapandi">{language === 'ta' ? 'வீரபாண்டி' : 'Veerapandi'}</option>
                      <option value="Panamarathupatti">{language === 'ta' ? 'பனமரத்துப்பட்டி' : 'Panamarathupatti'}</option>
                      <option value="Kakapalayam">{language === 'ta' ? 'காக்காபாளையம்' : 'Kakapalayam'}</option>
                      <option value="Other">{language === 'ta' ? 'மற்ற கிராமங்கள்' : 'Other nearby village'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="customer-message" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-sans">
                    {language === 'ta' ? 'கூடுதலாகத் தேவைப்படும் விபரங்கள் (தேவையெனில்)' : 'Extra instructions / details (Optional)'}
                  </label>
                  <textarea
                    id="customer-message"
                    rows={3}
                    placeholder={language === 'ta' ? 'எ.கா. உழவ வேண்டிய ஏக்கர் அளவு / நாற்காலிகள் எண்ணிக்கை / பந்தல் அலங்கார மாடல்கள்...' : 'e.g. Acre count for weeding / Number of plastic chairs required / Floral theme preferences...'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 text-sm text-slate-800 transition outline-none p-3.5 font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold text-base py-4 rounded-xl shadow transition flex items-center justify-center space-x-2 cursor-pointer font-sans"
                  >
                    <Send className="w-5 h-5 text-emerald-100 shrink-0" />
                    <span>{language === 'ta' ? 'முன்பதிவுப் படிவத்தை அனுப்பவும்' : 'Send Secure Enquiry'}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Simulated Live Bookings Board */}
            {submittedEnquiries.length > 0 && (
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 text-left shadow-xs">
                <div className="flex items-center justify-between mb-5 font-sans">
                  <h5 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-800 flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-emerald-750 shrink-0" />
                    <span>{language === 'ta' ? `எனது வினவல்கள் (${submittedEnquiries.length})` : `My Enquiries (${submittedEnquiries.length})`}</span>
                  </h5>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider border border-slate-100 bg-slate-50/50 px-2 py-0.5 rounded">
                    {language === 'ta' ? 'உள்ளூர் உலாவியில் சேமிக்கப்பட்டுள்ளது' : 'Saved Locally in Browser'}
                  </span>
                </div>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-2" id="user-booking-tracker-list">
                  {submittedEnquiries.map((enq) => (
                    <div key={enq.id} className="p-4 rounded-2xl border border-slate-150 bg-slate-50 hover:bg-slate-100/50 transition flex items-start justify-between gap-3 text-xs font-sans">
                      <div className="space-y-1.5 text-left">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-black text-slate-900 capitalize">{enq.name}</span>
                          <span className="font-mono text-slate-500">({enq.phone})</span>
                          <span className="bg-blue-100 border border-blue-200 text-blue-700 px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider">
                            {enq.status === 'new' ? (language === 'ta' ? 'பரிசீலனையில்' : 'Processing') : enq.status}
                          </span>
                        </div>
                        <p className="text-slate-600 font-medium leading-relaxed">
                          {language === 'ta' ? (
                            <span>🛠️ கேட்கப்பட்ட சேவை: <strong className="text-emerald-800 font-semibold">{enq.serviceType}</strong>, நாள் <strong className="text-emerald-800 font-semibold">{enq.date}</strong>, இடம் <strong className="text-emerald-800 font-semibold">{enq.location}</strong></span>
                          ) : (
                            <span>🛠️ Requested: <strong className="text-emerald-800 font-semibold">{enq.serviceType}</strong> on <strong className="text-emerald-800 font-semibold">{enq.date}</strong> at <strong className="text-emerald-800 font-semibold">{enq.location}</strong></span>
                          )}
                        </p>
                        {enq.message && (
                          <p className="text-xs text-slate-550 italic mt-1 bg-white p-2.5 rounded border border-slate-150">" {enq.message} "</p>
                        )}
                        <span className="block text-[10px] text-slate-400 font-light font-mono mt-1">
                          {language === 'ta' ? `சமர்ப்பிக்கப்பட்ட நேரம்: ${enq.createdAt}` : `Submitted at ${enq.createdAt}`}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => handleDeleteEnquiry(enq.id)}
                        className="p-2 text-slate-400 hover:text-red-650 hover:bg-red-50 rounded-xl transition shrink-0 cursor-pointer"
                        title={language === 'ta' ? 'பதிவை நீக்குக' : 'Remove logged request'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
