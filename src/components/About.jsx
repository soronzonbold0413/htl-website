import { useEffect, useRef, useState } from 'react'
import { about } from '../data.js'
import { prefersReducedMotion } from '../motion.js'
import { go, pageHref } from '../router.js'

function CountUp({ to, start }) {
  const [n, setN] = useState(to)
  useEffect(() => {
    if (!start || prefersReducedMotion()) return
    let raf
    const t0 = performance.now()
    const d = 1600
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / d)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, to])
  return <span>{n}</span>
}

export default function About() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section className="band" id="about">
      <div className="wrap about-grid">
        <div className="about-text rv">
          <div className="eyebrow">About HTL</div>
          <h2 className="h2">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p className="lead" key={i} style={i === 0 ? { marginTop: 22 } : undefined}>
              {p}
            </p>
          ))}
          <div className="since">
            <div className="yr">{about.founded}</div>
            <span>
              Founded in
              <br />
              Ulaanbaatar
            </span>
          </div>
        </div>
        <div className="stats-col">
          <div className={`stats rv${started ? ' go' : ''}`} ref={ref}>
            {about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">
                  <CountUp to={s.value} start={started} />
                  <sup>{s.suffix}</sup>
                </div>
                <div className="lbl">{s.label}</div>
                <i className="bar" />
              </div>
            ))}
          </div>
          <a className="about-more rv" href={pageHref('about')} onClick={(e) => go(e, 'about')}>
            <span>
              <b>About us</b>
              <small>Licenses and engineering team</small>
            </span>
            <span className="ar" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
