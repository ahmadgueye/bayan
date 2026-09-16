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
    <section className="problems" id="problems">
      <div className="container">
        <Reveal className="problems-head">
          <div className="problems-kicker">
            <span className="kicker-star" aria-hidden="true" />
            <span>Est-ce votre histoire ?</span>
            <span className="problems-kicker-rule" />
          </div>
          <h2 className="problems-title">
            Vous souhaitez apprendre l&rsquo;islam, mais&hellip;
          </h2>
        </Reveal>

        <StaggerGroup className="problems-grid">
          {PROBLEMS.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem as="div" className="problem-card" key={p.strong}>
                <span className="problem-card-icon">
                  <Icon strokeWidth={1.75} />
                </span>
                <p>
                  {p.rest}
                  <b>{p.strong}</b>
                  {p.after ?? ""}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="problems-bridge">
          <a href="#offres" className="problems-bridge-link">
            <span className="problems-bridge-text">
              Et s&rsquo;il existait un chemin clair, pensé pour vous
              accompagner pas à pas&nbsp;?
            </span>
            <span className="problems-bridge-path" aria-hidden="true">
              <motion.span
                className="problems-bridge-line"
                variants={lineVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0px" }}
              />
              <motion.span
                className="problems-bridge-node"
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
                <ArrowRight strokeWidth={1.75} />
              </motion.span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
