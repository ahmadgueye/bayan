"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { href: "#programme", label: "Programme" },
  { href: "#pedagogie", label: "Pédagogie" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#offres", label: "Offres" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""} `}>
      <div className="nav-inner">
        <div className="flex items-center gap-5">
          <a href="#top" className="brand">
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
            {/* <span className="brand-word">Bayân</span> */}
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <a href="#offres" className="btn btn-gradient btn-sm">
            Rejoindre Bayān
          </a>
        </div>
      </div>
    </header>
  );
}
