import { useState, useEffect, useRef } from "react";
import { Calculator, Minus, Plus, TrendingDown, Flame, Zap } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const CalculatorSection = () => {
  const [orderValue, setOrderValue] = useState(25);
  const [monthlyOrders, setMonthlyOrders] = useState(200);
  const [commission, setCommission] = useState(20);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const monthlyLoss = Math.round((orderValue * monthlyOrders * commission) / 100);
  const yearlyLoss = monthlyLoss * 12;

  const animatedMonthly = useAnimatedCounter(monthlyLoss, 800, isVisible);
  const animatedYearly = useAnimatedCounter(yearlyLoss, 1000, isVisible);

  const locale = "es-ES";

  const isHighLoss = yearlyLoss > 15000;
  const isMedLoss = yearlyLoss > 8000;

  const adjustValue = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    current: number,
    delta: number,
    min: number,
    max: number
  ) => {
    const newValue = Math.max(min, Math.min(max, current + delta));
    setter(newValue);
    if (!hasInteracted) setHasInteracted(true);
  };

  const whatsappMessage = `Hola, he calculado que estoy perdiendo ${animatedMonthly.toLocaleString(locale)}€/mes (${animatedYearly.toLocaleString(locale)}€/año) en comisiones. Me interesa saber cómo recuperar ese dinero.`;

  return (
    <section id="calculator" className="section-spacing bg-background" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 italic">
            Sí, estás perdiendo dinero
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cuánto dinero estás pagando en comisiones por vender a través de apps de delivery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-2xl hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => adjustValue(setMonthlyOrders, monthlyOrders, -50, 50, 2000)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-6xl md:text-7xl font-bold text-primary tabular-nums transition-all duration-300">
                    {monthlyOrders}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => adjustValue(setMonthlyOrders, monthlyOrders, 50, 50, 2000)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-center text-muted-foreground mt-4">
                  Pedidos mensuales por apps
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => adjustValue(setOrderValue, orderValue, -5, 5, 100)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-6xl md:text-7xl font-bold text-primary tabular-nums transition-all duration-300">
                    {orderValue}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => adjustValue(setOrderValue, orderValue, 5, 5, 100)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-center text-muted-foreground mt-4">
                  Ticket medio por pedido (€)
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl my-6 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Comisión de las apps</span>
                <span className="text-2xl font-bold text-primary tabular-nums">{commission}%</span>
              </div>
              <Slider
                value={[commission]}
                onValueChange={(value) => {
                  setCommission(value[0]);
                  if (!hasInteracted) setHasInteracted(true);
                }}
                min={15}
                max={40}
                step={1}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>15%</span>
                <span>40%</span>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                isHighLoss
                  ? "bg-destructive/10 border-destructive/30"
                  : isMedLoss
                  ? "bg-primary/5 border-primary/20"
                  : ""
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <CardContent className="p-8 relative">
                {isHighLoss && (
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-destructive/10 pointer-events-none" />
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {isHighLoss && (
                      <Flame className="h-6 w-6 text-destructive animate-pulse" />
                    )}
                  </div>
                  <p
                    className={`text-5xl md:text-7xl font-extrabold text-center tabular-nums transition-colors duration-500 ${
                      isHighLoss ? "text-destructive" : isMedLoss ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {animatedMonthly.toLocaleString(locale)}&nbsp;€
                  </p>
                  <p className="text-center text-muted-foreground mt-4">
                    Dinero perdido al mes
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                isHighLoss
                  ? "bg-destructive/15 border-destructive/40 shadow-[0_0_40px_-10px_hsl(var(--destructive)/0.3)]"
                  : isMedLoss
                  ? "bg-primary/8 border-primary/25"
                  : ""
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
              }}
            >
              <CardContent className="p-8 relative">
                {isHighLoss && (
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-destructive/15 pointer-events-none" />
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {isHighLoss && (
                      <Zap className="h-6 w-6 text-destructive animate-pulse" />
                    )}
                  </div>
                  <p
                    className={`text-5xl md:text-7xl font-extrabold text-center tabular-nums transition-colors duration-500 ${
                      isHighLoss ? "text-destructive" : isMedLoss ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {animatedYearly.toLocaleString(locale)}&nbsp;€
                  </p>
                  <p className="text-center text-muted-foreground mt-4 flex items-center justify-center gap-2">
                    <TrendingDown
                      className={`h-4 w-4 ${isHighLoss ? "text-destructive" : "text-muted-foreground"}`}
                    />
                    Dinero perdido al año
                  </p>
                </div>

                {isHighLoss && hasInteracted && (
                  <div className="absolute -bottom-2 -right-2 text-destructive/10">
                    <TrendingDown className="h-24 w-24" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div
            className={`mt-8 text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <p className="text-lg text-muted-foreground">
              Imagina cuánto podrías ganar repartiendo todos estos pedidos directamente.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-xl bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,44%)] text-white shadow-lg"
            >
              <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Recuperar mi dinero
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
