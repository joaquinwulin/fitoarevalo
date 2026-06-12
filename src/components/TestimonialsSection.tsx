import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Desde que usamos nuestra propia plataforma, cada pedido directo es más margen para nosotros.",
    author: "Jardín Bambú",
    role: "Restaurante chino",
  },
  {
    quote: "Nos montaron todo en menos de una semana. Ahora recibimos pedidos directos sin pagar comisiones absurdas.",
    author: "Hong Kong City",
    role: "Restaurante chino",
  },
  {
    quote: "Lo mejor es que no tuve que hacer nada. Me llamaron, configuraron todo, y listo.",
    author: "ShiShang",
    role: "Restaurante vegetariano",
  },
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-spacing bg-background overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <span className="text-5xl md:text-6xl text-primary font-serif">"</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 max-w-3xl mx-auto">
            Todos están hablando de mí y no es por casualidad
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Resuelvo lo que realmente importa. No lo digo yo, lo dicen ellos:
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[340px] md:w-[400px] rounded-2xl card-shadow snap-center relative"
              >
                <CardContent className="p-8">
                  <div className="absolute top-6 right-6">
                    <span className="text-4xl text-primary/30 font-serif">"</span>
                  </div>

                  <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 pr-8 leading-relaxed">
                    {testimonial.quote}
                  </blockquote>

                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-14 w-14 rounded-xl">
                      <AvatarFallback className="rounded-xl">
                        {testimonial.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
