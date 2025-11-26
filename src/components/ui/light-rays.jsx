import FloatingLines from './floating-lines'

export default function LightRays({ className = '' }) {
  return (
    <div 
      className={`fixed inset-0 overflow-hidden ${className}`}
      style={{ zIndex: -10 }}
    >
      {/* Silver/Gray gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #3a3a3a 50%, #2d2d2d 75%, #1a1a1a 100%)'
        }}
      />
      
      {/* Animated gradient lines */}
      <FloatingLines />
      
      {/* Subtle silver gradient orbs */}
      <div 
        className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(168, 168, 168, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 5s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(200, 200, 200, 0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 6s ease-in-out infinite',
          animationDelay: '1s'
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-[650px] h-[650px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(180, 180, 180, 0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 5.5s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
    </div>
  );
}
