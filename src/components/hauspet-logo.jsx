import { motion } from 'framer-motion'

export default function HausPetLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-6 left-6 z-50 flex items-center gap-3"
    >
      {/* Paw Icon Logo */}
      <img 
        src="/images/hauspet-logo.png" 
        alt="HausPet Icon" 
        className="h-14 w-14 object-contain"
      />
      
      {/* Text Logo */}
      <img 
        src="/images/hauspet-logo-text.png" 
        alt="HausPet" 
        className="h-8 w-auto object-contain"
      />
    </motion.div>
  )
}
