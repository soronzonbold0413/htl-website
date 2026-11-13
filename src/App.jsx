import Mascot from './components/Mascot.jsx'
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Partners from './components/Partners.jsx'
import Contact from './components/Contact.jsx'
import Lightbox from './components/Lightbox.jsx'
import AboutPage from './components/AboutPage.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import ServicePage from './components/ServicePage.jsx'
import { projects, services } from './data.js'
import { asset, pageHref, projectSlug, serviceSlug, useRoute, useScrollOnRoute, useTrackSteps } from './router.js'

const titles = {
  home: 'HTL Hi Tech Lab | Telecom, Smart Water, Renewables & Construction',
  about: 'About us | HTL Hi Tech Lab',
}

export default function App() {
  const page = useRoute()
  const [lightbox, setLightbox] = useState(null) // { images, index }
  useScrollOnRoute(page)
  const slug = projectSlug(page)
  const sslug = serviceSlug(page)
  useTrackSteps(page)
  useEffect(() => {
    const proj = slug && projects.find((p) => p.slug === slug)
    const svc = sslug && services.find((x) => x.slug === sslug)
    const name = proj ? proj.title : svc ? svc.title : null
    document.title = name ? `${name} | HTL Hi Tech Lab` : titles[page] || titles.home
  }, [page, slug, sslug])
  const openLightbox = (images, index) => setLightbox({ images, index })

  return (
    <>
      <Header page={page} />
      <main key={page}>
        {slug ? (
          <ProjectPage slug={slug} onOpen={openLightbox} />
        ) : sslug ? (
          <ServicePage slug={sslug} onOpen={openLightbox} />
        ) : page === 'about' ? (
          <AboutPage />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Projects onOpen={openLightbox} />
            <Partners />
          </>
        )}
        <Contact />
      </main>
      <footer>
        <div className="peek-wrap" aria-hidden="true">
          <Mascot pose="peek" />
        </div>
        <div className="wrap">
          <img src={asset('/htl-logo-white.png')} alt="HTL Hi Tech Lab" />
          <span>© {new Date().getFullYear()} Hi Tech Lab LLC. All rights reserved.</span>
          <a className="totop" href={pageHref(page)} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            Back to top ↑
          </a>
        </div>
      </footer>
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onIndex={(index) => setLightbox((l) => ({ ...l, index }))}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
