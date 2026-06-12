import { Linkedin, AtSign } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-50 bg-background border-t border-border py-6 pb-24 md:pb-6">
      <div className="section-container">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hola@fitoarevalo.app" className="text-muted-foreground hover:text-foreground transition-colors">
              <AtSign size={20} />
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Aviso legal
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de cookies
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Todos los derechos reservados © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
