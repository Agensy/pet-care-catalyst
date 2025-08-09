import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada animal recebe cuidados únicos e personalizados, com foco total no bem-estar e orientação completa aos tutores.",
      color: "accent"
    },
    {
      icon: Award,
      title: "Qualidade Sem Compromissos",
      description: "Nunca comprometemos a qualidade do atendimento por questões comerciais ou pressa. Excelência sempre em primeiro lugar.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Orientação Especializada",
      description: "Tutores bem orientados fazem toda a diferença na saúde dos pets. Fornecemos guidance completo para cada situação.",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Acompanhamento Preventivo",
      description: "Cuidados preventivos sistemáticos que garantem vida longa e saudável para seus pets através de monitoramento contínuo.",
      color: "primary"
    }
  ];

  const values = [
    "Cada animal merece cuidados de excelência",
    "Tutores orientados fazem a diferença na saúde dos pets", 
    "Qualidade do atendimento sempre em primeiro lugar",
    "Transformar a relação entre tutores e pets"
  ];

  return (
    <section className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-glow/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium text-primary">O que nos diferencia</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O que torna a Pet Shop Lola única no cuidado veterinário: 
            atendimento personalizado com foco no bem-estar animal e 
            orientação completa aos tutores.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-strong transition-smooth group hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    item.color === 'primary' 
                      ? 'bg-primary-glow/20' 
                      : 'bg-accent/20'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      item.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-10 text-primary-foreground">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Nossa Missão</h3>
            </div>
            <p className="text-lg leading-relaxed opacity-95">
              <strong>Transformar a relação entre tutores e pets através de 
              cuidados veterinários de excelência.</strong> Acreditamos que cada animal 
              merece o melhor cuidado possível e que tutores bem orientados são 
              fundamentais para a saúde e felicidade dos pets.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Nossos Valores Fundamentais
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary-glow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-smooth">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Casos de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Tutores Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;