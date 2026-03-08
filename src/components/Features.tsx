import { motion } from "framer-motion";
import {
  Eye,
  ShieldCheck,
  Lock,
  RefreshCw,
  Monitor,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Zero-Knowledge Gateway",
    description:
      "The Gateway never sees plaintext. All artifacts are encrypted end-to-end. It operates as a ciphertext-only relay — by design.",
    spec: "HARP-CORE",
    gradient: "from-airlock-violet to-airlock-violet-light",
  },
  {
    icon: Smartphone,
    title: "Mobile Approval",
    description:
      "Flutter app for Android & iOS. Receive push notifications, review encrypted artifacts, and sign decisions — all from your phone.",
    gradient: "from-airlock-cyan to-airlock-cyan-light",
  },
  {
    icon: Monitor,
    title: "Multi-IDE Support",
    description:
      "Host Enforcer extensions for VS Code — supporting Antigravity, Cursor, Windsurf, and GitHub Copilot. Intercept and gate AI actions at the source.",
    gradient: "from-indigo-500 to-airlock-violet",
  },
  {
    icon: RefreshCw,
    title: "Replay Protection",
    description:
      "Every decision includes a nonce, expiry timestamp, and journal entry. Replay and substitution attacks are cryptographically prevented.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Ed25519 Signatures",
    description:
      "Every decision is cryptographically signed by the human approver and verified locally at the Host Enforcer. No signature, no execution.",
    spec: "HARP-CORE §6.3",
    gradient: "from-airlock-violet-light to-purple-500",
  },
  {
    icon: Lock,
    title: "AES-256-GCM Encryption",
    description:
      "Artifacts are encrypted with AES-256-GCM via ECDH key exchange during device pairing. Only the paired approver can decrypt.",
    gradient: "from-airlock-cyan to-teal-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Security by{" "}
            <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
              design
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Every layer of Airlock is built to enforce trust, not assume it.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-airlock-violet/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                {feature.spec && (
                  <span className="inline-block mt-3 text-xs font-mono text-airlock-cyan/70 bg-airlock-cyan/10 px-2 py-0.5 rounded">
                    {feature.spec}
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
