import { useEffect, useState } from 'react'
import { nav } from '../data.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width:860px)').matches)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width:860px)')
    const onChange = () => {
      setIsMobile(mq.matches)
      setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // highlight the nav link of the section in view
  useEffect(() => {
    const ids = [...nav.map((n) => n.href.slice(1)), 'contact']
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const close = () => setOpen(false)
  const solid = scrolled || open

  return (
    <header id="hdr" className={solid ? 'solid' : ''}>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="HTL Hi Tech Lab home">
          <img className="lg-light" src="/htl-logo-light.png" alt="HTL Hi Tech Lab" />
          <img className="lg-dark" src="/htl-logo.png" alt="HTL Hi Tech Lab" />
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className={`links${isMobile && !open ? ' closed' : ''}`} id="links">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close} className={active === n.href.slice(1) ? 'active' : ''}>
              {n.label}
            </a>
          ))}
          <a className="cta" href="#contact" onClick={close}>
            Contact us
          </a>
        </nav>
      </div>
    </header>
  )
}
