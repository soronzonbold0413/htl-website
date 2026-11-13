import { useEffect, useState } from 'react'

// Pages: 'home', 'about', one page per project ('project/<slug>') and per service ('service/<slug>').
// On the real website they live at /, /about, /projects/<slug> and /services/<slug>.
// Build with VITE_ROUTER=hash to use #about-us, #project-<slug> and #service-<slug> instead (used for the claude.ai preview).
const HASH = import.meta.env.VITE_ROUTER === 'hash'
const ABOUT_HASH = '#about-us'
const PROJECT_HASH = '#project-'
const SERVICE_HASH = '#service-'

export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, '')

export const projectPage = (slug) => `project/${slug}`
export const projectSlug = (page) => (page.startsWith('project/') ? page.slice(8) : null)
export const servicePage = (slug) => `service/${slug}`
export const serviceSlug = (page) => (page.startsWith('service/') ? page.slice(8) : null)

function readPage() {
  if (HASH) {
    const h = window.location.hash
    if (h === ABOUT_HASH) return 'about'
    if (h.startsWith(PROJECT_HASH)) return projectPage(h.slice(PROJECT_HASH.length))
    if (h.startsWith(SERVICE_HASH)) return servicePage(h.slice(SERVICE_HASH.length))
    return 'home'
  }
  const p = window.location.pathname.replace(/\/+$/, '')
  if (p === '/about') return 'about'
  const m = p.match(/^\/projects\/([\w-]+)$/)
  if (m) return projectPage(m[1])
  const sm = p.match(/^\/services\/([\w-]+)$/)
  if (sm) return servicePage(sm[1])
  return 'home'
}

export function pageHref(page) {
  const slug = projectSlug(page)
  if (slug) return HASH ? PROJECT_HASH + slug : `/projects/${slug}`
  const sslug = serviceSlug(page)
  if (sslug) return HASH ? SERVICE_HASH + sslug : `/services/${sslug}`
  if (page === 'about') return HASH ? ABOUT_HASH : '/about'
  return HASH ? '#top' : '/'
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
  const url = page === 'home' ? '/' + (hash || '') : pageHref(page)
  // remember how deep into the site this entry is, so the Back button knows whether it can step back
  window.history.pushState({ htlDepth: ((window.history.state && window.history.state.htlDepth) || 0) + 1 }, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

// After a page change, scroll to the section in the URL or to the top
export function useScrollOnRoute(page) {
  useEffect(() => {
    const h = window.location.hash
    const isRoute = h === ABOUT_HASH || h === '#top' || h.startsWith(PROJECT_HASH) || h.startsWith(SERVICE_HASH)
    requestAnimationFrame(() => {
      const el = h && !isRoute ? document.querySelector(h) : null
      if (el) el.scrollIntoView()
      else window.scrollTo(0, 0)
    })
  }, [page])
}

// Back button: return to the previous page on this site, or to the parent page
// when the visitor arrived directly (e.g. from a search engine or a shared link).
let hashSteps = 0 // preview build only: counts page changes made by hash links
export function useTrackSteps(page) {
  const [first, setFirst] = useState(true)
  useEffect(() => {
    if (!HASH) return
    if (first) setFirst(false)
    else hashSteps += 1
  }, [page])
}
export function goBack(e, fallback = 'home', fallbackHash) {
  e.preventDefault()
  const depth = HASH ? hashSteps : (window.history.state && window.history.state.htlDepth) || 0
  if (depth > 0) {
    if (HASH) hashSteps = Math.max(0, hashSteps - 2)
    window.history.back()
  } else if (HASH) {
    window.location.hash = fallbackHash || pageHref(fallback)
  } else {
    go(e, fallback, fallbackHash)
  }
}
