import { asset } from '../router.js'

// HTL's official mascot. pose: 'thumbs-up' | 'idea' | 'peace' | 'peek'
export default function Mascot({ pose, className = '' }) {
  return <img className={`mascot mascot-${pose} ${className}`} src={asset(`/avatar/${pose}.webp`)} alt="" aria-hidden="true" loading="lazy" />
}
