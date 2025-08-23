import { Card } from "@/components/ui/card";
import { Star, Quote, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      pet: "Luna (Golden Retriever)",
      text: "A Pet Shop Lola salvou a vida da minha Luna! O atendimento foi excepcional, desde o diagnóstico até o tratamento. A equipe é muito carinhosa e sempre me manteve informada sobre cada etapa.",
      rating: 5,
      treatment: "Cirurgia de emergência"
    },
    {
      name: "João Santos",
      pet: "Mimi (Gato Persa)",
      text: "Encontrei na Pet Shop Lola o cuidado que eu procurava para a Mimi. As consultas preventivas e orientações da veterinária fizeram toda a diferença na saúde dela. Recomendo muito!",
      rating: 5,
      treatment: "Cuidados preventivos"
    },
    {
      name: "Ana Carolina",
      pet: "Thor (Pastor Alemão)",
      text: "Excelente profissionalismo! O Thor sempre foi ansioso em clínicas, mas aqui ele se sente tranquilo. A equipe tem um dom especial com os animais e isso faz toda a diferença.",
      rating: 5,
      treatment: "Consultas regulares"
    },
    {
      name: "Roberto Lima",
      pet: "Bella (SRD)",
      text: "A Bella foi resgatada e chegou com vários problemas de saúde. Graças aos cuidados especializados da Pet Shop Lola, hoje ela está completamente recuperada e feliz!",
      rating: 5,
      treatment: "Tratamento completo"
    },
    {
      name: "Fernanda Costa",
      pet: "Simba (Gato SRD)",
      text: "Que diferença faz ter uma equipe que realmente se importa! O Simba teve uma recuperação impressionante após o tratamento. Gratidão eterna à Pet Shop Lola!",
      rating: 5,
      treatment: "Recuperação pós-cirúrgica"
    },
    {
      name: "Carlos Eduardo",
      pet: "Nina (Poodle)",
      text: "Atendimento humanizado e técnica impecável. A Nina sempre recebe o melhor cuidado aqui. A orientação sobre nutrição e cuidados preventivos é excepcional.",
      rating: 5,
      treatment: "Acompanhamento nutricional"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-glow/20 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium text-primary">Depoimentos de Tutores</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que Nossos <span className="text-primary">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Casos de sucesso reais que demonstram nosso compromisso com a 
            excelência no cuidado veterinário e a satisfação dos tutores.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-strong transition-smooth group hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-primary-glow/60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Treatment Badge */}
              <div className="mb-4">
                <span className="inline-block bg-primary-glow/20 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.treatment}
                </span>
              </div>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">Tutor(a) de {testimonial.pet}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Summary */}
        <div className="bg-black rounded-2xl p-8 lg:p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-white/80">Tutores Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-white/80">Casos de Sucesso</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5★</div>
              <div className="text-white/80">Avaliação Média</div>
            </div>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Junte-se aos Tutores Satisfeitos!
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Experiências reais de tutores que escolheram a Pet Shop Lola para 
            cuidar de seus pets com carinho, profissionalismo e excelência.
          </p>

          {/* Star Rating Display */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-primary fill-current" />
            ))}
            <span className="text-lg font-semibold text-white ml-2">5.0/5.0</span>
          </div>

          <p className="text-sm text-white/60">
            Baseado em centenas de avaliações de tutores reais
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;