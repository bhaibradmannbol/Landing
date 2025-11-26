import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ScrollStack({ children, className = '' }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export function ScrollStackItem({ children, index = 0, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        y,
      }}
      className={`sticky top-20 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function ScrollStackSection({ children, index = 0, total = 1, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Calculate stacking offset based on index
  const stackOffset = index * 20
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9]
  )
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [stackOffset, 0, 0, -stackOffset]
  )
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5]
  )

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
        opacity,
        zIndex: total - index,
      }}
      className={`sticky ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  )
}
