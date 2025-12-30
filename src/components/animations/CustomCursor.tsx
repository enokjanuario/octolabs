'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // Motion values for smooth cursor movement
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Spring config mais responsiva
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)

  // Outer ring com delay sutil
  const ringConfig = { damping: 25, stiffness: 300, mass: 0.8 }
  const ringX = useSpring(cursorX, ringConfig)
  const ringY = useSpring(cursorY, ringConfig)

  const checkIfPointer = useCallback((target: Element | null) => {
    if (!target) return false

    const element = target as HTMLElement
    const computedStyle = window.getComputedStyle(element)

    return (
      computedStyle.cursor === 'pointer' ||
      element.tagName === 'BUTTON' ||
      element.tagName === 'A' ||
      element.closest('button') !== null ||
      element.closest('a') !== null
    )
  }, [])

  useEffect(() => {
    // Check if desktop on mount
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      if (!isVisible) setIsVisible(true)

      // Check pointer state
      const target = e.target as Element
      setIsPointer(checkIfPointer(target))
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isDesktop, isVisible, cursorX, cursorY, checkIfPointer])

  // Don't render on mobile/tablet
  if (!isDesktop) {
    return null
  }

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main cursor - follows mouse directly */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isPointer ? 40 : 12,
            height: isPointer ? 40 : 12,
            opacity: isPointer ? 0.8 : 1,
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Outer ring - subtle delay */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border border-white/30"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? (isPointer ? 0.5 : 0.3) : 0,
        }}
        animate={{
          width: isPointer ? 60 : 30,
          height: isPointer ? 60 : 30,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  )
}
