"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!'
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later or contact us directly at primespark.pvt@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Ready to start your project? Let's discuss how we can help transform your ideas into reality.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-6">
              <div className="glass rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 md:gap-4 text-center lg:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
                  </div>
                  <div className="min-w-0 w-full">
                    <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 md:mb-2 text-foreground">Email Us</h3>
                    <p className="hidden md:block text-muted-foreground mb-2 text-sm leading-relaxed">For inquiries and project discussions</p>
                    <a
                      href="mailto:primespark.pvt@gmail.com"
                      className="text-[9px] sm:text-xs md:text-base text-primary hover:text-primary/80 transition-colors block break-all"
                    >
                      primespark.pvt@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 md:gap-4 text-center lg:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-[0_0_15px_rgba(96,165,250,0.9)]" />
                  </div>
                  <div className="min-w-0 w-full">
                    <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 md:mb-2 text-foreground">Call Us</h3>
                    <p className="hidden md:block text-muted-foreground mb-2 text-sm leading-relaxed">
                      Mon - Sat, 9 AM - 6 PM IST
                    </p>
                    <a href="tel:+916385420576" className="text-[10px] sm:text-xs md:text-base text-primary hover:text-primary/80 transition-colors block">
                      +91 6385420576
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-4 sm:p-5 md:p-6 col-span-2 lg:col-span-1">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 md:gap-4 text-center lg:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-[0_0_15px_rgba(14,165,233,0.9)]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 md:mb-2 text-foreground">Visit Us</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      Based in India, Serving worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm md:text-base text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border text-foreground h-10 md:h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm md:text-base text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border text-foreground h-10 md:h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm md:text-base text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50 border-border text-foreground h-10 md:h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm md:text-base text-foreground">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-background/50 border-border text-foreground h-10 md:h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm md:text-base text-foreground">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border text-foreground resize-none min-h-[100px] md:min-h-[150px]"
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-3 md:p-4 rounded-lg text-sm md:text-base ${submitStatus.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border border-red-500/50 text-red-300'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-secondary group disabled:opacity-50 disabled:cursor-not-allowed h-11 md:h-14"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
