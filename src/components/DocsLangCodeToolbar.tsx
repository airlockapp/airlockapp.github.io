import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import {
  DEV_GUIDE_LANGUAGES,
  getDocsLanguage,
  initDocsLanguage,
  setDocsLanguage,
  subscribeDocsLanguage,
  type DevGuideLang,
} from "@/lib/docs-language-store";

interface DocsLangCodeToolbarProps {
  multi: boolean;
  fixedLabel?: string;
}

function getVisibleCodeText(group: Element | null): string {
  if (!group) return "";
  const panel = group.querySelector(".docs-lang-panel:not(.hidden)");
  const code = panel?.querySelector("code");
  return code?.textContent?.trim() ?? "";
}

export function DocsLangCodeToolbar({ multi, fixedLabel }: DocsLangCodeToolbarProps) {
  const [lang, setLang] = useState<DevGuideLang>(getDocsLanguage());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    initDocsLanguage();
    return subscribeDocsLanguage(setLang);
  }, []);

  const copyVisibleCode = (button: HTMLButtonElement) => {
    const group = button.closest(".docs-lang-code-group");
    const text = getVisibleCodeText(group);
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center justify-between gap-2 px-2 py-1.5 border-b border-border/50 bg-muted/30">
      {multi ? (
        <div
          className="flex flex-wrap items-center gap-1"
          role="tablist"
          aria-label="Code block language"
        >
          {DEV_GUIDE_LANGUAGES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={lang === id}
              onClick={() => setDocsLanguage(id)}
              className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                lang === id
                  ? "bg-background text-foreground shadow-sm border border-border/50"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      ) : (
        <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground px-1">
          {fixedLabel ?? "Code"}
        </span>
      )}

      <button
        type="button"
        onClick={(e) => copyVisibleCode(e.currentTarget)}
        className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors shrink-0"
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <Check className="h-3 w-3" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-3 w-3" />
            Copy
          </>
        )}
      </button>
    </div>
  );
}
