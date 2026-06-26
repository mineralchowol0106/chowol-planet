import { useRef } from 'react'

// 사진 파일을 public/photos/ 폴더에 넣어주세요
// photo1.jpg ~ photo6.jpg
const photos = [
  { src: '/photos/photo1.jpg', caption: '' },
  { src: '/photos/photo2.jpg', caption: '' },
  { src: '/photos/photo3.jpg', caption: '' },
  { src: '/photos/photo4.jpg', caption: '' },
  { src: '/photos/photo5.jpg', caption: '' },
  { src: '/photos/photo6.jpg', caption: '' },
]

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' })
  }

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>

      {/* 타이틀 */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(147,197,253,0.5)', textTransform: 'uppercase', marginBottom: 8 }}>
          ✦ gallery
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontFamily: "'GabiaSaiche', sans-serif", fontWeight: 400, letterSpacing: '0em' }}>화보집</h1>
      </div>

      {/* 화살표 + 스크롤 영역 */}
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 60px' }}>

        {/* 왼쪽 화살표 */}
        <button onClick={() => scroll('left')} style={{
          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(147,197,253,0.2)',
          borderRadius: '50%', width: 44, height: 44, cursor: 'pointer',
          color: 'rgba(255,255,255,0.7)', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}>‹</button>

        {/* 오른쪽 화살표 */}
        <button onClick={() => scroll('right')} style={{
          position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(147,197,253,0.2)',
          borderRadius: '50%', width: 44, height: 44, cursor: 'pointer',
          color: 'rgba(255,255,255,0.7)', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}>›</button>

        {/* 가로 스크롤 컨테이너 */}
        <div ref={scrollRef} style={{
          display: 'flex', gap: 20, overflowX: 'auto', scrollbarWidth: 'none',
          paddingBottom: 8, cursor: 'grab',
        }}>
          {photos.map((p, i) => (
            <div key={i} style={{
              flexShrink: 0, width: 300, height: 400,
              borderRadius: 16, overflow: 'hidden',
              background: 'rgba(20,30,60,0.6)',
              border: '1px solid rgba(147,197,253,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,30,0.5)',
              position: 'relative',
            }}>
              <img
                src={p.src}
                alt={`photo ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => {
                  const t = e.currentTarget as HTMLImageElement
                  t.style.display = 'none'
                  const parent = t.parentElement
                  if (parent && !parent.querySelector('.placeholder')) {
                    const ph = document.createElement('div')
                    ph.className = 'placeholder'
                    ph.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:linear-gradient(135deg,#0d1f3c,#1a3a6a)'
                    ph.innerHTML = `<span style="font-size:32px;opacity:0.3">📷</span><span style="font-size:11px;color:rgba(147,197,253,0.3);letter-spacing:0.15em">photo ${i + 1}</span>`
                    parent.appendChild(ph)
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 안내 */}
      <p style={{ textAlign: 'center', marginTop: 28, fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>
        drag or use arrows to navigate
      </p>
    </div>
  )
}
