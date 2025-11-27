import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, Users, Stethoscope } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

export default function TrustedByVets() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
            <Shield className="w-4 h-4" />
            {t('clinicallyValidated')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('trustedByVets')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('trustedByVetsDesc')}
          </p>
        </motion.div>

        {/* Main Partnership Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border border-white/10 overflow-hidden mb-8"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Partnership Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t('officialPartner')}</h3>
                  <p className="text-green-400 text-sm font-medium">{t('clinicalPartnership')}</p>
                </div>
              </div>

              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Kleintierpraxis Jan Schneider
              </h4>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {t('partnershipDesc')}
              </p>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                  👨‍⚕️
                </div>
                <div>
                  <p className="font-semibold text-white">Dr. Jan Schneider</p>
                  <p className="text-sm text-white/60">{t('vetExperience')}</p>
                </div>
              </div>
            </div>

            {/* Right - Validation Points */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">{t('realWorldTesting')}</h5>
                    <p className="text-sm text-white/60">{t('realWorldTestingDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">{t('validatedAccuracy')}</h5>
                    <p className="text-sm text-white/60">{t('validatedAccuracyDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">{t('expandingNetwork')}</h5>
                    <p className="text-sm text-white/60">{t('expandingNetworkDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">20+</div>
            <p className="text-sm text-white/60">{t('yearsExperience')}</p>
          </div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">500+</div>
            <p className="text-sm text-white/60">{t('vetsJoining')}</p>
          </div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
            <p className="text-sm text-white/60">{t('clinicalGrade')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
