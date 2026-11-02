import { partnerLogos, featuredPartnerCount } from '../data.js'

export default function Partners() {
  const featured = partnerLogos.slice(0, featuredPartnerCount)
  const rest = partnerLogos.slice(featuredPartnerCount)
  return (
    <section className="band partners" id="partners">
      <div className="wrap">
        <div className="rv">
          <div className="eyebrow">Clients &amp; partners</div>
          <h2 className="h2">Trusted by government, operators and industry.</h2>
        </div>
        <div className="tier1 rv">
          {featured.map((src) => (
            <div className="logo-cell" key={src}>
              <img src={src} alt="Client logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="marquee" aria-label="More clients and partners">
        <div className="track">
          {[0, 1].map((copy) =>
            rest.map((src) => (
              <div className="logo-cell" key={copy + src} aria-hidden={copy === 1 ? 'true' : undefined}>
                <img src={src} alt={copy === 1 ? '' : 'Client logo'} loading="lazy" />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
