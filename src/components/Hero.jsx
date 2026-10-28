
import { images } from '../data/assets'
import { site } from '../data/content'
import MediaSlot from './MediaSlot'

export default function Hero() {
  const main = images.hero.portraitMain

  return (
    <section
      className="hero"
      id="top"
      aria-labelledby="hero-heading"
    >
      <div className="hero__backdrop" aria-hidden="true" />

      <div className="container hero__layout">
        <div className="hero__copy">
          

          <div className="hero__intro">
            <div className="hero__gallery">
              <MediaSlot
                {...main}
                variant="portrait-hero"
                className="hero__portrait-main"
                aspect="3/4"
              />
            </div>

            <div className="hero__intro-copy">
            <p className="hero__kicker">HELLO, I'M</p>
              <h1 id="hero-heading" className="hero__title">
                EDNA
                <br />
                PAULINUS
              </h1>

              
<p className="hero__roles">
  Graphic Designer · AI Automation Specialist
  <br />
  Founder of Lumivex · Tech Entrepreneur
</p>


              <p className="hero__lede">
                Building intelligent solutions for real-world problems.
              </p>
            </div>
          </div>

          

          <div className="hero__socials" aria-label="Social links">
  <a
    href={site.socialLinks.tiktok}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.59 6.69a4.83 4.83 0 0 1-4.08-4.07V2h-3.92v13.67a2.92 2.92 0 1 1-2.92-2.92c.3 0 .6.05.87.14V8.82a6.8 6.8 0 1 0 5.97 6.76V8.64a8.7 8.7 0 0 0 5.08 1.64V6.37c-.34 0-.68-.04-1-.12Z"
      />
    </svg>
  </a>

  <a
    href={site.socialLinks.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    GH
  </a>

  <a
    href={site.socialLinks.x}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
  >
    X
  </a>

  <a
    href={site.socialLinks.instagram}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  </a>

  <a
    href={site.socialLinks.email}
    aria-label="Email"
  >
    @
  </a>
</div>

          <div className="hero__actions">
          <a
  className="btn btn--ghost"
  href="#lumivex"
  
>
  Explore Lumivex →
</a>
          </div>
        </div>
      </div>
    </section>
  )
}