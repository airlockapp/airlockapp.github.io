import brandTransLight from "@/img/brand_lg/brand_trans_light.png";
import brandTransDark from "@/img/brand_lg/brand_trans_dark.png";

interface BrandLogoProps {
    /** e.g. header vs footer width cap */
    variant?: "header" | "footer";
    className?: string;
}

export function BrandLogo({ variant = "header", className = "" }: BrandLogoProps) {
    const isHeader = variant === "header";

    /** Mobile: cap width so logo + hamburger + actions fit; scale up from md. (~1.5× vs base) */
    const sizeHeader =
        "h-[4.5rem] w-auto max-w-[min(16.5rem,calc(100vw-8.5rem))] md:h-[5.625rem] md:max-w-[420px] lg:h-24 lg:max-w-[480px]";
    const sizeFooter =
        "h-[4.5rem] w-auto max-w-[min(27rem,calc(100vw-3rem))] sm:h-[5.25rem] sm:max-w-[min(33rem,calc(100vw-3.5rem))] md:h-24 md:max-w-[510px] lg:max-w-[570px]";

    const size = isHeader ? sizeHeader : sizeFooter;

    return (
        <span className={`inline-flex items-center shrink-0 min-w-0 ${className}`}>
            <img
                src={brandTransLight.src}
                width={brandTransLight.width}
                height={brandTransLight.height}
                alt="Airlock"
                className={`${size} object-contain object-left dark:hidden`}
            />
            <img
                src={brandTransDark.src}
                width={brandTransDark.width}
                height={brandTransDark.height}
                alt="Airlock"
                className={`${size} object-contain object-left hidden dark:block`}
            />
        </span>
    );
}
