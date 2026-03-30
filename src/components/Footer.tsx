import { Github } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-badges";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <BrandLogo variant="footer" />
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

          {/* Apps — mobile */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Apps</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Apple AppStore
                </a>
              </li>
              <li>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Google Play
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/airlockapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
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
                  href="/docs/eula"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  End User License Agreement
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
              href="https://github.com/airlockapp"
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
