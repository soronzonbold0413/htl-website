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
import { asset, go, pageHref, useRoute, useScrollOnRoute } from './router.js'

const titles = {
  home: 'HTL Hi Tech Lab | Telecom, Smart Water, Renewables & Construction',
  about: 'About us | HTL Hi Tech Lab',
}

export default function App() {
  const page = useRoute()
  const [lightbox, setLightbox] = useState(null) // { images, index }
  useScrollOnRoute(page)
  useEffect(() => {
    document.title = titles[page]
  }, [page])

  return (
    <>
      <Header page={page} />
      <main key={page}>
        {page === 'about' ? (
          <AboutPage />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Projects onOpen={(images, index) => setLightbox({ images, index })} />
            <Partners />
          </>
        )}
        <Contact />
      </main>
      <footer>
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
