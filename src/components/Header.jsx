import { useEffect, useState } from 'react'
import { nav, services, projects } from '../data.js'
import { asset, go, pageHref, sectionHref, servicePage, projectPage } from '../router.js'

const menuServices = services.map((x, i) => ({
  page: servicePage(x.slug),
  kicker: `0${i + 1} · ${x.code}`,
  label: x.title,
}))
const menuProjects = projects.map((p) => ({
  page: projectPage(p.slug),
  kicker: p.eyebrow,
  label: p.title,
  img: (p.images.find(([, , f]) => f !== 'contain') || p.images[0])[0],
}))

export default function Header({ page }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width:860px)').matches)
  const [active, setActive] = useState('')
  const [shut, setShut] = useState('') // dropdown closed after a click, until the cursor leaves it

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
      className:
        active === item.section ||
        (item.section === '#projects' && page.startsWith('project/')) ||
        (item.section === '#services' && page.startsWith('service/'))
          ? 'active'
          : '',
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
          {nav.map((item) =>
            item.menu ? (
              <div className={`dd${shut === item.menu ? ' shut' : ''}`} key={item.label} onMouseLeave={() => setShut('')}>
                <a {...linkProps(item)} aria-haspopup="true">
                  {item.label}
                  <svg className="dd-caret" viewBox="0 0 10 6" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
                <div className={`dd-panel dd-${item.menu}`}>
                  {(item.menu === 'services' ? menuServices : menuProjects).map((m) => (
                    <a
                      key={m.page}
                      href={pageHref(m.page)}
                      className={page === m.page ? 'current' : ''}
                      onClick={(e) => {
                        setOpen(false)
                        setShut(item.menu)
                        e.currentTarget.blur()
                        go(e, m.page)
                      }}
                    >
                      {m.img && <img src={asset(m.img)} alt="" loading="lazy" />}
                      <span>
                        <small>{m.kicker}</small>
                        <b>{m.label}</b>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.label} {...linkProps(item)}>
                {item.label}
              </a>
            )
          )}
          <a {...linkProps({ section: '#contact' })} className="cta">
            Contact us
          </a>
        </nav>
      </div>
    </header>
  )
}
