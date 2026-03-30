/**
 * Shared store URLs, local SVG paths (see /public/badges), and Tailwind classes.
 */

export const APP_STORE_URL =
  "https://apps.apple.com/app/airlock-approver/id6760250865";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.airlockapp.io";

export const APP_STORE_BADGE_SRC = "/badges/app-store-en.svg";
export const GOOGLE_PLAY_BADGE_SRC = "/badges/google-play-en.svg";

export const STORE_BADGE_LINK_CLASS =
  "inline-flex shrink-0 items-center leading-none transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-airlock-violet-light/50 focus-visible:ring-offset-2 rounded-md";

export const STORE_BADGE_IMG_CLASS =
  "block h-10 w-auto max-h-10 object-contain md:h-12 md:max-h-12";

/**
 * Getting started (docs): identical hit boxes so both SVGs scale to the same size.
 */
export const STORE_BADGE_DOCS_LINK_CLASS =
  "inline-flex h-10 w-[168px] shrink-0 items-center justify-center overflow-hidden leading-none transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-airlock-violet-light/50 focus-visible:ring-offset-2 rounded-md md:h-12 md:w-[184px]";
export const STORE_BADGE_DOCS_IMG_CLASS =
  "block h-full w-full min-h-0 min-w-0 object-contain object-center";

/** Wrapper for a row of badges (docs / marketing). */
export const STORE_BADGE_ROW_CLASS =
  "not-prose mt-6 mb-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 md:justify-start";
