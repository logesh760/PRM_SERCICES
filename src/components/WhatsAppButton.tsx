import { MessageSquareText } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40" id="whatsapp-floating-panel">
      <motion.a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct Enquiry on WhatsApp with P.R.M. Services"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition hover:shadow-emerald-600/30 group border border-emerald-500/20"
        id="floating-whatsapp-anchor"
      >
        <MessageSquareText className="w-6 h-6 animate-pulse text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-bold text-xs sm:text-sm text-emerald-50 shrink-0 select-none">
          Enquire on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
