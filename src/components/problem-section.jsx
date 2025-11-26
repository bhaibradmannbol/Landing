import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SplitText from '@/components/ui/split-text'

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <motion.path
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 0.8 }}
      animate={{ scale: [0.8, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M12 9v4m0 4h.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
)

const DataIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <motion.path
      d="M3 3v18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      d="M18 17V9M13 17v-3M8 17v-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ originY: 1 }}
    />
  </svg>
)

const PreventIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M12 6v6l4 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <motion.path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.circle
      cx="12"
      cy="10"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
)

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: AlertIcon,
      title: 'Pet Health Issues Go Unnoticed Between Vet Visits',
      description: 'Emergency situations often detected only during critical care visits.',
      stat: '35% of dogs suffer from heart disease',
      color: 'from-destructive/80 to-destructive'
    },
    {
      icon: DataIcon,
      title: 'Vets Lack Continuous Medical Data',
      description: 'Current veterinary care relies on snapshot health checks, not real-time data.',
      stat: '25% from diabetes',
      color: 'from-destructive/80 to-destructive'
    },
    {
      icon: PreventIcon,
      title: 'Insurance Companies React to Illness Instead of Preventing It',
      description: 'Preventive healthcare data enables better outcomes and reduced claims.',
      stat: '30% from cancer',
      color: 'from-destructive/80 to-destructive'
    },
    {
      icon: LocationIcon,
      title: 'Current Smart Collars Only Track GPS',
      description: 'No real health data. No clinical insight. No integration with veterinary care.',
      stat: 'Most issues go undetected',
      color: 'from-destructive/80 to-destructive'
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/50 relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <SplitText
            text="Why Real-Time Monitoring Matters"
            className="text-5xl font-bold text-foreground mb-4"
            delay={100}
            duration={0.6}
            splitType="words"
          />
          <SplitText
            text="Most pet health issues go undetected until it's too late."
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            delay={80}
            duration={0.6}
            splitType="words"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div 
                  className="relative p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 h-full overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                  }}
                >
                  {/* Gradient glow on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                  />
                  
                  <div className="relative flex items-start gap-4">
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 rounded-xl p-3 text-white shadow-lg relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        boxShadow: '0 8px 32px rgba(239, 68, 68, 0.4)'
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="relative z-10" />
                      <div 
                        className="absolute inset-0 opacity-40"
                        style={{
                          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)'
                        }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{problem.title}</h3>
                      <p className="text-muted-foreground mb-3">{problem.description}</p>
                      <motion.p 
                        className="text-sm font-semibold text-destructive inline-flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: i * 0.15 + 0.3 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
                        {problem.stat}
                      </motion.p>
                    </div>
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
