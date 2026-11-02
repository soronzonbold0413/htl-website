import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Partners from './components/Partners.jsx'
import Contact from './components/Contact.jsx'
import Lightbox from './components/Lightbox.jsx'

export default function App() {
  const [lightbox, setLightbox] = useState(null) // { images, index }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects onOpen={(images, index) => setLightbox({ images, index })} />
        <Partners />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <img src="/htl-logo-light.png" alt="HTL Hi Tech Lab" />
          <span>© {new Date().getFullYear()} Hi Tech Lab LLC. All rights reserved.</span>
          <a className="totop" href="#top">
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
