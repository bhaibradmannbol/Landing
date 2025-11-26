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

  // Optimized device progressive rotation and scaling
  const deviceTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#device-showcase',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5, // Reduced for smoother performance
      pin: false,
      invalidateOnRefresh: true,
    }
  })

  deviceTimeline
    .to('.device-image', {
      rotateY: -25,
      rotateX: 5,
      scale: 1.1,
      duration: 1,
      ease: 'none', // Linear for scrub animations
      force3D: true, // GPU acceleration
    })

  // Problem section - device shrinks more
  gsap.to('.device-image', {
    scrollTrigger: {
      trigger: '#problem-section',
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
    rotateY: -45,
    rotateX: 15,
    scale: 0.7,
    x: -100,
    opacity: 0.8,
    ease: 'none',
    force3D: true,
  })

  // Solution section - device even smaller
  gsap.to('.device-image', {
    scrollTrigger: {
      trigger: '#solution-section',
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
    rotateY: -50,
    rotateX: 20,
    scale: 0.5,
    x: -150,
    opacity: 0.6,
    ease: 'none',
    force3D: true,
  })

  // Features section - device fades more
  gsap.to('.device-image', {
    scrollTrigger: {
      trigger: '#features',
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
    scale: 0.4,
    x: -200,
    opacity: 0.4,
    ease: 'none',
    force3D: true,
  })

  // Chat section - device becomes ghost
  gsap.to('.device-image', {
    scrollTrigger: {
      trigger: '#chat-section',
      start: 'top center',
      end: 'center center',
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
    scale: 0.3,
    x: -250,
    opacity: 0.2,
    ease: 'none',
    force3D: true,
  })

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
