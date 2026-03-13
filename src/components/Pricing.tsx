import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type BillingPeriod = "weekly" | "monthly" | "yearly";

interface PriceOption {
  label: string;
  price: string;
  numericPrice: string;
  period: string;
  discount?: string;
}

const priceOptions: Record<BillingPeriod, PriceOption> = {
  weekly: {
    label: "Weekly",
    price: "$4.99",
    numericPrice: "4.99",
    period: "/ week",
  },
  monthly: {
    label: "Monthly",
    price: "$11.99",
    numericPrice: "11.99",
    period: "/ month",
    discount: "Save 40%",
  },
  yearly: {
    label: "Yearly",
    price: "$119.99",
    numericPrice: "119.99",
    period: "/ year",
    discount: "Save 17%",
  },
};

const billingPeriods: BillingPeriod[] = ["weekly", "monthly", "yearly"];

const proFeatures = [
  "Unlimited approvals",
  "Unlimited workspaces",
  "Push notifications",
];

const freeFeatures = [
  "50 approvals / month",
  "1 approver",
  "1 workspace",
  "Community support",
];

export function Pricing() {
  const [selected, setSelected] = useState<BillingPeriod>("monthly");

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          {/* ── Free Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-2xl border-2 border-airlock-violet-light/30 bg-card"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-muted-foreground text-sm">
                Get started with Airlock — no credit card required
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$0</span>
              </div>

              <Button className="w-full" variant="outline">
                Get Started
              </Button>

              <div className="pt-4 space-y-3">
                {freeFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-airlock-cyan shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Pro Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-2xl border bg-card ring-2 ring-airlock-violet-light shadow-xl shadow-airlock-violet/10"
          >
            {/* Recommended badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-airlock-violet to-airlock-violet-light px-4 py-1 text-xs font-semibold text-white">
                <Sparkles className="h-3 w-3" />
                Recommended
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Full coverage across all workspaces
                </p>
              </div>

              {/* ── Stacked pricing rows ── */}
              <div className="space-y-2">
                {billingPeriods.map((period) => {
                  const opt = priceOptions[period];
                  const isSelected = selected === period;
                  return (
                    <button
                      key={period}
                      onClick={() => setSelected(period)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all text-left",
                        isSelected
                          ? "border-airlock-violet-light bg-airlock-violet/5 shadow-sm"
                          : "border-border/50 hover:border-border bg-transparent"
                      )}
                    >
                      {/* Radio indicator */}
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors",
                          isSelected
                            ? "border-airlock-violet-light"
                            : "border-muted-foreground/30"
                        )}
                      >
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-airlock-violet-light" />
                        )}
                      </div>

                      {/* Label */}
                      <span
                        className={cn(
                          "text-sm font-medium flex-shrink-0",
                          isSelected
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {opt.label}
                      </span>

                      {/* Discount badge */}
                      {opt.discount && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-green-500 text-white leading-none">
                          {opt.discount}
                        </span>
                      )}

                      {/* Price (pushed to right) */}
                      <span className="ml-auto text-right">
                        <span
                          className={cn(
                            "text-lg font-bold",
                            isSelected
                              ? "text-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          {opt.price}
                        </span>
                        <span className="text-xs text-muted-foreground ml-1">
                          {opt.period}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <Button className="w-full bg-gradient-to-r from-airlock-violet to-airlock-violet-light hover:from-airlock-violet-light hover:to-airlock-violet text-white">
                Get Started
              </Button>

              <div className="pt-2 space-y-3">
                {proFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-airlock-cyan shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
