import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const features = [
  "Configuración completa de tu aplicación de pedidos con tu dominio personalizado",
  "Eres dueño de tus datos: acceso completo a la información de tus clientes",
  "Llamadas de seguimiento semanales para maximizar tus ingresos",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-spacing bg-background">
      <div className="section-container">
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold animate-pulse-soft">
            <Clock className="h-4 w-4 mr-2" />
            Solo aceptamos 1 restaurante nuevo a la semana
          </Badge>
        </div>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Puedes empezar a recibir pedidos directos de tus clientes ahora mismo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosotros lo configuramos todo. Tú solo te encargas de recibir pedidos y seguir haciendo la mejor comida.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="rounded-3xl shadow-xl shadow-black/20">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start justify-between mb-6">
                <Zap className="h-7 w-7 text-primary" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <p className="text-primary font-bold text-xl">Cuota Fija</p>
              </div>

              <p className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
                50€
                <span className="text-lg font-normal text-muted-foreground">/mes</span>
              </p>

              <Badge variant="destructive" className="bg-destructive/10 text-destructive border border-destructive/30 hover:bg-destructive/10 mb-8">
                +600€ cuota de configuración
              </Badge>

              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                Para quienes prefieren un precio fijo sin comisiones sobre sus pedidos.
              </p>

              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-foreground text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="w-full">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  Solicita una demo
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6 border-primary/20 rounded-2xl">
            <CardContent className="px-6 py-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">
                  Igualamos tu inversión en captación hasta 200€ los primeros 30 días.
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Si tú apuestas por crecer, nosotros apostamos contigo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
