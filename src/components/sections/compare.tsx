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
        <div className="grid grid-cols-[1fr_1.2fr] gap-[clamp(2rem,5vw,4.5rem)] items-start max-[900px]:grid-cols-1">
          <motion.div
            className="sticky top-[clamp(5rem,12vh,7.5rem)] self-start max-[900px]:static max-[900px]:mb-[clamp(2rem,4vw,3rem)]"
            variants={headVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <motion.div
              className="flex items-center gap-[0.85rem] mb-4 font-sans text-lg text-muted"
              variants={kickerVariants}
            >
              <span className="kicker-star" aria-hidden="true" />
              <span>Pour être clair</span>
              <motion.span
                className="block flex-1 max-w-[4.5rem] h-px bg-rule [transform-origin:left]"
                variants={ruleVariants}
              />
            </motion.div>
            <motion.h2
              className="text-[clamp(var(--text-3xl),3.2vw,var(--text-4xl))]"
              variants={wordGroupVariants}
            >
              {TITLE.split(" ").map((word, i) => (
                <span className="word-mask" key={`${word}-${i}`}>
                  <motion.span className="word" variants={wordVariants}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
          </motion.div>

          <div
            className="relative grid gap-[clamp(2.25rem,5vw,3.5rem)]"
            ref={listRef}
          >
            <span
              className="absolute left-[3.25rem] top-[0.4rem] bottom-[0.4rem] w-[1.5px] bg-rule max-[640px]:left-10"
              aria-hidden="true"
            >
              <motion.span
                className="absolute inset-0 w-full bg-[linear-gradient(180deg,var(--color-orange),var(--color-gold),var(--color-sky))] [transform-origin:top]"
                style={{ scaleY: scrollYProgress }}
              />
            </span>

            {ITEMS.map((item) => {
              const Icon = item.icon;
              return (
              <motion.div
                className="flex gap-6 items-start max-[640px]:gap-4"
                key={item.myth}
                variants={rowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-15% 0px" }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 flex-none rounded-none max-[640px]:w-8 max-[640px]:h-8"
                  style={{
                    background: `color-mix(in srgb, var(--${item.accent}) 20%, transparent)`,
                    color: ACCENT_COLOR[item.accent],
                  }}
                >
                  <Icon
                    className="w-[18px] h-[18px] flex-none max-[640px]:w-[15px] max-[640px]:h-[15px]"
                    strokeWidth={1.75}
                  />
                </span>
                <div className="grid gap-[0.65rem] flex-1 min-w-0">
                  <p className="relative justify-self-start w-fit max-w-full m-0 text-sm text-muted">
                    <motion.span
                      className="absolute inset-[-0.1em_-0.2em] bg-redact shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                      variants={redactVariants}
                      style={{ originX: 1 }}
                      aria-hidden="true"
                    />
                    <span className="line-through decoration-muted">
                      {item.myth}
                    </span>
                  </p>
                  <p className="relative m-0 font-serif text-[clamp(var(--text-lg),1.6vw,var(--text-xl))] text-text leading-[1.35]">
                    <motion.span
                      className="absolute inset-[0.05em_-0.25em] bg-panel-tint [transform-origin:left]"
                      variants={highlightVariants}
                      style={{ originX: 0 }}
                      aria-hidden="true"
                    />
                    <span className="relative">{item.truth}</span>
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
