"use client";

import {
  ArrowRight,
  Compass,
  ListChecks,
  CircleHelp,
  CalendarClock,
  Sprout,
  RotateCcw,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE, delay: 0.1 } },
};

const PROBLEMS = [
  {
    icon: Compass,
    strong: "par où commencer",
    rest: "Vous ne savez pas ",
    after: ", ni dans quel ordre",
  },
  {
    icon: ListChecks,
    strong: "plan ni méthode claire",
    rest: "Vous avancez sans ",
  },
  {
    icon: CircleHelp,
    strong: "éparpillées et contradictoires",
    rest: "Les ressources en ligne sont ",
    after: ", sans fil conducteur",
  },
  {
    icon: CalendarClock,
    strong: "quelques minutes par jour",
    rest: "Vous n’avez que ",
    after: " à y consacrer",
  },
  {
    icon: Sprout,
    strong: "converti(e) récemment",
    rest: "Vous vous êtes ",
    after: " et partez de zéro",
  },
  {
    icon: RotateCcw,
    strong: "sans jamais vraiment progresser",
    rest: "Vous avez déjà essayé seul(e) — vidéos, applications — ",
  },
];

export function Problems() {
  return (
    <section id="problems">
      <div className="container">
        <Reveal className="max-w-[38rem] mb-[clamp(2.5rem,5vw,4rem)]">
          <div className="flex items-center gap-[0.85rem] mb-4 font-sans text-lg text-muted">
            <span className="kicker-star" aria-hidden="true" />
            <span>Est-ce votre histoire ?</span>
            <span className="block flex-1 max-w-[4.5rem] h-px bg-rule" />
          </div>
          <h2 className="text-[clamp(var(--text-3xl),4vw,var(--text-5xl))]">
            Vous souhaitez apprendre l&rsquo;islam, mais&hellip;
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 border-t border-l border-rule max-[700px]:grid-cols-1">
          {PROBLEMS.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem
                as="div"
                className="group relative p-[clamp(1.8rem,3.5vw,2.75rem)] border-r border-b border-rule overflow-hidden transition-colors duration-[400ms] ease-brand hover:bg-[color-mix(in_srgb,var(--color-text-soft)_6%,var(--color-bg))] max-[700px]:border-r-0 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-text-soft before:origin-top before:scale-y-0 before:transition-transform before:duration-[400ms] before:ease-brand hover:before:scale-y-100"
                key={p.strong}
              >
                <span className="flex items-center justify-center w-[clamp(2.1rem,3vw,2.5rem)] h-[clamp(2.1rem,3vw,2.5rem)] mb-[1.1rem] text-text-soft transition-transform duration-[400ms] ease-brand group-hover:translate-x-[5px]">
                  <Icon className="w-full h-full" strokeWidth={1.75} />
                </span>
                <p className="max-w-[30ch] text-[clamp(var(--text-base),1.4vw,var(--text-lg))] text-text-soft">
                  {p.rest}
                  <b className="text-text font-semibold">{p.strong}</b>
                  {p.after ?? ""}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="mt-[clamp(2.5rem,5vw,4rem)]">
          <a
            href="#offres"
            className="group flex flex-wrap items-center gap-[clamp(1.5rem,4vw,3rem)] pt-[clamp(1.5rem,3vw,2.5rem)] no-underline text-text-soft transition-colors duration-300 ease-brand hover:text-text"
          >
            <span className="flex-none min-w-0 max-w-[28ch] font-serif font-semibold text-[clamp(var(--text-xl),2.2vw,var(--text-2xl))] max-[700px]:max-w-none max-[700px]:w-full">
              Et s&rsquo;il existait un chemin clair, pensé pour vous
              accompagner pas à pas&nbsp;?
            </span>
            <span
              className="relative flex items-center flex-1 min-w-[6rem] max-[700px]:w-full"
              aria-hidden="true"
            >
              <motion.span
                className="block flex-1 h-px bg-rule [transform-origin:left]"
                variants={lineVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0px" }}
              />
              <motion.span
                className="flex-none flex items-center gap-[0.6rem] h-11 px-5 -ml-px border border-rule rounded-none bg-bg text-orange text-sm font-semibold whitespace-nowrap transition-colors duration-300 ease-brand group-hover:bg-orange group-hover:border-orange group-hover:text-cream"
                initial={{ x: 0 }}
                whileInView={{ x: [0, 6, 0] }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 1.2,
                  repeat: 2,
                  repeatDelay: 0.3,
                  ease: EASE,
                }}
              >
                <span>Voir les offres</span>
                <ArrowRight className="w-[1.1rem] h-[1.1rem] flex-none" strokeWidth={1.75} />
              </motion.span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
