"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Target, Zap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Environment, Float, MeshTransmissionMaterial } from "@react-three/drei"
import { useEffect, useState, useRef } from "react"
import * as THREE from "three"
import Link from "next/link"

function NetworkSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle continuous rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Float
      speed={0.8}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      floatingRange={[-0.2, 0.2]}
    >
      {/* Single unified sphere with wireframe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.0, 32, 32]} />
        <meshStandardMaterial
          color="#0088ff"
          wireframe={true}
          emissive="#0099ff"
          emissiveIntensity={3.0}
          transparent
          opacity={1.0}
        />
      </mesh>
    </Float>
  )
}

export function Hero() {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)
  const cursorPosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number | undefined>(undefined)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY }

      // Cancel any pending animation frame
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }

      // Schedule update for next frame
      animationFrameId.current = requestAnimationFrame(() => {
        if (cursorDotRef.current && cursorOutlineRef.current) {
          const { x, y } = cursorPosition.current
          // Combine translate for position with translate for centering
          cursorDotRef.current.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`
          cursorOutlineRef.current.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`
        }
      })
    }

    window.addEventListener("mousemove", updateCursor, { passive: true })
    return () => {
      window.removeEventListener("mousemove", updateCursor)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 lg:pt-20 overflow-hidden">
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.5fr_1.5fr] gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-4 sm:mb-6 group hover:scale-105 transition-transform">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white drop-shadow-[0_0_10px_rgba(96,165,250,0.9)] animate-pulse" />
                <span className="text-[10px] sm:text-sm text-white font-semibold drop-shadow-[0_0_10px_rgba(96,165,250,0.8)] normal-case">Innovating Digital Solutions from India</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight font-heading">
                EXPERIENCE THE <span className="gradient-text">FUTURE</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 text-pretty leading-relaxed normal-case max-w-2xl mx-auto lg:mx-0">
                At <span className="text-white font-semibold">FLOPS Technologies</span>, we deliver cutting-edge solutions from data analysis to full-stack development.
                Your vision, our expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href="/contact-form" className="w-full sm:w-auto">
                  <Button size="lg" className="button-3d text-background font-semibold text-base sm:text-lg group w-full">
                    START PROJECT
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-125 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-white/20 text-foreground bg-transparent hover:bg-white/10 hover:scale-105 transition-all text-base sm:text-lg w-full sm:w-auto"
                >
                  VIEW WORK
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-4 sm:gap-8 mt-10 sm:mt-16 justify-center lg:justify-start">
                <div className="group cursor-pointer glass p-3 sm:p-0 sm:bg-transparent sm:border-0 rounded-xl">
                  <div className="text-xl sm:text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] group-hover:scale-110 transition-transform">6</div>
                  <div className="text-[10px] sm:text-sm text-foreground font-semibold">TEAM MEMBERS</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-primary to-secondary" />
                <div className="group cursor-pointer glass p-3 sm:p-0 sm:bg-transparent sm:border-0 rounded-xl">
                  <div className="text-xl sm:text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(14,165,233,0.8)] group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-[10px] sm:text-sm text-foreground font-semibold">PROJECTS</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-secondary to-accent" />
                <div className="group cursor-pointer glass p-3 sm:p-0 sm:bg-transparent sm:border-0 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-[10px] sm:text-sm text-foreground font-semibold">DEDICATION</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Sphere - Hidden on mobile, visible on large screens */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full order-1 lg:order-2 hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 -left-20 -right-20">
              <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={4.5} color="#0099ff" />
                <directionalLight position={[-10, -10, -5]} intensity={4} color="#0066ff" />
                <pointLight position={[0, 0, 3]} intensity={5} color="#0088ff" />
                <pointLight position={[5, 5, 5]} intensity={3.5} color="#0099ff" />
                <pointLight position={[-5, -5, -5]} intensity={3.5} color="#0066ff" />
                <NetworkSphere />
                <Environment preset="sunset" />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
