/**
 * Store badges — both SVG for consistent scaling.
 *
 * App Store: US/UK badge from Apple (local copy of developer.apple.com asset).
 * Google Play: English SVG from pioug/google-play-badges (community vectors
 * aligned to Google’s “Get it on Google Play” artwork; Google’s CDN ships PNG).
 *
 * Guidelines: https://developer.apple.com/app-store/marketing/guidelines/
 * https://play.google.com/intl/en_us/badges/
 */

import {
  APP_STORE_BADGE_SRC,
  APP_STORE_URL,
  GOOGLE_PLAY_BADGE_SRC,
  PLAY_STORE_URL,
  STORE_BADGE_IMG_CLASS,
  STORE_BADGE_LINK_CLASS,
} from "@/lib/store-badges";

export { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-badges";

type StoreBadgesProps = {
  className?: string;
};

export function StoreBadges({ className = "" }: StoreBadgesProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 ${className}`}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={STORE_BADGE_LINK_CLASS}
        aria-label="Download Airlock Approver on the App Store"
      >
        <img
          src={APP_STORE_BADGE_SRC}
          alt="Download on the App Store"
          className={STORE_BADGE_IMG_CLASS}
          width={120}
          height={40}
          loading="lazy"
          decoding="async"
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={STORE_BADGE_LINK_CLASS}
        aria-label="Get Airlock Approver on Google Play"
      >
        <img
          src={GOOGLE_PLAY_BADGE_SRC}
          alt="Get it on Google Play"
          className={STORE_BADGE_IMG_CLASS}
          width={240}
          height={71}
          loading="lazy"
          decoding="async"
        />
      </a>
    </div>
  );
}
