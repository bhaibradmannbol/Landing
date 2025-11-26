import { Button } from '@/components/ui/button'
import { Check, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const GOOGLE_FORM_URL = 'https://forms.gle/your-form-id' // Replace with actual form URL

export default function EarlyAccessSection() {
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
            Limited Availability
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Free Early Access
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Join our exclusive beta program and be among the first to experience the future of pet health monitoring. No cost, no commitment.
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Join Early?</h3>
            <p className="text-white/60 mb-8">Get exclusive benefits as an early adopter</p>
            
            <div className="space-y-4 mb-8">
              {[
                '24/7 continuous monitoring of your dog\'s vital signs',
                'Instant health alerts for abnormalities',
                'AI-powered health summaries in natural language',
                'One-tap emergency vet booking',
                'Complete medical records and health history',
                'Peace of mind knowing your dog\'s health is always being monitored'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full mb-4 bg-white text-black hover:bg-white/90 font-semibold"
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            >
              <span>Request Free Access</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            <p className="text-sm text-center text-white/50">
              Limited to 500 users globally • Completely free for early adopters
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-black/40 border border-white/10"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <h4 className="text-sm font-bold text-white/60 mb-6">WHAT YOU GET</h4>
            
            <div className="space-y-5">
              {[
                {
                  title: 'Smart collar with clinical-grade sensors',
                  desc: 'Heart rate, temperature, and motion tracking'
                },
                {
                  title: 'iOS & Android app with lifetime updates',
                  desc: 'Real-time dashboards, AI assistant, medical records'
                },
                {
                  title: 'Dr. HausPet AI Assistant',
                  desc: '24/7 health insights powered by advanced AI'
                },
                {
                  title: 'Priority access to vet network',
                  desc: 'Direct integration with validated veterinary clinics'
                },
                {
                  title: 'Secure cloud storage for medical records',
                  desc: 'HIPAA-compliant, military-grade encryption'
                },
                {
                  title: 'Early adopter benefits',
                  desc: 'Exclusive features and lifetime discounts'
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
