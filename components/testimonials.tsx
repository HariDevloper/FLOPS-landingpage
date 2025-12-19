"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO at TechVentures India",
    content:
      "FLOPS Technologies delivered beyond expectations. Their full-stack development expertise transformed our outdated platform into a modern, high-performing application.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Martinez",
    role: "Marketing Director at GlobalCorp",
    content:
      "The digital marketing strategy they crafted increased our online visibility by 300%. These young professionals are incredibly talented and dedicated.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Amit Patel",
    role: "Founder at DataInsights",
    content:
      "Their data analysis work uncovered insights that completely changed our business strategy. Professional, thorough, and highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-32 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Hear what our clients have to say about working with FLOPS Technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-primary/50 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base text-foreground">{testimonial.name}</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
