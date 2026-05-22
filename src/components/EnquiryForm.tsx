import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, PhoneCall, CheckCircle, Clock, Trash2, ShieldCheck, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';
import { Enquiry } from '../types';

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
                INSTANT QUOTATION ESTIMATES
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Get Your Service Estimate in 15 Mins
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
                Fill out this quick enquiry with your specific village location near Mallur. Whether you are looking for tractor tilling patterns, JCB earthmover bookings, or function setup chair rentals, we respond with absolute clarity.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5 p-4 bg-slate-50 rounded-2xl border border-slate-150">
                <div className="p-2.5 bg-emerald-800 text-white rounded-xl">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Direct Dial Operator</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-1">📞 6381964771 (Owner Direct)</p>
                  <p className="text-[11px] text-slate-500 font-light">Call anytime between 6:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 bg-slate-50 rounded-2xl border border-slate-150">
                <div className="p-2.5 bg-brand-brown-600 text-white rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Verified Land Servicing</h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">Serving Mallur, Salem District & Periyakattur neighborhoods (Pincode: 636203)</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-xs text-slate-600">
              <p className="font-semibold text-emerald-800 mb-1 flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>Need immediate response?</span>
              </p>
              Please use the floating green WhatsApp widget on the bottom right of the page to chat with the business owner directly via mobile.
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
                  className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-2xl text-left shadow relative"
                >
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="absolute top-3 right-3 text-emerald-500 hover:text-emerald-700 text-xs font-bold"
                  >
                    ✕ Dismiss
                  </button>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold text-sm">Request Logged & Dispatched!</p>
                      <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                        We have received your details. The operator will contact you shortly. Your request has also been stored locally below under <strong>"My Enquiries"</strong>.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xs p-6 sm:p-10 text-left">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
                <span>📋 Service Booking Form</span>
                {prefilledService && (
                  <span className="bg-brand-brown-100 border border-brand-brown-600/20 text-brand-brown-700 text-[10px] uppercase font-bold px-3 py-1 rounded">
                    Selected: {prefilledService}
                  </span>
                )}
              </h4>

              <form onSubmit={handleSubmit} className="space-y-5" id="prm-booking-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="customer-name" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 transition outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="customer-phone" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="e.g. 9876543210 (10 digits)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 transition outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service-type" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                      Select Required Service
                    </label>
                    <select
                      id="service-type"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-705 transition outline-none"
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title} ({s.category === 'agriculture' ? 'Tractor' : 'Decor'})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service-date" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                      Preferred Date
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
                    <label htmlFor="service-location" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                      Your Village / Delivery Location
                    </label>
                    <select
                      id="service-location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-700 transition outline-none"
                    >
                      <option value="Periyakattur">Periyakattur</option>
                      <option value="Mallur">Mallur</option>
                      <option value="Salem">Salem City Limits</option>
                      <option value="Veerapandi">Veerapandi</option>
                      <option value="Panamarathupatti">Panamarathupatti</option>
                      <option value="Kakapalayam">Kakapalayam</option>
                      <option value="Other">Other nearby village</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="customer-message" className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                    Extra instructions / details (Optional)
                  </label>
                  <textarea
                    id="customer-message"
                    rows={3}
                    placeholder="e.g. Acre count for weeding / Number of plastic chairs required / Floral theme preferences..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-emerald-600 focus:bg-white rounded-xl px-4 text-sm text-slate-800 transition outline-none p-3.5"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold text-base py-4 rounded-xl shadow transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-emerald-100" />
                    <span>Send Secure Enquiry</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Simulated Live Bookings Board Board */}
            {submittedEnquiries.length > 0 && (
              <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 text-left shadow-xs">
                <div className="flex items-center justify-between mb-5">
                  <h5 className="font-extrabold text-sm uppercase tracking-wider text-slate-800 flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-emerald-750" />
                    <span>My Enquiries ({submittedEnquiries.length})</span>
                  </h5>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Saved Locally in Browser</span>
                </div>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-2" id="user-booking-tracker-list">
                  {submittedEnquiries.map((enq) => (
                    <div key={enq.id} className="p-4 rounded-2xl border border-slate-150 bg-slate-50 hover:bg-slate-100/50 transition flex items-start justify-between gap-3 text-xs">
                      <div className="space-y-1.5 text-left">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-black text-slate-900 capitalize">{enq.name}</span>
                          <span className="font-mono text-slate-500">({enq.phone})</span>
                          <span className="bg-blue-100 border border-blue-200 text-blue-700 px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider">
                            {enq.status === 'new' ? 'Processing' : enq.status}
                          </span>
                        </div>
                        <p className="text-slate-650 font-medium leading-relaxed">
                          🛠️ Requested: <strong className="text-emerald-800 font-semibold">{enq.serviceType}</strong> on <strong className="text-emerald-800 font-semibold">{enq.date}</strong> at <strong className="text-emerald-800 font-semibold">{enq.location}</strong>
                        </p>
                        {enq.message && (
                          <p className="text-xs text-slate-550 italic mt-1 bg-white p-2.5 rounded border border-slate-150">" {enq.message} "</p>
                        )}
                        <span className="block text-[10px] text-slate-400 font-light font-mono mt-1">Submitted at {enq.createdAt}</span>
                      </div>
                      
                      <button
                        onClick={() => handleDeleteEnquiry(enq.id)}
                        className="p-2 text-slate-400 hover:text-red-650 hover:bg-red-50 rounded-xl transition shrink-0"
                        title="Remove logged request"
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
