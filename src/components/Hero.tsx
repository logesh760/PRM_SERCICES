import { Phone, Calendar, ArrowRight, ShieldCheck, Flower, Tractor } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  onNavigateToEnquiry: () => void;
}

export default function Hero({ onNavigateToEnquiry }: HeroProps) {
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
                <span>🌾 LOCAL AGRICULTURAL EXPERT — SALEM PINCODE 636203</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
                id="hero-title"
              >
                Premium Rural <br /><span className="text-orange-300">Tractor & Decoration</span> Services
              </h1>

              <p
                className="text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-xl font-light leading-relaxed"
                id="hero-description"
              >
                P.R.M SERVICES provides premium, high-efficiency agriculture tilling using our robust <strong>Sonalika Tractor & JCB earth movers</strong>. Combined with gorgeous, hand-themed <strong>low-budget traditional decorations</strong> for homes & local temples near Mallur.
              </p>
            </div>

            <div className="relative z-20 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-10" id="hero-cta-group">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center space-x-2 bg-white text-emerald-900 hover:bg-slate-100 font-extrabold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-200 group"
                id="hero-call-now-btn"
              >
                <Phone className="w-5 h-5 text-emerald-800 scale-100 group-hover:scale-105 transition-transform" />
                <span>Call Operator Now</span>
              </a>

              <button
                onClick={onNavigateToEnquiry}
                className="flex items-center justify-center space-x-2 bg-emerald-800/80 hover:bg-emerald-700/90 border border-emerald-600 text-white font-bold text-base px-8 py-4 rounded-xl transition"
                id="hero-enquiry-btn"
              >
                <Calendar className="w-5 h-5 text-emerald-300" />
                <span>Book Service Estimate</span>
                <ArrowRight className="w-4 h-4 ml-1 text-emerald-300" />
              </button>
            </div>
          </div>

          {/* Right Bento Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6" id="hero-illustrations">
            {/* Quick overview layout card */}
            <div className="bg-white rounded-3xl border border-emerald-100/80 p-8 shadow-xs flex flex-col justify-between text-left relative overflow-hidden">
              <div className="space-y-4">
                <span className="bg-emerald-50 text-emerald-800 text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-widest border border-emerald-100 inline-block">
                  AGRI FLEET PILLAR
                </span>
                <h3 className="text-xl font-black text-slate-800 leading-tight">
                  Tractor Ploughing & Bed Formatting
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Equipped with mini cultivators for tight coconut orchards and heavy-duty disc plows to optimize rich field hydration.
                </p>
              </div>

              {/* Mini counters */}
              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-6 mt-6">
                <div className="text-left">
                  <span className="block font-black text-xl text-emerald-700">100%</span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Verifiable</span>
                </div>
                <div className="text-left border-l border-slate-100 pl-4">
                  <span className="block font-black text-xl text-orange-600">0%</span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Markups</span>
                </div>
                <div className="text-left border-l border-slate-100 pl-4">
                  <span className="block font-black text-xl text-emerald-700">Direct</span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">Mobile Dial</span>
                </div>
              </div>
            </div>

            {/* Traditional Decor Highlight Card */}
            <div className="bg-brand-brown-100/50 rounded-3xl border border-brand-brown-500/10 p-8 shadow-xs flex flex-col justify-between text-left relative overflow-hidden">
              <div className="space-y-4">
                <span className="bg-brand-brown-600 text-white text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-widest inline-block">
                  DECORATION PILLAR
                </span>
                <h3 className="text-xl font-black text-brand-brown-700 leading-tight">
                  Authentic Rural & Low Budget Event Pandal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Traditional Tamil village styles with custom entrance mango drapes, fresh marigold structures, and tidy function chairs.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-brand-brown-700">
                <span className="font-semibold flex items-center gap-1.5">
                  <Flower className="w-4 h-4 text-brand-brown-600" />
                  No.1 Budget Event Support
                </span>
                <span className="font-bold underline cursor-pointer" onClick={onNavigateToEnquiry}>
                  Get Price Quote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
