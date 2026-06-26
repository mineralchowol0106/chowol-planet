import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const pages = [
  { to: '/name', label: '프로필' },
  { to: '/preference', label: '취향' },
  { to: '/gallery', label: '화보집' },
  { to: '/message', label: '듣고싶은말' },
]

export default function Home() {
  const navigate = useNavigate()
  const [typed, setTyped] = useState('')
  const full = 'Welcome to'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i++
      setTyped(full.slice(0, i))
      if (i >= full.length) clearInterval(timer)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{
      position: 'relative', minHeight: '100vh', zIndex: 1,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
    }}>

      {/* 타이틀 */}
      <p style={{
        fontSize: 15, letterSpacing: '0.08em', color: 'rgba(147,197,253,0.6)',
        textTransform: 'uppercase', marginBottom: 48, marginTop: -120,
        fontWeight: 600, textAlign: 'center',
      }}>
        {typed}<span style={{ opacity: typed.length < full.length ? 1 : 0, transition: 'opacity 0.2s' }}>|</span>
      </p>

      {/* 행성 + 궤도 링 */}
      <div className="planet-float" style={{ position: 'relative', margin: '0 auto 32px' }}>

        {/* 궤도 링 */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: 440, height: 110,
          transform: 'translate(-50%, -50%) rotateX(72deg)',
          borderRadius: '50%',
          border: '1.5px solid rgba(147,197,253,0.18)',
          pointerEvents: 'none',
        }} />

        {/* 행성 */}
        <div style={{
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #4a90d9 0%, #1a4a8a 35%, #0d2a5c 65%, #050e24 100%)',
          boxShadow: '0 0 60px rgba(59,130,246,0.5), 0 0 120px rgba(59,130,246,0.2), inset -30px -20px 60px rgba(0,0,30,0.6)',
          position: 'relative',
          cursor: 'default',
        }}>
          {/* 대기 하이라이트 */}
          <div style={{
            position: 'absolute', top: '12%', left: '15%',
            width: '40%', height: '25%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(147,197,253,0.25), transparent)',
          }} />
          {/* 표면 디테일 */}
          <div style={{
            position: 'absolute', top: '55%', left: '20%',
            width: '30%', height: '8%',
            borderRadius: '50%',
            background: 'rgba(30,80,160,0.4)',
          }} />
        </div>
      </div>

      {/* 메인 타이틀 */}
      <h1 className="fade-up" style={{
        fontFamily: "'Alike Angular', serif",
        fontSize: 'clamp(36px, 6vw, 68px)',
        fontWeight: 400,
        letterSpacing: '0.01em',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 1,
        marginBottom: 14,
        animationDelay: '0.1s',
      }}>
        Chowol's Planet
      </h1>

      {/* 캘리 문구 */}
      <p className="fade-up" style={{
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: 'clamp(20px, 3vw, 30px)',
        color: 'rgba(147,197,253,0.75)',
        letterSpacing: '0.04em',
        marginBottom: 52,
        animationDelay: '0.15s',
        textShadow: '0 0 20px rgba(147,197,253,0.3)',
      }}>
        초월, 스스로 빛나고 싶은 자.
      </p>

      {/* 탐색 버튼 */}
      <div className="fade-up" style={{
        display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center',
        animationDelay: '0.3s',
      }}>
        {pages.map(p => (
          <button key={p.to} onClick={() => navigate(p.to)} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(147,197,253,0.2)',
            borderRadius: 999,
            padding: '10px 24px',
            color: 'rgba(255,255,255,0.75)',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.05em',
            cursor: 'pointer',
            transition: 'all 0.2s',
            backdropFilter: 'blur(8px)',
          }}
            onMouseEnter={e => {
              const t = e.currentTarget
              t.style.background = 'rgba(147,197,253,0.12)'
              t.style.borderColor = 'rgba(147,197,253,0.5)'
              t.style.color = '#fff'
            }}
            onMouseLeave={e => {
              const t = e.currentTarget
              t.style.background = 'rgba(255,255,255,0.04)'
              t.style.borderColor = 'rgba(147,197,253,0.2)'
              t.style.color = 'rgba(255,255,255,0.75)'
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* 하단 장식 */}
      <p style={{
        position: 'absolute', bottom: 32,
        fontSize: 11, color: 'rgba(255,255,255,0.15)',
        letterSpacing: '0.2em',
      }}>✦ ✦ ✦</p>
    </div>
  )
}
