"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
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
        <>
            <div ref={cursorDotRef} className="cursor-dot" />
            <div ref={cursorOutlineRef} className="cursor-outline" />
        </>
    )
}
