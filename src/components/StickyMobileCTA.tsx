import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToEmail = () => {
    const el = document.getElementById("hero-email");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => el.focus(), 500);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-md border-t border-border px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <Button onClick={scrollToEmail} className="w-full h-12 rounded-xl text-base font-bold">
        Solicita una demo
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
