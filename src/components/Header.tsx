import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511988750857?text=Olá! Gostaria de agendar uma consulta para meu pet.", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e8f893d6-7926-42ef-abe2-16b5a87c477c.png" 
              alt="Lola Pet Shop Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-xs text-muted-foreground">Cuidados Veterinários</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(11) 98875-0857</span>
            </div>
            <Button onClick={handleWhatsAppClick} className="bg-gradient-primary hover:shadow-glow transition-smooth">
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("servicos")}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Contato
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Phone className="w-4 h-4" />
                  <span>(11) 98875-0857</span>
                </div>
                <Button onClick={handleWhatsAppClick} className="w-full bg-gradient-primary hover:shadow-glow transition-smooth">
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;