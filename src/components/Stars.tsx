import { useMemo } from 'react'

export default function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 160 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.2 + 0.4,
      dur: (Math.random() * 4 + 2).toFixed(1),
      delay: (Math.random() * 5).toFixed(1),
      silver: Math.random() > 0.6,
    }))
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {stars.map(s => (
        <span
          key={s.id}
          className={`star${s.silver ? ' silver' : ''}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            '--dur': `${s.dur}s`,
            '--delay': `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
