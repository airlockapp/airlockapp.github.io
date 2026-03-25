import { useState, useCallback } from "react";
import { Lightbox } from "@/components/Lightbox";

interface N8nScreenshotGalleryProps {
    lightSrc: string;
    darkSrc: string;
    lightWidth: number;
    lightHeight: number;
    darkWidth: number;
    darkHeight: number;
}

export function N8nScreenshotGallery({
    lightSrc,
    darkSrc,
    lightWidth,
    lightHeight,
    darkWidth,
    darkHeight,
}: N8nScreenshotGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [initialIndex, setInitialIndex] = useState(0);

    const images = [
        {
            src: lightSrc,
            alt: "n8n canvas showing the Airlock sample workflow (light theme)",
            caption: "Airlock n8n Sample Flow",
        },
        {
            src: darkSrc,
            alt: "n8n canvas showing the Airlock sample workflow (dark theme)",
            caption: "Airlock n8n Sample Flow",
        },
    ];

    const openLightbox = useCallback(() => {
        const dark =
            typeof document !== "undefined" &&
            document.documentElement.classList.contains("dark");
        setInitialIndex(dark ? 1 : 0);
        setLightboxOpen(true);
    }, []);

    return (
        <>
            <button
                type="button"
                onClick={openLightbox}
                className="not-prose group relative w-full rounded-xl border border-border/50 overflow-hidden bg-muted/30 shadow-sm text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-airlock-violet-light/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Open sample n8n workflow in fullscreen gallery (light and dark screenshots)"
            >
                <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 border border-border/50 shadow-sm">
                    Click to expand
                </span>
                <img
                    src={lightSrc}
                    width={lightWidth}
                    height={lightHeight}
                    alt=""
                    className="w-full h-auto block dark:hidden"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                />
                <img
                    src={darkSrc}
                    width={darkWidth}
                    height={darkHeight}
                    alt=""
                    className="w-full h-auto hidden dark:block"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                />
            </button>

            <Lightbox
                images={images}
                initialIndex={initialIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                variant="fullscreen"
            />
        </>
    );
}
