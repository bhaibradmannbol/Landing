import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SplitText from '@/components/ui/split-text'

const MonitorIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <motion.circle
      cx="32"
      cy="32"
      r="24"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="2"
      fill="none"
    />
    <motion.path
      d="M18 32 L24 32 L28 22 L32 42 L36 28 L40 32 L46 32"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
    />
  </svg>
)

const AnalyzeIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <motion.circle
      cx="32"
      cy="32"
      r="6"
      fill="white"
      initial={{ scale: 0.8 }}
      animate={{ scale: [0.8, 1.1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="32"
      cy="32"
      r="14"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0.9 }}
      animate={{ scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
    />
    <motion.circle
      cx="32"
      cy="32"
      r="22"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0.9 }}
      animate={{ scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
    />
  </svg>
)

const ShareIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
    <motion.circle cx="32" cy="16" r="6" fill="white" />
    <motion.circle cx="16" cy="40" r="6" fill="rgba(255,255,255,0.6)" />
    <motion.circle cx="48" cy="40" r="6" fill="rgba(255,255,255,0.6)" />
    <motion.path
      d="M28 20 L20 36"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
    <motion.path
      d="M36 20 L44 36"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
  </svg>
)

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: MonitorIcon,
      title: 'Monitor',
      description: 'Smart collar tracks vital signs 24/7',
    },
    {
      icon: AnalyzeIcon,
      title: 'Analyze',
      description: 'AI detects health issues early',
    },
    {
      icon: ShareIcon,
      title: 'Share',
      description: 'Vet gets real-time access',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/images/source.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <SplitText
            text="How It Works"
            className="text-5xl font-bold text-white mb-4"
            delay={100}
            duration={0.6}
            splitType="words"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                {/* Connection line */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-20 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: i * 0.2 + 0.5 }}
                    style={{ originX: 0 }}
                  />
                )}

                <motion.div
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 rounded-3xl p-6 relative overflow-hidden border border-white/10"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon />
                  </motion.div>

                  <motion.div
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/80 font-medium text-sm mb-3 border border-white/20"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                  >
                    {i + 1}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-lg">{step.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
