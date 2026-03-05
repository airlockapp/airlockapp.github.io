import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const enforcers = [
    {
        name: "Cursor",
        displayName: "Airlock Cursor Enforcer",
        icon: "/enforcers/cursor.png",
        docsUrl: "/docs/cursor",
        description: "AI-native code editor",
    },
    {
        name: "Windsurf",
        displayName: "Airlock Windsurf Enforcer",
        icon: "/enforcers/windsurf.png",
        docsUrl: "/docs/windsurf",
        description: "AI-powered IDE by Codeium",
    },
    {
        name: "Antigravity",
        displayName: "Airlock Antigravity Enforcer",
        icon: "/enforcers/antigravity.png",
        docsUrl: "/docs/antigravity",
        description: "Google's AI coding agent",
    },
    {
        name: "Copilot",
        displayName: "Airlock Copilot Enforcer",
        icon: "/enforcers/copilot.png",
        docsUrl: "/docs/copilot",
        description: "GitHub's AI pair programmer",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function IDESupport() {
    return (
        <section id="ide-support" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Supported{" "}
                        <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
                            IDEs
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Install the Airlock Enforcer extension for your IDE. Open source and
                        available on the VS Code Marketplace.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    {enforcers.map((enforcer) => (
                        <motion.a
                            key={enforcer.name}
                            variants={item}
                            href={enforcer.docsUrl}
                            className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-airlock-violet/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-airlock-violet/20 to-airlock-cyan/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src={enforcer.icon}
                                    alt={enforcer.displayName}
                                    className="relative w-16 h-16 rounded-xl"
                                />
                            </div>
                            <div className="text-center">
                                <p className="font-semibold text-sm">{enforcer.name}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {enforcer.description}
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs text-link opacity-0 group-hover:opacity-100 transition-opacity">
                                Install Guide
                                <ExternalLink className="h-3 w-3" />
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
