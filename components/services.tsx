"use client"

import { motion } from "framer-motion"
import { BarChart3, FileCode2, Code2, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: BarChart3,
    title: "DATA ANALYSIS",
    description:
      "Transform raw data into actionable insights. We help you make data-driven decisions with advanced analytics and visualization.",
    features: ["Statistical Analysis", "Data Visualization", "Predictive Modeling", "Business Intelligence"],
    color: "primary",
    slug: "data-analysis",
  },
  {
    icon: FileCode2,
    title: "TECHNICAL DOCUMENTATION",
    description:
      "Clear, comprehensive documentation that bridges the gap between complex systems and user understanding.",
    features: ["API Documentation", "User Guides", "Technical Specs", "Knowledge Base"],
    color: "secondary",
    slug: "technical-documentation",
  },
  {
    icon: Code2,
    title: "FULL STACK DEVELOPMENT",
    description:
      "End-to-end web development solutions built with modern technologies, scalable architecture, and best practices.",
    features: ["Web Applications", "Mobile Responsive", "API Development", "Cloud Deployment"],
    color: "accent",
    slug: "full-stack-development",
  },
  {
    icon: Megaphone,
    title: "DIGITAL MARKETING",
    description: "Strategic digital marketing campaigns that boost your online presence and drive measurable results.",
    features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics & Reporting"],
    color: "primary",
    slug: "digital-marketing",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-32 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance font-heading">
              OUR <span className="gradient-text">SERVICES</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed normal-case">
              Comprehensive digital solutions tailored to your unique business requirements.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group card-hover flex flex-col"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform shrink-0">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
              </div>
              <h3 className="text-sm sm:text-base md:text-2xl font-bold mb-2 sm:mb-3 text-foreground line-clamp-2">{service.title}</h3>
              <p className="hidden sm:block text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed normal-case line-clamp-3">{service.description}</p>
              <ul className="hidden md:block space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground normal-case">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href={`/services/${service.slug}`}
                  className="block w-full px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg glass border border-white/20 text-[10px] sm:text-xs md:text-sm text-foreground bg-transparent hover:bg-primary/10 transition-all duration-300 font-medium text-center relative z-10"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                >
                  LEARN MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 sm:p-8 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">CUSTOM SOLUTIONS</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed normal-case">
            Need something specific? We offer customized packages based on your requirements.
          </p>
          <Link href="/contact-form">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-secondary h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
              GET CUSTOM QUOTE
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
