import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Truck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1a2b5d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* Logo Tipográfica no Footer */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-white tracking-tight">
                    FRETE
                  </span>
                  <span className="text-xl font-black text-cyan-400">
                    PAGOO
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-gray-400 tracking-wider uppercase -mt-0.5">
                  Transporte Refrigerado
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Excelência em transporte refrigerado e logística especializada desde 2013. Certificação ANVISA e soluções completas de armazenagem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Contatos</p>
                  <a href="https://wa.me/5515988199498" className="hover:text-white transition-colors block">
                    WhatsApp: (15) 98819-9498
                  </a>
                  <a href="tel:+551131643520" className="hover:text-white transition-colors block">
                    Tel: (11) 3164-3520
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">E-mail</p>
                  <a href="mailto:mc.martinslog@gmail.com" className="hover:text-white transition-colors">
                    mc.martinslog@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Horário</p>
                  <p>Seg - Sex: 7h às 19h</p>
                  <p>Sáb: 8h às 13h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Address & Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Endereço</h4>
            <div className="text-gray-300 text-sm space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Escritório Administrativo</p>
                  <p>R. Cel. José Eusébio, 95</p>
                  <p>Casa 13, Higienópolis</p>
                  <p>São Paulo - SP</p>
                  <p>CEP: 01.239-030</p>
                </div>
              </div>
              
              <div className="pt-3 border-t border-white/10">
                <p className="font-semibold text-white mb-2">Infraestrutura Logística:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Docas em armazéns estratégicos</li>
                  <li>• Pátios alternativos disponíveis</li>
                  <li>• Soluções flexíveis de armazenagem</li>
                  <li>• Certificação ANVISA</li>
                </ul>
              </div>
            </div>
            
            {/* Map */}
            <div className="w-full h-32 bg-gray-700 rounded-lg overflow-hidden mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4088558087487!2d-46.65642092347471!3d-23.545519978781947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583d2b1e9c8d%3A0x8b1c4e8e8e8e8e8e!2sR.%20Cel.%20Jos%C3%A9%20Eus%C3%A9bio%2C%2095%20-%20Higien%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001239-030!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização Frete Pago"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Frete Pago Network Ltda. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
            <span>CNPJ: 17.467.064/0001-47</span>
            <span className="hidden sm:inline">•</span>
            <span>CNAE: 49.30-2-01</span>
            <span className="hidden sm:inline">•</span>
            <span>Certificação ANVISA</span>
            <span className="hidden sm:inline">•</span>
            <span>Fundada em 2013</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
