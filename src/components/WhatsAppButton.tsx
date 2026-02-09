import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da Frete Pago.');
    window.open(`https://wa.me/5515988199498?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 px-6 py-4"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} className="shrink-0" />
      <span className="font-semibold text-sm md:text-base whitespace-nowrap">
        Fale Conosco
      </span>
      
      {/* Ripple Effect */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></span>
    </motion.button>
  );
};
