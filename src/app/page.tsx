'use client'

import { ParticlesBackground, FloatingBubbles, CustomCursor } from '@/components/animations'
import Header from '@/components/layout/Header'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import {
  Hero,
  Problems,
  Services,
  Projects,
  Process,
  About,
  Testimonials,
  FAQ,
  Contact,
  Footer,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Global Animations */}
      <ParticlesBackground />
      <FloatingBubbles />
      <CustomCursor />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Problems />
        <Services />
        <Projects />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  )
}
