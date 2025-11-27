import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import AppleNav from '@/components/apple-nav'
import AppleHero from '@/components/apple-hero'
import DeviceShowcase from '@/components/device-showcase'
import BentoGridSection from '@/components/bento-grid-section'
import HowItWorks from '@/components/how-it-works'
import AppScreenshots from '@/components/app-screenshots'
import ChatSection from '@/components/chat-section'
import TrustedByVets from '@/components/trusted-by-vets'
import EarlyAccessSection from '@/components/early-access-section'
import StatsImpactSection from '@/components/stats-impact-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import LightRays from '@/components/ui/light-rays'
import { initAnimations } from '@/lib/animations'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Initialize GSAP animations and Lenis smooth scroll
    const lenis = initAnimations()
    
    // Cleanup
    return () => {
      if (lenis) {
        lenis.destroy()
      }
    }
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[60]"
        style={{ 
          scaleX,
          background: 'linear-gradient(90deg, #a8a8a8 0%, #d4d4d4 50%, #e5e5e5 100%)'
        }}
      />
      
      {/* Black Background */}
      <LightRays />
      
      {/* Navigation with Logo */}
      <AppleNav />
      
      {/* Apple-style Hero */}
      <AppleHero />
      
      {/* Device Showcase with 3D Rotation */}
      <DeviceShowcase />
      
      <BentoGridSection />
      <TrustedByVets />
      <HowItWorks />
      <AppScreenshots />
      <ChatSection />
      <StatsImpactSection />
      <EarlyAccessSection />
      <CTASection />
      <Footer />
    </div>
  )
}
