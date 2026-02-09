import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';
import friboiLogo from '../assets/logo_friboi_interna.png';
import swiftLogo from '../assets/swift.png';
import searaLogo from '../assets/seara.png';
import massaLeveLogo from '../assets/massa-leve.png';
import marfrigLogo from '../assets/marfrig.png';
import cacauShowLogo from '../assets/cacau-show.png';
import divinoLogo from '../assets/divino.png';
import rxmLogo from '../assets/rxm.jpeg';

const clientes = [
  { nome: 'Friboi', logo: friboiLogo, segmento: 'Proteínas', grupo: 'Grupo JBS' },
  { nome: 'Swift', logo: swiftLogo, segmento: 'Proteínas', grupo: 'Grupo JBS' },
  { nome: 'Seara', logo: searaLogo, segmento: 'Alimentos', grupo: 'Grupo JBS' },
  { nome: 'Massa Leve', logo: massaLeveLogo, segmento: 'Massas', grupo: 'Grupo JBS' },
  { nome: 'Marfrig', logo: marfrigLogo, segmento: 'Proteínas', grupo: '' },
  { nome: 'Cacau Show', logo: cacauShowLogo, segmento: 'Chocolates', grupo: '' },
  { nome: 'Divino Vícios', logo: divinoLogo, segmento: 'Chocolates', grupo: '' },
  { nome: 'RXM Importações', logo: rxmLogo, segmento: 'Importação/Exportação', grupo: '' }
];

export const Clientes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a2b5d]/10 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-[#1a2b5d]" />
            <span className="text-[#1a2b5d] font-semibold text-sm uppercase tracking-wide">
              Nossos Clientes
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b5d] mb-4">
            Parceiros de Confiança
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendemos empresas líderes nos segmentos de proteínas, chocolates e logística internacional
          </p>
        </motion.div>

        {/* Grid de Clientes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {clientes.map((cliente, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1a2b5d]/20"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  {/* Logo Container - Padronizado */}
                  <div className="w-full h-24 flex items-center justify-center mb-2 p-3 overflow-hidden">
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
                  {/* Nome e Segmento */}
                  <div>
                    <h3 className="text-lg font-bold text-[#1a2b5d] mb-1">
                      {cliente.nome}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {cliente.segmento}
                    </p>
                    {cliente.grupo && (
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        {cliente.grupo}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Texto complementar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center bg-linear-to-r from-[#1a2b5d] to-blue-700 rounded-2xl p-8 text-white"
          >
            <p className="text-lg md:text-xl font-semibold mb-2">
              + Outras marcas do Grupo JBS e empresas líderes
            </p>
            <p className="text-gray-200">
              Mais de uma década atendendo as maiores marcas do mercado de proteínas, 
              chocolates e logística internacional com excelência, certificação ANVISA e pontualidade.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
