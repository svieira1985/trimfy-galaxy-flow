import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-white font-medium">Plataforma ERP para Barbearias</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Trim<span className="text-accent">Fy</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Sistema completo de gestão para barbearias e salões de beleza. 
          <br />
          <span className="text-accent font-semibold">Arquitetura modular • Tecnologia avançada • Resultados garantidos</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full shadow-accent"
          >
            Conhecer Arquitetura
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300"
          >
            Ver Cronograma
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">8</div>
            <div className="text-white/80">Módulos Integrados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-white/80">Fases de Entrega</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-white/80">Focado em Barbearias</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;