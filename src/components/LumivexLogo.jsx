import { lumivexBrand } from '../data/content'

/**
 * Renders the official Lumivex logo when configured in assets.
 * Never loads a broken image — placeholder until `src` is set.
 */
export default function LumivexLogo({ className = '', compact = false }) {
  const { logo } = lumivexBrand
  const hasLink = Boolean(lumivexBrand.websiteUrl)
  const label = compact ? 'Lumivex' : 'Lumivex — official logo'

  const inner = logo.src ? (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`lumivex-logo__img ${compact ? 'lumivex-logo__img--compact' : ''}`}
      width={logo.width}
      height={logo.height}
    />
  ) : (
    <span
      className={`lumivex-logo__placeholder ${compact ? 'lumivex-logo__placeholder--compact' : ''}`}
      role="img"
      aria-label="Lumivex logo placeholder — add official file to public/images/brand/"
    >
      <span className="lumivex-logo__placeholder-mark" aria-hidden="true">
        LV
      </span>
      <span className="lumivex-logo__placeholder-text">
        Official Lumivex logo
        {!compact && (
          <>
            <br />
            <span className="lumivex-logo__placeholder-path">{logo.hint}</span>
          </>
        )}
      </span>
    </span>
  )

  if (hasLink) {
    return (
      <a
        className={`lumivex-logo lumivex-logo--linked ${className}`}
        href={lumivexBrand.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — opens Lumivex website`}
      >
        {inner}
      </a>
    )
  }

  return (
    <span className={`lumivex-logo ${className}`} aria-label={logo.src ? label : undefined}>
      {inner}
    </span>
  )
}
