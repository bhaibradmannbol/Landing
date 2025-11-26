import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SplitText from '@/components/ui/split-text'

const MonitoringIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <motion.circle
      cx="24"
      cy="24"
      r="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M12 24h6l3-6 3 12 3-6h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
    />
  </svg>
)

const BrainIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <motion.path
      d="M24 8c-8 0-14 6-14 14 0 4 2 8 4 10 2 2 4 4 4 8h12c0-4 2-6 4-8 2-2 4-6 4-10 0-8-6-14-14-14z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2 }}
    />
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        cx={20 + i * 4}
        cy={20 + i * 2}
        r="1.5"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5, delay: 0.5 + i * 0.2, repeat: Infinity, repeatDelay: 2 }}
      />
    ))}
  </svg>
)

const StethoscopeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <motion.circle
      cx="36"
      cy="28"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.path
      d="M32 28c0 4-3 8-8 8s-8-4-8-8V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    />
    <motion.path
      d="M12 12a4 4 0 0 1 8 0M20 12a4 4 0 0 1 8 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    />
  </svg>
)

const NotificationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <motion.path
      d="M24 8a8 8 0 0 0-8 8c0 8-4 10-4 10h24s-4-2-4-10a8 8 0 0 0-8-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      d="M20 26v2a4 4 0 0 0 8 0v-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.circle
      cx="34"
      cy="14"
      r="4"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.3, 1] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
    />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
    <motion.path
      d="M24 8s-8 4-8 8v8c0 8 8 12 8 12s8-4 8-12v-8c0-4-8-8-8-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M20 22l3 3 5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
)

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const solutions = [
    {
      icon: MonitoringIcon,
      title: 'Continuous Health Monitoring',
      description: '24/7 tracking of heart rate, body temperature, and activity patterns with clinical-grade accuracy.',
      gradient: 'from-primary/90 to-primary'
    },
    {
      icon: BrainIcon,
      title: 'Breed-Specific Intelligence',
      description: 'Google Gemini-powered AI analyzes data against breed-specific baselines to flag anomalies early.',
      gradient: 'from-primary/90 to-primary'
    },
    {
      icon: StethoscopeIcon,
      title: 'Real-Time Veterinary Access',
      description: 'Live metrics, instant alerts, and remote diagnostics for faster, more accurate treatment.',
      gradient: 'from-primary/90 to-primary'
    },
    {
      icon: NotificationIcon,
      title: 'Instant Health Alerts & Vet Booking',
      description: 'Pet owners get immediate notifications and can book consultations directly through the app.',
      gradient: 'from-primary/90 to-primary'
    },
    {
      icon: ShieldIcon,
      title: 'Preventive Healthcare at Scale',
      description: 'Verified health data powers preventive insurance plans and claim optimization.',
      gradient: 'from-primary/90 to-primary'
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-t from-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <SplitText
            text="Meet HausPet—The Complete Pet Health Ecosystem"
            className="text-5xl font-bold text-foreground mb-4"
            delay={100}
            duration={0.6}
            splitType="words"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div 
                  className="relative p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:shadow-2xl transition-all duration-300 h-full overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                  }}
                >
                  {/* Gradient glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                  />
                  
                  <div className="relative">
                    <motion.div
                      className="inline-flex p-4 rounded-2xl mb-4 w-16 h-16 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)`,
                        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)'
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-white relative z-10" />
                      <div 
                        className="absolute inset-0 opacity-50"
                        style={{
                          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)'
                        }}
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
