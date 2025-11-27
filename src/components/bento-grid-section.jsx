import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/context/language-context'

export default function BentoGridSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="bento-features" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('completeHealthEcosystem')}
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            {t('bentoSubtitle')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
          
          {/* Large Card - Why It Matters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 md:row-span-2 p-8 rounded-3xl border border-white/10 bg-black/40 relative overflow-hidden group hover:border-white/20 transition-all"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            {/* Background dog image */}
            <div 
              className="absolute inset-0 opacity-50 group-hover:opacity-60 transition-opacity duration-500"
              style={{
                backgroundImage: 'url(/images/golden-retriever-tongue-out.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('whyMonitoringMatters')}
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                {t('monitoringDesc')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl font-bold text-gray-300 mb-2">35%</div>
                  <p className="text-sm text-white/80">{t('heartDiseaseStat')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-300 mb-2">80%</div>
                  <p className="text-sm text-white/80">{t('vetBlindStat')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tall Card - Continuous Monitoring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 md:row-span-2 p-6 rounded-3xl border border-white/10 bg-black/40 relative overflow-hidden hover:border-white/20 transition-all group"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            {/* Background dog image */}
            <div 
              className="absolute inset-0 opacity-45 group-hover:opacity-55 transition-opacity duration-500"
              style={{
                backgroundImage: 'url(/images/golden-retriever-care.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.2) contrast(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            
            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-400 to-zinc-500 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {t('monitoring247')}
                </h3>
                <p className="text-sm text-white/80">
                  {t('monitoring247Desc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Wide Card - AI Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 md:row-span-1 p-6 rounded-3xl border border-white/10 bg-black/40 relative overflow-hidden hover:border-white/20 transition-all group"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            {/* Background dog image */}
            <div 
              className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              style={{
                backgroundImage: 'url(/images/small-breeds-hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            
            <div className="flex items-center gap-4 h-full relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-400 to-zinc-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {t('aiPowered')}
                </h3>
                <p className="text-sm text-white/80">
                  {t('aiPoweredDesc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Square Card - Vet Access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 p-6 rounded-3xl border border-white/10 bg-black/40 relative overflow-hidden hover:border-white/20 transition-all group"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            {/* Background dog image */}
            <div 
              className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              style={{
                backgroundImage: 'url(/images/shih-tzu.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-400 to-zinc-500 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {t('instantVetAccess')}
              </h3>
              <p className="text-sm text-white/80">
                {t('instantVetAccessDesc')}
              </p>
            </div>
          </motion.div>

          {/* Square Card - Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-1 md:row-span-1 p-6 rounded-3xl border border-white/10 bg-black/40 relative overflow-hidden hover:border-white/20 transition-all group"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            {/* Background cat image */}
            <div 
              className="absolute inset-0 opacity-45 group-hover:opacity-55 transition-opacity duration-500"
              style={{
                backgroundImage: 'url(/images/fluffy_grey_cat.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-400 to-zinc-500 flex items-center justify-center mb-2">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {t('smartAlerts')}
              </h3>
              <p className="text-xs text-white/80">
                {t('smartAlertsDesc')}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
