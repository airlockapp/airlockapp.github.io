import { motion } from "framer-motion";
import { Smartphone, Users, Puzzle, CheckCircle, Clock } from "lucide-react";

const roadmapItems = [
    {
        icon: Smartphone,
        title: "Airlock Apps",
        description:
            "Allow developers to register 3rd party Airlock Enforcer applications integrated directly to the Airlock Mobile Approver through the Airlock Gateway.",
        status: "in-progress",
    },
    {
        icon: Users,
        title: "Team Formation",
        description:
            "Build teams, invite teammates, and configure flexible review and approval policies — \"at least one\", \"at most X\", or \"everyone must review/approve\".",
        status: "planned",
    },
    {
        icon: Puzzle,
        title: "n8n Use Case Samples",
        description:
            "Ready-to-use n8n workflow templates that demonstrate Airlock integration for common automation scenarios.",
        status: "planned",
    },
];

const statusConfig: Record<string, { label: string; color: string; icon: typeof CheckCircle }> = {
    "in-progress": { label: "In Progress", color: "text-airlock-cyan", icon: Clock },
    planned: { label: "Planned", color: "text-muted-foreground", icon: Clock },
};

export function Roadmap() {
    return (
        <section id="roadmap" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        What's{" "}
                        <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
                            next
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Our roadmap for making AI authorization universal.
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-airlock-violet-light via-airlock-cyan to-transparent" />

                        {roadmapItems.map((roadmapItem, index) => {
                            const Icon = roadmapItem.icon;
                            const status = statusConfig[roadmapItem.status];
                            const StatusIcon = status.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="relative pl-16 pb-10 last:pb-0"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-background border-2 border-airlock-violet-light flex items-center justify-center">
                                        <div className={`w-2 h-2 rounded-full ${roadmapItem.status === "in-progress" ? "bg-airlock-cyan animate-pulse" : "bg-muted-foreground/40"
                                            }`} />
                                    </div>

                                    <div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-airlock-violet/10">
                                                <Icon className="h-5 w-5 text-airlock-violet-light" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-lg font-semibold">
                                                        {roadmapItem.title}
                                                    </h3>
                                                    <span className={`inline-flex items-center gap-1 text-xs font-medium ${status.color}`}>
                                                        <StatusIcon className="h-3 w-3" />
                                                        {status.label}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {roadmapItem.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
