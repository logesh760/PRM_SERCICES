import { Tractor, CalendarCheck, Phone, Mail, MapPin, Building, Globe, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onNavigateToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden" id="prm-services-main-footer">
      <div className="absolute inset-0 bg-[grid_#fff_0.02] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-1 lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="bg-slate-900 text-white p-2 rounded-xl border border-slate-800">
                <Tractor className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white uppercase">
                P.R.M <span className="text-emerald-500">SERVICES</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              We specialize in affordable Sonalika tractor cultivation, mini tilling, and JCB earth moving jobs near Salem Mallur, alongside gorgeous, low-budget decorative setups for your household functions.
            </p>

            {/* Micro badges for trust */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-slate-900/80 border border-slate-800 px-2.5 py-0.5 rounded text-[10px] font-semibold text-slate-300 flex items-center space-x-1">
                <Shield className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>100% Licensed Operator</span>
              </span>
              <span className="bg-slate-900/80 border border-slate-800 px-2.5 py-0.5 rounded text-[10px] font-semibold text-slate-300 flex items-center space-x-1">
                <Building className="w-3 h-3 text-emerald-400" />
                <span>Periyakattur Registered</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
              Explore Services
            </p>
            <nav className="flex flex-col space-y-2.5" id="footer-navigation">
              {[
                { name: 'Home Landing Screen', id: 'home' },
                { name: 'Agriculture tractor fleet', id: 'services' },
                { name: 'Our Recent decor Gallery', id: 'gallery' },
                { name: 'Common FAQs & Rates', id: 'faq' },
                { name: 'Location Coordinates', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-xs text-slate-400 hover:text-emerald-400 transition text-left font-medium block cursor-pointer"
                  id={`footer-link-${link.id}`}
                >
                  ➜ {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Regional contact metadata */}
          <div className="md:col-span-1 lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
              Operational Office Info
            </p>
            <div className="space-y-3 text-xs text-slate-400 font-medium">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Periyakattur village, Mallur, Salem District, Tamil Nadu, 636203</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline hover:text-white font-mono text-xs">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl">
                <span className="block font-bold text-[9px] text-emerald-400 uppercase tracking-widest">Active Fleet Hours</span>
                <span className="block text-xs mt-0.5 text-slate-300 font-light font-mono">{BUSINESS_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Banner: SEO sitemap-ready specs & Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
          <div className="space-y-1.5 text-center md:text-left">
            <p>© {currentYear} <strong>{BUSINESS_INFO.name}</strong>. All rights reserved.</p>
            <p className="text-[10px] text-slate-600">
              SEO Optimized for Google Local Business search algorithms in Salem, Mallur, Tamil Nadu under pincode 636203.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-slate-600 font-medium">
            <span>Sitemap.xml Compatible</span>
            <span>Robots.txt Ready</span>
            <span className="text-emerald-500/80">✔ Mobile Responsive Core Web Vitals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
