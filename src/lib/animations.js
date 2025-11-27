import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

export function initAnimations() {
  // Initialize Lenis smooth scrolling with optimized settings
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  })

  // Connect Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(1000, 16) // Better performance

  // Only run device animations if element exists
  const deviceImage = document.querySelector('.device-image')
  if (deviceImage) {
    const deviceTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#device-showcase',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        pin: false,
        invalidateOnRefresh: true,
      }
    })

    deviceTimeline.to('.device-image', {
      rotateY: -25,
      rotateX: 5,
      scale: 1.1,
      duration: 1,
      ease: 'none',
      force3D: true,
    })
  }

  // Optimized card animations
  gsap.utils.toArray('.glass-card').forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.3,
        once: true, // Only animate once
      },
      opacity: 0,
      y: 30,
      ease: 'none',
      force3D: true,
    })
  })

  // Optimized feature items
  gsap.utils.toArray('.feature-item').forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        end: 'top 60%',
        scrub: 0.3,
        once: true,
      },
      opacity: 0,
      x: 30,
      ease: 'none',
      force3D: true,
    })
  })

  return lenis
}
