import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Bot, Smartphone, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";

const heroScreenshots = [
  {
    light: "/screenshots/mobile/login-light.jpeg",
    dark: "/screenshots/mobile/login-dark.jpeg",
    alt: "Airlock Mobile Approver — Login",
    caption: "Login",
  },
  {
    light: "/screenshots/mobile/workspaces-light.jpeg",
    dark: "/screenshots/mobile/workspaces-dark.jpeg",
    alt: "Airlock — Workspaces",
    caption: "Workspaces",
  },
  {
    light: "/screenshots/mobile/pairing-light.jpeg",
    dark: "/screenshots/mobile/pairing-dark.jpeg",
    alt: "Airlock — Workspace Pairing",
    caption: "Workspace Pairing",
  },
];

const steps = [
  {
    icon: Bot,
    label: "AI acts",
    desc: "Agent produces a sensitive command",
  },
  {
    icon: Shield,
    label: "Intercepted",
    desc: "Enforcer encrypts & submits",
  },
  {
    icon: Smartphone,
    label: "Human reviews",
    desc: "Approver signs with Ed25519",
  },
  {
    icon: CheckCircle,
    label: "Enforced",
    desc: "Signature verified locally",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Listen for theme changes (class "dark" on <html>)
  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const getImgSrc = (shot: (typeof heroScreenshots)[number]) =>
    isDark ? shot.dark : shot.light;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroScreenshots.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroScreenshots.length) % heroScreenshots.length);
  }, []);

  useEffect(() => {
    if (lightboxOpen) return;
    const interval = setInterval(nextSlide, 30000);
    return () => clearInterval(interval);
  }, [nextSlide, lightboxOpen]);

  return (
    <section className="relative py-20 md:py-32">
      {/* Background gradients */}
      <motion.div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[50rem] max-h-[50rem] bg-airlock-violet-light/10 dark:bg-airlock-violet/15 rounded-full filter blur-[160px] animate-blob" />
        <motion.div className="absolute -top-1/4 right-0 w-[60vw] h-[60vw] max-w-[50rem] max-h-[50rem] bg-airlock-violet-light/5 dark:bg-airlock-violet/8 rounded-full filter blur-[180px] animate-blob animation-delay-2000" />
        <motion.div className="absolute -bottom-1/4 left-1/3 w-[50vw] h-[50vw] max-w-[40rem] max-h-[40rem] bg-airlock-cyan/5 dark:bg-airlock-cyan/10 rounded-full filter blur-[160px] animate-blob animation-delay-4000" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <motion.div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="inline-flex items-center gap-2 rounded-full border border-airlock-violet-light/30 bg-airlock-violet/10 dark:bg-airlock-violet/20 backdrop-blur-sm px-4 py-1.5 text-sm">
                <Shield className="h-4 w-4 text-airlock-cyan" />
                <span className="text-foreground/70 dark:text-muted-foreground">
                  Built on the HARP Specification
                </span>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-3xl"
            >
              AI commands.{" "}
              <span className="bg-gradient-to-r from-airlock-violet-light via-airlock-cyan to-airlock-cyan-light bg-clip-text text-transparent animate-gradient">
                Remotely approved.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Enterprise human-in-the-loop authorization for AI agents —
              cryptographically enforced, deployed in your environment.
            </motion.p>

            {/* How it works steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 w-full max-w-2xl"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div key={index} className="flex flex-col items-center lg:items-start gap-1">
                    <motion.div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon className="h-4 w-4 text-airlock-cyan" />
                    </motion.div>
                    <p className="text-sm font-semibold">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-airlock-violet to-airlock-violet-light hover:from-airlock-violet-light hover:to-airlock-violet text-white"
                asChild
              >
                <a href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-airlock-violet-light/30 hover:bg-airlock-violet/20 hover:text-foreground dark:hover:text-white"
                asChild
              >
                <a
                  href="https://harp-protocol.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the Spec
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Screenshot carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0 relative"
          >
            {/* Glow effect */}
            <motion.div className="absolute -inset-8 bg-airlock-violet-light/10 dark:bg-airlock-violet/20 rounded-full blur-[80px] animate-pulse-glow" />

            <motion.div className="relative">
              {/* Carousel */}
              <motion.div className="w-64 md:w-72 overflow-hidden rounded-[2rem] shadow-xl shadow-airlock-violet-light/15 dark:shadow-airlock-violet/20 border border-airlock-violet-light/10 dark:border-airlock-violet/10 bg-white dark:bg-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${currentIndex}-${isDark}`}
                    src={getImgSrc(heroScreenshots[currentIndex])}
                    alt={heroScreenshots[currentIndex].alt}
                    className="w-full cursor-pointer block"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setLightboxOpen(true)}
                  />
                </AnimatePresence>
              </motion.div>

              {/* Carousel controls */}
              <motion.div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-full bg-airlock-violet/20 hover:bg-airlock-violet/40 transition-colors text-foreground"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <motion.div className="flex gap-2">
                  {heroScreenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                        ? "bg-airlock-cyan w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </motion.div>
                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-full bg-airlock-violet/20 hover:bg-airlock-violet/40 transition-colors text-foreground"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={heroScreenshots.map((s) => ({ src: getImgSrc(s), alt: s.alt, caption: s.caption }))}
        initialIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
