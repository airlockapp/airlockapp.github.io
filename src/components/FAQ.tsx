import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Airlock?",
    answer:
      "Airlock is a cryptographically enforced approval gateway for AI agents and automated systems. It ensures that sensitive or high-impact actions cannot execute without an explicitly signed human decision, verified locally by a Host Enforcer. No valid signature → no execution.",
  },
  {
    question: "What is the HARP protocol?",
    answer:
      "HARP (Human Authorization & Review Protocol) is the open specification that Airlock implements. It defines deterministic canonicalization, artifact hashing (SHA-256), decision signing (Ed25519), and replay protection. HARP is tool-agnostic and designed for cross-vendor interoperability.",
  },
  {
    question: "How does the approval flow work?",
    answer:
      "When an AI agent produces a sensitive action, the Host Enforcer intercepts it, encrypts it (AES-256-GCM), and submits it to the Gateway. The Gateway relays the ciphertext to the Mobile Approver. The human reviews, then signs an approve/reject decision with Ed25519. The Enforcer verifies the signature locally before allowing execution.",
  },
  {
    question: "Which IDEs and AI agents are supported?",
    answer:
      "Airlock provides Host Enforcer extensions for VS Code, supporting Google Antigravity, Cursor, Windsurf, and GitHub Copilot. The enforcer intercepts AI-generated commands at the IDE level, before they can execute.",
  },
  {
    question: "Can the Gateway see my code?",
    answer:
      "No. The Gateway operates as a zero-knowledge relay. All artifacts are encrypted end-to-end with AES-256-GCM — the Gateway only ever handles ciphertext. Even if the Gateway is compromised, no plaintext content is exposed. This is a core design principle of HARP.",
  },
  {
    question: "What cryptographic algorithms are used?",
    answer:
      "Airlock uses Ed25519 for digital signatures (decision signing and verification), AES-256-GCM for artifact encryption, SHA-256 for artifact hashing, and ECDH key exchange during device pairing. Private keys never leave the device — they're stored in Android Keystore / iOS Keychain.",
  },
  {
    question: "Is Airlock open source?",
    answer:
      "The HARP protocol specification is fully open source. Airlock itself is not open source. However, all Airlock enforcer extensions (Cursor, Windsurf, Antigravity, and Copilot) and the Airlock Gateway API Client are open source. The HARP spec includes test vectors, compliance criteria, and interoperability requirements to enable cross-vendor implementations.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
              questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to know about Airlock and the HARP protocol
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
