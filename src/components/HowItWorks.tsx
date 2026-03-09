import { motion } from "framer-motion";
import { Bot, Shield, Smartphone, CheckCircle, Globe, FileSignature, Play } from "lucide-react";

const steps = [
    {
        icon: Bot,
        number: "01",
        title: "AI Agent acts",
        description:
            "An AI coding agent in your IDE produces a sensitive command — a file mutation, a shell execution, a deployment.",
        color: "text-purple-400",
        borderColor: "border-purple-500/30",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: Shield,
        number: "02",
        title: "Enforcer intercepts",
        description:
            "The Host Enforcer extension intercepts the command, encrypts it with AES-256-GCM, and submits the encrypted artifact to the Gateway.",
        color: "text-airlock-violet-light",
        borderColor: "border-airlock-violet-light/30",
        bgColor: "bg-airlock-violet/10",
    },
    {
        icon: Smartphone,
        number: "03",
        title: "Human reviews",
        description:
            "The Mobile Approver receives a push notification. The human reviews the decrypted artifact and signs their decision with Ed25519.",
        color: "text-airlock-cyan",
        borderColor: "border-airlock-cyan/30",
        bgColor: "bg-airlock-cyan/10",
    },
    {
        icon: CheckCircle,
        number: "04",
        title: "Decision enforced",
        description:
            "The Enforcer verifies the signature locally against the paired public key. Valid signature → execute. Invalid or missing → reject. No exceptions.",
        color: "text-emerald-400",
        borderColor: "border-emerald-500/30",
        bgColor: "bg-emerald-500/10",
    },
];

const flowNodes = [
    { label: "IDE Agent", icon: Bot, color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500/40" },
    { label: "Host Enforcer", icon: Shield, color: "text-airlock-violet-light", bg: "bg-airlock-violet/15", border: "border-airlock-violet-light/40" },
    { label: "Zero-knowledge Gateway", icon: Globe, color: "text-muted-foreground", bg: "bg-muted/30", border: "border-border" },
    { label: "Mobile Approver", icon: Smartphone, color: "text-airlock-cyan", bg: "text-airlock-cyan bg-airlock-cyan/15", border: "border-airlock-cyan/40" },
    { label: "Signed Decision", icon: FileSignature, color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/40" },
    { label: "Execution", icon: Play, color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/40" },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-20 md:py-32">
            {/* Smooth background gradient */}
            <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, hsl(var(--muted) / 0.4), transparent 75%)' }} />
            <div className="container mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        How{" "}
                        <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
                            Airlock
                        </span>{" "}
                        works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Four steps between an AI action and execution. No shortcuts.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="relative"
                                >
                                    {/* Connector line (desktop) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-border to-transparent z-10" />
                                    )}

                                    <div
                                        className={`h-full p-6 rounded-2xl border ${step.borderColor} ${step.bgColor} backdrop-blur-sm`}
                                    >
                                        {/* Number badge */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span
                                                className={`text-xs font-mono font-bold ${step.color} opacity-60`}
                                            >
                                                {step.number}
                                            </span>
                                            <div
                                                className={`p-2 rounded-lg ${step.bgColor}`}
                                            >
                                                <Icon className={`h-5 w-5 ${step.color}`} />
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Vertical flow diagram */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-16 flex justify-center"
                    >
                        <div className="flex flex-col items-center gap-0">
                            {flowNodes.map((node, index) => {
                                const Icon = node.icon;
                                return (
                                    <div key={index} className="flex flex-col items-center">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                            className={`flex items-center gap-3 px-6 py-3 rounded-xl border ${node.border} ${node.bg} backdrop-blur-sm min-w-[220px] justify-center`}
                                        >
                                            <Icon className={`h-5 w-5 ${node.color}`} />
                                            <span className="text-sm font-semibold">{node.label}</span>
                                        </motion.div>
                                        {index < flowNodes.length - 1 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                                className="flex flex-col items-center py-1"
                                            >
                                                <div className="w-px h-4 bg-gradient-to-b from-border to-border/50" />
                                                <span className="text-muted-foreground/60 text-xs">↓</span>
                                                <div className="w-px h-4 bg-gradient-to-b from-border/50 to-transparent" />
                                            </motion.div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
