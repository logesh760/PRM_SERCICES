import { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarRange, Sparkles, Tractor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticking navbar
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
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-200/60'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              href="#home"
              className="flex items-center space-x-2.5 cursor-pointer group"
              id="brand-logo-link"
            >
              <div className="bg-slate-900 text-white p-2 rounded-xl group-hover:bg-emerald-800 transition shadow-xs">
                <Tractor className="w-5 h-5" id="brand-logo-icon" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                  P.R.M <span className="text-emerald-850">SERVICES</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400">
                  AGRI & DECORATIONS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 ${
                    activeSection === link.id
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Phone Call */}
            <div className="hidden lg:flex items-center space-x-3" id="desktop-cta">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs"
                id="call-now-button-nav"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => handleLinkClick('enquiry')}
                className="flex items-center space-x-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-705 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-2xs"
                id="book-now-button-nav"
              >
                <CalendarRange className="w-3.5 h-3.5 text-slate-450" />
                <span>Free Enquiry</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2" id="mobile-controls">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2.5 bg-slate-50 text-slate-700 border border-slate-205 rounded-xl hover:bg-slate-100 transition-all"
                aria-label="Call Business"
                id="mobile-phone-call-nav"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-150 transition-all focus:outline-none"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle-btn"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-45"
              id="mobile-menu-backdrop"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col border-l border-slate-100"
              id="mobile-menu-drawer"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="bg-slate-950 text-white p-1.5 rounded-lg">
                    <Tractor className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-base text-slate-900">P.R.M SERVICES</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition"
                  id="mobile-drawer-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 flex flex-col space-y-4">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  NAVIGATION
                </p>
                <nav className="flex flex-col space-y-1" id="mobile-nav-links">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.id);
                      }}
                      className={`flex items-center px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                        activeSection === link.id
                          ? 'bg-slate-50 text-slate-905 border border-slate-205 shadow-2xs'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                      id={`mobile-nav-link-${link.id}`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                <div className="pt-6 border-t border-slate-100 flex flex-col space-y-3">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    QUICK ACTIONS
                  </p>
                  <button
                    onClick={() => handleLinkClick('enquiry')}
                    className="flex items-center justify-center space-x-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 w-full py-3 rounded-xl font-bold text-xs transition shadow-2xs"
                    id="mobile-enquiry-drawer-btn"
                  >
                    <CalendarRange className="w-4 h-4" />
                    <span>Send Enquiry Form</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white w-full py-3 rounded-xl font-bold text-xs transition shadow"
                    id="mobile-call-drawer-btn"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              <div className="mt-auto border-t border-slate-100 pt-5 text-center">
                <span className="text-[10px] text-slate-450 font-semibold uppercase tracking-wider">
                  📍 Mallur, Salem • GPS Validated
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
