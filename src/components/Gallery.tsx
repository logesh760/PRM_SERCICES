import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Focus, Eye, CheckCircle } from 'lucide-react';
import { GALLERY } from '../data';

export default function Gallery() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'agriculture' | 'decoration'>('all');
  const [activeImageId, setActiveImageId] = useState<string | null>(null);

  const filteredGallery = GALLERY.filter(item => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-white relative border-b border-emerald-100">
      <div className="absolute inset-0 bg-[grid_#047857_0.02] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-md mb-3 inline-block">
            AUTHENTIC LOCAL PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Real Fields, Real Traditional setups
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Unfiltered images showing our fleet preparing tilling patterns in local coconut farms across Mallur with robust Sonalika models, and budget event setups built to perfection.
          </p>
        </div>

        {/* Gallery Filters styled like a bento tray */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-100 p-2 rounded-2xl border border-slate-200/60 max-w-md mx-auto" id="gallery-filters">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition ${
              filterCategory === 'all'
                ? 'bg-emerald-900 text-white shadow'
                : 'bg-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setFilterCategory('agriculture')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition ${
              filterCategory === 'agriculture'
                ? 'bg-emerald-800 text-white shadow'
                : 'bg-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Agri Tractor
          </button>
          <button
            onClick={() => setFilterCategory('decoration')}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition ${
              filterCategory === 'decoration'
                ? 'bg-brand-brown-600 text-white shadow'
                : 'bg-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Decor Setup
          </button>
        </div>

        {/* Intelligent Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-images-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveImageId(activeImageId === item.id ? null : item.id)}
                className="relative group aspect-4/3 rounded-3xl overflow-hidden shadow-xs hover:shadow-md border border-slate-150 bg-white cursor-pointer"
                id={`gallery-item-${item.id}`}
              >
                {/* Photo Element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Overlaid linear gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/45 to-transparent opacity-95 transition" />

                {/* Info Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left select-none z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border ${
                      item.category === 'agriculture'
                        ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/30'
                        : 'bg-orange-500/20 text-orange-200 border-orange-500/30'
                    }`}>
                      {item.category === 'agriculture' ? '🌾 Tractor' : '🌸 Decor'}
                    </span>
                    <div className="p-1 bg-white/10 backdrop-blur-sm rounded opacity-0 group-hover:opacity-100 transition">
                      <Eye className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  <h4 className="font-bold text-base tracking-tight text-white line-clamp-1">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Large Image Fullscreen lightbox (Optional usability addition, highly professional) */}
        <AnimatePresence>
          {activeImageId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageId(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              id="lightbox-container"
            >
              <button
                onClick={() => setActiveImageId(null)}
                className="absolute top-4 right-4 bg-white/15 hover:bg-white/30 text-white text-xs uppercase px-4 py-2.5 rounded-full font-bold transition"
              >
                ✕ Close Preview
              </button>
              
              {(() => {
                const item = GALLERY.find(g => g.id === activeImageId);
                if (!item) return null;
                return (
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10"
                  >
                    <div className="aspect-16/9 w-full">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-white text-left">
                      <span className="text-xs text-brand-brown-500 uppercase font-bold">{item.category}</span>
                      <h4 className="text-xl font-bold mt-1 text-white">{item.title}</h4>
                      <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
