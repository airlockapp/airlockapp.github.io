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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[50rem] max-h-[50rem] bg-airlock-violet-light/10 dark:bg-airlock-violet/15 rounded-full filter blur-[160px] animate-blob" />
        <div className="absolute -top-1/4 right-0 w-[60vw] h-[60vw] max-w-[50rem] max-h-[50rem] bg-airlock-violet-light/5 dark:bg-airlock-violet/8 rounded-full filter blur-[180px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-[50vw] h-[50vw] max-w-[40rem] max-h-[40rem] bg-airlock-cyan/5 dark:bg-airlock-cyan/10 rounded-full filter blur-[160px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-airlock-violet-light/30 bg-airlock-violet/10 dark:bg-airlock-violet/20 backdrop-blur-sm px-4 py-1.5 text-sm">
                <Shield className="h-4 w-4 text-airlock-cyan" />
                <span className="text-foreground/70 dark:text-muted-foreground">
                  Built on the HARP Specification
                </span>
              </div>
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
              Remotely approve agent tool calls with cryptographically secure
              human authorization.
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
                  <div key={index} className="flex flex-col items-center lg:items-start gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon className="h-4 w-4 text-airlock-cyan" />
                    </div>
                    <p className="text-sm font-semibold">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                );
              })}
            </motion.div>

            {/* Supported IDEs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col items-center lg:items-start gap-3 pt-4 w-full"
            >
              <span className="text-xs text-muted-foreground/50 uppercase tracking-widest font-semibold">Works with</span>
              <div className="grid grid-cols-2 gap-4 justify-items-center md:flex md:items-center md:gap-6">
                {[
                  { name: "Claude Code", icon: "/enforcers/claude-code.svg", href: "/docs/claude-code" },
                  { name: "Cursor", icon: "/enforcers/cursor.png", href: "/docs/cursor" },
                  { name: "Windsurf", icon: "/enforcers/windsurf.png", href: "/docs/windsurf" },
                  { name: "Antigravity", icon: "/enforcers/antigravity.png", href: "/docs/antigravity" },
                  { name: "Copilot", icon: "/enforcers/copilot.png", href: "/docs/copilot" },
                ].map((ide) => (
                  <a
                    key={ide.name}
                    href={ide.href}
                    className="flex items-center gap-2 md:gap-3 text-foreground/80 hover:text-foreground transition-colors group"
                  >
                    <img src={ide.icon} alt={ide.name} className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform" />
                    <span className="text-sm md:text-base font-bold">{ide.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <a href="/docs/cli" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <span className="w-6 h-6 rounded bg-airlock-cyan/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-airlock-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                  CLI
                </a>
                <a href="/docs/shells" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <span className="w-6 h-6 rounded bg-airlock-cyan/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-airlock-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
                  </span>
                  Shells (Bash, Zsh, PowerShell)
                </a>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
          </div>

          {/* Right: Screenshot carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0 relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-airlock-violet-light/10 dark:bg-airlock-violet/20 rounded-full blur-[80px] animate-pulse-glow" />

            <div className="relative">
              {/* Carousel */}
              <div className="w-64 md:w-72 overflow-hidden rounded-[2rem] shadow-xl shadow-airlock-violet-light/15 dark:shadow-airlock-violet/20 border border-airlock-violet-light/10 dark:border-airlock-violet/10 bg-white dark:bg-zinc-900">
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
              </div>

              {/* Carousel controls */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-full bg-airlock-violet/20 hover:bg-airlock-violet/40 transition-colors text-foreground"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex gap-2">
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
                </div>
                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-full bg-airlock-violet/20 hover:bg-airlock-violet/40 transition-colors text-foreground"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
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
