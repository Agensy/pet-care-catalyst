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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/5deb9a34-d36a-45d1-8747-d281477ba655.png" alt="Pessoa sorrindo com seu pet - cuidado e carinho veterinário" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-glow/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium text-primary">Clínica de Confiança em Barueri</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Cuidados Veterinários 
            <span className="text-primary block">de Excelência e Qualidade</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Atendimento personalizado com foco no bem-estar animal e orientação completa aos tutores. 
            Sua tranquilidade é nossa prioridade.
          </p>

          {/* Social Proof */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-accent fill-current" />
              <span className="text-sm font-medium text-foreground">Casos de sucesso comprovados</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-primary fill-current" />
              <span className="text-sm font-medium text-foreground">Tutores satisfeitos</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-4 rounded-full text-slate-50">
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button onClick={handleLearnMoreClick} variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-4 rounded-full">
              Conheça Nossa Clínica
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold text-foreground">Horário</div>
                <div className="text-muted-foreground">Seg-Sex: 8h às 18h</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Localização</div>
                <div className="text-muted-foreground">Barueri, São Paulo</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">WhatsApp</div>
                <div className="text-muted-foreground">(11) 98875-0856</div>
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