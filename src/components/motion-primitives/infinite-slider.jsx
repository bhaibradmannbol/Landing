import { motion } from 'framer-motion'

export function InfiniteSlider({ children, speed = 40, speedOnHover, gap = 24 }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-[var(--gap)]"
        style={{ '--gap': `${gap}px` }}
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
        whileHover={
          speedOnHover
            ? {
                transition: {
                  duration: speedOnHover,
                },
              }
            : undefined
        }
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
