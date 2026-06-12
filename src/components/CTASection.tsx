import { Bell, Mail, CheckCircle2, MessageCircle, Zap, XCircle, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const emailSchema = z.string().trim().email().max(255);

const CTASection = () => {
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
    <section id="demo" className="section-spacing bg-background relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-12">
            {[0, 1, 2].map((index) => (
              <Bell
                key={index}
                className="h-6 w-6 md:h-7 md:w-7 text-primary"
                strokeWidth={1.5}
                style={{
                  opacity: 0.6 + (index * 0.2),
                  transform: `scale(${0.85 + (index * 0.1)})`,
                }}
              />
            ))}
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Mira cómo sería tu propia app. Gratis
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comparte tu enlace de Glovo, Uber Eats o Just Eat y te diseñamos una vista previa de tu propia app de pedidos.
          </p>

          {isSubmitted ? (
            <div className="max-w-lg mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-foreground text-sm sm:text-base">
                    ¡Enviado! Te escribiremos pronto para montar tu app.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <p className="text-foreground font-semibold mb-1">
                    ¿Quieres tu preview más rápido?
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Escríbenos por WhatsApp y te la preparamos antes.
                  </p>
                  <Button
                    asChild
                    className="bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,44%)] text-white"
                  >
                    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Escribir por WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : showEmailForm ? (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
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
                🎁 Te enviaremos una vista previa gratuita de tu app basada en tu carta actual
              </p>
            </>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto items-center justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 rounded-xl bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,44%)] text-white"
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
};

export default CTASection;
