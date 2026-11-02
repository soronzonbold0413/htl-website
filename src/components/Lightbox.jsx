import { useEffect, useRef } from 'react'

export default function Lightbox({ images, index, onIndex, onClose }) {
  const closeBtn = useRef(null)
  const [src, alt] = images[index]
  const many = images.length > 1
  const prev = () => onIndex((index - 1 + images.length) % images.length)
  const next = () => onIndex((index + 1) % images.length)

  useEffect(() => {
    closeBtn.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (many && e.key === 'ArrowLeft') prev()
      if (many && e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  })

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <img key={src} src={src} alt={alt} />
      <button className="x" ref={closeBtn} onClick={onClose}>
        Close ✕
      </button>
      {many && (
        <>
          <button className="prev" aria-label="Previous photo" onClick={prev}>
            ←
          </button>
          <button className="next" aria-label="Next photo" onClick={next}>
            →
          </button>
        </>
      )}
      <div className="count">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}
