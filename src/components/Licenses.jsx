import { useEffect, useRef, useState } from 'react'
import { licenses } from '../data.js'

const icons = {
  bolt: <path d="M27 4 10 27h12l-3 17 19-25H26l1-15z" />,
  grid: (
    <>
      <path d="M24 4v40M12 12h24M8 22h32M18 12l-6 32M30 12l6 32M14 32h20" />
    </>
  ),
  design: (
    <>
      <path d="M8 40 40 8M8 40l4-12 20-20 8 8-20 20z" />
      <path d="M28 12l8 8" />
    </>
  ),
  pipe: (
    <>
      <path d="M4 18h18a6 6 0 0 1 6 6v20M4 28h12a2 2 0 0 1 2 2v14" />
      <path d="M34 4c-3 4 3 6 0 10M42 4c-3 4 3 6 0 10" />
    </>
  ),
  metal: (
    <>
      <circle cx="24" cy="24" r="7" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" />
    </>
  ),
  drop: (
    <>
      <path d="M24 4C18 14 12 20 12 28a12 12 0 0 0 24 0c0-8-6-14-12-24z" />
      <path d="M18 30a6 6 0 0 0 6 6" />
    </>
  ),
  tower: (
    <>
      <path d="M24 20v24M16 44h16M24 20l-8 24M24 20l8 24" />
      <circle cx="24" cy="16" r="3" />
      <path d="M15 8a13 13 0 0 0 0 16M33 8a13 13 0 0 1 0 16" />
    </>
  ),
  building: (
    <>
      <path d="M6 44h36M10 44V20l14-10 14 10v24" />
      <path d="M19 44V32h10v12M17 22h4M27 22h4" />
    </>
  ),
}

const Icon = ({ name }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" aria-hidden="true">
    {icons[name]}
  </svg>
)

function Codes({ codes }) {
  const [sel, setSel] = useState(-1)
  const c = sel >= 0 ? codes[sel] : null
  return (
    <div className="lic-codes-wrap">
      <p className="lic-codes-hint">Select a code to see what it covers.</p>
      <ul className="lic-codes" aria-label="License codes">
        {codes.map((x, i) => (
          <li key={x.code}>
            <button
              className={sel === i ? 'on' : ''}
              aria-expanded={sel === i}
              aria-controls="lic-code-desc"
              onClick={() => setSel(sel === i ? -1 : i)}
            >
              {x.code}
            </button>
          </li>
        ))}
      </ul>
      <div className={`lic-code-desc${c ? ' on' : ''}`} id="lic-code-desc" aria-live="polite">
        {c && (
          <div key={c.code} className="lic-code-in">
            <b>{c.code}</b>
            <p>{c.text || 'Description will be added soon.'}</p>
            {c.mn && <p className="mn" lang="mn">{c.mn}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

const num = (i) => `L-${String(i + 1).padStart(2, '0')}`

export default function Licenses() {
  const [open, setOpen] = useState(-1)
  const closeBtn = useRef()
  const lastCard = useRef()

  const close = () => {
    setOpen(-1)
    lastCard.current?.focus()
  }

  useEffect(() => {
    if (open < 0) return
    closeBtn.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % licenses.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + licenses.length) % licenses.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open >= 0])

  const l = open >= 0 ? licenses[open] : null

  return (
    <section className="band licenses" id="licenses">
      <div className="wrap">
        <div className="lic-head rv">
          <div>
            <div className="eyebrow">Licenses &amp; permits</div>
            <h2 className="h2">Licensed for the work we take on.</h2>
          </div>
          <p className="lead" style={{ maxWidth: '46ch' }}>
            HTL holds {licenses.length} special licenses covering energy, heating, water, telecommunications, metal
            fabrication, construction and design. Select a license to read its full scope.
          </p>
        </div>

        <ol className="lic-grid">
          {licenses.map((x, i) => (
            <li key={x.title} className="rv">
              <button
                className="lic-card"
                onClick={(e) => {
                  lastCard.current = e.currentTarget
                  setOpen(i)
                }}
                aria-haspopup="dialog"
              >
                <span className="lic-top">
                  <span className="lic-no">{num(i)}</span>
                  <span className="lic-cat">{x.category}</span>
                </span>
                <span className="lic-ic">
                  <Icon name={x.icon} />
                </span>
                <span className="lic-spec">{x.spec}</span>
                <span className="lic-title">{x.title}</span>
                <span className="lic-more">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className={`lic-modal${l ? ' on' : ''}`} onClick={(e) => e.target === e.currentTarget && close()} aria-hidden={l ? undefined : 'true'}>
        {l && (
          <div className="lic-dialog" role="dialog" aria-modal="true" aria-labelledby="lic-dialog-title" key={open}>
            <div className="lic-dialog-side">
              <span className="lic-no">{num(open)}</span>
              <span className="lic-ic big">
                <Icon name={l.icon} />
              </span>
              <span className="lic-spec">{l.spec}</span>
              <span className="lic-cat">{l.category}</span>
            </div>
            <div className="lic-dialog-body">
              <div className="eyebrow">Special license</div>
              <h3 id="lic-dialog-title">{l.title}</h3>
              <p className="lic-scope">{l.scope}</p>
              {l.codes && <Codes codes={l.codes} />}
              <div className="lic-original">
                <span>Official wording (Mongolian)</span>
                <p lang="mn">{l.original}</p>
              </div>
              <div className="lic-nav">
                <button onClick={() => setOpen((i) => (i - 1 + licenses.length) % licenses.length)} aria-label="Previous license">
                  ←
                </button>
                <span>
                  {open + 1} / {licenses.length}
                </span>
                <button onClick={() => setOpen((i) => (i + 1) % licenses.length)} aria-label="Next license">
                  →
                </button>
              </div>
            </div>
            <button className="lic-close" ref={closeBtn} onClick={close}>
              Close ✕
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
