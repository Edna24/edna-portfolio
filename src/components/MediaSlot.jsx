/**
 * Renders a real image when `src` is set; otherwise a labelled placeholder.
 */
export default function MediaSlot({
  src,
  alt,
  label,
  hint,
  variant = 'default',
  className = '',
  aspect,
  inDevelopment = false,
}) {
  const classes = ['media-slot', `media-slot--${variant}`, className].filter(Boolean).join(' ')

  if (src) {
    return (
      <figure className={classes} data-aspect={aspect || undefined}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
        {inDevelopment && (
          <figcaption className="media-slot__banner">In development — preview placeholder</figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className={classes} data-aspect={aspect || undefined} aria-label={alt}>
      <div className="media-slot__placeholder">
      <span className="media-slot__label">
  {variant === 'portrait-hero' ? 'Portrait coming soon' : label}
</span>

{hint && variant !== 'portrait-hero' && (
  <span className="media-slot__hint">{hint}</span>
)}
      </div>
      {inDevelopment && <figcaption className="media-slot__banner">In development</figcaption>}
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  )
}
