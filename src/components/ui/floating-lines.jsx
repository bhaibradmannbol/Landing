import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function FloatingLine({ delay = 0, duration = 20, startX, startY, endX, endY, color = 'rgba(59, 130, 246, 0.3)' }) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.line
        x1={startX}
        y1={startY}
        x2={startX}
        y2={startY}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          x2: endX,
          y2: endY,
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.svg>
  )
}

export default function FloatingLines() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const lines = [
    // Silver lines
    {
      startX: '0%',
      startY: '20%',
      endX: '100%',
      endY: '30%',
      color: 'rgba(168, 168, 168, 0.15)',
      duration: 25,
      delay: 0,
    },
    {
      startX: '100%',
      startY: '40%',
      endX: '0%',
      endY: '50%',
      color: 'rgba(168, 168, 168, 0.1)',
      duration: 30,
      delay: 5,
    },
    {
      startX: '0%',
      startY: '70%',
      endX: '100%',
      endY: '60%',
      color: 'rgba(200, 200, 200, 0.15)',
      duration: 28,
      delay: 10,
    },
    // Gray lines
    {
      startX: '50%',
      startY: '0%',
      endX: '60%',
      endY: '100%',
      color: 'rgba(180, 180, 180, 0.12)',
      duration: 35,
      delay: 2,
    },
    {
      startX: '30%',
      startY: '100%',
      endX: '40%',
      endY: '0%',
      color: 'rgba(180, 180, 180, 0.1)',
      duration: 32,
      delay: 8,
    },
    // Light gray lines
    {
      startX: '0%',
      startY: '50%',
      endX: '100%',
      endY: '45%',
      color: 'rgba(150, 150, 150, 0.12)',
      duration: 27,
      delay: 4,
    },
    {
      startX: '100%',
      startY: '80%',
      endX: '0%',
      endY: '75%',
      color: 'rgba(150, 150, 150, 0.1)',
      duration: 33,
      delay: 12,
    },
    // Diagonal lines
    {
      startX: '0%',
      startY: '0%',
      endX: '100%',
      endY: '100%',
      color: 'rgba(168, 168, 168, 0.08)',
      duration: 40,
      delay: 6,
    },
    {
      startX: '100%',
      startY: '0%',
      endX: '0%',
      endY: '100%',
      color: 'rgba(180, 180, 180, 0.08)',
      duration: 38,
      delay: 14,
    },
    // Additional crossing lines
    {
      startX: '20%',
      startY: '0%',
      endX: '80%',
      endY: '100%',
      color: 'rgba(150, 150, 150, 0.08)',
      duration: 36,
      delay: 9,
    },
    {
      startX: '80%',
      startY: '0%',
      endX: '20%',
      endY: '100%',
      color: 'rgba(168, 168, 168, 0.08)',
      duration: 34,
      delay: 16,
    },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {lines.map((line, index) => (
        <FloatingLine key={index} {...line} />
      ))}
    </div>
  )
}
