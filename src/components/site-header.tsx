"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
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
    <header
      className={clsx(
        "sticky top-0 z-50 py-4 border-b transition-[border-color,background-color] duration-[350ms] ease-brand backdrop-blur-[14px] backdrop-saturate-[1.4] bg-[color-mix(in_srgb,var(--color-bg)_82%,transparent)]",
        scrolled ? "border-rule" : "border-transparent",
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="#top" className="flex items-center gap-2 no-underline text-text">
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
          </a>
          <ul className="hidden items-center gap-7 list-none m-0 p-0 min-[900px]:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium no-underline text-text-soft relative pb-[3px] transition-colors duration-200 ease-brand hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#offres" className="btn btn-gradient btn-sm">
            Rejoindre Bayān
          </a>
        </div>
      </div>
    </header>
  );
}
