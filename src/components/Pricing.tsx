import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Get started with Airlock — no credit card required",
    features: [
      "50 approvals / month",
      "1 approver",
      "1 workspace",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro Weekly",
    price: "$4.99",
    period: "/ user / week",
    description: "Full coverage, billed weekly",
    features: [
      "Unlimited approvals",
      "Unlimited workspaces",
      "Push notifications",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro Monthly",
    price: "$11.99",
    period: "/ user / month",
    description: "Full coverage across all workspaces",
    features: [
      "Unlimited approvals",
      "Unlimited workspaces",
      "Push notifications",
    ],
    cta: "Get Started",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-airlock-violet-light to-airlock-cyan bg-clip-text text-transparent">
              pricing
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Start free. Scale when you're ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border bg-card ${plan.highlighted
                ? "ring-2 ring-airlock-violet-light shadow-xl shadow-airlock-violet/10 scale-[1.02]"
                : "border-border/50"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-airlock-violet to-airlock-violet-light px-4 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    Recommended
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  )}
                </div>

                <Button
                  className={`w-full ${plan.highlighted
                    ? "bg-gradient-to-r from-airlock-violet to-airlock-violet-light hover:from-airlock-violet-light hover:to-airlock-violet text-white"
                    : ""
                    }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                <div className="pt-4 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-airlock-cyan shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
