import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511988750856?text=Olá! Gostaria de agendar uma consulta para meu pet na Pet Shop Lola.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-strong hover:shadow-glow transition-smooth text-white animate-pulse hover:animate-none"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium shadow-medium opacity-0 hover:opacity-100 transition-smooth pointer-events-none whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;