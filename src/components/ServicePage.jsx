import { services, projects, licenses } from '../data.js'
import { asset, go, pageHref, projectPage, sectionHref, servicePage } from '../router.js'
import { icons } from './Services.jsx'
import BackButton from './BackButton.jsx'

export default function ServicePage({ slug, onOpen }) {
  const i = services.findIndex((x) => x.slug === slug)
  if (i < 0) {
    return (
      <section className="page-hero">
        <div className="wrap">
          <BackButton fallbackHash="#services" />
          <h1>Service not found</h1>
          <p className="sub">This service page does not exist. It may have been renamed.</p>
        </div>
      </section>
    )
  }
  const s = services[i]
  const related = (s.projects || []).map((id) => projects.find((p) => p.id === id)).filter(Boolean)
  const lics = (s.licenses || []).map((n) => [n, licenses[n - 1]]).filter(([, l]) => l)
  const others = services.filter((x) => x.slug !== s.slug)
  const gallery = (s.photos || []).map(([src, alt]) => [asset(src), alt])

  return (
    <>
      <section className={`page-hero svc-hero${s.photos && s.photos[0] ? ' has-img' : ''}`}>
        {s.photos && s.photos[0] && (
          <>
            <img className="proj-hero-bg" src={asset(s.photos[0][0])} alt="" />
            <div className="proj-hero-shade" />
          </>
        )}
        <svg className="hexbg" viewBox="0 0 100 100" aria-hidden="true">
          <polygon points="50,2 92,26 92,74 50,98 8,74 8,26" fill="none" stroke="#fff" strokeWidth="2" />
          <polygon points="50,16 80,33 80,67 50,84 20,67 20,33" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
        <div className="wrap">
          <BackButton fallback="home" fallbackHash="#services" />
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href={pageHref('home')} onClick={(e) => go(e, 'home')}>
              Home
            </a>
            <span aria-hidden="true">/</span>
            <a href={sectionHref('#services')} onClick={(e) => go(e, 'home', '#services')}>
              Services
            </a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{s.title}</span>
          </nav>
          <div className="svc-hero-row">
            <span className="svc-hero-ic">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                {icons[s.icon]}
              </svg>
            </span>
            <div>
              <div className="eyebrow">{`Service ${String(i + 1).padStart(2, '0')} · ${s.code}`}</div>
              <h1>{s.title}</h1>
            </div>
          </div>
          <p className="sub">{s.text}</p>
          <ul className="svc-hero-tags">
            {s.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band svc-detail">
        <div className={`wrap svc-detail-grid${s.photos && s.photos.length ? '' : ' no-img'}`}>
          <div className="rv">
            <div className="eyebrow">Overview</div>
            <h2 className="h2">{s.detailTitle || s.title}</h2>
            <p className="svc-detail-text">{s.detail || s.text}</p>
          </div>
          {s.photos && s.photos.length > 0 && (
            <button className="svc-detail-img rv" onClick={() => onOpen(gallery, 0)}>
              <img src={asset(s.photos[0][0])} alt={s.photos[0][1]} loading="lazy" />
            </button>
          )}
        </div>
        {s.photos && s.photos.length > 1 && (
          <div className="wrap">
            <div className="svc-photos">
              {s.photos.slice(1).map(([src, alt], k) => (
                <button key={src} className="rv" onClick={() => onOpen(gallery, k + 1)}>
                  <img src={asset(src)} alt={alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {lics.length > 0 && (
        <section className="band svc-lics">
          <div className="wrap">
            <div className="eyebrow">Licenses</div>
            <h2 className="h2">Licensed for this work</h2>
            <ul className="svc-lic-list">
              {lics.map(([n, l]) => (
                <li key={n} className="rv">
                  <span className="lic-no">L-{String(n).padStart(2, '0')}</span>
                  <span className="lic-cat" data-cat={l.category.toLowerCase()}>
                    {l.category}
                  </span>
                  <b>{l.title}</b>
                  <p>{l.scope}</p>
                </li>
              ))}
            </ul>
            <a className="btn line" href={pageHref('about')} onClick={(e) => go(e, 'about')} style={{ marginTop: 28 }}>
              All licenses <span className="ar">→</span>
            </a>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="band svc-projects">
          <div className="wrap">
            <div className="eyebrow">Projects</div>
            <h2 className="h2">Related projects</h2>
            <div className="svc-proj-grid">
              {related.map((p) => (
                <a
                  key={p.id}
                  className="svc-proj rv"
                  href={pageHref(projectPage(p.slug))}
                  onClick={(e) => go(e, projectPage(p.slug))}
                >
                  <span className="svc-proj-img">
                    <img
                      src={asset((p.images.find(([, , f]) => f !== 'contain') || p.images[0])[0])}
                      alt=""
                      loading="lazy"
                    />
                  </span>
                  <span className="svc-proj-text">
                    <small>{p.eyebrow}</small>
                    <b>{p.title}</b>
                    <span className="svc-proj-more">
                      View project <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <nav className="band svc-others" aria-label="Other services">
        <div className="wrap">
          <div className="eyebrow">Other services</div>
          <div className="svc-other-grid">
            {others.map((x) => (
              <a key={x.slug} href={pageHref(servicePage(x.slug))} onClick={(e) => go(e, servicePage(x.slug))}>
                <span className="svc-other-ic">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                    {icons[x.icon]}
                  </svg>
                </span>
                <b>{x.title}</b>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
