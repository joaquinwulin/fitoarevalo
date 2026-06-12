import { UserX, Clock, ShieldX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    icon: UserX,
    title: "Los clientes no son tuyos",
    description: "Glovo guarda sus datos. Tú no puedes contactarlos ni fidelizarlos.",
  },
  {
    icon: ShieldX,
    title: "Sin control cuando hay problemas",
    description: "Comida fría, repartidor no entrega el pedido y Glovo te penaliza. Tú no puedes hacer nada.",
  },
  {
    icon: Clock,
    title: "Tu dinero, retenido 15 días",
    description: "Glovo cobra al instante. Tú esperas 2 semanas para ver tu dinero.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-foreground">
            Con Glovo, tú trabajas. Ellos ganan.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Pierdes margen, control y caja. Cada día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {painPoints.map((painPoint, index) => (
            <Card
              key={index}
              className="rounded-2xl hover:border-primary/30 transition-all duration-300 text-center group"
            >
              <CardContent className="p-8 md:p-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <painPoint.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {painPoint.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  {painPoint.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
