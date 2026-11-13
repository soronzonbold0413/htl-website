import { asset, go, pageHref, projectPage } from '../router.js'
import { projects } from '../data.js'

export default function Projects({ onOpen }) {
  return (
    <section className="band" id="projects">
      <div className="wrap">
        <div className="proj-head rv">
          <div>
            <div className="eyebrow">Selected projects</div>
            <h2 className="h2">Recent work in the field.</h2>
          </div>
          <nav className="proj-jump" aria-label="Jump to project">
            {projects.map((p) => (
              <a key={p.id} href={`#${p.id}`}>
                {p.short}
              </a>
            ))}
          </nav>
        </div>

        {projects.map((p) => (
          <article className={`project${p.flip ? ' flip' : ''}`} id={p.id} key={p.id}>
            <div className="info rv">
              <div className="eyebrow">{p.eyebrow}</div>
              <h3>{p.title}</h3>
              <dl className="meta">
                {p.meta.map(([k, v]) => (
                  <Meta key={k} k={k} v={v} />
                ))}
              </dl>
              <p className="desc">{p.text}</p>
              <a
                className="proj-more"
                href={pageHref(projectPage(p.slug))}
                onClick={(e) => go(e, projectPage(p.slug))}
              >
                <span>View project details</span>
                <span className="ar" aria-hidden="true">→</span>
              </a>
            </div>
            <div className={`gallery rv${p.layout === 'grid' ? '' : ' ' + p.layout}`}>
              {p.images.map(([src, alt, fit], i) => (
                <button key={src} className={i === 0 ? 'big' : ''} onClick={() => onOpen(p.images.map(([s, a]) => [asset(s), a]), i)}>
                  {/* third value 'contain' shows the whole image (for graphics) instead of cropping it */}
                  <img src={asset(src)} alt={alt} loading="lazy" className={fit === 'contain' ? 'fit-contain' : undefined} />
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Meta({ k, v }) {
  return (
    <>
      <dt>{k}</dt>
      <dd>{v}</dd>
    </>
  )
}
