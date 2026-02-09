import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beef, Candy, Package } from 'lucide-react';

const especialidades = [
  {
    icon: Beef,
    title: 'Carnes e Proteínas',
    description: 'Transporte especializado com temperatura controlada de -25°C a -18°C',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80',
    gradient: 'from-red-900/80 to-red-700/60'
  },
  {
    icon: Candy,
    title: 'Chocolates e Confeitaria',
    description: 'Controle preciso entre 12°C e 18°C para produtos delicados',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80',
    gradient: 'from-amber-900/80 to-amber-700/60'
  },
  {
    icon: Package,
    title: 'Cargas Gerais',
    description: 'Logística completa para diversos tipos de mercadorias',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    gradient: 'from-blue-900/80 to-blue-700/60'
  }
];

export const Especialidades = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="especialidades" className="py-20 bg-[#1a2b5d]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise comprovada nos segmentos mais exigentes do mercado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {especialidades.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-100"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-linear-to-t ${item.gradient} group-hover:opacity-90 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  {/* Icon */}
                  <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Além das especialidades, atendemos diversos segmentos com a mesma dedicação e qualidade. 
            <span className="text-white font-semibold"> Consulte-nos sobre sua necessidade específica.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
