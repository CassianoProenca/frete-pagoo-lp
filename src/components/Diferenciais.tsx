import { motion } from 'framer-motion';
import { Thermometer, Radar, Shield } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    icon: Thermometer,
    title: 'Controle Térmico Real-time',
    description: 'Monitoramento constante da temperatura em tempo real, garantindo a integridade de cargas sensíveis durante todo o trajeto.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Radar,
    title: 'Frota Monitorada 24h',
    description: 'Sistema de rastreamento avançado com localização precisa e alertas automáticos para total controle da operação.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Certificação ANVISA',
    description: 'Certificação de qualidade emitida pela ANVISA, garantindo transporte de alimentos e produtos sensíveis com total segurança e conformidade sanitária.',
    color: 'from-cyan-500 to-teal-500'
  }
];

export const Diferenciais = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="servicos" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b5d] mb-4">
            Por que Escolher a Frete Pagoo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia, segurança e compromisso com a excelência em cada entrega
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1a2b5d]/20 h-full flex flex-col">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#1a2b5d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${card.color} p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative grow">
                    <h3 className="text-2xl font-bold text-[#1a2b5d] mb-4 group-hover:text-[#152347] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${card.color} opacity-10 rounded-bl-full`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
