import { NavLink } from 'react-router-dom'

const links = [
  { to: '/name', label: '프로필' },
  { to: '/preference', label: '취향' },
  { to: '/gallery', label: '화보집' },
  { to: '/message', label: '듣고싶은말' },
]

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 40px',
      background: 'linear-gradient(to bottom, rgba(2,3,10,0.9), transparent)',
    }}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontSize: 15, fontWeight: 700, color: '#fff',
          letterSpacing: '0.15em', opacity: 0.9,
        }}>✦ CHOWOL</span>
      </NavLink>
      <div style={{ display: 'flex', gap: 36 }}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} style={({ isActive }) => ({
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: isActive ? '#93c5fd' : 'rgba(255,255,255,0.55)',
            borderBottom: isActive ? '1px solid #93c5fd' : '1px solid transparent',
            paddingBottom: 2,
            transition: 'all 0.2s',
          })}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
