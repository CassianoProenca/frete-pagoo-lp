import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Clock, CheckCircle, MessageCircle } from 'lucide-react';

export const LeadCapture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    tipoCarga: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Meu nome é ${formData.nome}, da empresa ${formData.empresa}.
Gostaria de uma cotação para transporte de: ${formData.tipoCarga}.
Telefone para contato: ${formData.telefone}`;
    
    const whatsappUrl = `https://wa.me/5515988199498?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b5d] mb-4">
            Solicite uma Cotação
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário e receba uma proposta personalizada em minutos
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b5d] focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b5d] focus:border-transparent outline-none transition-all"
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b5d] focus:border-transparent outline-none transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipoCarga" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Carga *
                    </label>
                    <select
                      id="tipoCarga"
                      name="tipoCarga"
                      required
                      value={formData.tipoCarga}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a2b5d] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Selecione o tipo de carga</option>
                      <option value="Carnes e Proteínas">Carnes e Proteínas</option>
                      <option value="Chocolates e Confeitaria">Chocolates e Confeitaria</option>
                      <option value="Laticínios">Laticínios</option>
                      <option value="Frutas e Vegetais">Frutas e Vegetais</option>
                      <option value="Congelados">Congelados</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <MessageCircle size={24} />
                    Enviar via WhatsApp
                    <Send size={20} />
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Ao enviar, você será redirecionado para o WhatsApp
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-linear-to-br from-[#1a2b5d] to-[#2a3b6d] rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Clock size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Resposta Rápida</h3>
                    <p className="text-gray-300">Em menos de 5 minutos</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  Nossa equipe comercial entrará em contato via WhatsApp para entender melhor suas necessidades 
                  e apresentar a melhor solução em transporte refrigerado.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-green-400 shrink-0 mt-1" />
                    <p className="text-gray-200">Cotação personalizada sem compromisso</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-green-400 shrink-0 mt-1" />
                    <p className="text-gray-200">Atendimento especializado e consultivo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-green-400 shrink-0 mt-1" />
                    <p className="text-gray-200">Propostas competitivas e transparentes</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="font-semibold text-gray-800">Central de Atendimento Online</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Segunda a Sexta: 7h às 19h<br />
                  Sábado: 8h às 13h
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
