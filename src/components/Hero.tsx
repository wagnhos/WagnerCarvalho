
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <p className="text-muted-foreground text-lg">Olá! Meu nome é</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient leading-tight">
            Wagner Carvalho
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Analista Financeiro com experiência desde 2021 em 
            rotinas financeiras (contas a pagar e receber), fluxo 
            de caixa, conciliação bancária e controle orçamentário 
            e BI.
          </p>
          <a 
            href="https://www.linkedin.com/in/wagner-carvalho-657035187/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="primary-gradient text-white border-0 hover:scale-105 transition-transform">
              <User className="mr-2 h-4 w-4" />
              Sobre mim
            </Button>
          </a>
        </div>
        
        <div className="flex justify-center animate-scale-in">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl" style={{backgroundColor: '#000000'}}>
              <img 
                  src="wagner.jpeg"
                 alt="Wagner Carvalho"
                 className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
