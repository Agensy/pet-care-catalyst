import { Card } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";
import aboutImage from "@/assets/about-veterinary.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Veterinário examinando gato com cuidado"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-glow/30 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-xl" />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa História de 
                <span className="text-primary"> Cuidado e Dedicação</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Pet Shop Lola é uma empresa consolidada no setor de saúde animal, 
                construída sobre a crença de que <strong className="text-foreground">cada animal merece 
                cuidados de excelência</strong> e tutores bem orientados fazem toda a diferença 
                na saúde dos pets.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossa missão é <strong className="text-primary">transformar a relação entre tutores 
                e pets através de cuidados veterinários de excelência</strong>, sempre mantendo 
                nosso compromisso de nunca comprometer a qualidade do atendimento por 
                questões comerciais ou pressa.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-card hover:shadow-medium transition-smooth">
                <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Casos de Sucesso</div>
              </Card>

              <Card className="p-6 text-center bg-card hover:shadow-medium transition-smooth">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Tutores Satisfeitos</div>
              </Card>

              <Card className="p-6 text-center bg-card hover:shadow-medium transition-smooth">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </Card>

              <Card className="p-6 text-center bg-card hover:shadow-medium transition-smooth">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Suporte de Emergência</div>
              </Card>
            </div>

            {/* Values */}
            <div className="bg-primary-glow/10 rounded-xl p-6 border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">Nossos Valores</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Cada animal merece cuidados de excelência</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Tutores orientados fazem a diferença na saúde dos pets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Qualidade do atendimento sempre em primeiro lugar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;