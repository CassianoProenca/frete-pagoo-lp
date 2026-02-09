import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

const stats = [
  { icon: Award, value: '2013', label: 'Fundada em' },
  { icon: TrendingUp, value: '13+', label: 'Anos de Experiência' },
  { icon: Users, value: 'JBS, RXM', label: 'Grandes Clientes' },
  { icon: Target, value: '24/7', label: 'Monitoramento' }
];

export const Sobre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b5d] mb-4">
              Sobre a Frete Pago
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Referência nacional em transporte refrigerado e logística especializada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  src="/scania-truck-blue.jpeg" 
                  alt="Frota Frete Pago" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#1a2b5d] text-white p-6 rounded-xl shadow-xl">
                  <p className="text-4xl font-bold">Desde 2013</p>
                  <p className="text-sm"></p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-[#1a2b5d]">
                Compromisso com a Qualidade e Pontualidade
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Fundada em 2013, a <span className="font-semibold text-[#1a2b5d]">Frete Pago</span> nasceu 
                com o propósito de oferecer soluções inteligentes em transporte de cargas sensíveis. Especializados 
                em transporte refrigerado, somos referência em logística para os segmentos de proteínas, 
                chocolates e produtos que exigem controle rigoroso de temperatura.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Com infraestrutura flexível e tecnologia de monitoramento em tempo real, garantimos a manutenção 
                perfeita da cadeia de frio. Certificados pela ANVISA, oferecemos soluções completas incluindo 
                armazenagem estratégica em docas e pátios alternativos, atendendo pequenos e grandes clientes com 
                a mesma dedicação.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-[#1a2b5d] font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Certificação ANVISA
                </div>
                <div className="flex items-center gap-2 text-[#1a2b5d] font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Armazenagem Estratégica
                </div>
                <div className="flex items-center gap-2 text-[#1a2b5d] font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Soluções Flexíveis
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-linear-to-br from-[#1a2b5d] to-[#2a3b6d] rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
