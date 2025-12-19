import { Twitter, Linkedin, Mail, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-black/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="FLOPS Technologies"
                width={100}
                height={100}
                className="w-20 h-20 sm:w-30 sm:h-30 scale-[1.5] sm:scale-[1.9] transition-transform hover:scale-[1.6] sm:hover:scale-[2.1]"
              />
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="text-white font-medium">FLOPS Technologies</span> empowers businesses with innovative digital solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/data-analysis" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="/services/technical-documentation" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Technical Docs
                </a>
              </li>
              <li>
                <a href="/services/full-stack-development" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Development
                </a>
              </li>
              <li>
                <a href="/services/digital-marketing" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] sm:text-sm text-muted-foreground text-center md:text-left">
            © 2025 FLOPS Technologies. All rights reserved. Made in India.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            </a>
            <a
              href="mailto:primespark.pvt@gmail.com"
              className="text-white hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
