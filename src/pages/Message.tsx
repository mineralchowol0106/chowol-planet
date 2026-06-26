// 미리 적어둔 포스트잇 (항상 표시)
const fixed = [
  { text: '오늘도 빛나고 있어', from: '–우주' },
  { text: '네가 있어서 다행이야', from: '–별' },
  { text: '그냥 존재만으로도 충분해', from: '–달' },
  { text: '앞으로가 더 기대돼', from: '–행성' },
  { text: '초월이는 정말 특별해', from: '–은하' },
]

const POSTIT_BG = ['#ffe4ec', '#fce4ff', '#fff0d4', '#e4f0ff', '#e4ffe8']
const TAPE_COLORS = ['rgba(255,200,200,0.65)', 'rgba(220,200,255,0.65)', 'rgba(255,230,160,0.65)', 'rgba(180,210,255,0.65)', 'rgba(180,240,200,0.65)']
const ROTATIONS = [-6, 4, -3, 7, -5]
const OFFSETS = [
  { x: 0, y: 0 },
  { x: 18, y: 10 },
  { x: -14, y: 20 },
  { x: 22, y: -8 },
  { x: -8, y: 30 },
]

export default function Message() {
  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>

      {/* 타이틀 */}
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(147,197,253,0.5)', textTransform: 'uppercase', marginBottom: 8 }}>
          ✦ words for me
        </p>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontFamily: "'GabiaSaiche', sans-serif",
          fontWeight: 400, letterSpacing: '0em',
        }}>
          듣고 싶은 말
        </h1>
      </div>

      {/* 겹쳐진 포스트잇 스택 */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 260, height: 320 }}>
          {fixed.map((item, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: OFFSETS[i].y,
                left: OFFSETS[i].x,
                width: 220,
                minHeight: 200,
                background: POSTIT_BG[i],
                borderRadius: 4,
                padding: '36px 20px 24px',
                transform: `rotate(${ROTATIONS[i]}deg)`,
                boxShadow: '3px 5px 18px rgba(0,0,0,0.28), 1px 1px 0 rgba(0,0,0,0.05)',
                zIndex: i,
                transition: 'transform 0.25s, z-index 0s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.06)'
                e.currentTarget.style.zIndex = '20'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = `rotate(${ROTATIONS[i]}deg) scale(1)`
                e.currentTarget.style.zIndex = String(i)
              }}
            >
              {/* 테이프 */}
              <div style={{
                position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)',
                width: 52, height: 20,
                background: TAPE_COLORS[i],
                borderRadius: 3,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }} />

              <p style={{
                fontSize: 15,
                fontFamily: "'GabiaSaiche', sans-serif",
                color: '#2a1a30',
                lineHeight: 1.7,
                marginBottom: 16,
                wordBreak: 'keep-all',
              }}>
                {item.text}
              </p>
              <p style={{ fontSize: 12, color: 'rgba(80,50,80,0.5)', textAlign: 'right' }}>
                {item.from}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: 80, fontSize: 11, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em' }}>
        ✦ hover to read ✦
      </p>
    </div>
  )
}
