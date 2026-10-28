
import { Link } from 'react-router-dom'
import { storyContent } from '../data/storyContent'
import './MyStory.css'

const milestones = [
  {
    number: '01',
    title: 'Design',
    description: 'Where my creative journey began.',
  },
  {
    number: '02',
    title: 'Lumivex',
    description: 'Turning a creative passion into a bigger vision.',
  },
  {
    number: '03',
    title: 'TechCrush',
    description: 'Discovering new possibilities in AI and automation.',
  },
  {
    number: '04',
    title: 'Lumivex Nexus',
    description: 'Exploring intelligent solutions to practical problems.',
  },
]

export default function MyStory() {
  const { introduction, chapters, becoming } = storyContent

  return (
    <main className="my-story">
      <header className="my-story__hero">
        <div className="container">
          <Link className="my-story__back" to="/">
            ← Back to home
          </Link>

          <p className="my-story__eyebrow">MY JOURNEY</p>

          <h1>More Than the Things I Am Building</h1>

          <p className="my-story__subtitle">
            The story of an engineer in training, designer, founder,
            and a young woman learning to become.
          </p>
        </div>
      </header>

      <article className="my-story__article container">
        <section className="my-story__opening">
          <div className="my-story__opening-text">
            <p className="my-story__chapter-label">
              BEHIND THE WORK
            </p>

            {introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <figure className="my-story__portrait">
            <img
              src="/images/story/portrait-story.png"
              alt="Edna Paulinus in a rust-coloured embroidered outfit"
              loading="eager"
            />
            <figcaption>
              The person behind the work.
            </figcaption>
          </figure>
        </section>

        {chapters.map((chapter) => (
          <section
            className="my-story__chapter"
            id={chapter.id}
            key={chapter.id}
          >
            <p className="my-story__chapter-label">
              CHAPTER {chapter.number} · {chapter.label}
            </p>

            <h2>{chapter.title}</h2>

            {chapter.intro && (
              <p className="my-story__chapter-intro">
                {chapter.intro}
              </p>
            )}

            {chapter.id === 'creative-journey' && (
              <div className="my-story__milestones">
                {milestones.map((milestone) => (
                  <div key={milestone.number}>
                    <span>{milestone.number}</span>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                ))}
              </div>
            )}

            {chapter.sections.map((section) => (
              <div
                className="my-story__subsection"
                key={section.heading}
              >
                <h3>{section.heading}</h3>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </section>
        ))}

        <section
          className="my-story__chapter my-story__becoming"
          id="becoming"
        >
          <p className="my-story__chapter-label">
            THE JOURNEY CONTINUES
          </p>

          <h2>{becoming.title}</h2>

          {becoming.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <blockquote className="my-story__statement">
            {becoming.statement}
          </blockquote>

          <p>{becoming.identity}</p>

          <p className="my-story__final-statement">
            {becoming.closing}
          </p>

          <p className="my-story__final-line">
            {becoming.finalLine}
          </p>

          <p className="my-story__signature">
            — Edna Paulinus
            <span>{becoming.signature}</span>
          </p>
        </section>

        <footer className="my-story__closing">
          <p>Thank you for taking the time to read my story.</p>

          <h2>There is more to come.</h2>

          <Link to="/" className="my-story__home-link">
            Return to my portfolio ↗
          </Link>
        </footer>
      </article>
    </main>
  )
}
