import { useEffect, useState } from 'react'

// Two pages: 'home' and 'about'.
// On the real website the About page lives at /about.
// Build with VITE_ROUTER=hash to use #about-us instead (used for the claude.ai preview).
const HASH = import.meta.env.VITE_ROUTER === 'hash'
const ABOUT_HASH = '#about-us'

export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, '')

function readPage() {
  if (HASH) return window.location.hash === ABOUT_HASH ? 'about' : 'home'
  return window.location.pathname.replace(/\/+$/, '') === '/about' ? 'about' : 'home'
}

export function pageHref(page) {
  if (HASH) return page === 'about' ? ABOUT_HASH : '#top'
  return page === 'about' ? '/about' : '/'
}

// Link to a section of the home page (e.g. '#services') from any page
export function sectionHref(hash) {
  return HASH ? hash : `/${hash}`
}

export function useRoute() {
  const [page, setPage] = useState(readPage)
  useEffect(() => {
    const update = () => setPage(readPage())
    window.addEventListener('popstate', update)
    window.addEventListener('hashchange', update)
    return () => {
      window.removeEventListener('popstate', update)
      window.removeEventListener('hashchange', update)
    }
  }, [])
  return page
}

// Click handler for page/section links: avoids full reloads on the real website
export function go(e, page, hash) {
  if (HASH) return // the browser's own hash navigation handles it
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
  e.preventDefault()
  const url = page === 'about' ? '/about' : '/' + (hash || '')
  window.history.pushState({}, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

// After a page change, scroll to the section in the URL or to the top
export function useScrollOnRoute(page) {
  useEffect(() => {
    const h = window.location.hash
    requestAnimationFrame(() => {
      const el = h && h !== ABOUT_HASH && h !== '#top' ? document.querySelector(h) : null
      if (el) el.scrollIntoView()
      else window.scrollTo(0, 0)
    })
  }, [page])
}
