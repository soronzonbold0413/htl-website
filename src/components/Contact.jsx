import { useState } from 'react'
import { contact } from '../data.js'

function CopyButton({ text }) {
  const [label, setLabel] = useState('Copy')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setLabel('Copied')
    } catch {
      setLabel('Failed')
    }
    setTimeout(() => setLabel('Copy'), 1800)
  }
  return (
    <button className="copy" onClick={copy}>
      {label}
    </button>
  )
}

export default function Contact() {
  return (
    <section className="band contact" id="contact">
      <svg className="hexbg" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,2 92,26 92,74 50,98 8,74 8,26" fill="none" stroke="#fff" strokeWidth="2" />
        <polygon points="50,16 80,33 80,67 50,84 20,67 20,33" fill="none" stroke="#fff" strokeWidth="2" />
        <polygon points="50,30 68,40 68,60 50,70 32,60 32,40" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
      <div className="wrap contact-grid">
        <div className="rv">
          <div className="eyebrow">Contact</div>
          <h2 className="h2">Have a project in mind?</h2>
          <p className="lead" style={{ marginTop: 20 }}>
            Call or email us and an engineer will get back to you. Visitors are welcome at our office in Sukhbaatar
            district.
          </p>
          <div className="btns">
            <a className="btn red" href={contact.mapUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps <span className="ar">↗</span>
            </a>
          </div>
        </div>
        <div className="cards rv">
          <div className="ccard">
            <span className="k">Phone</span>
            <a className="v" href={contact.phoneHref}>
              {contact.phone}
            </a>
            <CopyButton text={contact.phone} />
          </div>
          <div className="ccard">
            <span className="k">Email</span>
            <a className="v" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <CopyButton text={contact.email} />
          </div>
          <div className="ccard">
            <span className="k">Address</span>
            <span className="v">{contact.address}</span>
            <CopyButton text={contact.address} />
          </div>
          <div className="ccard">
            <span className="k">Facebook</span>
            <a className="v" href={contact.facebook} target="_blank" rel="noopener noreferrer">
              {contact.facebookLabel} ↗
            </a>
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}
