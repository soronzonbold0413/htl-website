import Mascot from './Mascot.jsx'
import { services } from '../data.js'
import { asset, go, pageHref, servicePage } from '../router.js'

export const icons = {
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
  study: (
    <>
      <path d="M10 4h20l8 8v32H10z" />
      <path d="M30 4v8h8M16 20h16M16 26h10" />
      <circle cx="31" cy="34" r="5" />
      <path d="M35 38l5 5" />
    </>
  ),
  pmc: (
    <>
      <rect x="6" y="8" width="36" height="34" />
      <path d="M6 16h36M16 4v8M32 4v8" />
      <path d="M12 23h14M12 29h20M12 35h10" />
    </>
  ),
  design: (
    <>
      <path d="M24 6v8M24 14l-12 30M24 14l12 30" />
      <circle cx="24" cy="14" r="3" />
      <path d="M10 34h28" />
    </>
  ),
}

const num = (i) => String(i + 1).padStart(2, '0')

function Icon({ name, w = 2.6 }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={w} strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function Services() {
  const build = services.filter((x) => x.group !== 'engineer')
  const engineer = services.filter((x) => x.group === 'engineer')
  const link = (x) => ({ href: pageHref(servicePage(x.slug)), onClick: (e) => go(e, servicePage(x.slug)) })

  return (
    <section className="band services" id="services">
      <div className="wrap">
        <div className="svc-head rv">
          <div>
            <div className="eyebrow">What we do</div>
            <h2 className="h2">Seven services, one engineering team.</h2>
          </div>
          <p className="lead" style={{ maxWidth: '46ch' }}>
            From feasibility study and design to construction, installation, integration and maintenance.
          </p>
        </div>

        <h3 className="svc-group svc-group-first rv">
          <span>01</span> Build &amp; install
          <Mascot pose="idea" />
        </h3>
        <div className="svc-cards">
          {build.map((x) => (
            <a key={x.slug} className="svc-card rv" {...link(x)}>
              <span className="svc-card-img">
                {x.photos && x.photos[0] ? (
                  <img src={asset(x.photos[0][0])} alt="" loading="lazy" />
                ) : (
                  <span className="svc-card-noimg">
                    <Icon name={x.icon} />
                  </span>
                )}
                <span className="svc-card-ic">
                  <Icon name={x.icon} />
                </span>
              </span>
              <span className="svc-card-body">
                <span className="code">{x.code}</span>
                <b>{x.title}</b>
                <span className="svc-card-text">{x.text}</span>
                <span className="svc-card-tags">
                  {x.tags.map((t) => (
                    <i key={t}>{t}</i>
                  ))}
                </span>
                <span className="svc-more">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </span>
            </a>
          ))}
        </div>

        <h3 className="svc-group rv">
          <span>02</span> Engineer &amp; manage
        </h3>
        <div className="svc-consult">
          {engineer.map((x, i) => (
            <a key={x.slug} className="svc-c rv" {...link(x)}>
              <span className="svc-c-top">
                <span className="svc-c-ic">
                  <Icon name={x.icon} w={2.2} />
                </span>
                <span className="svc-c-no">{num(build.length + i)}</span>
              </span>
              <b>{x.title}</b>
              <span className="svc-c-text">{x.text}</span>
              <span className="svc-c-tags">
                {x.tags.map((t) => (
                  <i key={t}>{t}</i>
                ))}
              </span>
              <span className="svc-more">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
