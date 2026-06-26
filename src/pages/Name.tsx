const links = [
  { label: '인스타 (개인)', icon: '📷', href: 'https://www.instagram.com/hate.love.pop/' },
  { label: '인스타 (공부)', icon: '📚', href: 'https://www.instagram.com/gaz.seng/' },
  { label: '블로그', icon: '✍️', href: 'http://m.blog.naver.com/iiaa_blog' },
  { label: '틱톡', icon: '🎵', href: 'https://www.tiktok.com/@ddtcha' },
]

export default function Name() {
  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px' }}>

        {/* 라벨 */}
        <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'rgba(147,197,253,0.5)', textTransform: 'uppercase', marginBottom: 16 }}>
          ✦ about me
        </p>

        {/* 이름 */}
        <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontFamily: "'GabiaSaiche', sans-serif", fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1, marginBottom: 8, color: '#fff' }}>
          이초월
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(147,197,253,0.7)', letterSpacing: '0.08em', marginBottom: 48 }}>
          오색찬란한 볼 같은 사람
        </p>

        {/* 구분선 */}
        <div style={{ width: 40, height: 1, background: 'rgba(147,197,253,0.3)', marginBottom: 40 }} />

        {/* 소개 */}
        <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.65)', marginBottom: 12 }}>
          안녕하세요, 바이브코더 이초월입니다 👋
        </p>
        <p style={{ fontSize: 18, fontWeight: 700, color: 'rgba(147,197,253,0.85)', marginBottom: 20, letterSpacing: '-0.01em' }}>
          마케터 + 개발자 + 디자이너 = 마개자이너
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', marginBottom: 12 }}>
          개발 지식을 바탕으로 필요한 앱/웹을 직접 만들고,
          개발자와 원활하게 소통하며 마케터와 디자이너 업무를 함께 수행하는
          마개자이너가 될 예정입니다.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.9, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
          센스가 있고, 미감이 좋고, 조리있게 말합니다. 아이디어가 좋고 즉흥적인 대신
          좀 꼼꼼함, 한큐에 완벽하길 원하면서 실수하고 기죽는.. 네 허당입니다.
        </p>
        <p style={{ fontSize: 14, color: 'rgba(147,197,253,0.5)', marginBottom: 56 }}>
          협업 문의 환영 ·{' '}
          <a href="mailto:lee_chowol@naver.com" style={{ color: 'rgba(147,197,253,0.8)', textDecoration: 'none', borderBottom: '1px solid rgba(147,197,253,0.3)' }}>
            lee_chowol@naver.com
          </a>
        </p>

        {/* 링크 */}
        <p style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(147,197,253,0.4)', textTransform: 'uppercase', marginBottom: 16 }}>SNS</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 20px', borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(180,180,190,0.13)',
              color: 'rgba(255,255,255,0.65)',
              fontSize: 13, fontWeight: 500, textDecoration: 'none',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.18s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(147,197,253,0.18)'
                e.currentTarget.style.borderColor = 'rgba(147,197,253,0.45)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(180,180,190,0.13)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
              }}
              onMouseDown={e => {
                e.currentTarget.style.background = 'rgba(147,197,253,0.32)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseUp={e => {
                e.currentTarget.style.background = 'rgba(147,197,253,0.18)'
              }}
            >
              <span>{l.icon}</span> {l.label}
            </a>
          ))}
        </div>

        {/* Linktree */}
        <a href="https://linktr.ee/chowollee" target="_blank" rel="noreferrer" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          padding: '18px 32px', borderRadius: 16,
          background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2))',
          border: '1px solid rgba(147,197,253,0.2)',
          color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none',
          backdropFilter: 'blur(12px)',
        }}>
          🔗 Linktree — 모든 링크 한곳에
        </a>
      </div>
    </div>
  )
}
