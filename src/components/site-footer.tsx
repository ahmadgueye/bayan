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
    <footer className="border-t border-rule py-14">
      <div className="container">
        <StaggerGroup
          className="grid grid-cols-[1.6fr_1fr_1fr] gap-8 mb-10 max-[700px]:grid-cols-1 max-[700px]:gap-9"
          as="div"
        >
          <StaggerItem className="max-w-[23rem]">
            <div className="flex items-center gap-2">
              <span className="relative w-6 h-6 flex-none">
                <Image
                  className="absolute inset-0 w-full h-full dark:hidden"
                  src="/images/mark-ink.png"
                  alt=""
                  width={24}
                  height={24}
                />
                <Image
                  className="absolute inset-0 w-full h-full hidden dark:block"
                  src="/images/mark-cream.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
            </div>
            <p className="text-muted text-sm mt-[0.85rem]">
              Un parcours structuré en lecture arabe, mémorisation du
              Qur&rsquo;an et sciences islamiques, pensé pour apprendre avec
              méthode, clarté et sincérité.
            </p>
          </StaggerItem>

          <StaggerItem>
            <span className="block text-xs font-semibold tracking-[0.08em] uppercase text-muted mb-4">
              Navigation
            </span>
            <ul className="grid gap-[0.7rem] list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium no-underline text-text-soft transition-colors duration-[250ms] ease-brand hover:text-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <span className="block text-xs font-semibold tracking-[0.08em] uppercase text-muted mb-4">
              Nous suivre
            </span>
            <ul className="flex gap-[0.65rem] list-none m-0 p-0">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      className="flex items-center justify-center w-10 h-10 rounded-none border border-card-border text-text-soft transition-colors duration-[250ms] ease-brand hover:text-orange hover:border-orange hover:bg-[color-mix(in_srgb,var(--color-orange)_12%,transparent)]"
                    >
                      <Icon className="w-[17px] h-[17px]" strokeWidth={1.75} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </StaggerItem>
        </StaggerGroup>

        <Reveal className="flex justify-between gap-4 flex-wrap pt-6 border-t border-rule text-xs text-muted">
          <span>&copy; {year} Bayān. Tous droits réservés.</span>
          <span>Apprendre avec clarté.</span>
        </Reveal>
      </div>
    </footer>
  );
}
