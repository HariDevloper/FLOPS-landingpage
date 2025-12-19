"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.5_0.28_280)]/20 to-[oklch(0.5_0.28_320)]/20" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Ready to <span className="gradient-text">streamline</span> your workflow?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty">
              Join thousands of teams already using StreamLine to build, deploy, and scale faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact-form" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group w-full h-11 sm:h-12 text-sm sm:text-base">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </Button>
              </Link>
              <Link href="/contact-form" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="glass border-white/20 text-foreground bg-transparent w-full h-11 sm:h-12 text-sm sm:text-base">
                  Schedule Demo
                </Button>
              </Link>
            </div>

            <p className="text-[10px] sm:text-sm text-muted-foreground mt-4 sm:mt-6">
              14-day free trial • No credit card required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
