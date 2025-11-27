import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/context/language-context'

export default function StatsImpactSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      number: '10,000+',
      label: t('petsMonitored'),
      description: t('petsMonitoredDesc')
    },
    {
      number: '42,000',
      label: t('healthAlertsSent'),
      description: t('healthAlertsDesc')
    },
    {
      number: '98%',
      label: t('vetSatisfaction'),
      description: t('vetSatisfactionDesc')
    },
    {
      number: '24/7',
      label: t('continuousMonitoring'),
      description: t('continuousMonitoringDesc')
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
            {t('realHealthImpact')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('statsSubtitle')}
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
