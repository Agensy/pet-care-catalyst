import { Play } from "lucide-react";

const PromoVideo = () => {
  return (
    <section id="video" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça a Pet Shop Lola
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Assista ao nosso vídeo promocional e descubra como cuidamos com carinho 
              do seu melhor amigo
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-card">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YfVK0A0Q34A"
                title="Pet Shop Lola - Vídeo Promocional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 p-6 bg-card rounded-xl border">
            <div className="flex items-center justify-center space-x-2 text-primary mb-2">
              <Play className="w-5 h-5" />
              <span className="font-semibold">Vídeo Promocional</span>
            </div>
            <p className="text-muted-foreground">
              Veja como nossa equipe especializada cuida do bem-estar dos pets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;