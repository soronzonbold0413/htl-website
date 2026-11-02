import { useEffect, useRef, useState } from 'react'
import { hero } from '../data.js'
import { prefersReducedMotion } from '../motion.js'

export default function Hero() {
  const vid = useRef(null)
  const [playing, setPlaying] = useState(true)
  // pick the smaller file on phones
  const src = window.matchMedia('(max-width:700px)').matches ? hero.video.mobile : hero.video.desktop

  useEffect(() => {
    if (prefersReducedMotion()) {
      vid.current?.pause()
      setPlaying(false)
    }
  }, [])

  const toggle = () => {
    const v = vid.current
    if (!v) return
    if (v.paused) {
      v.play().catch(() => {})
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <video
          ref={vid}
          src={src}
          poster={hero.video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>
      <div className="hero-shade" />
      <button className="vid-btn" onClick={toggle} aria-label={`${playing ? 'Pause' : 'Play'} background video`}>
        <span>{playing ? '❚❚' : '▶'}</span> <span>{playing ? 'Pause' : 'Play'}</span>
      </button>
      <div className="wrap hero-inner">
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1>
          {hero.lines.map((l, i) => (
            <span className="ln" key={i}>
              <span>
                {l.text}
                {l.highlight && <em>{l.highlight}</em>}
              </span>
            </span>
          ))}
        </h1>
        <p className="sub">{hero.sub}</p>
        <div className="btns">
          <a className="btn red" href="#projects">
            See our projects <span className="ar">→</span>
          </a>
          <a className="btn ghost" href="#contact">
            Talk to our engineers
          </a>
        </div>
      </div>
      <nav className="hero-bar" aria-label="Services">
        <div className="wrap">
          {hero.bar.map((b) => (
            <a key={b.label} href={b.href}>
              <b>{b.num}</b> {b.label}
            </a>
          ))}
        </div>
      </nav>
    </section>
  )
}
