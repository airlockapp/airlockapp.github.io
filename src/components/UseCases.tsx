import { motion } from "framer-motion";
import {
    Server,
    Database,
    ShieldAlert,
    DollarSign,
    Workflow,
    Lock,
} from "lucide-react";

const useCases = [
    {
        icon: Server,
        title: "DevOps",
        description: "AI agents deploying infrastructure",
        example: "terraform apply",
        gradient: "from-orange-500 to-red-500",
    },
    {
        icon: Database,
        title: "Database Operations",
        description: "AI running destructive queries",
        example: "DROP TABLE customers",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        icon: ShieldAlert,
        title: "Security Operations",
        description: "AI triage agents executing actions",
        example: "quarantine_host --ip 10.0.0.5",
        gradient: "from-red-500 to-pink-500",
    },
    {
        icon: DollarSign,
        title: "Finance",
        description: "AI initiating payments",
        example: "transfer --amount 50000 --to vendor",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: Workflow,
        title: "Autonomous Workflows",
        description: "AI executing enterprise actions",
        example: "deploy_release --env production",
        gradient: "from-airlock-violet to-airlock-violet-light",
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

export function UseCases() {
    return (
        <section id="use-cases" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Beyond{" "}
                        <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
                            AI coding
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Wherever AI agents execute actions with real-world impact, Airlock
                        becomes the authorization checkpoint.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-airlock-violet/5 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div
                                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-4`}
                                >
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    {useCase.description}
                                </p>
                                <div className="rounded-lg bg-muted/50 border border-border/30 px-3 py-2">
                                    <code className="text-xs font-mono text-airlock-cyan">
                                        {useCase.example}
                                    </code>
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <Lock className="h-3.5 w-3.5 text-amber-500" />
                                    <span className="text-xs font-medium text-amber-500">
                                        Approval required
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 rounded-full border border-airlock-violet-light/30 bg-airlock-violet/10 backdrop-blur-sm px-6 py-3">
                        <Lock className="h-5 w-5 text-airlock-cyan" />
                        <span className="text-sm font-medium">
                            Airlock: The authorization checkpoint for AI actions
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
