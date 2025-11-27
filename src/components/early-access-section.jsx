import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'

export default function EarlyAccessSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/early-access`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, userType: 'pet-owner' }),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setStatus('success')
        setEmail('')
        setName('')
      } else if (response.status === 409) {
        setStatus('exists')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
    
    setTimeout(() => setStatus(''), 5000)
  }
  
  return (
    <section id="early-access" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gray-400/10 text-gray-300 border border-gray-400/20 mb-6">
            {t('limitedAvailability')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('getFreeEarlyAccessTitle')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('earlyAccessSubtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-black/40 border border-white/10"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('whyJoinEarly')}</h3>
            <p className="text-white/60 mb-8">{t('exclusiveBenefits')}</p>
            
            <div className="space-y-4 mb-8">
              {[
                t('feature1'),
                t('feature2'),
                t('feature3'),
                t('feature4'),
                t('feature5'),
                t('feature6')
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('yourName')}
                  className="w-full h-12 px-4 rounded-lg bg-white/5 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('yourEmail')}
                  required
                  className="w-full h-12 pl-11 pr-4 rounded-lg bg-white/5 text-white placeholder:text-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-white text-black hover:bg-white/90 font-semibold"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? t('submitting') : t('requestFreeAccess')}
              </Button>
              
              {status === 'success' && (
                <p className="text-sm text-center text-green-400 font-medium">
                  ✓ {t('successMessage')}
                </p>
              )}
              {status === 'exists' && (
                <p className="text-sm text-center text-yellow-400 font-medium">
                  {t('alreadySubscribed')}
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-center text-red-400 font-medium">
                  {t('errorMessage')}
                </p>
              )}
            </form>

            <p className="text-sm text-center text-white/50 mt-4">
              {t('limitedUsers')}
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-black/40 border border-white/10"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <h4 className="text-sm font-bold text-white/60 mb-6">{t('whatYouGet')}</h4>
            
            <div className="space-y-5">
              {[
                {
                  title: t('smartCollarSensors'),
                  desc: t('smartCollarSensorsDesc')
                },
                {
                  title: t('iosAndroidApp'),
                  desc: t('iosAndroidAppDesc')
                },
                {
                  title: t('drHauspetAI'),
                  desc: t('drHauspetAIDesc')
                },
                {
                  title: t('priorityVetAccess'),
                  desc: t('priorityVetAccessDesc')
                },
                {
                  title: t('secureCloud'),
                  desc: t('secureCloudDesc')
                },
                {
                  title: t('earlyAdopterBenefits'),
                  desc: t('earlyAdopterBenefitsDesc')
                }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-white/20 pl-4">
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
