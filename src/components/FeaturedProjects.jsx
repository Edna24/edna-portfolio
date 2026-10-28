
import { Link } from 'react-router-dom'
import { images } from '../data/assets'
import { projects } from '../data/content'
import MediaSlot from './MediaSlot'
import ProjectVisual from './ProjectVisual'

function statusLabel(status) {
  switch (status) {
    case 'in-development':
      return 'Prototype in progress'
    case 'ongoing':
      return 'Ongoing'
    case 'completed':
      return 'Capstone complete'
    default:
      return status
  }
}

const cardTitles = {
  techcrush: 'TechCrush Capstone',
  nexusflow: 'NexusFlow',
  lumivex: 'Lumivex Studio',
}

const cardCategories = {
  techcrush: 'Automation · Treasury · Capstone',
  nexusflow: 'Business Systems · Prototype',
  lumivex: 'Design · Branding · Studio',
}

const cardDescriptions = {
  techcrush:
    'A treasury automation capstone exploring exposure checks, threshold alerts, and approval workflows.',
  nexusflow:
    'A business-operations dashboard prototype for orders, inventory signals, and payment status.',
  lumivex:
    'Visual identity and digital design work developed through Lumivex Studio.',
}

export default function FeaturedProjects() {
  const displayOrder = ['techcrush', 'nexusflow', 'lumivex']

  const orderedProjects = displayOrder
    .map((id) => projects.items.find((project) => project.id === id))
    .filter(Boolean)

  return (
    <section
      className="section section--paper section--projects featured-projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <header className="featured-projects-header">
          <div>
            <p className="featured-projects-eyebrow">Recent Work</p>
            <h2
              id="projects-title"
              className="featured-projects-title"
            >
              Featured Projects
            </h2>
          </div>

          <Link
  className="featured-projects-all"
  to="/studio"
>
  View All Projects →
</Link>
        </header>

        <div
          className="featured-projects-grid"
          id="featured-project-grid"
        >
          {orderedProjects.map((project) => {
            const asset = images.projects[project.imageKey]

            return (
              <article
                className="featured-project-card"
                key={project.id}
              >
                <div className="featured-project-card__media">
                  {asset?.src ? (
                    <MediaSlot
                      {...asset}
                      variant="project-cover"
                      className="featured-project-card__image"
                      aspect="16/10"
                      inDevelopment={
                        project.status === 'in-development'
                      }
                    />
                  ) : (
                    <div className="featured-project-card__mockup">
                      <ProjectVisual
                        variant={project.mediaVariant}
                        inDevelopment={
                          project.status === 'in-development'
                        }
                        statusNote={project.statusNote}
                      />
                    </div>
                  )}
                </div>

                <div className="featured-project-card__body">
                  <span
                    className={`featured-project-card__status featured-project-card__status--${project.status}`}
                  >
                    {statusLabel(project.status)}
                  </span>

                  <h3>{cardTitles[project.id] || project.name}</h3>

                  <p className="featured-project-card__category">
                    {cardCategories[project.id] ||
                      project.tags.join(' · ')}
                  </p>

                  <p className="featured-project-card__description">
                    {cardDescriptions[project.id] ||
                      project.description}
                  </p>

                  

                  {project.id === 'techcrush' ? (
  <Link
    className="featured-project-card__link"
    to="/projects/treasury-capstone"
  >
    View Case Study →
  </Link>
) : project.id === 'lumivex' ? (
  <Link
    className="featured-project-card__link"
    to="/studio"
  >
    Explore Gallery →
  </Link>
) : project.link ? (
  <a
    className="featured-project-card__link"
    href={project.link}
  >
    View Project →
  </a>
) : (
  <span
    className="featured-project-card__link featured-project-card__link--disabled"
    aria-disabled="true"
  >
    {project.linkLabel}
  </span>
)}


                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
