
import { services } from '../data/content'
import SectionLabel from './SectionLabel'
import ServiceIcon from './ServiceIcon'

export default function WhatIDo() {
  return (
    <section
      className="section section--dark section--services"
      id="what-i-do"
      aria-labelledby="services-title"
    >
      <div className="container services-layout">
        <div className="services-intro">
          <SectionLabel index={services.sectionIndex}>
            {services.title}
          </SectionLabel>

          <h2
            id="services-title"
            className="services-intro__title"
          >
            Turning Ideas Into Intelligent Solutions
          </h2>

          <p className="services-intro__description">
            {services.intro}
          </p>

          <a
            className="services-intro__link"
            href="#projects"
          >
            Learn More →
          </a>
        </div>

        <ul className="services-list">
          {services.items.map((item, index) => (
            <li className="services-list__item" key={item.id}>
              <span className="services-list__icon">
                <ServiceIcon name={item.icon} />
              </span>

              <div className="services-list__copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="services-list__number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
