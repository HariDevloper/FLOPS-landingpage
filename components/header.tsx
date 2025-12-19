"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0e27]/80 border-b border-white/10 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center group relative z-50">
            <Image
              src="/logo.png"
              alt="FLOPS Technologies"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-30 sm:h-30 scale-[1.5] sm:scale-[1.9] transition-transform group-hover:scale-[1.6] sm:group-hover:scale-[2.1] mt-1 sm:mt-2"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-white/5 rounded-full px-6 py-2 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-all rounded-full hover:bg-primary/20 hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact-form">
              <Button className="button-3d text-background font-semibold">Get Started</Button>
            </Link>
          </div>

          <button
            className="md:hidden text-foreground relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/5 bg-[#0a0e27]/95 backdrop-blur-2xl"
            >
              <div className="py-6 px-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <Link href="/contact-form" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full h-12 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90 button-3d">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
