import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const docsItems = [
  { label: "Cursor", href: "/docs/cursor", icon: "/enforcers/cursor.png" },
  { label: "Windsurf", href: "/docs/windsurf", icon: "/enforcers/windsurf.png" },
  { label: "Antigravity", href: "/docs/antigravity", icon: "/enforcers/antigravity.png" },
  { label: "Copilot", href: "/docs/copilot", icon: "/enforcers/copilot.png" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const docsRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Supported IDEs", href: "/#ide-support" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Protocol", href: "/#protocol" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  // Close docs dropdown on outside click
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
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/airlock-logo.png"
            alt="Airlock"
            className="h-8 w-8 rounded-lg"
          />
          <span className="font-bold text-xl bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
            Airlock
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Docs Dropdown */}
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
                <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider">
                  Installation Guides
                </p>
                {docsItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setIsDocsOpen(false)}
                  >
                    <img src={item.icon} alt={item.label} className="w-5 h-5 rounded" />
                    {item.label} Enforcer
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

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
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
                  <img src={item.icon} alt={item.label} className="w-5 h-5 rounded" />
                  {item.label} Enforcer
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
