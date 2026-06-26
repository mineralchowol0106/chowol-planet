const likes = [
  { label: '식물 키우기', sub: '스킨답서스·트리안·하트콩야', angle: -55, dist: 240, img: '' },
  { label: '독서 및 글쓰기', sub: '독립서점·출판 꿈', angle: 15, dist: 260, img: '/photos/books1.jpg' },
]
const dislikes = [
  { label: '게임', sub: '롤 1년, 영구 은퇴', angle: 200, dist: 240, img: '/photos/game1.png' },
  { label: '단 음식', sub: '빵→밥으로 진화중', angle: 145, dist: 250, img: '' },
]

function polarToXY(angleDeg: number, dist: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: Math.cos(rad) * dist, y: Math.sin(rad) * dist }
}

export default function Preference() {
  const cx = 0
  const cy = 0

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: 80, overflow: 'hidden' }}>

      {/* 타이틀 */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(147,197,253,0.5)', textTransform: 'uppercase' }}>
          ✦ likes &amp; dislikes
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontFamily: "'GabiaSaiche', sans-serif", fontWeight: 400, letterSpacing: '0em', marginTop: 8 }}>나의 취향</h1>
      </div>

      {/* 마인드맵 영역 */}
      <div style={{ position: 'relative', width: '100%', height: 640, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {/* 호 연결선 */}
          {likes.map((item, i) => {
            const { x, y } = polarToXY(item.angle, item.dist)
            return (
              <line key={`like-${i}`}
                x1="50%" y1="50%"
                x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                stroke="rgba(74,222,128,0.25)" strokeWidth="1.5" strokeDasharray="4 4"
              />
            )
          })}
          {/* 불호 연결선 */}
          {dislikes.map((item, i) => {
            const { x, y } = polarToXY(item.angle, item.dist)
            return (
              <line key={`dislike-${i}`}
                x1="50%" y1="50%"
                x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                stroke="rgba(248,113,113,0.25)" strokeWidth="1.5" strokeDasharray="4 4"
              />
            )
          })}
        </svg>

        {/* 가운데 사진 — 종이 찢기 효과 */}
        <div style={{
          position: 'absolute', width: 200, height: 240, zIndex: 10,
          clipPath: `polygon(
            0% 6%, 3% 1%, 8% 4%, 13% 0%, 19% 3%, 25% 0%, 31% 2%, 37% 0%,
            43% 3%, 49% 0%, 55% 2%, 62% 0%, 68% 3%, 74% 0%, 80% 2%, 86% 0%,
            92% 3%, 97% 1%, 100% 5%,
            98% 12%, 100% 19%, 97% 26%, 100% 33%, 98% 40%, 100% 47%,
            98% 54%, 100% 61%, 97% 68%, 100% 75%, 98% 82%, 100% 89%, 97% 95%,
            93% 100%, 87% 97%, 82% 100%, 76% 98%, 70% 100%, 64% 97%, 58% 100%,
            52% 98%, 46% 100%, 40% 97%, 34% 100%, 28% 98%, 22% 100%, 16% 97%,
            10% 100%, 4% 98%, 0% 95%,
            2% 88%, 0% 81%, 2% 74%, 0% 67%, 2% 60%, 0% 53%,
            2% 46%, 0% 39%, 2% 32%, 0% 25%, 2% 18%, 0% 11%
          )`,
          overflow: 'hidden',
          boxShadow: '4px 6px 24px rgba(0,0,0,0.5)',
          filter: 'drop-shadow(0 0 20px rgba(147,197,253,0.2))',
        }}>
          <img
            src="/photos/me.jpg"
            alt="chowol"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* 호 노드 */}
        {likes.map((item, i) => {
          const { x, y } = polarToXY(item.angle, item.dist)
          return (
            <div key={`like-node-${i}`} style={{
              position: 'absolute',
              left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
              background: 'rgba(20,50,30,0.8)',
              border: '1px solid rgba(74,222,128,0.35)',
              borderRadius: 16,
              padding: '12px 16px',
              backdropFilter: 'blur(12px)',
              textAlign: 'center',
              minWidth: 130,
            }}>
              {item.img && (
                <img src={item.img} alt="" style={{
                  width: 64, height: 48, objectFit: 'cover',
                  borderRadius: 8, marginBottom: 8, opacity: 0.85,
                }} />
              )}
              <div style={{ fontSize: 11, color: 'rgba(74,222,128,0.7)', letterSpacing: '0.15em', marginBottom: 4 }}>호 ✦</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{item.sub}</div>
            </div>
          )
        })}

        {/* 불호 노드 */}
        {dislikes.map((item, i) => {
          const { x, y } = polarToXY(item.angle, item.dist)
          return (
            <div key={`dislike-node-${i}`} style={{
              position: 'absolute',
              left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
              background: 'rgba(50,20,20,0.8)',
              border: '1px solid rgba(248,113,113,0.3)',
              borderRadius: 16,
              padding: '12px 16px',
              backdropFilter: 'blur(12px)',
              textAlign: 'center',
              minWidth: 130,
            }}>
              {item.img && (
                <img src={item.img} alt="" style={{
                  width: 64, height: 48, objectFit: 'cover',
                  borderRadius: 8, marginBottom: 8, opacity: 0.85,
                }} />
              )}
              <div style={{ fontSize: 11, color: 'rgba(248,113,113,0.7)', letterSpacing: '0.15em', marginBottom: 4 }}>불호 ✕</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{item.sub}</div>
            </div>
          )
        })}
      </div>

      {/* 범례 */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, paddingBottom: 60 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(74,222,128,0.7)' }}>
          <span style={{ width: 24, height: 1, background: 'rgba(74,222,128,0.5)', display: 'inline-block' }} />
          좋아하는 것
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(248,113,113,0.7)' }}>
          <span style={{ width: 24, height: 1, background: 'rgba(248,113,113,0.5)', display: 'inline-block' }} />
          별로인 것
        </div>
      </div>
    </div>
  )
}
