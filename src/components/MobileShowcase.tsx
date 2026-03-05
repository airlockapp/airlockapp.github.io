import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";

const screenshots = [
    {
        src: "/screenshots/login.png",
        alt: "Airlock Mobile Approver — Login",
        caption: "Login",
        description: "Sign in securely",
    },
    {
        src: "/screenshots/pairing-qr.png",
        alt: "Airlock — Scan pairing QR code",
        caption: "Pair via QR",
        description: "Scan to pair your workspace",
    },
    {
        src: "/screenshots/pairing-code.png",
        alt: "Airlock — Enter pairing code",
        caption: "Pair via Code",
        description: "Enter pairing code manually",
    },
    {
        src: "/screenshots/workspaces.png",
        alt: "Airlock — Workspaces list",
        caption: "Workspaces",
        description: "Manage paired workspaces",
    },
    {
        src: "/screenshots/workspaces-waiting.png",
        alt: "Airlock — Workspaces waiting for approval",
        caption: "Waiting",
        description: "Workspaces with pending requests",
    },
    {
        src: "/screenshots/approvals-active.png",
        alt: "Airlock — Active approval requests",
        caption: "Active Requests",
        description: "Review pending approvals",
    },
    {
        src: "/screenshots/review-request.png",
        alt: "Airlock — Review an approval request",
        caption: "Review Request",
        description: "Inspect the AI action details",
    },
    {
        src: "/screenshots/approve-reject.png",
        alt: "Airlock — Approve or reject AI action",
        caption: "Approve / Reject",
        description: "Cryptographically sign your decision",
    },
    {
        src: "/screenshots/approvals-inactive.png",
        alt: "Airlock — Inactive approval history",
        caption: "History",
        description: "Past approval decisions",
    },
];

export function MobileShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

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
                                src={screenshots[prev].src}
                                alt={screenshots[prev].alt}
                                className="w-40 md:w-48 rounded-[1.5rem] shadow-xl border border-border/30 opacity-60 hover:opacity-80 transition-opacity bg-white"
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
                                    key={current}
                                    src={screenshots[current].src}
                                    alt={screenshots[current].alt}
                                    className="w-52 md:w-64 rounded-[2rem] shadow-2xl shadow-airlock-violet/20 border border-border/30 cursor-pointer bg-white"
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
                                src={screenshots[next].src}
                                alt={screenshots[next].alt}
                                className="w-40 md:w-48 rounded-[1.5rem] shadow-xl border border-border/30 opacity-60 hover:opacity-80 transition-opacity bg-white"
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
                images={screenshots}
                initialIndex={currentIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
        </section>
    );
}
