import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientesMarquee } from './components/ClientesMarquee';
import { Diferenciais } from './components/Diferenciais';
import { Sobre } from './components/Sobre';
import { Clientes } from './components/Clientes';
import { Especialidades } from './components/Especialidades';
import { LeadCapture } from './components/LeadCapture';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ClientesMarquee />
      <Diferenciais />
      <Sobre />
      <Clientes />
      <Especialidades />
      <LeadCapture />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
