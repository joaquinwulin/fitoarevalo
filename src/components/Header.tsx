import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-extrabold text-xl md:text-2xl tracking-tight text-foreground">
            Fito Arévalo
          </a>

          <Button variant="default" size="default" asChild>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Contactar
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
