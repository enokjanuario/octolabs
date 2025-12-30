'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Bubble {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  hue: number
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const newBubbles: Bubble[] = []
    for (let i = 0; i < 20; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 10,
        hue: Math.random() > 0.5 ? 270 : 185,
      })
    }
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            bottom: '-20px',
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, hsla(${bubble.hue}, 80%, 70%, 0.6), hsla(${bubble.hue}, 80%, 50%, 0.2))`,
            boxShadow: `0 0 ${bubble.size}px hsla(${bubble.hue}, 80%, 60%, 0.4)`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(bubble.id) * 50, 0],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
