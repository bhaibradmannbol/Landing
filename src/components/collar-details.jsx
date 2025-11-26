import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Battery, Droplets, Weight, Globe } from 'lucide-react'

export default function CollarDetails() {
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const startRotation = useRef(0)

  const features = [
    {
      icon: Battery,
      title: 'Battery life of up to 2 weeks',
      description: 'Long-lasting power for continuous monitoring'
    },
    {
      icon: Droplets,
      title: '100% waterproof (IP68)',
      description: 'Perfect for all weather conditions'
    },
    {
      icon: Weight,
      title: 'Lightweight and suitable',
      description: 'For dogs from 4 kg and up'
    },
    {
      icon: Globe,
      title: 'Worldwide coverage',
      description: 'Track your pet anywhere'
    }
  ]

  const handleMouseDown = (e) => {
    setIsDragging(true)
    startX.current = e.clientX
    startRotation.current = rotation
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const deltaX = e.clientX - startX.current
    const newRotation = startRotation.current + deltaX * 0.5
    setRotation(newRotation)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    startX.current = e.touches[0].clientX
    startRotation.current = rotation
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const deltaX = e.touches[0].clientX - startX.current
    const newRotation = startRotation.current + deltaX * 0.5
    setRotation(newRotation)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <section className="min-h-screen py-24 px-6 flex items-center relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2 bg-gray-400/10 border border-gray-400/20 rounded-full text-gray-300 text-sm font-medium">
            Tracker details
          </span>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white text-center mb-12"
        >
          Perfect for all kinds of adventures
        </motion.h2>

        {/* 360° View Instruction */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 px-6 py-3 border border-gray-400/30 rounded-full bg-gray-400/10">
            <svg className="w-5 h-5 text-gray-300 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="text-sm font-medium text-gray-300">Drag to rotate 360°</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive 360° Collar View */}
          <div className="relative">
            {/* Collar Image with 360° Rotation */}
            <motion.div
              className="relative w-full max-w-2xl mx-auto cursor-grab active:cursor-grabbing select-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `perspective(1000px) rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d',
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              <img
                src="/images/collar.png"
                alt="HausPet Smart Collar - 360° View"
                className="w-full h-auto pointer-events-none"
                draggable="false"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                  WebkitFilter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />

              {/* Glow effect */}
              <div 
                className="absolute inset-0 -z-10 blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'
                }}
              />
            </motion.div>

            {/* Rotation Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2 mt-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="text-xs text-gray-400 font-medium">
                  {Math.abs(Math.round(rotation % 360))}°
                </span>
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
