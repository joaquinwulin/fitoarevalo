import { MessageCircle, Mail, Bell, CheckCircle2, Zap, XCircle, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const emailSchema = z.string().trim().email().max(255);

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error("Por favor, introduce un email válido.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("¡Enviado! Te escribiremos pronto para montar tu app.");
      setEmail("");
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.07]">
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[140%] max-w-none"
          preserveAspectRatio="none"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M0,${180 + i * 12} C200,${120 + i * 15} 400,${240 - i * 10} 600,${190 + i * 8} C800,${140 + i * 12} 1000,${220 - i * 8} 1200,${170 + i * 10}`}
              stroke="currentColor"
              strokeWidth={1.2}
              className="text-foreground"
            />
          ))}
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold animate-pulse-soft mb-8">
            <Bell className="h-4 w-4 mr-2" />
            ¿Cansado de pagar comisiones a Glovo, Uber Eats o Just Eat?
          </Badge>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] tracking-tight mb-8">
            Creamos tu App de pedidos, ¡deja de perder dinero!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl mx-auto leading-relaxed">
            Envíanos tu enlace de Glovo, Uber Eats o Just Eat y te mostramos cómo sería tu propia app de pedidos. Gratis.
          </p>

          {isSubmitted ? (
            <div className="max-w-lg mx-auto">
              <Card className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <CardContent className="flex items-center gap-3 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-foreground text-sm sm:text-base">
                    ¡Enviado! Te escribiremos pronto para montar tu app.
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : showEmailForm ? (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico..."
                    required
                    maxLength={255}
                    className="pl-12 h-14 rounded-xl text-base"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="h-14 rounded-xl px-8"
                >
                  {isSubmitting ? "..." : "Quiero mi app gratis"}
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                🎁 Diseñamos una vista previa de tu propia app basada en tu carta actual
              </p>
            </>
          ) : (
            <div className="flex flex-col gap-3 max-w-lg mx-auto items-center justify-center">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-14 rounded-xl text-white hover:scale-105 active:scale-95 bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,44%)]"
                >
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Escríbenos por WhatsApp
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-14 rounded-xl"
                  onClick={() => setShowEmailForm(true)}
                >
                  Prefiero dejar mi email
                </Button>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-primary" />
              Listo en 72h
            </span>
            <span className="inline-flex items-center gap-1.5">
              <XCircle className="h-4 w-4 text-primary" />
              Cancela cuando quieras
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-primary" />
              Tus datos, siempre tuyos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
