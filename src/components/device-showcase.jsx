import { useEffect, useRef } from 'react'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DeviceShowcase() {
  const sectionRef = useRef(null)
  const deviceRef = useRef(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -25])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    if (deviceRef.current) {
      gsap.to(deviceRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        rotateY: -25,
        rotateX: 5,
        scale: 1.1,
        ease: 'none'
      })
    }
  }, [])

  // Mouse parallax effect
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (rect) {
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x: x * 20, y: y * 20 })
    }
  }

  return (
    <section
      id="device-showcase"
      ref={sectionRef}
      className="h-screen relative flex items-center pt-20"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1800px] mx-auto px-6 w-full h-full flex flex-col items-center justify-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white mb-12 text-center"
        >
          HausPet Smart Collar
        </motion.h2>

        {/* Device Image with Enhanced 3D */}
        <motion.div
          ref={deviceRef}
          className="relative w-full max-w-4xl flex items-center justify-center"
          style={{
            rotateY,
            scale,
            transformStyle: 'preserve-3d',
            perspective: '1500px'
          }}
        >
          {/* Multiple shadow layers for depth */}
          <div 
            className="absolute inset-0 -z-20"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168, 168, 168, 0.3) 0%, transparent 60%)',
              filter: 'blur(80px)',
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          />
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(200, 200, 200, 0.2) 0%, transparent 50%)',
              filter: 'blur(60px)',
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
            }}
          />
          
          <motion.img
            src="/images/collar.png"
            alt="HausPet Smart Collar"
            className="w-full h-auto object-contain relative z-10"
            style={{
              maxHeight: '70vh',
              maxWidth: '100%',
              imageRendering: '-webkit-optimize-contrast',
              filter: 'contrast(1.15) brightness(1.08) saturate(1.15) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 30px rgba(100, 100, 100, 0.3))',
              WebkitFilter: 'contrast(1.15) brightness(1.08) saturate(1.15) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 30px rgba(100, 100, 100, 0.3))',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: `translateZ(50px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s ease-out'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            onError={(e) => {
              e.target.src = '/images/placeholder.svg'
            }}
          />
          
          {/* Animated light reflection */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(${135 + mousePosition.x * 2}deg, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              mixBlendMode: 'overlay',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
