import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { MessageSquare, BarChart3, FileText, Users } from 'lucide-react'
import SplitText from '@/components/ui/split-text'

export default function AppScreenshots() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  const screenshots = [
    {
      title: 'Veterinary Patient Management',
      subtitle: 'Clinical-grade monitoring',
      icon: Users,
      leftFeatures: [
        { title: 'Live Patient List', desc: 'Health status indicators for all patients' },
        { title: 'Real-time Vitals', desc: 'Monitor each patient continuously' },
        { title: 'Critical Alerts', desc: 'Instant notifications for urgent cases' },
      ],
      rightFeatures: [
        { title: 'Medical History', desc: 'Complete health records access' },
        { title: 'Health Scores', desc: '85 = Good, 68 = Alert status' },
        { title: 'Quick Actions', desc: 'Fast access to patient details' },
      ],
      image: '/screenshots/IMG_5462.PNG',
    },
    {
      title: 'Patient Details & Live Monitoring',
      subtitle: 'Real-time vitals at a glance',
      icon: BarChart3,
      leftFeatures: [
        { title: 'Collar Status', desc: 'ID, battery level, connection status' },
        { title: 'Live Heart Rate', desc: 'Real-time cardiac monitoring' },
        { title: 'Temperature', desc: 'Continuous body temp tracking' },
      ],
      rightFeatures: [
        { title: 'Monitoring Modes', desc: 'Select tracking intensity' },
        { title: 'Last Sync', desc: 'Timestamp of latest data' },
        { title: 'Owner Info', desc: 'Pet and owner details' },
      ],
      image: '/screenshots/IMG_5463.PNG',
    },
    {
      title: 'Dr. HausPet AI Assistant',
      subtitle: 'Powered by Google Gemini',
      icon: MessageSquare,
      leftFeatures: [
        { title: 'Vital Analysis', desc: 'Heart Rate: 125 bpm ↑ detection' },
        { title: 'Health Summaries', desc: 'Natural language insights' },
        { title: 'Quick Questions', desc: 'Common health concerns' },
      ],
      rightFeatures: [
        { title: 'Patient Insights', desc: 'Personalized recommendations' },
        { title: 'Diagnosis Help', desc: 'Instant AI assistance' },
        { title: 'Chat History', desc: 'Review past conversations' },
      ],
      image: '/screenshots/IMG_5464.PNG',
    },
    {
      title: 'Batch Medical Report Generation',
      subtitle: 'For veterinarians',
      icon: FileText,
      leftFeatures: [
        { title: 'Multi-Select', desc: 'Choose multiple patients (2/4)' },
        { title: 'Health Status', desc: 'Normal/Elevated indicators' },
        { title: 'Report Types', desc: 'Checkup, Vaccination, etc.' },
      ],
      rightFeatures: [
        { title: 'Batch Generation', desc: 'Efficient bulk processing' },
        { title: 'Recent Reports', desc: 'Access report history' },
        { title: 'Export Options', desc: 'PDF, share with owners' },
      ],
      image: '/screenshots/IMG_5465.PNG',
    },
  ]

  // Auto-loop animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [screenshots.length])

  const current = screenshots[activeIndex]
  const Icon = current.icon

  return (
    <section id="app-features" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gray-400/10 text-gray-300 border border-gray-400/20 mb-6">
            App Features
          </span>
          <SplitText
            text="See HausPet in Action"
            className="text-5xl font-bold text-white mb-4"
            delay={100}
            duration={0.6}
            splitType="words"
          />
          <p className="text-xl text-white/50">
            Intuitive apps for pet owners and clinical-grade tools for veterinarians
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="flex justify-center gap-2 mb-12">
          {screenshots.map((_, i) => (
            <div
              key={i}
              className="h-1 w-16 rounded-full bg-white/10 overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(i)}
            >
              <motion.div
                className="h-full bg-gray-400"
                initial={{ width: '0%' }}
                animate={{
                  width: i === activeIndex ? '100%' : i < activeIndex ? '100%' : '0%',
                }}
                transition={{
                  duration: i === activeIndex ? 4 : 0.3,
                  ease: 'linear',
                }}
              />
            </div>
          ))}
        </div>

        {/* Main Content - 3 Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[500px]">
          {/* Left Features */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${activeIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{current.title}</h3>
                  <p className="text-white/50 text-sm">{current.subtitle}</p>
                </div>
              </div>

              {current.leftFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/50">
                    <span className="text-sm font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-white/50 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Center Phone */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`phone-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div
                  className="relative rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden"
                  style={{
                    background: '#1a1a1a',
                    width: '280px',
                  }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl z-10" />

                  {/* Screen */}
                  <div className="aspect-[9/19.5] bg-black relative overflow-hidden">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gray-400/20 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Features */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${activeIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-1">More Features</h3>
                <p className="text-white/50 text-sm">Additional capabilities</p>
              </div>

              {current.rightFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/50">
                    <span className="text-sm font-medium">{i + 4}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-white/50 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
