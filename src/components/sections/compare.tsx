"use client";

import { useRef } from "react";
import { motion, useScroll, type Variants } from "framer-motion";
import { Footprints, ShieldCheck, CalendarCheck2, UserCheck } from "lucide-react";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const TITLE =
  "Bayân n’est pas un institut supérieur — et ce n’est pas un hasard";

const ACCENT_COLOR: Record<string, string> = {
  orange: "var(--orange)",
  gold: "var(--gold-ink)",
  sky: "var(--sky-ink)",
  "text-soft": "var(--text-soft)",
};

const ITEMS = [
  {
    icon: Footprints,
    myth: "Un institut supérieur de sciences islamiques",
    truth: "Une progression pas à pas, pensée pour les vrais débutants.",
    accent: "orange",
  },
  {
    icon: ShieldCheck,
    myth: "Des promesses irréalistes, un apprentissage précipité",
    truth: "Une méthodologie claire et authentique, sans raccourci.",
    accent: "gold",
  },
  {
    icon: CalendarCheck2,
    myth: "Une formation sans suivi ni cadre pédagogique",
    truth: "Un cadre sérieux et bienveillant, avec un suivi hebdomadaire réel.",
    accent: "sky",
  },
  {
    icon: UserCheck,
    myth: "Un programme réservé aux profils avancés",
    truth: "Un accompagnement personnalisé, assuré par un enseignant, à votre rythme.",
    accent: "text-soft",
  },
] as const;

const headVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.02 } },
};
const kickerVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};
const ruleVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: EASE } },
};
const wordGroupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.55, ease: EASE } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
const redactVariants: Variants = {
  hidden: { scaleX: 1 },
  show: { scaleX: 0, transition: { duration: 0.5, ease: EASE, delay: 0.15 } },
};
const strikeVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.4, ease: EASE, delay: 0.6 } },
};
const highlightVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.5, ease: EASE, delay: 0.85 } },
};

export function Compare() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section>
      <div className="container">
        <div className="dossier-layout">
          <motion.div
            className="section-head dossier-head"
            variants={headVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <motion.div className="compare-kicker" variants={kickerVariants}>
              <span className="kicker-star" aria-hidden="true" />
              <span>Pour être clair</span>
              <motion.span
                className="compare-kicker-rule"
                variants={ruleVariants}
              />
            </motion.div>
            <motion.h2 variants={wordGroupVariants}>
              {TITLE.split(" ").map((word, i) => (
                <span className="word-mask" key={`${word}-${i}`}>
                  <motion.span className="word" variants={wordVariants}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
          </motion.div>

          <div className="dossier-list" ref={listRef}>
            <span className="dossier-rail" aria-hidden="true">
              <motion.span
                className="dossier-rail-fill"
                style={{ scaleY: scrollYProgress }}
              />
            </span>

            {ITEMS.map((item) => {
              const Icon = item.icon;
              return (
              <motion.div
                className="dossier-row"
                key={item.myth}
                variants={rowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-15% 0px" }}
              >
                <span
                  className="dossier-icon"
                  style={{
                    background: `color-mix(in srgb, var(--${item.accent}) 20%, transparent)`,
                    color: ACCENT_COLOR[item.accent],
                  }}
                >
                  <Icon strokeWidth={1.75} />
                </span>
                <div className="dossier-body">
                  <p className="dossier-myth">
                    <motion.span
                      className="dossier-redact"
                      variants={redactVariants}
                      style={{ originX: 1 }}
                      aria-hidden="true"
                    />
                    <motion.span
                      className="dossier-strike"
                      variants={strikeVariants}
                      style={{ originX: 0 }}
                      aria-hidden="true"
                    />
                    {item.myth}
                  </p>
                  <p className="dossier-truth">
                    <motion.span
                      className="dossier-highlight"
                      variants={highlightVariants}
                      style={{ originX: 0 }}
                      aria-hidden="true"
                    />
                    <span className="dossier-truth-text">{item.truth}</span>
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
