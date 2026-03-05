# Airlock

**Human-in-the-loop security for AI coding agents.**

Airlock gates AI agent actions across your IDE — every shell command, file edit, and MCP tool call requires explicit human approval from a mobile app before it can execute.

🌐 **[airlockapp.io](https://airlockapp.io)**

## What Is Airlock?

Modern AI coding assistants (Cursor, Windsurf, GitHub Copilot, Antigravity) can execute arbitrary commands and modify your codebase autonomously. Airlock intercepts these actions, routes them to your phone for review, and blocks execution until you approve — giving you a security checkpoint between AI intent and real-world impact.

### How It Works

1. **Enforcer extensions** installed in your IDE intercept actions before they execute
2. Actions are routed through the **Airlock Gateway** to your registered device
3. The **Mobile Approver** app presents each action for review
4. You **Approve** or **Reject** — the IDE blocks until you decide

## Supported IDEs

| IDE | Enforcer Strategy |
|---|---|
| **Cursor** | Workspace hooks (shell commands & MCP tool calls) |
| **Windsurf** | Hooks-based gating with project rules |
| **GitHub Copilot** | Hooks-based gating |
| **Antigravity** | Chrome DevTools Protocol (CDP) interception |

## About This Repo

This repository contains the **Airlock marketing and documentation site**, deployed at [airlockapp.io](https://airlockapp.io).

### Pages

- **Home** — Product overview, features, and getting started
- **About** — Team and mission
- **Docs** — Central documentation hub with per-enforcer guides
  - Cursor, Windsurf, Copilot, Antigravity enforcer docs
  - Privacy Policy & Data Security
- **Blog** — Product updates and announcements
- **Changelog** — Release history
- **Contact** — Get in touch

### Tech Stack

- **[Astro](https://astro.build/)** — Static site generation
- **[React](https://react.dev/)** — Interactive UI components
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — Scroll animations and transitions
- **[Radix UI](https://www.radix-ui.com/)** — Accessible component primitives
- **[Lucide Icons](https://lucide.dev/)** — Icon library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment

The site is automatically deployed to GitHub Pages via the included GitHub Actions workflow on every push to `main`.

## Project Structure

```
/
├── .github/workflows/     # GitHub Pages deployment
├── public/                # Static assets (favicon, images)
├── src/
│   ├── components/        # React & Astro UI components
│   ├── img/               # Image assets
│   ├── layouts/           # Page layouts
│   ├── lib/               # Utility functions
│   ├── pages/             # All site pages and docs
│   │   ├── docs/          # Enforcer guides, privacy, data security
│   │   └── blog/          # Blog posts
│   └── styles/            # Global CSS
├── astro.config.js        # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
└── package.json
```

## License

MIT License — see [LICENSE](LICENSE) for details.

© 2025 Out of Band Systems, Airlock
