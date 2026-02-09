import { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Tipográfica */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Ícone do Caminhão com Gradiente */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-[#1a2b5d] to-blue-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-linear-to-br from-[#1a2b5d] to-blue-700 p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>
            
            {/* Texto da Logo */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl font-black text-[#1a2b5d] tracking-tight group-hover:text-[#152347] transition-colors">
                  FRETE
                </span>
                <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                  PAGOO
                </span>
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-gray-500 tracking-wider uppercase -mt-1">
                Transporte Refrigerado
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-[#1a2b5d] transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-[#1a2b5d] transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('especialidades')}
              className="text-gray-700 hover:text-[#1a2b5d] transition-colors font-medium"
            >
              Especialidades
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-[#1a2b5d] text-white px-6 py-2 rounded-lg hover:bg-[#152347] transition-colors font-semibold shadow-lg"
            >
              Falar com Consultor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1a2b5d] p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-2">
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-700 hover:text-[#1a2b5d] transition-colors font-medium text-left"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-700 hover:text-[#1a2b5d] transition-colors font-medium text-left"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('especialidades')}
                  className="text-gray-700 hover:text-[#1a2b5d] transition-colors font-medium text-left"
                >
                  Especialidades
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-[#1a2b5d] text-white px-6 py-2 rounded-lg hover:bg-[#152347] transition-colors font-semibold text-left"
                >
                  Falar com Consultor
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
