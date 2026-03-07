"use client"

import { useEffect, useRef, useState, RefObject } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isVisible]
}

// Hook for staggered animations
export function useStaggerAnimation<T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  delay: number = 100,
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean[]] {
  const [ref, isContainerVisible] = useScrollAnimation<T>(options)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(itemCount).fill(false))

  useEffect(() => {
    if (isContainerVisible) {
      const timeouts: NodeJS.Timeout[] = []
      
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev]
            newState[i] = true
            return newState
          })
        }, i * delay)
        timeouts.push(timeout)
      }

      return () => {
        timeouts.forEach(clearTimeout)
      }
    }
  }, [isContainerVisible, itemCount, delay])

  return [ref, visibleItems]
}

// Hook for parallax effect
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.scrollY
        const rate = scrolled * speed
        setOffset(rate)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { ref, offset }
}

// Hook for mouse tracking (3D tilt effect)
export function useMouseTilt(intensity: number = 10) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const x = ((e.clientX - centerX) / (rect.width / 2)) * intensity
      const y = ((e.clientY - centerY) / (rect.height / 2)) * intensity

      setTilt({ x: -y, y: x })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [intensity])

  return { ref, tilt }
}

// Hook for counter animation
export function useCountAnimation(
  target: number,
  duration: number = 2000,
  options: UseScrollAnimationOptions = {}
): [RefObject<HTMLElement>, number] {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>(options)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, target, duration])

  return [ref, count]
}
