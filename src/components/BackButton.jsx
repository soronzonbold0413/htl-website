import { createPortal } from 'react-dom'
import { goBack } from '../router.js'

// "← Back" link pinned to the top left of every inner page.
// Rendered straight into <body> so no section, photo or animation can cover it.
export default function BackButton({ fallback = 'home', fallbackHash }) {
  return createPortal(
    <a className="back-btn" href="#" onClick={(e) => goBack(e, fallback, fallbackHash)}>
      <span className="back-ar" aria-hidden="true">←</span> Back
    </a>,
    document.body
  )
}
