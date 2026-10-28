import { footer, lumivexBrand } from '../data/content'
import LumivexLogo from './LumivexLogo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__personal">
          <p className="site-footer__name">{footer.personalLine}</p>
          <p className="site-footer__copy">{footer.copyright}</p>
        </div>

        <div className="site-footer__lumivex">
          <p className="site-footer__lumivex-line">{footer.lumivexLine}</p>
          <p className="site-footer__lumivex-sub">{lumivexBrand.founderLine}</p>
          <div className="site-footer__logo-wrap">
            <LumivexLogo />
          </div>
        </div>
      </div>
    </footer>
  )
}
