import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";

const screenshots = [
    {
        light: "/screenshots/mobile/login-light.jpeg",
        dark: "/screenshots/mobile/login-dark.jpeg",
        alt: "Airlock Mobile Approver — Login",
        caption: "Login",
        description: "Sign in securely",
    },
    {
        light: "/screenshots/mobile/pairing-light.jpeg",
        dark: "/screenshots/mobile/pairing-dark.jpeg",
        alt: "Airlock — Workspace Pairing",
        caption: "Pairing",
        description: "Scan to pair your workspace",
    },
    {
        light: "/screenshots/mobile/workspaces-light.jpeg",
        dark: "/screenshots/mobile/workspaces-dark.jpeg",
        alt: "Airlock — Workspaces",
        caption: "Workspaces",
        description: "Manage paired workspaces",
    },
    {
        light: "/screenshots/mobile/approvals-active-light.jpeg",
        dark: "/screenshots/mobile/approvals-active-dark.jpeg",
        alt: "Airlock — Active Approvals",
        caption: "Active Requests",
        description: "Review pending approvals",
    },
    {
        light: "/screenshots/mobile/approvals-expired-light.jpeg",
        dark: "/screenshots/mobile/approvals-expired-dark.jpeg",
        alt: "Airlock — Expired Approvals",
        caption: "Expired Requests",
        description: "Past approval decisions",
    },
    {
        light: "/screenshots/mobile/request-review-light.jpeg",
        dark: "/screenshots/mobile/request-review-dark.jpeg",
        alt: "Airlock — Review Request",
        caption: "Review Request",
        description: "Inspect the AI action details",
    },
    {
        light: "/screenshots/mobile/dnd-light.jpeg",
        dark: "/screenshots/mobile/dnd-dark.jpeg",
        alt: "Airlock — Do Not Disturb",
        caption: "Do Not Disturb",
        description: "Manage notification policies",
    },
    {
        light: "/screenshots/mobile/dnd-duration-light.jpeg",
        dark: "/screenshots/mobile/dnd-duration-dark.jpeg",
        alt: "Airlock — DND Duration",
        caption: "DND Duration",
        description: "Set quiet hours duration",
    },
    {
        light: "/screenshots/mobile/dnd-revoke-light.jpeg",
        dark: "/screenshots/mobile/dnd-revoke-dark.jpeg",
        alt: "Airlock — Revoke DND",
        caption: "Revoke DND",
        description: "Resume notifications",
    },
];

export function MobileShowcase() {
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

    const getImgSrc = (shot: (typeof screenshots)[number]) =>
        isDark ? shot.dark : shot.light;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }, []);

    useEffect(() => {
        if (lightboxOpen) return;
        const interval = setInterval(nextSlide, 30000);
        return () => clearInterval(interval);
    }, [nextSlide, lightboxOpen]);

    const getVisibleScreenshots = () => {
        const prev = (currentIndex - 1 + screenshots.length) % screenshots.length;
        const next = (currentIndex + 1) % screenshots.length;
        return { prev, current: currentIndex, next };
    };

    const { prev, current, next } = getVisibleScreenshots();

    return (
        <section className="py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Approve from{" "}
                        <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
                            anywhere
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        The Airlock Mobile Approver runs on Android and iOS. Receive push
                        notifications, review artifacts, and sign decisions — all from your
                        phone.
                    </motion.p>
                </div>

                {/* Carousel: prev / current / next */}
                <div className="flex items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
                    {/* Previous */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex flex-col items-center cursor-pointer"
                        onClick={prevSlide}
                    >
                        <div className="relative">
                            <img
                                src={getImgSrc(screenshots[prev])}
                                alt={screenshots[prev].alt}
                                className="w-40 md:w-48 rounded-[1.5rem] shadow-xl border border-border/30 opacity-60 hover:opacity-80 transition-opacity bg-white dark:bg-zinc-900"
                            />
                        </div>
                        <div className="mt-3 text-center">
                            <p className="font-semibold text-xs text-muted-foreground">{screenshots[prev].caption}</p>
                        </div>
                    </motion.div>

                    {/* Current (featured) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative flex flex-col items-center z-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-airlock-violet/30 to-airlock-cyan/20 rounded-3xl blur-2xl scale-110 animate-pulse-glow" />
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={`${current}-${isDark}`}
                                    src={getImgSrc(screenshots[current])}
                                    alt={screenshots[current].alt}
                                    className="w-52 md:w-64 rounded-[2rem] shadow-2xl shadow-airlock-violet/20 border border-border/30 cursor-pointer bg-white dark:bg-zinc-900"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setLightboxOpen(true)}
                                />
                            </AnimatePresence>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="font-semibold text-sm">{screenshots[current].caption}</p>
                            <p className="text-xs text-muted-foreground">{screenshots[current].description}</p>
                        </div>
                    </motion.div>

                    {/* Next */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden md:flex flex-col items-center cursor-pointer"
                        onClick={nextSlide}
                    >
                        <div className="relative">
                            <img
                                src={getImgSrc(screenshots[next])}
                                alt={screenshots[next].alt}
                                className="w-40 md:w-48 rounded-[1.5rem] shadow-xl border border-border/30 opacity-60 hover:opacity-80 transition-opacity bg-white dark:bg-zinc-900"
                            />
                        </div>
                        <div className="mt-3 text-center">
                            <p className="font-semibold text-xs text-muted-foreground">{screenshots[next].caption}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Carousel controls */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-airlock-violet/20 hover:bg-airlock-violet/40 transition-colors text-foreground"
                        aria-label="Previous screenshot"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="flex gap-1.5">
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                    ? "bg-airlock-cyan w-5"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                                aria-label={`Go to screenshot ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-airlock-violet/20 hover:bg-airlock-violet/40 transition-colors text-foreground"
                        aria-label="Next screenshot"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Lightbox */}
            <Lightbox
                images={screenshots.map((s) => ({ src: getImgSrc(s), alt: s.alt, caption: s.caption }))}
                initialIndex={currentIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
        </section>
    );
}
