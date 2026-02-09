import { motion } from 'framer-motion';
import friboiLogo from '../assets/logo_friboi_interna.png';
import swiftLogo from '../assets/swift.png';
import searaLogo from '../assets/seara.png';
import massaLeveLogo from '../assets/massa-leve.png';
import marfrigLogo from '../assets/marfrig.png';
import cacauShowLogo from '../assets/cacau-show.png';
import divinoLogo from '../assets/divino.png';
import rxmLogo from '../assets/rxm.jpeg';

const clientes = [
  { nome: 'Friboi', logo: friboiLogo, segmento: 'Proteínas' },
  { nome: 'Swift', logo: swiftLogo, segmento: 'Proteínas' },
  { nome: 'Seara', logo: searaLogo, segmento: 'Alimentos' },
  { nome: 'Massa Leve', logo: massaLeveLogo, segmento: 'Massas' },
  { nome: 'Marfrig', logo: marfrigLogo, segmento: 'Proteínas' },
  { nome: 'Cacau Show', logo: cacauShowLogo, segmento: 'Chocolates' },
  { nome: 'Divino Vícios', logo: divinoLogo, segmento: 'Chocolates' },
  { nome: 'RXM Importações', logo: rxmLogo, segmento: 'Importação' }
];

// Duplicar array para efeito infinito suave
const clientesDuplicados = [...clientes, ...clientes, ...clientes];

export const ClientesMarquee = () => {
  return (
    <div className="w-full bg-white/80 backdrop-blur-sm border-y border-gray-200 py-6 overflow-hidden">
      <div className="container mx-auto px-4 mb-3">
        <p className="text-center text-sm text-gray-600 font-semibold uppercase tracking-wider">
          Confiança de Grandes Marcas
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Gradientes nas bordas para efeito de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Container do carrossel */}
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -2000], // Ajuste baseado no tamanho total
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {clientesDuplicados.map((cliente, index) => (
            <div
              key={index}
              className="shrink-0 group"
            >
              <div className="flex flex-col items-center gap-2">
                {/* Logo do cliente - Card Padronizado */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 group-hover:border-[#1a2b5d]/30 group-hover:shadow-md transition-all duration-300 w-48 h-28 flex items-center justify-center p-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-white">
                    <img 
                      src={cliente.logo} 
                      alt={`Logo ${cliente.nome}`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      style={{ 
                        filter: 'brightness(1) contrast(1.1) saturate(1.1)',
                        background: 'white'
                      }}
                    />
                  </div>
                </div>
                {/* Segmento */}
                <span className="text-xs text-gray-500 uppercase tracking-wide whitespace-nowrap">
                  {cliente.segmento}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
