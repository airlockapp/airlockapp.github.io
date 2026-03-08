import { Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/airlock-logo.png"
                alt="Airlock"
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
                Airlock
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cryptographic approval gateway for AI agents. Built on the HARP
              protocol.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#how-it-works"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#protocol"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  HARP Protocol
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/airlockapp/extensions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Extensions Repo
                </a>
              </li>
              <li>
                <a
                  href="https://harp-protocol.github.io/blog/introducing-harp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  What is HARP?
                </a>
              </li>
              <li>
                <a
                  href="https://harp-protocol.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  HARP Specification
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/harp-protocol/samples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub Samples Repo
                </a>
              </li>
              <li>
                <a
                  href="/docs/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/docs/data-security"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Data Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Out of Band Systems, Airlock. Built on the HARP Protocol.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground/60 font-mono">
              HARP-CORE v0.2 · Ed25519 · AES-256-GCM · SHA-256
            </p>
            <a
              href="https://github.com/airlockapp/extensions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
