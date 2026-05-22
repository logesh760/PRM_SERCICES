import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import EnquiryForm from './components/EnquiryForm';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledService, setPrefilledService] = useState('');

  // Scrollspy: Automatically highlight navbar based on scroll position
  useEffect(() => {
    const sections = ['home', 'services', 'gallery', 'faq', 'enquiry', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 120; // offset navbar height

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // When a user selects "Estimate" or "Enquire" on a service card, scroll down to the Enquiry section
  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    
    const element = document.getElementById('enquiry');
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

  const handleNavigateToEnquiry = () => {
    setPrefilledService('');
    
    const element = document.getElementById('enquiry');
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

  const handleClearPrefill = () => {
    setPrefilledService('');
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fcfbfa]" id="app-landing-root">
      {/* Sticky responsive header navbar bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main content grid */}
      <main className="flex-1">
        {/* Banner with Sonalika background representations */}
        <Hero onNavigateToEnquiry={handleNavigateToEnquiry} />
        
        {/* Services mapping (Agriculture & Traditional Decorations) */}
        <Services onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />
        
        {/* Filterable picture showcase */}
        <Gallery />
        
        {/* reviews and accordion FAQS */}
        <FAQ />
        
        {/* Local Storage persistence contact/booking form */}
        <EnquiryForm prefilledService={prefilledService} onClearPrefill={handleClearPrefill} />
        
        {/* Google maps locations pins segment */}
        <Contact />
      </main>

      {/* WhatsApp Floating badge widgets */}
      <WhatsAppButton />

      {/* Structured footer schema references */}
      <Footer onNavigateToSection={setActiveSection} />
    </div>
  );
}
