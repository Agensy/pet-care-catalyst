import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Scissors, 
  Pill, 
  Users,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const handleWhatsAppClick = (service: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${service} na Pet Shop Lola.`;
    window.open(`https://wa.me/5511988750856?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Veterinárias",
      description: "Consultas presenciais completas com acompanhamento preventivo e orientação personalizada aos tutores.",
      features: ["Exame clínico completo", "Diagnóstico preciso", "Orientação preventiva"],
      highlight: true
    },
    {
      icon: Heart,
      title: "Cuidados Preventivos",
      description: "Programa completo de prevenção com vacinação, vermifugação e check-ups regulares.",
      features: ["Calendário de vacinas", "Controle de parasitas", "Check-ups periódicos"],
      highlight: false
    },
    {
      icon: Shield,
      title: "Emergências Veterinárias",
      description: "Atendimento de emergência para situações críticas que requerem cuidados imediatos.",
      features: ["Atendimento rápido", "Equipamentos modernos", "Equipe especializada"],
      highlight: false
    },
    {
      icon: Scissors,
      title: "Procedimentos Cirúrgicos",
      description: "Cirurgias realizadas com tecnologia moderna em ambiente seguro e esterilizado.",
      features: ["Centro cirúrgico equipado", "Anestesia segura", "Pós-operatório completo"],
      highlight: false
    },
    {
      icon: Pill,
      title: "Farmácia Veterinária",
      description: "Produtos selecionados de alta qualidade para o cuidado completo do seu pet.",
      features: ["Medicamentos originais", "Produtos de qualidade", "Orientação de uso"],
      highlight: false
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Orientação personalizada sobre nutrição, comportamento e cuidados específicos.",
      features: ["Planos personalizados", "Acompanhamento contínuo", "Orientação especializada"],
      highlight: false
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Pet Shop Lola oferece uma clínica veterinária completa, dedicada ao 
            cuidado integral de animais de estimação com atendimento personalizado 
            e foco no bem-estar animal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className={`p-8 hover:shadow-strong transition-smooth cursor-pointer group ${
                  service.highlight 
                    ? 'ring-2 ring-primary bg-gradient-primary text-primary-foreground' 
                    : 'bg-card hover:scale-105'
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    service.highlight 
                      ? 'bg-primary-foreground/20' 
                      : 'bg-primary-glow/20'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      service.highlight ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    service.highlight ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    service.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ArrowRight className={`w-4 h-4 flex-shrink-0 ${
                        service.highlight ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                      <span className={`text-sm ${
                        service.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={() => handleWhatsAppClick(service.title)}
                  variant={service.highlight ? "secondary" : "outline"}
                  className={`w-full transition-smooth ${
                    service.highlight 
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Saber Mais
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Methodology Section */}
        <div className="bg-gradient-caring rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Nossa Metodologia de Atendimento
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Utilizamos consultas presenciais com acompanhamento preventivo, orientação 
            personalizada e produtos cuidadosamente selecionados. Nosso diferencial é o 
            atendimento personalizado com foco no bem-estar animal e orientação completa aos tutores.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Consulta Completa</h4>
              <p className="text-sm text-muted-foreground">Exame detalhado e diagnóstico preciso</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Orientação Personalizada</h4>
              <p className="text-sm text-muted-foreground">Guidance específico para cada caso</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Acompanhamento Contínuo</h4>
              <p className="text-sm text-muted-foreground">Suporte preventivo e follow-up</p>
            </div>
          </div>

          <Button 
            onClick={() => handleWhatsAppClick("conhecer a metodologia")}
            size="lg"
            className="bg-primary hover:shadow-glow transition-smooth text-lg px-8 py-4 rounded-full"
          >
            Conhecer Nossa Metodologia
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;