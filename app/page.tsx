import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <div className="fixed inset-0 mesh-gradient opacity-50 -z-10" />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
