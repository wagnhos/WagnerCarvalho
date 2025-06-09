
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, Mail, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gradient">Wagner Carvalho</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Início</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Habilidades</a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projetos</a>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="primary-gradient text-white border-0 hover:scale-105 transition-transform">
              Contato
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <a 
                href="https://wa.me/5541984974575" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center w-full"
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a 
                href="mailto:wagner-0306@hotmail.com"
                className="flex items-center w-full"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
