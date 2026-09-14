import Image from "next/image";

const FOOTER_LINKS = [
  { href: "#", label: "WhatsApp" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Email" },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <span className="brand-mark">
                <Image
                  className="mark-light"
                  src="/images/mark-ink.png"
                  alt=""
                  width={24}
                  height={24}
                />
                <Image
                  className="mark-dark"
                  src="/images/mark-cream.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
              {/* <span className="brand-word">Bayān</span> */}
            </div>
            <p className="footer-desc">
              Un parcours structuré en lecture arabe, mémorisation du
              Qur&rsquo;an et sciences islamiques, pensé pour apprendre avec
              méthode, clarté et sincérité.
            </p>
          </div>
          <ul className="footer-links">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Bayān. Tous droits réservés.</span>
          <span>Apprendre avec clarté.</span>
        </div>
      </div>
    </footer>
  );
}
