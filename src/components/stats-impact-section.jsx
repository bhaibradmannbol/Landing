import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StatsImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      number: '10,000+',
      label: 'Pets Monitored',
      description: 'And counting. Building the world\'s largest pet health dataset.'
    },
    {
      number: '42,000',
      label: 'Health Alerts Sent',
      description: 'Early detections that prevented emergency situations.'
    },
    {
      number: '98%',
      label: 'Vet Satisfaction',
      description: 'Veterinarians report better diagnostic accuracy with HausPet data.'
    },
    {
      number: '24/7',
      label: 'Continuous Monitoring',
      description: 'Never miss important health changes again.'
    }
  ]

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Health Impact
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            HausPet is changing how pet health is monitored and managed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-black/40 text-center hover:border-white/20 transition-all duration-300"
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <div className="text-5xl font-bold text-gray-300 mb-3">
                {stat.number}
              </div>
              <div className="text-xl font-bold text-white mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-white/60">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
