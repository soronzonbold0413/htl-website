import { useEffect, useState } from 'react'
import { nav } from '../data.js'
import { asset, go, pageHref, sectionHref } from '../router.js'

export default function Header({ page }) {
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

  // highlight the nav link of the home-page section in view
  useEffect(() => {
    setActive('')
    if (page !== 'home') return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ;['services', 'projects', 'partners', 'contact'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [page])

  const solid = scrolled || open

  const linkProps = (item) => {
    if (item.page) {
      return {
        href: pageHref(item.page),
        className: page === item.page ? 'active' : '',
        onClick: (e) => {
          setOpen(false)
          go(e, item.page)
        },
      }
    }
    return {
      // Contact is on every page, so that link always stays on the current page
      href: page === 'home' || item.section === '#contact' ? item.section : sectionHref(item.section),
      className: active === item.section ? 'active' : '',
      onClick: (e) => {
        setOpen(false)
        if (page !== 'home' && item.section !== '#contact') go(e, 'home', item.section)
      },
    }
  }

  return (
    <header id="hdr" className={solid ? 'solid' : ''}>
      <div className="wrap nav">
        <a className="brand" href={pageHref('home')} onClick={(e) => go(e, 'home')} aria-label="HTL Hi Tech Lab home">
          <img className="lg-light" src={asset('/htl-logo-white.png')} alt="HTL Hi Tech Lab" />
          <img className="lg-dark" src={asset('/htl-logo-color.png')} alt="HTL Hi Tech Lab" />
        </a>
        <button className="menu-btn" aria-expanded={open} aria-controls="links" onClick={() => setOpen((o) => !o)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className={`links${isMobile && !open ? ' closed' : ''}`} id="links">
          {nav.map((item) => (
            <a key={item.label} {...linkProps(item)}>
              {item.label}
            </a>
          ))}
          <a {...linkProps({ section: '#contact' })} className="cta">
            Contact us
          </a>
        </nav>
      </div>
    </header>
  )
}
