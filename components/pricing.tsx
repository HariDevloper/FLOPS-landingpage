"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams and side projects",
    features: ["5 team members", "10 projects", "50GB storage", "Basic analytics", "Email support"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams that need more power",
    features: [
      "20 team members",
      "Unlimited projects",
      "500GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the plan that fits your needs.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass rounded-2xl p-6 sm:p-8 relative ${plan.popular ? "border-accent/50 md:scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] sm:text-xs font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{plan.description}</p>
              </div>

              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground text-sm">/month</span>}
              </div>

              <Button
                className={`w-full mb-4 sm:mb-6 h-10 sm:h-12 text-sm sm:text-base ${plan.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "glass border-white/20 text-foreground hover:bg-white/10"
                  }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </Button>

              <ul className="space-y-2 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.9)] shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
