import { motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'

export default function AppleHero({ onOpenWaitlist }) {
  const { t } = useLanguage()

  return (
    <section 
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          style={{ maxWidth: '900px', margin: '0 auto 24px' }}
        >
          {t('heroMainTitle')}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          {t('heroSubtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        >
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-3 text-black text-base font-semibold rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 transition-all duration-300 min-w-[200px]"
          >
            {t('getFreeEarlyAccess')}
          </button>
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-3 text-gray-300 text-base font-semibold rounded-lg border-2 border-gray-400 hover:bg-gray-400 hover:text-black transition-all duration-300 min-w-[200px]"
          >
            {t('bookFreeTesting')}
          </button>
        </motion.div>

        {/* Small Trust Indicators */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm text-gray-400"
        >
          {t('trustIndicators')}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/50 text-sm"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
