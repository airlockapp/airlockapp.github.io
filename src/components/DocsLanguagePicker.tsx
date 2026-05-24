import { useEffect, useState } from "react";
import {
  DEV_GUIDE_LANGUAGES,
  getDocsLanguage,
  initDocsLanguage,
  setDocsLanguage,
  subscribeDocsLanguage,
  type DevGuideLang,
} from "@/lib/docs-language-store";

export function DocsLanguagePicker() {
  const [lang, setLang] = useState<DevGuideLang>(getDocsLanguage());

  useEffect(() => {
    initDocsLanguage();
    return subscribeDocsLanguage(setLang);
  }, []);

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <p className="text-sm font-medium text-foreground">Sample code language</p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Applies to all SDK examples below. HTTP and JSON blocks stay protocol-specific.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="SDK sample language">
        {DEV_GUIDE_LANGUAGES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={lang === id}
            onClick={() => setDocsLanguage(id)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              lang === id
                ? "bg-primary text-primary-foreground"
                : "bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
