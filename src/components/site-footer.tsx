import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { InstagramGlyph } from "@/components/icons";

const NAV_LINKS = [
  { href: "#programme", label: "Programme" },
  { href: "#pedagogie", label: "Pédagogie" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#offres", label: "Offres" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "WhatsApp", icon: MessageCircle },
  { href: "#", label: "Instagram", icon: InstagramGlyph },
  { href: "#", label: "Email", icon: Mail },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <StaggerGroup className="footer-top" as="div">
          <StaggerItem className="footer-col footer-col-brand">
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
          </StaggerItem>

          <StaggerItem className="footer-col">
            <span className="footer-col-label">Navigation</span>
            <ul className="footer-nav">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="footer-col">
            <span className="footer-col-label">Nous suivre</span>
            <ul className="footer-social">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a href={link.href} aria-label={link.label}>
                      <Icon strokeWidth={1.75} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </StaggerItem>
        </StaggerGroup>

        <Reveal className="footer-bottom">
          <span>&copy; {year} Bayān. Tous droits réservés.</span>
          <span>Apprendre avec clarté.</span>
        </Reveal>
      </div>
    </footer>
  );
}
