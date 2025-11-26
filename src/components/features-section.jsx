import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    '24/7 continuous monitoring of your dog\'s vital signs',
    'Instant health alerts for abnormalities',
    'AI-powered health summaries in natural language',
    'One-tap emergency vet booking',
    'Complete medical records and health history',
    'Peace of mind knowing your dog\'s health is always being monitored'
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What You Get
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-12 rounded-2xl border border-white/10 bg-black/40"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors text-base md:text-lg">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
