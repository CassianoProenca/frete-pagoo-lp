import { Truck } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'compact' | 'footer';
  className?: string;
}

export const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-[#1a2b5d] to-blue-600 rounded-lg blur-sm opacity-50"></div>
          <div className="relative bg-linear-to-br from-[#1a2b5d] to-blue-700 p-2 rounded-lg">
            <Truck className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </div>
        <div className="flex items-baseline gap-0.5">
          <span className="text-xl font-black text-[#1a2b5d] tracking-tight logo-text">
            FRETE
          </span>
          <span className="text-xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 logo-text">
            PAGOO
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
          <Truck className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-white tracking-tight logo-text">
              FRETE
            </span>
            <span className="text-xl font-black text-cyan-400 logo-text">
              PAGO
            </span>
          </div>
          <span className="text-[9px] font-semibold text-gray-400 tracking-wider uppercase -mt-0.5">
            Transporte Refrigerado
          </span>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Ícone com efeito de profundidade */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-[#1a2b5d] to-blue-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative bg-linear-to-br from-[#1a2b5d] to-blue-700 p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
          <Truck className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
      </div>
      
      {/* Texto principal */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-black text-[#1a2b5d] tracking-tight group-hover:text-[#152347] transition-colors logo-text">
            FRETE
          </span>
          <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 logo-text">
            PAGO
          </span>
        </div>
        <span className="text-[10px] md:text-xs font-semibold text-gray-500 tracking-wider uppercase -mt-1">
          Transporte Refrigerado
        </span>
      </div>
    </div>
  );
};
