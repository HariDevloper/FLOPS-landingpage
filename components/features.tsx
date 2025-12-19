"use client"

import { Zap, Shield, TrendingUp, Workflow } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Deploy in seconds, not hours. Our optimized infrastructure ensures your projects run at peak performance.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards to keep your data safe.",
  },
  {
    icon: TrendingUp,
    title: "Scale Effortlessly",
    description:
      "From startup to enterprise, our platform grows with you. Handle millions of requests without breaking a sweat.",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description: "AI-powered workflows that learn from your patterns and suggest optimizations to boost productivity.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Everything you need to <span className="gradient-text">succeed</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Powerful features designed to streamline your workflow and accelerate productivity.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[oklch(0.75_0.28_280)] to-[oklch(0.7_0.28_320)] flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
              </div>
              <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2 text-foreground line-clamp-1">{feature.title}</h3>
              <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
