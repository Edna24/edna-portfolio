import { lumivexBrand } from '../data/content'
import LumivexLogo from './LumivexLogo'

/** Subtle company reference — personal portfolio remains primary. */
export default function LumivexNexusAside() {
  return (
    <aside className="nexus-aside" aria-labelledby="nexus-aside-title">
      <div className="nexus-aside__mark">
        <LumivexLogo compact />
      </div>
      <div className="nexus-aside__copy">
        <p id="nexus-aside-title" className="nexus-aside__kicker">
          {lumivexBrand.founderLine}
        </p>
        <p className="nexus-aside__title">{lumivexBrand.nexusLabel}</p>
        <p className="nexus-aside__text">{lumivexBrand.nexusDescription}</p>
      </div>
    </aside>
  )
}
