export const DEV_GUIDE_LANGUAGES = [
  { id: "python", label: "Python" },
  { id: "typescript", label: "TypeScript" },
  { id: "csharp", label: ".NET" },
  { id: "go", label: "Go" },
  { id: "rust", label: "Rust" },
] as const;

export type DevGuideLang = (typeof DEV_GUIDE_LANGUAGES)[number]["id"];

const STORAGE_KEY = "airlock-dev-guide-lang";

function isDevGuideLang(value: string): value is DevGuideLang {
  return DEV_GUIDE_LANGUAGES.some((l) => l.id === value);
}

function readStoredLang(): DevGuideLang {
  if (typeof localStorage === "undefined") return "python";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored && isDevGuideLang(stored) ? stored : "python";
}

let currentLang: DevGuideLang = readStoredLang();
const listeners = new Set<(lang: DevGuideLang) => void>();

export function getDocsLanguage(): DevGuideLang {
  return currentLang;
}

export function applyDocsLanguageToDom(lang: DevGuideLang) {
  if (typeof document === "undefined") return;
  document.querySelectorAll('.docs-lang-code-group[data-multi="true"]').forEach((group) => {
    group.querySelectorAll("[data-lang-panel]").forEach((panel) => {
      const panelLang = panel.getAttribute("data-lang-panel");
      panel.classList.toggle("hidden", panelLang !== lang);
    });
  });
}

export function setDocsLanguage(lang: DevGuideLang) {
  currentLang = lang;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
  }
  applyDocsLanguageToDom(lang);
  listeners.forEach((fn) => fn(lang));
}

export function subscribeDocsLanguage(fn: (lang: DevGuideLang) => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function initDocsLanguage() {
  applyDocsLanguageToDom(currentLang);
}
