import { services } from '../data.js'

const icons = {
  tower: (
    <>
      <path d="M24 20v24M16 44h16M24 20l-8 24M24 20l8 24" />
      <circle cx="24" cy="16" r="3" />
      <path d="M15 8a13 13 0 0 0 0 16M33 8a13 13 0 0 1 0 16M10 4a19 19 0 0 0 0 24M38 4a19 19 0 0 1 0 24" />
    </>
  ),
  building: (
    <>
      <path d="M6 44h36M10 44V20l14-10 14 10v24" />
      <path d="M19 44V32h10v12M17 22h4M27 22h4" />
    </>
  ),
  energy: (
    <>
      <path d="M4 30l6-14h20l-6 14z" />
      <path d="M8 23h20M17 16l-4 14M14 30v8M8 38h12" />
      <path d="M38 44V20" />
      <path d="M38 20l-7-9M38 20l10-1M38 20l-3 10" />
    </>
  ),
  control: (
    <>
      <rect x="4" y="8" width="40" height="26" />
      <path d="M16 42h16M24 34v8M10 26l8-8 6 5 12-10" />
    </>
  ),
}

export default function Services() {
  return (
    <section className="band services" id="services">
      <div className="wrap">
        <div className="svc-head rv">
          <div>
            <div className="eyebrow">What we do</div>
            <h2 className="h2">Four disciplines, one engineering team.</h2>
          </div>
          <p className="lead" style={{ maxWidth: '44ch' }}>
            We handle the full cycle: supply, installation, integration and maintenance.
          </p>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <article className="svc rv" data-n={String(i + 1).padStart(2, '0')} key={s.code}>
              <div className="ic">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                  {icons[s.icon]}
                </svg>
              </div>
              <div className="code">{s.code}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
