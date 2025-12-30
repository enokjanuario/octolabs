'use client'

import { motion } from 'framer-motion'

interface TentacleProps {
  position: 'left' | 'right' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
  delay?: number
  className?: string
}

const tentaclePaths = {
  'left': 'M-50,400 Q100,380 150,450 Q200,520 180,600 Q160,680 220,750',
  'right': 'M1970,400 Q1820,380 1770,450 Q1720,520 1740,600 Q1760,680 1700,750',
  'bottom-left': 'M100,1100 Q150,1000 200,950 Q250,900 220,800 Q190,700 250,650',
  'bottom-right': 'M1820,1100 Q1770,1000 1720,950 Q1670,900 1700,800 Q1730,700 1670,650',
  'top-left': 'M-30,100 Q80,150 120,220 Q160,290 130,380 Q100,470 160,530',
  'top-right': 'M1950,100 Q1840,150 1800,220 Q1760,290 1790,380 Q1820,470 1760,530',
}

const positionStyles = {
  'left': { left: 0, top: '10%' },
  'right': { right: 0, top: '10%' },
  'bottom-left': { left: 0, bottom: 0 },
  'bottom-right': { right: 0, bottom: 0 },
  'top-left': { left: 0, top: 0 },
  'top-right': { right: 0, top: 0 },
}

export default function TentacleSVG({ position, delay = 0, className = '' }: TentacleProps) {
  const path = tentaclePaths[position]
  const style = positionStyles[position]

  return (
    <motion.svg
      className={`absolute pointer-events-none ${className}`}
      style={{ ...style, width: '400px', height: '400px' }}
      viewBox="0 0 400 400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
    >
      <defs>
        <linearGradient id={`tentacle-gradient-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
        </linearGradient>
        <filter id={`glow-${position}`}>
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#tentacle-gradient-${position})`}
        strokeWidth="20"
        strokeLinecap="round"
        filter={`url(#glow-${position})`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: delay + 0.5,
          duration: 2,
          ease: 'easeOut',
        }}
      />
      {/* Suction cups */}
      {[0.2, 0.4, 0.6, 0.8].map((offset, i) => (
        <motion.circle
          key={i}
          r="6"
          fill="#22d3ee"
          opacity="0.6"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{
            delay: delay + 1 + i * 0.2,
            duration: 0.4,
          }}
        >
          <animateMotion
            dur="0.01s"
            fill="freeze"
            path={path}
            keyPoints={`${offset};${offset}`}
            keyTimes="0;1"
          />
        </motion.circle>
      ))}
    </motion.svg>
  )
}

export function HeroTentacles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left side tentacles */}
      <motion.svg
        className="absolute -left-20 top-1/4 w-[500px] h-[600px] opacity-60"
        viewBox="0 0 500 600"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="tentacle-left-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow-left">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M0,100 Q100,150 150,250 Q200,350 150,450 Q100,550 200,580"
          fill="none"
          stroke="url(#tentacle-left-1)"
          strokeWidth="25"
          strokeLinecap="round"
          filter="url(#glow-left)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
        />
        <motion.path
          d="M0,200 Q80,220 120,300 Q160,380 120,460 Q80,540 150,600"
          fill="none"
          stroke="url(#tentacle-left-1)"
          strokeWidth="18"
          strokeLinecap="round"
          filter="url(#glow-left)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
        />
      </motion.svg>

      {/* Right side tentacles */}
      <motion.svg
        className="absolute -right-20 top-1/4 w-[500px] h-[600px] opacity-60"
        viewBox="0 0 500 600"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="tentacle-right-1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <motion.path
          d="M500,100 Q400,150 350,250 Q300,350 350,450 Q400,550 300,580"
          fill="none"
          stroke="url(#tentacle-right-1)"
          strokeWidth="25"
          strokeLinecap="round"
          filter="url(#glow-left)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }}
        />
        <motion.path
          d="M500,200 Q420,220 380,300 Q340,380 380,460 Q420,540 350,600"
          fill="none"
          stroke="url(#tentacle-right-1)"
          strokeWidth="18"
          strokeLinecap="round"
          filter="url(#glow-left)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.7, ease: 'easeOut' }}
        />
      </motion.svg>

      {/* Bottom tentacles */}
      <motion.svg
        className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[800px] h-[300px] opacity-40"
        viewBox="0 0 800 300"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="tentacle-bottom" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M100,300 Q150,200 200,180 Q300,150 400,150 Q500,150 600,180 Q650,200 700,300"
          fill="none"
          stroke="url(#tentacle-bottom)"
          strokeWidth="30"
          strokeLinecap="round"
          filter="url(#glow-left)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1, ease: 'easeOut' }}
        />
      </motion.svg>
    </div>
  )
}
