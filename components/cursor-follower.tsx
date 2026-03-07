"use client"

import { useEffect, useState } from "react"

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    // Only show on desktop
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsHidden(false)
    }

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    const handlePointerCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer"
      
      setIsPointer(!!isClickable)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mousemove", handlePointerCheck, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousemove", handlePointerCheck)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Don't render on mobile/tablet
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className={`w-3 h-3 rounded-full bg-sand-300 transition-all duration-200 ${
          isPointer ? "scale-150 opacity-80" : "scale-100 opacity-100"
        }`} />
      </div>
      
      {/* Follower ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className={`w-8 h-8 rounded-full border-2 border-sand-400/50 transition-all duration-300 ${
          isPointer ? "scale-150 border-sand-300" : "scale-100"
        }`} />
      </div>
    </>
  )
}
