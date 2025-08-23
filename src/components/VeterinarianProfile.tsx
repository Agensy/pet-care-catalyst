import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Heart, Calendar } from "lucide-react";

const VeterinarianProfile = () => {
  const profileImage = "/lovable-uploads/67d7a7e3-34e9-4b02-a818-08c1dc4d17a9.png";

  return (
    <section id="veterinario" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça Nosso
              <span className="text-primary"> Veterinário Principal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicação, experiência e amor pelos animais em cada consulta
            </p>
          </div>

          {/* Profile Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={profileImage} 
                  alt="Dr. Claudio Silva - Veterinário Principal da Pet Shop Lola" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-strong"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-glow/30 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-xl" />
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Dr. Claudio Silva
                </h3>
                <p className="text-primary font-semibold mb-6">
                  Médico Veterinário | CRMV-SP 12345
                </p>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Com mais de 8 anos de experiência em medicina veterinária, Dr. Claudio Silva 
                  é graduado pela Universidade de São Paulo (USP) e especialista em 
                  <strong className="text-foreground"> Clínica Médica de Pequenos Animais</strong>.
                </p>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Sua paixão pelos animais começou ainda na infância, e hoje dedica sua carreira 
                  a proporcionar <strong className="text-primary">cuidados excepcionais e tratamentos 
                  personalizados</strong> para cada paciente, sempre priorizando o bem-estar animal 
                  e a orientação aos tutores.
                </p>
              </div>

              {/* Qualifications Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center bg-card hover:shadow-medium transition-smooth">
                  <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground mb-1">Formação</div>
                  <div className="text-xs text-muted-foreground">USP - São Paulo</div>
                </Card>

                <Card className="p-4 text-center bg-card hover:shadow-medium transition-smooth">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground mb-1">Experiência</div>
                  <div className="text-xs text-muted-foreground">8+ Anos</div>
                </Card>
              </div>

              {/* Specialties */}
              <div className="bg-primary-glow/10 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Award className="w-5 h-5 text-primary mr-2" />
                  Especialidades
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Clínica Médica de Pequenos Animais</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Medicina Preventiva e Vacinação</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Dermatologia Veterinária</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeterinarianProfile;