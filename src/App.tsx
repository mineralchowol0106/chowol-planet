import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Stars from './components/Stars'
import Nav from './components/Nav'
import Home from './pages/Home'
import Name from './pages/Name'
import Preference from './pages/Preference'
import Gallery from './pages/Gallery'
import Message from './pages/Message'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Stars />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/name" element={<Name />} />
          <Route path="/preference" element={<Preference />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
