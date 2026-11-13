import { projects, team as staff } from '../data.js'
import { asset, go, pageHref, projectPage, sectionHref } from '../router.js'
import BackButton from './BackButton.jsx'

// **text** in data.js is shown highlighted
const emphasize = (t) =>
  t.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i} className="hl">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  )

export default function ProjectPage({ slug, onOpen }) {
  const i = projects.findIndex((p) => p.slug === slug)

  if (i < 0) {
    return (
      <section className="page-hero">
        <div className="wrap">
          <h1>Project not found</h1>
          <p className="sub">This project page does not exist. It may have been renamed.</p>
          <div className="btns">
            <a className="btn red" href={sectionHref('#projects')} onClick={(e) => go(e, 'home', '#projects')}>
              See all projects <span className="ar">→</span>
            </a>
          </div>
        </div>
      </section>
    )
  }

  const p = projects[i]
  const d = p.details || {}
  const overview = d.overview && d.overview.length ? d.overview : [p.text]
  const facts = [...p.meta, ...(d.facts || [])]
  const all = [...p.images, ...(p.photos || [])] // home photos + project-page-only photos
  const gallery = all.map(([s, a]) => [asset(s), a])
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  const [cover] = all.find(([, , fit]) => fit !== 'contain') || all[0]

  // project team: shown right after the scope of work when there is one, otherwise after the main works
  const teamSection = d.team && d.team.length > 0 && (
        <section className="band proj-team">
          <div className="wrap">
            <div className="eyebrow">Project team</div>
            <h2 className="h2">The people on this project</h2>
            <ul className="pt-grid">
              {d.team.map(([role, name]) => {
                const person = staff.find((x) => x.name === name)
                return (
                  <li key={role + name} className={`pt rv${person ? ' has-photo' : ''}`}>
                    {person ? (
                      <img src={asset(person.photo)} alt="" loading="lazy" />
                    ) : (
                      <span className="pt-initial" aria-hidden="true">
                        {name.charAt(0)}
                      </span>
                    )}
                    <span className="pt-text">
                      <small>{role}</small>
                      <b>{name}</b>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )

  return (
    <>
      <section className="proj-hero">
        <img className="proj-hero-bg" src={asset(cover)} alt="" />
        <div className="proj-hero-shade" />
        <div className="wrap">
          <BackButton fallback="home" fallbackHash="#projects" />
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href={pageHref('home')} onClick={(e) => go(e, 'home')}>
              Home
            </a>
            <span aria-hidden="true">/</span>
            <a href={sectionHref('#projects')} onClick={(e) => go(e, 'home', '#projects')}>
              Projects
            </a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{p.short}</span>
          </nav>
          <div className="eyebrow">{p.eyebrow}</div>
          <h1>{p.title}</h1>
          <dl className="proj-facts">
            {p.meta.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band proj-body">
        <div className="wrap proj-body-grid">
          <div className="proj-overview rv">
            <div className="eyebrow">Overview</div>
            {overview.map((t, k) => (
              <p key={k}>{emphasize(t)}</p>
            ))}
            {d.stats && d.stats.length > 0 && (
              <dl className="proj-stats">
                {d.stats.map(([v, l]) => (
                  <div key={l}>
                    <dt>{v}</dt>
                    <dd>{l}</dd>
                  </div>
                ))}
              </dl>
            )}
            {d.highlights && d.highlights.length > 0 && (
              <>
                <h2 className="proj-sub">Highlights</h2>
                <ul className="proj-highlights">
                  {d.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <aside className="proj-card rv" aria-label="Project facts">
            <div className="eyebrow">Project facts</div>
            <dl>
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <a className="btn red" href="#contact">
              Discuss a similar project <span className="ar">→</span>
            </a>
          </aside>
        </div>
      </section>

      {d.map && (
        <section className="band proj-map">
          <div className="wrap map-grid">
            <div className="rv">
              <div className="eyebrow">Site location</div>
              <h2 className="h2">Where we work</h2>
              <p className="map-cap">{d.map.caption}</p>
              <p className="map-key">
                <span className="map-ndt">NDT</span> National Data Centre (ICT Center)
              </p>
            </div>
            <button className="map-img rv" onClick={() => onOpen([[asset(d.map.src), d.map.alt]], 0)}>
              <img src={asset(d.map.src)} alt={d.map.alt} loading="lazy" />
              <span className="map-zoom">Click to enlarge ⤢</span>
            </button>
          </div>
        </section>
      )}

      {d.works && d.works.length > 0 && (
        <section className="band proj-works">
          <div className="wrap">
            <div className="eyebrow">Main works</div>
            <h2 className="h2">What HTL builds</h2>
            <div className="works">
              {d.works.map((w, k) => (
                <article key={w.title} className={`work rv${k % 2 ? ' flip' : ''}${w.photo ? '' : ' no-photo'}`}>
                  {w.photo && (
                    <button className="work-photo" onClick={() => onOpen(d.works.filter((x) => x.photo).map((x) => [asset(x.photo[0]), x.photo[1]]), d.works.filter((x) => x.photo).indexOf(w))}>
                      <img src={asset(w.photo[0])} alt={w.photo[1]} loading="lazy" />
                    </button>
                  )}
                  <div className="work-text">
                    <span className="scope-no">{String(k + 1).padStart(2, '0')}</span>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                    {w.items && (
                      <ul>
                        {w.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {!(d.scope && d.scope.length) && teamSection}

      {d.safety && (
        <section className="band proj-safety">
          <div className="wrap commit-grid rv">
            <div className="commit-mark safety-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
                <path d="M24 4 8 10v12c0 10 7 18 16 22 9-4 16-12 16-22V10z" />
                <path d="M17 24l5 5 9-10" />
              </svg>
            </div>
            <div>
              <div className="eyebrow">Health, safety and environment</div>
              <h2 className="h2">{d.safety.title}</h2>
              {d.safety.text.map((t, k) => (
                <p key={k}>{t}</p>
              ))}
              {d.safety.tags && (
                <ul className="safety-tags">
                  {d.safety.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {d.commitment && (
        <section className="band proj-commit">
          <div className="wrap commit-grid rv">
            <div className="commit-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4">
                <circle cx="16" cy="14" r="5" />
                <circle cx="32" cy="14" r="5" />
                <path d="M6 36c0-6 4.5-10 10-10s10 4 10 10M22 36c0-6 4.5-10 10-10s10 4 10 10" />
              </svg>
            </div>
            <div>
              <div className="eyebrow">Social responsibility</div>
              <h2 className="h2">{d.commitment.title}</h2>
              {d.commitment.text.map((t, k) => (
                <p key={k}>{t}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {d.scope && d.scope.length > 0 && (
        <section className="band proj-scope">
          <div className="wrap">
            <div className="eyebrow">Scope of work</div>
            <h2 className="h2">What HTL delivered</h2>
            {d.scopeIntro && <p className="scope-intro">{d.scopeIntro}</p>}
            {d.scope.every(([, src]) => src) ? (
              <ol className="scope-grid">
                {d.scope.map(([title, src], k) => (
                  <li key={title} className="scope-item rv">
                    <button
                      className="scope-photo"
                      onClick={() => onOpen(d.scope.map(([t, s2]) => [asset(s2), t]), k)}
                      aria-label={`View photo: ${title}`}
                    >
                      <img src={asset(src)} alt="" loading="lazy" />
                    </button>
                    <span className="scope-no">{String(k + 1).padStart(2, '0')}</span>
                    <h3>{title}</h3>
                  </li>
                ))}
              </ol>
            ) : (
              <ol className="scope-list">
                {d.scope.map(([title], k) => (
                  <li key={title} className="rv">
                    <span className="scope-no">{String(k + 1).padStart(2, '0')}</span>
                    <span>{title}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      )}

      {d.scope && d.scope.length > 0 && teamSection}

      {d.results && (
        <section className="band proj-results">
          <div className="wrap results-grid">
            <div className="rv">
              <div className="eyebrow">{d.results.eyebrow || 'Results'}</div>
              <h2 className="h2">{d.results.title || 'What changed for residents'}</h2>
              {d.results.text.map((t, k) => (
                <p key={k}>{t}</p>
              ))}
              {d.results.stats && (
                <dl className="results-stats">
                  {d.results.stats.map(([v, l]) => (
                    <div key={l}>
                      <dt>{v}</dt>
                      <dd>{l}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            {d.results.photo && (
              <button className="results-photo rv" onClick={() => onOpen([[asset(d.results.photo[0]), d.results.photo[1]]], 0)}>
                <img
                  src={asset(d.results.photo[0])}
                  alt={d.results.photo[1]}
                  loading="lazy"
                  className={d.results.photo[2] === 'contain' ? 'fit-contain' : undefined}
                />
              </button>
            )}
          </div>
        </section>
      )}

      <section className="band proj-photos">
        <div className="wrap">
          <div className="eyebrow">Photos</div>
          <h2 className="h2">On site</h2>
          <div className="proj-grid">
            {all.map(([src, alt, fit], k) => (
              <button key={src} className={`rv${k === 0 ? ' wide' : ''}`} onClick={() => onOpen(gallery, k)}>
                <img src={asset(src)} alt={alt} loading="lazy" className={fit === 'contain' ? 'fit-contain' : undefined} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <nav className="proj-pager" aria-label="More projects">
        <div className="wrap proj-pager-grid">
          {[
            ['Previous project', prev, 'prev'],
            ['Next project', next, 'next'],
          ].map(([label, q, dir]) => (
            <a key={dir} className={`pager ${dir}`} href={pageHref(projectPage(q.slug))} onClick={(e) => go(e, projectPage(q.slug))}>
              <img src={asset(q.images[0][0])} alt="" loading="lazy" />
              <span className="pager-text">
                <small>
                  {dir === 'prev' ? '← ' : ''}
                  {label}
                  {dir === 'next' ? ' →' : ''}
                </small>
                <b>{q.title}</b>
              </span>
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
