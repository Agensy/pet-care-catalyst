import { Heart, MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511988750856?text=Olá! Gostaria de informações sobre os serviços da Pet Shop Lola.", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:contato@lolapetshop.com.br", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/petshoplola", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🐾</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pet Shop Lola</h3>
                <p className="text-sm text-background/80">Cuidados Veterinários de Excelência</p>
              </div>
            </div>
            
            <p className="text-background/90 mb-6 leading-relaxed max-w-md">
              Transformamos a relação entre tutores e pets através de cuidados 
              veterinários de excelência, sempre com atendimento personalizado 
              e foco no bem-estar animal.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <button 
                onClick={handleInstagramClick}
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicos")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/90 text-sm leading-relaxed">
                    Av Cidade de Sorocaba, 261<br />
                    Barueri, São Paulo<br />
                    CEP: 06447-180
                  </p>
                </div>
              </li>
              
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-background/90 hover:text-primary transition-smooth"
                >
                  (11) 98875-0856
                </button>
              </li>
              
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <button 
                  onClick={handleEmailClick}
                  className="text-background/90 hover:text-primary transition-smooth text-sm"
                >
                  contato@lolapetshop.com.br
                </button>
              </li>
              
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/90 text-sm">
                  <p>Segunda a Sexta</p>
                  <p>8h às 18h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Services Quick List */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
            <span className="text-background/80">Consultas Veterinárias</span>
            <span className="text-background/80">Cuidados Preventivos</span>
            <span className="text-background/80">Emergências</span>
            <span className="text-background/80">Cirurgias</span>
            <span className="text-background/80">Farmácia Veterinária</span>
            <span className="text-background/80">Consultoria Especializada</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-background/80">
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>Feito com carinho para pets e seus tutores</span>
            </div>
            
            <div className="text-sm text-background/80">
              © 2024 Pet Shop Lola. Todos os direitos reservados.
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-background/60">
              Pet Shop Lola - CNPJ: 00.000.000/0001-00 | Responsável Técnico: Dr. Veterinário CRM-SP 12345
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;