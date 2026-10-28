
import { useEffect, useState } from 'react'
import { site } from '../data/content'

const headerLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#what-i-do', label: 'What I Do' },
  { href: '#contact', label: 'Connect' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`site-header ${
        scrolled ? 'site-header--scrolled' : ''
      }`}
    >
      <div className="site-header__inner container">
        <a
          className="brand-lockup"
          href="#top"
          onClick={closeMenu}
          aria-label={`${site.name} — Home`}
        >
          <span className="brand-monogram" aria-hidden="true">
            EP
          </span>
          <span className="brand-name">{site.name}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary navigation">
          <ul className="nav-list">
            {headerLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

       
<a
  className="header-contact"
  href="/edna-paulinus.vcf"
  download="Edna-Paulinus.vcf"
>
  <span aria-hidden="true">♙</span>
  Add to Contacts
</a>


        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`nav-mobile ${menuOpen ? 'nav-mobile--open' : ''}`}
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        <ul className="nav-mobile__list">
          {headerLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
          <li>
            

          <a
  className="header-contact header-contact--mobile"
  href="/edna-paulinus.vcf"
  download="Edna-Paulinus.vcf"
  onClick={closeMenu}
>
  ♙ Add to Contacts
</a>

          </li>
        </ul>
      </nav>
    </header>
  )
}