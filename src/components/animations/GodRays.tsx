'use client'

import { motion } from 'framer-motion'

export default function GodRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* God rays from top */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[800px] opacity-10"
        style={{
          background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.3) 0%, transparent 100%)',
          clipPath: 'polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)',
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-[400px] h-[600px] opacity-10"
        style={{
          background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.3) 0%, transparent 100%)',
          clipPath: 'polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)',
        }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[500px] opacity-5"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)',
          clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)',
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </div>
  )
}
