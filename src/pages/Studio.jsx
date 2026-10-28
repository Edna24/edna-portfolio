
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { studioCategories, studioProjects } from '../data/studioGallery'
import './Studio.css'

export default function Studio() {
  const [activeCategory, setActiveCategory] = useState('All Work')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === 'All Work'
      ? studioProjects
      : studioProjects.filter(
          (project) => project.category === activeCategory
        )

  return (
    <main className="studio-page">
      <section className="studio-hero">
        <div className="studio-container">
          <Link to="/" className="studio-back">
            ← Back to portfolio
          </Link>

          <p className="studio-eyebrow">LUMIVEX STUDIO / SELECTED WORK</p>

          <h1>
            Ideas, shaped
            <br />
            into <span>identity.</span>
          </h1>

          <p className="studio-intro">
            A collection of visual identities, brand concepts, promotional
            designs, and creative explorations developed through Lumivex
            Studio.
          </p>

          <div className="studio-hero-footer">
            <span>DESIGN • AUTOMATE • EVOLVE</span>
            <span>{studioProjects.length} selected projects</span>
          </div>
        </div>
      </section>

      <section className="studio-gallery-section">
        <div className="studio-container">
          <div className="studio-gallery-heading">
            <div>
              <p className="studio-eyebrow">THE PORTFOLIO</p>
              <h2>Selected creations</h2>
            </div>
            <p className="studio-gallery-note">
              Explore the work by creative category.
            </p>
          </div>

          <div
            className="studio-filters"
            aria-label="Filter designs by category"
          >
            {studioCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`studio-filter ${
                  activeCategory === category ? 'is-active' : ''
                }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="studio-results-count" aria-live="polite">
            Showing {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          <div className="studio-grid">
            {filteredProjects.map((project, index) => (
              <article
                className={`studio-card ${
                  index === 0 ? 'studio-card--featured' : ''
                }`}
                key={project.id}
              >
                <button
                  type="button"
                  className="studio-card-image-button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.title} design`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="studio-card-image"
                    loading="lazy"
                  />
                  <span className="studio-image-overlay">
                    View design <span aria-hidden="true">↗</span>
                  </span>
                </button>

                <div className="studio-card-info">
                  <div>
                    <p className="studio-card-category">
                      {project.category}
                    </p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="studio-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="studio-card-description">
                  {project.description}
                </p>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="studio-empty">
              No projects in this category yet. More work will be added soon.
            </p>
          )}
        </div>
      </section>

      <section className="studio-closing">
        <div className="studio-container">
          <p className="studio-eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let’s create something meaningful.</h2>
          <Link to="/#contact" className="studio-contact-link">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {selectedProject && (
        <div
          className="studio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} preview`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="studio-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="studio-lightbox-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close design preview"
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="studio-lightbox-image"
            />

            <div className="studio-lightbox-caption">
              <div>
                <p className="studio-card-category">
                  {selectedProject.category}
                </p>
                <h2>{selectedProject.title}</h2>
              </div>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
