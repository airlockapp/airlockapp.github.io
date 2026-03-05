import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Layers, ArrowRight } from "lucide-react";

const layers = [
    { number: 7, name: "Governance & Evolution", color: "text-slate-400" },
    { number: 6, name: "Security & Compliance", color: "text-red-400" },
    { number: 5, name: "Key Management", color: "text-orange-400" },
    { number: 4, name: "Transport Binding", color: "text-yellow-400" },
    { number: 3, name: "Gateway Exchange", color: "text-airlock-cyan" },
    { number: 2, name: "Prompt & Session Extensions", color: "text-airlock-violet-light" },
    { number: 1, name: "Core Authorization", color: "text-purple-400" },
];

export function Protocol() {
    return (
        <section id="protocol" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Text */}
                    <div className="flex-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full border border-airlock-cyan/30 bg-airlock-cyan/10 px-3 py-1 text-xs font-medium text-airlock-cyan">
                                <BookOpen className="h-3 w-3" />
                                Open Standard
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            Built on{" "}
                            <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
                                HARP
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-muted-foreground leading-relaxed max-w-xl"
                        >
                            HARP (Human Authorization & Review Protocol) is a cryptographically
                            verifiable authorization and control layer for AI coding agents. It
                            defines deterministic canonicalization, artifact hashing, decision
                            signing, and replay protection as open, interoperable standards.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-muted-foreground leading-relaxed max-w-xl"
                        >
                            HARP is tool-agnostic and designed for enterprise-grade deployment.
                            Cross-vendor interoperability is achieved through open schemas, test
                            vectors, and compliance testing.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 pt-4"
                        >
                            <Button
                                variant="outline"
                                className="border-airlock-violet-light/30 hover:bg-airlock-violet/20 group"
                                asChild
                            >
                                <a
                                    href="https://harp-protocol.github.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Read the Specification
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right: Layer stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full max-w-md"
                    >
                        <div className="space-y-2">
                            {layers.map((layer, index) => (
                                <motion.div
                                    key={layer.number}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                                    className="flex items-center gap-4 p-3 rounded-lg border border-border/30 bg-card/30 backdrop-blur-sm hover:bg-card/60 transition-colors"
                                >
                                    <span className="text-xs font-mono text-muted-foreground w-6">
                                        L{layer.number}
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-current" style={{ color: 'currentColor' }}>
                                        <div className={`w-2 h-2 rounded-full ${layer.color.replace('text-', 'bg-')}`} />
                                    </div>
                                    <span className={`text-sm font-medium ${layer.color}`}>
                                        {layer.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-xs text-muted-foreground font-mono">
                                HARP Specification Stack v0.2
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
