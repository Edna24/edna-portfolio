
import { Link } from 'react-router-dom'
import { about } from '../data/content'

export default function About() {
  return (
    <section
      className="section section--paper about-reference"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container about-reference__container">
        <p className="about-reference__eyebrow">ABOUT ME</p>

        <div className="about-reference__grid">
          <div className="about-reference__story">
            <h2
              id="about-title"
              className="about-reference__title"
            >
              {about.lead}
            </h2>

            <div className="about-reference__copy">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              className="about-reference__cta"
              to="/story"
            >
              {about.cta.label}
            </Link>
          </div>

          <aside
            className="about-reference__details"
            aria-label="Profile information"
          >
            {about.profileDetails.map((detail) => (
              <article
                className="about-reference__detail"
                key={detail.label}
              >
                <span
                  className="about-reference__icon"
                  aria-hidden="true"
                >
                  {detail.symbol}
                </span>

                <div className="about-reference__detail-copy">
                  <h3>{detail.label}</h3>
                  <p>{detail.value}</p>
                  <span>{detail.detail}</span>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
