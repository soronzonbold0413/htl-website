import Mascot from './Mascot.jsx'
import { aboutPage, team, about } from '../data.js'
import { go, pageHref, sectionHref } from '../router.js'
import Team from './Team.jsx'
import Licenses from './Licenses.jsx'
import BackButton from './BackButton.jsx'

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <Mascot pose="peace" />
        <svg className="hexbg" viewBox="0 0 100 100" aria-hidden="true">
          <polygon points="50,2 92,26 92,74 50,98 8,74 8,26" fill="none" stroke="#fff" strokeWidth="2" />
          <polygon points="50,16 80,33 80,67 50,84 20,67 20,33" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
        <div className="wrap">
          <BackButton />
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href={pageHref('home')} onClick={(e) => go(e, 'home')}>
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{aboutPage.title}</span>
          </nav>
          <h1>{aboutPage.title}</h1>
          <p className="sub">{aboutPage.intro}</p>
        </div>
      </section>

      <Licenses />

      <section className="band team" id="team">
        <div className="wrap">
          <div className="team-head rv">
            <div>
              <div className="eyebrow">Our people</div>
              <h2 className="h2">Engineering team</h2>
            </div>
            <p className="lead" style={{ maxWidth: '46ch' }}>
              The engineers who design, install and maintain HTL systems in the field, from network sites to water
              kiosks.
            </p>
          </div>
        </div>
        <Team />
      </section>

      <section className="band about-cta">
        <div className="wrap cta-row rv">
          <div>
            <div className="eyebrow">Since {about.founded}</div>
            <h2 className="h2">Work with our engineers.</h2>
          </div>
          <div className="btns" style={{ marginTop: 0 }}>
            <a className="btn red" href="#contact">
              Contact us <span className="ar">→</span>
            </a>
            <a className="btn line" href={sectionHref('#projects')} onClick={(e) => go(e, 'home', '#projects')}>
              See our projects
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
