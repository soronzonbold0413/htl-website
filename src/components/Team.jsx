import { useEffect, useRef, useState } from 'react'
import { team } from '../data.js'
import { asset } from '../router.js'

// Placeholder shown until a real career summary is added to `bio` in data.js
const sampleBio = (m) => [
  `${m.name.split(' ')[0]} works as ${m.title.split('\n').join(' and ')} at HTL.`,
  'This is sample text. A short career summary will appear here: education, years of experience, key projects and areas of expertise.',
]

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

export default function Team() {
  // mode: null (closed) · 'peek' (opened by hover, follows the cursor) · 'pinned' (opened by click / keyboard)
  const [mode, setMode] = useState(null)
  const [idx, setIdx] = useState(0)
  const openTimer = useRef()
  const closeTimer = useRef()
  const closeBtn = useRef()
  const hovered = useRef(-1) // card under the cursor
  const suppress = useRef(-1) // after closing, don't reopen until the cursor moves to another card

  const clear = () => {
    clearTimeout(openTimer.current)
    clearTimeout(closeTimer.current)
  }

  const lastClosed = useRef(0)

  const peek = (i) => {
    hovered.current = i
    if (suppress.current === i) return
    suppress.current = -1
    if (mode === 'pinned' || !canHover()) return
    clear()
    // short delay so the panel doesn't flash when the cursor just passes over a photo;
    // no delay when moving straight from one person to the next
    const quick = mode || Date.now() - lastClosed.current < 500
    openTimer.current = setTimeout(() => {
      setIdx(i)
      setMode('peek')
    }, quick ? 0 : 180)
  }

  // the panel closes as soon as the cursor leaves a photo (onto empty space)
  const leaveCard = () => {
    if (mode === 'pinned') return // the backdrop covers the grid while pinned; keep track of the last card
    hovered.current = -1
    suppress.current = -1
    clear()
    if (mode) lastClosed.current = Date.now()
    setMode(null)
  }

  const pin = (i) => {
    clear()
    setIdx(i)
    setMode('pinned')
  }

  const close = () => {
    clear()
    suppress.current = hovered.current
    setMode(null)
  }

  useEffect(() => {
    if (mode !== 'pinned') return
    closeBtn.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % team.length)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + team.length) % team.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mode])

  useEffect(() => clear, [])

  const m = team[idx]
  const bio = m.bio && m.bio.length ? m.bio : sampleBio(m)
  const isSample = !(m.bio && m.bio.length)

  return (
    <>
      <ul className="team-grid">
        {team.map((p, i) => (
          <li
            className={`member rv${mode && idx === i ? ' current' : ''}`}
            key={p.name}
            tabIndex={0}
            onMouseEnter={() => peek(i)}
            onMouseLeave={leaveCard}
            onClick={() => pin(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                pin(i)
              }
            }}
            aria-label={`${p.name}, ${p.title.replace('\n', ', ')}. Show career summary`}
          >
            <div className="portrait">
              <img src={asset(p.photo)} alt="" loading="lazy" width="600" height="760" />
              <div className="who">
                <h3>{p.name}</h3>
                {p.title && <p>{p.title}</p>}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={`bio-backdrop${mode === 'pinned' ? ' on' : ''}`} onClick={close} aria-hidden="true" />
      <aside
        className={`bio-panel${mode ? ' open' : ''}${mode === 'pinned' ? ' pinned' : ''}`}
        role={mode === 'pinned' ? 'dialog' : undefined}
        aria-modal={mode === 'pinned' ? 'true' : undefined}
        aria-label={`${m.name} career summary`}
        aria-hidden={mode ? undefined : 'true'}
      >
        <div className="bio-inner" key={idx}>
          <div className="bio-photo">
            <img src={asset(m.photo)} alt={m.name} />
          </div>
          <div className="bio-text">
            <div className="eyebrow">Engineering team</div>
            <h3>{m.name}</h3>
            <p className="bio-role">{m.title}</p>
            <div className="bio-body">
              {bio.map((para, k) => (
                <p key={k}>{para}</p>
              ))}
            </div>
            {isSample && <span className="bio-sample">Sample text</span>}
            {mode === 'pinned' ? (
              <div className="bio-nav">
                <button onClick={() => setIdx((i) => (i - 1 + team.length) % team.length)} aria-label="Previous person">
                  ←
                </button>
                <span>
                  {idx + 1} / {team.length}
                </span>
                <button onClick={() => setIdx((i) => (i + 1) % team.length)} aria-label="Next person">
                  →
                </button>
              </div>
            ) : (
              <p className="bio-hint">Click to keep this open</p>
            )}
          </div>
        </div>
        {mode === 'pinned' && (
          <button className="bio-close" ref={closeBtn} onClick={close}>
            Close ✕
          </button>
        )}
      </aside>
    </>
  )
}
