export function ProgressiveBlur({ className, direction = 'right', blurIntensity = 1 }) {
  const gradientDirection = {
    left: 'to right',
    right: 'to left',
    top: 'to bottom',
    bottom: 'to top',
  }[direction]

  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(${gradientDirection}, rgba(255,255,255,0) 0%, rgba(255,255,255,${blurIntensity}) 100%)`,
        backdropFilter: `blur(${blurIntensity * 4}px)`,
      }}
    />
  )
}
