import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Github, Home } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BrandLogo } from "@/components/BrandLogo";

const docsItems = [
  { label: "Developer Guide", href: "/docs/developer-guide" },
  { label: "Enforcer Gateway", href: "/docs/enforcer-gateway" },
  { label: "Organizations", href: "/docs/organizations" },
  { label: "Airlock Apps", href: "/docs/airlock-apps" },
  { label: "Gateway SDK", href: "/docs/sdk" },
  { label: "n8n", href: "/docs/n8n" },
  { label: "OpenClaw", href: "/docs/openclaw" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const docsRef = useRef<HTMLDivElement>(null);

  const sectionNavItems = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Protocol", href: "/#protocol" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (docsRef.current && !docsRef.current.contains(event.target as Node)) {
        setIsDocsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="container flex min-h-20 h-20 md:h-[6.5rem] lg:h-28 items-center justify-between gap-2">
        <a href="/" className="flex items-center gap-3 min-w-0" aria-label="Airlock home">
          <BrandLogo variant="header" />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </a>
          {sectionNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div ref={docsRef} className="relative">
            <button
              onClick={() => setIsDocsOpen(!isDocsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isDocsOpen ? "rotate-180" : ""}`} />
            </button>
            {isDocsOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-lg shadow-black/10 py-2 z-50">
                {docsItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setIsDocsOpen(false)}
                  >
                    <span className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
                    </span>
                    {item.label}
                  </a>
                ))}
                <div className="border-t border-border/40 mt-1 pt-1">
                  <a
                    href="/docs"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-link hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setIsDocsOpen(false)}
                  >
                    All Docs →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="https://github.com/airlockapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <a href="/contact">Contact Sales</a>
          </Button>
          <ThemeToggle />

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40">
          <div className="container py-4 space-y-4">
            <a
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              Home
            </a>
            {sectionNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border/40">
              <p className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider mb-2">
                Docs
              </p>
              {docsItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
                  </span>
                  {item.label}
                </a>
              ))}
              <a
                href="/docs"
                className="block py-2 text-sm text-link hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Docs →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
