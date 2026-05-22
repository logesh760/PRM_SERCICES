import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Tractor,
  Compass,
  Maximize,
  Grid,
  Layers,
  Shield,
  Palette,
  Sparkles,
  Heart,
  Tv,
  Users,
  CheckCircle,
  Phone,
  Bookmark
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForEnquiry }: ServicesProps) {
  const [filterCategory, setFilterCategory] = useState<'all' | 'agriculture' | 'decoration'>('all');

  const filteredServices = SERVICES.filter(service => {
    if (filterCategory === 'all') return true;
    return service.category === filterCategory;
  });

  // Map iconName string to actual Lucide component
  const resolveIcon = (name: string, className: string) => {
    switch (name) {
      case 'Tractor': return <Tractor className={className} id="icon-tractor" />;
      case 'Compass': return <Compass className={className} id="icon-compass" />;
      case 'Maximize': return <Maximize className={className} id="icon-maximize" />;
      case 'Grid': return <Grid className={className} id="icon-grid" />;
      case 'Layers': return <Layers className={className} id="icon-layers" />;
      case 'Shield': return <Shield className={className} id="icon-shield" />;
      case 'Palette': return <Palette className={className} id="icon-palette" />;
      case 'Sparkles': return <Sparkles className={className} id="icon-sparkles" />;
      case 'Heart': return <Heart className={className} id="icon-heart" />;
      case 'Tv': return <Tv className={className} id="icon-tv" />;
      case 'Users': return <Users className={className} id="icon-users" />;
      default: return <Tractor className={className} id="icon-default" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative border-b border-emerald-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-md mb-3 inline-block">
            ACTIVE REGIONAL OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Professional Agriculture Fleet & Decoration Packages
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Providing Salem farmers, local village organizers, and temple committees with affordable, highly efficient land tilling patterns and traditional Tamil festivity setups.
          </p>
        </div>

        {/* Tab Filters styled like a Bento toolbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white p-2 rounded-2xl border border-slate-200/60 max-w-2xl mx-auto" id="services-filter-tabs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition ${
              filterCategory === 'all'
                ? 'bg-emerald-900 text-white shadow'
                : 'bg-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({SERVICES.length})
          </button>
          
          <button
            onClick={() => setFilterCategory('agriculture')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition flex items-center space-x-2 ${
              filterCategory === 'agriculture'
                ? 'bg-emerald-800 text-white shadow'
                : 'bg-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Tractor className="w-4 h-4" />
            <span>Agriculture ({SERVICES.filter(s => s.category === 'agriculture').length})</span>
          </button>

          <button
            onClick={() => setFilterCategory('decoration')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition flex items-center space-x-2 ${
              filterCategory === 'decoration'
                ? 'bg-brand-brown-600 text-white shadow'
                : 'bg-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Traditional Decor ({SERVICES.filter(s => s.category === 'decoration').length})</span>
          </button>
        </div>

        {/* Services Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="services-cards-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full bg-white rounded-3xl border border-slate-150 transition shadow-xs hover:border-emerald-200/80 hover:shadow-md overflow-hidden relative"
                id={`service-card-${service.id}`}
              >
                {/* Card Main Body */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Category, Icon & Popular tag */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3.5 rounded-xl ${
                      service.category === 'agriculture'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                        : 'bg-brand-brown-100 text-brand-brown-700 border border-brand-brown-500/10'
                    }`}>
                      {resolveIcon(service.iconName, "w-5 h-5")}
                    </div>
                    {service.tag && (
                      <span className={`text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border ${
                        service.category === 'agriculture'
                          ? 'bg-emerald-50/50 text-emerald-800 border-emerald-100'
                          : 'bg-orange-50 text-orange-700 border-orange-100'
                      }`}>
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest">
                      {service.category === 'agriculture' ? 'AGRICULTURE ENGINE' : 'TAMIL DECORATION'}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed min-h-[3rem]">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points mapping */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-3 flex-grow">
                    <p className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Key Features</p>
                    {service.features.map((feat, index) => (
                      <div key={index} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                          service.category === 'agriculture' ? 'text-emerald-700' : 'text-brand-brown-600'
                        }`} />
                        <span className="font-semibold text-slate-700 leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Booking Trigger CTA */}
                  <div className="mt-8 pt-4 flex items-center justify-between gap-3 border-t border-slate-100">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="p-3 rounded-xl border border-slate-200 text-slate-500 hover:text-emerald-700 hover:border-emerald-600 transition flex items-center justify-center"
                      title="Quick Call Now"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    
                    <button
                      onClick={() => onSelectServiceForEnquiry(service.title)}
                      className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                        service.category === 'agriculture'
                          ? 'bg-emerald-800 hover:bg-emerald-700 text-white'
                          : 'bg-brand-brown-600 hover:bg-brand-brown-700 text-white'
                      }`}
                      id={`book-service-${service.id}-btn`}
                    >
                      <Bookmark className="w-4 h-4" />
                      <span>Instantly Enquire</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner highlighting JCB Earth Movers specifically */}
        <div className="mt-16 bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden" id="earthmover-highlight-banner">
          <div className="absolute inset-0 bg-[grid_#fff_0.02] opacity-[0.05]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase px-3 py-1 rounded inline-block border border-orange-500/20">
                🚜 heavy duty fleet highlight
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                Need Farm Levelling or Excavation? Our JCB TN 88 H 8077 is Ready!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Whether you need to dig irrigation pits, clear thick invasive thorns, level undulating land, or load tilling soil, our high-power JCB earthmover is positioned near Mallur for quick service dispatch.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white text-slate-900 font-extrabold px-6 py-3.5 rounded-xl hover:bg-slate-100 transition shadow text-center text-sm"
              >
                Call: {BUSINESS_INFO.phoneDisplay}
              </a>
              <button
                onClick={() => onSelectServiceForEnquiry("JCB Earth Movers Available")}
                className="bg-emerald-800 text-white font-extrabold px-6 py-3.5 rounded-xl hover:bg-emerald-750 transition border border-emerald-700 text-center text-sm shadow-sm"
              >
                Book JCB Mover
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
