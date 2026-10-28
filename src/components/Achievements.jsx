
import { achievements } from '../data/content'
import SectionLabel from './SectionLabel'

export default function Achievements() {
  return (
   <section className="section section--dark" id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="container">
        <header className="section-head section-head--on-dark">
          <SectionLabel index={achievements.sectionIndex}>
            {achievements.title}
          </SectionLabel>

          <h2
            id="achievements-title"
            className="section-head__title"
          >
            Milestones, credentials & learning
          </h2>

          <p className="section-head__intro">
            A record of the projects, creative practice, and professional
            development shaping my journey across engineering, design,
            and intelligent automation.
          </p>
        </header>

        <ol className="achievement-editorial">
          {achievements.items.map((item, index) => (
            <li
              key={item.title}
              className={`achievement-editorial__item achievement-editorial__item--${item.type}`}
            >
              <span
                className="achievement-editorial__index"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="achievement-editorial__period">
                {item.period}
              </div>

              <div className="achievement-editorial__body">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>

                {item.certificateUrl && (
                  <a
                    className="achievement-editorial__link"
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
