"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users2, Globe2, Sparkles } from "lucide-react"

export function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance leading-tight font-heading">
              ABOUT <span className="gradient-text">FLOPS TECHNOLOGIES</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/90 mb-4 sm:mb-6 leading-relaxed normal-case">
              <span className="text-white font-semibold">FLOPS Technologies</span> is a team of 6 passionate B.Tech AI & Data Science graduates from India.
            </p>
            <p className="text-base sm:text-lg text-foreground/90 mb-4 sm:mb-6 leading-relaxed normal-case">
              We combine cutting-edge technology with creative problem-solving to deliver exceptional results.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed normal-case">
              Our expertise spans data analysis, technical documentation, full-stack development, and digital marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all card-hover"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
              </div>
              <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2 text-foreground">B.TECH AI & DS</h3>
              <p className="text-[10px] sm:text-sm text-foreground/80 leading-relaxed normal-case">
                AI & Data Science Experts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-secondary/50 transition-all card-hover"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                <Users2 className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-[0_0_15px_rgba(96,165,250,0.9)]" />
              </div>
              <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2 text-foreground">6 MEMBERS</h3>
              <p className="text-[10px] sm:text-sm text-foreground/80 leading-relaxed normal-case">
                Dedicated Professionals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-accent/50 transition-all card-hover"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                <Globe2 className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-[0_0_15px_rgba(14,165,233,0.9)]" />
              </div>
              <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2 text-foreground">INDIA-BASED</h3>
              <p className="text-[10px] sm:text-sm text-foreground/80 leading-relaxed normal-case">
                Serving Globally
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all card-hover"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
              </div>
              <h3 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2 text-foreground">INNOVATION</h3>
              <p className="text-[10px] sm:text-sm text-foreground/80 leading-relaxed normal-case">
                Cutting-edge Solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
