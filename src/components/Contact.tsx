import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Instagram,
  ArrowRight,
  Heart
} from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511988750857?text=Olá! Gostaria de agendar uma consulta para meu pet na Pet Shop Lola. Quando seria possível?", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:contato@lolapetshop.com.br?subject=Consulta Pet Shop Lola&body=Olá! Gostaria de informações sobre os serviços veterinários.", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/petshoplola", "_blank");
  };

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Av+Cidade+de+Sorocaba+261+Barueri+SP", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-glow/20 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium text-primary">Entre em contato</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vamos Cuidar do Seu <span className="text-primary">Pet Juntos!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre em contato com a Pet Shop Lola! Nossa equipe está pronta para 
            oferecer o melhor cuidado veterinário para seu pet. Clique no WhatsApp 
            e vamos conversar agora mesmo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estamos localizados em Barueri, São Paulo, prontos para atender 
                seu pet com todo carinho e profissionalismo que ele merece.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6 bg-card hover:shadow-medium transition-smooth cursor-pointer group" onClick={handleWhatsAppClick}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <MessageCircle className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">(11) 98875-0857</p>
                    <p className="text-sm text-primary">Clique para conversar agora</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-smooth" />
                </div>
              </Card>

              <Card className="p-6 bg-card hover:shadow-medium transition-smooth cursor-pointer group" onClick={handleEmailClick}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@lolapetshop.com.br</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-smooth" />
                </div>
              </Card>

              <Card className="p-6 bg-card hover:shadow-medium transition-smooth cursor-pointer group" onClick={handleMapClick}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av Cidade de Sorocaba, 261<br />
                      Barueri, São Paulo - CEP: 06447-180
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-smooth" />
                </div>
              </Card>

              <Card className="p-6 bg-card hover:shadow-medium transition-smooth">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      <span className="text-sm text-accent">Emergências: Consulte disponibilidade</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h4>
              <Button 
                onClick={handleInstagramClick}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="flex items-center">
            <div className="w-full">
              {/* Main CTA Card */}
              <Card className="p-8 lg:p-10 bg-gradient-primary text-primary-foreground text-center">
                <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Agende Agora Mesmo!
                </h3>
                
                <p className="text-lg mb-8 opacity-95 leading-relaxed">
                  Casos de sucesso em tratamentos e depoimentos de tutores satisfeitos 
                  comprovam nossa excelência. Seu pet merece o melhor cuidado!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    variant="secondary"
                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg py-4 rounded-full transition-smooth"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp Agora
                  </Button>
                  
                  <p className="text-sm opacity-80">
                    Resposta rápida garantida • Atendimento personalizado
                  </p>
                </div>
              </Card>

              {/* Emergency Notice */}
              <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-xl text-center">
                <h4 className="font-semibold text-foreground mb-2">Emergência?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Em casos de emergência, entre em contato imediatamente pelo WhatsApp
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 transition-smooth"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Emergência
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Compromisso com a excelência:</strong> Transformamos a relação entre tutores e pets 
            através de cuidados veterinários de qualidade superior.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;