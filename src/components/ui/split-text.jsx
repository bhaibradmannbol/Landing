import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const elements = splitType === 'words' ? text.split(' ') : text.split('');

  const easeMap = {
    'power3.out': [0.215, 0.61, 0.355, 1],
    'power2.out': [0.165, 0.84, 0.44, 1],
    'ease': [0.25, 0.1, 0.25, 1]
  };

  return (
    <div ref={ref} className={className} style={{ textAlign }}>
      {elements.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={from}
          animate={inView ? to : from}
          transition={{
            duration,
            delay: (index * delay) / 1000,
            ease: easeMap[ease] || easeMap['power3.out']
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onLetterAnimationComplete : undefined
          }
        >
          {char === ' ' ? '\u00A0' : char}
          {splitType === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;
