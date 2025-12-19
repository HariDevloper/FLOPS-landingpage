"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Code2, Layers, Server, Smartphone, Cloud, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const technologies = [
    {
        icon: Code2,
        name: "React & Next.js",
        description: "Modern frontend frameworks for blazing-fast, SEO-friendly web applications",
    },
    {
        icon: Server,
        name: "Node.js & Express",
        description: "Scalable backend services with JavaScript/TypeScript runtime",
    },
    {
        icon: Layers,
        name: "TypeScript",
        description: "Type-safe development for robust, maintainable codebases",
    },
    {
        icon: Server,
        name: "PostgreSQL & MongoDB",
        description: "Powerful databases for relational and document-based data storage",
    },
    {
        icon: Cloud,
        name: "AWS & Vercel",
        description: "Cloud deployment and hosting for global scalability and performance",
    },
    {
        icon: Smartphone,
        name: "Tailwind CSS & Framer Motion",
        description: "Beautiful, responsive UI with smooth animations and interactions",
    },
]

const features = [
    "Custom Web Applications",
    "RESTful & GraphQL APIs",
    "Responsive Mobile Design",
    "Real-time Features (WebSockets)",
    "Authentication & Authorization",
    "CI/CD Pipeline Setup",
]

export default function FullStackDevelopmentPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-heading">
                            FULL STACK <span className="gradient-text">DEVELOPMENT</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed normal-case">
                            End-to-end web development solutions built with modern technologies and scalable architecture.
                        </p>
                    </motion.div>
                </section>

                {/* Technologies Section */}
                <section className="container mx-auto px-4 mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 font-heading">
                            TECHNOLOGIES WE <span className="gradient-text">USE</span>
                        </h2>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                    className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-accent/50 transition-all duration-300 group card-hover"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                                        <tech.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]" />
                                    </div>
                                    <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-foreground line-clamp-1">{tech.name}</h3>
                                    <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed normal-case line-clamp-3">{tech.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-4 mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="glass rounded-2xl p-6 sm:p-8 md:p-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 font-heading">
                            WHAT WE <span className="gradient-text">DELIVER</span>
                        </h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + 0.1 * index, duration: 0.4 }}
                                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary flex-shrink-0" />
                                    <span className="text-[10px] sm:text-sm md:text-base text-foreground normal-case line-clamp-1">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="glass rounded-2xl p-6 sm:p-8 md:p-12 text-center"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
                            READY TO BUILD SOMETHING <span className="gradient-text">AMAZING?</span>
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed normal-case">
                            Let's transform your ideas into powerful, scalable web applications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link href="/contact-form" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-secondary w-full h-11 sm:h-12 text-sm sm:text-base">
                                    GET STARTED
                                </Button>
                            </Link>
                            <Link href="/#services" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="glass border-white/20 text-foreground bg-transparent hover:bg-primary/10 w-full h-11 sm:h-12 text-sm sm:text-base">
                                    VIEW ALL SERVICES
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
