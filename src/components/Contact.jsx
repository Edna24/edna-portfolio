import { contact } from '../data/content'
import SectionLabel from './SectionLabel'

export default function Contact() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <header className="section-head section-head--on-dark">
          <SectionLabel index={contact.sectionIndex}>{contact.title}</SectionLabel>
          <h2 id="contact-title" className="section-head__title">
            Start a conversation
          </h2>
          <p className="section-head__intro">{contact.intro}</p>
        </header>

        <div className="contact-panel">
          
<div className="contact-actions">
  <a
    className="contact-action contact-action--call"
    href="tel:+2349030358923"
  >
    <span className="contact-action__label">CALL</span>
    <span className="contact-action__title">Call me</span>
    <span className="contact-action__detail">09030358923 ↗</span>
  </a>

  <a
    className="contact-action contact-action--whatsapp"
    href="https://wa.me/2348083661642"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="contact-action__label">WHATSAPP BUSINESS</span>
    <span className="contact-action__title">Let's chat</span>
    <span className="contact-action__detail">08083661642 ↗</span>
  </a>
</div>

          <div className="contact-grid">
            <div className="contact-block">
              <h3>Email</h3>
              {contact.emailHref ? (
                <a href={contact.emailHref}>{contact.email}</a>
              ) : (
                <p className="placeholder-text">{contact.email}</p>
              )}
            </div>
            <div className="contact-block">
              <h3>Location</h3>
              <p className={contact.location.startsWith('[') ? 'placeholder-text' : undefined}>
                {contact.location}
              </p>
            </div>
          </div>

          <div className="contact-block">
            <h3>Social</h3>
            <ul className="social-list social-list--row">
              {contact.social.map((item) => (
                <li key={item.label}>
                  {item.placeholder ? (
                    <span className="social-link social-link--placeholder">{item.label}</span>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <p className="contact-note">{contact.note}</p>
        </div>
      </div>
    </section>
  )
}
