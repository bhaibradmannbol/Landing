import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, User, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/language-context'

export default function WaitlistModal({ isOpen, onClose }) {
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
        setTimeout(() => {
          onClose()
          setStatus('')
        }, 2000)
      } else if (response.status === 409) {
        setStatus('exists')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div 
              className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900/95 p-8 shadow-2xl"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {t('joinWaitlistTitle')}
                </h2>
                <p className="text-white/60 text-sm">
                  {t('joinWaitlistDesc')}
                </p>
              </div>

              {/* Form */}
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('welcomeAboard')}</h3>
                  <p className="text-white/60">{t('checkEmail')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('yourName')}
                      className="w-full h-14 pl-12 pr-4 rounded-xl bg-white/5 text-white placeholder:text-white/40 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('yourEmail')}
                      required
                      className="w-full h-14 pl-12 pr-4 rounded-xl bg-white/5 text-white placeholder:text-white/40 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full h-14 bg-white text-black hover:bg-white/90 font-semibold text-base rounded-xl"
                  >
                    {status === 'submitting' ? t('submitting') : t('joinWaitlist')}
                  </Button>

                  {status === 'exists' && (
                    <p className="text-sm text-center text-yellow-400">
                      {t('alreadySubscribed')}
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm text-center text-red-400">
                      {t('errorMessage')}
                    </p>
                  )}

                  <p className="text-xs text-center text-white/40 pt-2">
                    {t('noSpam')}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
