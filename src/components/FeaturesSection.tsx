import { Globe, ImageIcon, MapPin, LayoutDashboard, Truck, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: Globe, title: "Creamos tu web de pedidos", description: "Tu web de pedidos con tu marca, lista para recibir pedidos." },
  { icon: ImageIcon, title: "Subimos tu carta completa", description: "Menú, fotos y precios: todo configurado por nosotros." },
  { icon: MapPin, title: "Zonas de reparto listas", description: "Configuramos tus zonas de entrega y horarios de apertura." },
  { icon: LayoutDashboard, title: "Panel de pedidos en tiempo real", description: "Recibes pedidos en tu panel de admin y panel de repartidores." },
  { icon: Truck, title: "Tu equipo reparte", description: "Tus propios repartidores o personal entregan los pedidos." },
  { icon: CreditCard, title: "Cobras como quieras", description: "Los clientes pagan en efectivo o por tu TPV existente." },
];

const FeaturesSection = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Con tu App, tienes tu propio canal de delivery.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosotros lo configuramos todo. Tú sigues haciendo la mejor comida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-2xl card-shadow hover:card-shadow-hover transition-shadow duration-300 group"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
