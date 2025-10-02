import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star } from "lucide-react";
const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511988750856?text=Olá! Quero agendar uma consulta para meu pet na Pet Shop Lola.", "_blank");
  };
  const handleLearnMoreClick = () => {
    const element = document.getElementById("sobre");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/5deb9a34-d36a-45d1-8747-d281477ba655.png" alt="Pessoa sorrindo com seu pet - cuidado e carinho veterinário" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl backdrop-blur-sm bg-background/30 p-8 rounded-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/90 px-5 py-2.5 rounded-full mb-6 shadow-strong">
            <Star className="w-5 h-5 text-white fill-current" />
            <span className="text-sm font-bold text-white">Clínica de Confiança em Barueri</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight drop-shadow-lg">
            Cuidados Veterinários 
            <span className="text-primary block drop-shadow-md">de Excelência e Qualidade</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed drop-shadow-md">
            Atendimento personalizado com foco no bem-estar animal e orientação completa aos tutores. 
            Sua tranquilidade é nossa prioridade.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <Heart className="w-5 h-5 text-accent fill-current" />
              <span className="text-sm font-bold text-foreground">Casos de sucesso comprovados</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <Star className="w-5 h-5 text-primary fill-current" />
              <span className="text-sm font-bold text-foreground">Tutores satisfeitos</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-smooth text-lg px-10 py-6 rounded-full text-white font-bold shadow-strong">
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button onClick={handleLearnMoreClick} variant="outline" size="lg" className="border-3 border-foreground bg-background/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background hover:scale-105 transition-smooth text-lg px-10 py-6 rounded-full font-bold shadow-medium">
              Conheça Nossa Clínica
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-12 pt-8 border-t border-foreground/30">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-bold text-foreground text-base drop-shadow-sm">Horário</div>
                <div className="text-foreground/90 font-medium">Seg-Sex: 8h às 18h</div>
              </div>
              <div>
                <div className="font-bold text-foreground text-base drop-shadow-sm">Localização</div>
                <div className="text-foreground/90 font-medium">Barueri, São Paulo</div>
              </div>
              <div>
                <div className="font-bold text-foreground text-base drop-shadow-sm">WhatsApp</div>
                <div className="text-foreground/90 font-medium">(11) 98875-0856</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse hidden lg:block" />
    </section>;
};
export default Hero;