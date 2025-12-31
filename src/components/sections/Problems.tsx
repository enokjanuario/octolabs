'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function Problems() {
  const t = useTranslations('problems')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const problems = [
    {
      icon: '⏰',
      title: t('delays.title'),
      description: t('delays.description'),
    },
    {
      icon: '🐛',
      title: t('bugs.title'),
      description: t('bugs.description'),
    },
    {
      icon: '💸',
      title: t('costs.title'),
      description: t('costs.description'),
    },
  ]

  return (
    <section
      id="problemas"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-abyss to-deep-ocean" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Question */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t('title')}{' '}
            <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="relative"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="card-glass p-8 text-center min-w-[200px] md:min-w-[240px]"
                whileHover={{ scale: 1.05, rotate: 2 }}
                animate={isInView ? {
                  x: [0, -3, 3, -2, 2, 0],
                } : {}}
                transition={{
                  x: { delay: 0.5 + index * 0.1, duration: 0.5 },
                }}
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2 text-red-400">
                  {problem.title}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {problem.description}
                </p>
              </motion.div>

              {/* Connector Arrow */}
              {index < problems.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <span className="text-2xl text-text-secondary/50">→</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tentacle pulling down animation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <svg width="80" height="100" viewBox="0 0 80 100" className="opacity-60">
            <motion.path
              d="M40,0 Q45,30 40,50 Q35,70 40,100"
              fill="none"
              stroke="url(#tentacle-pull)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
            />
            <defs>
              <linearGradient id="tentacle-pull" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-octopus-purple/20 to-tentacle-cyan/20 blur-3xl" />

            <div className="relative glass-strong rounded-3xl p-8 md:p-12 text-center border border-octopus-purple/30">
              <motion.div
                className="inline-block mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <span className="text-5xl">🐙</span>
              </motion.div>

              <h3 className="font-display text-2xl md:text-4xl font-bold mb-4">
                {t('solution.title')}{' '}
                <span className="text-gradient">{t('solution.titleHighlight')}</span>{' '}
                {t('solution.titleEnd')}
              </h3>

              <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
                {t('solution.description')}
              </p>

              <motion.a
                href="#servicos"
                className="inline-flex items-center gap-2 mt-8 font-display font-semibold text-tentacle-cyan hover:text-glow-cyan transition-colors"
                whileHover={{ x: 5 }}
              >
                {t('solution.cta')}
                <span>→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
