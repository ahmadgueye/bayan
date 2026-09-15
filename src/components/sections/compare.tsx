"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const TITLE =
  "Bayân n’est pas un institut supérieur — et ce n’est pas un hasard";

const NOT_LIST = [
  "Un institut supérieur de sciences islamiques",
  "Des promesses irréalistes ou un apprentissage précipité",
  "Une formation sans suivi ni cadre pédagogique",
  "Un programme réservé aux profils avancés",
];

const IS_LIST = [
  "Une progression pas à pas, adaptée aux débutants",
  "Une méthodologie claire et authentique",
  "Un cadre sérieux, bienveillant et accessible",
  "Un suivi hebdomadaire réel, par un enseignant",
];

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

const listContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const listItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
const strikeVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.45, ease: EASE, delay: 0.2 } },
};
const checkVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: EASE, delay: 0.15 },
  },
};
const crossVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: EASE, delay: 0.15 },
  },
};

function CrossIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
    >
      <motion.line x1={5} y1={5} x2={19} y2={19} variants={crossVariants} />
      <motion.line
        x1={19}
        y1={5}
        x2={5}
        y2={19}
        variants={crossVariants}
        transition={{ delay: 0.25 }}
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path d="M4 12.5l5 5L20 6" variants={checkVariants} />
    </svg>
  );
}

export function Compare() {
  return (
    <section>
      <div className="container">
        <motion.div
          className="section-head"
          variants={headVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div className="compare-kicker" variants={kickerVariants}>
            <span className="kicker-star" aria-hidden="true" />
            <span>Pour être clair</span>
            <motion.span className="compare-kicker-rule" variants={ruleVariants} />
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

        <div className="compare-grid-wrap">
          <motion.span
            className="compare-divider"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: EASE }}
            aria-hidden="true"
          />
          <div className="compare-grid">
            <motion.div
              className="compare-card no"
              initial={{ opacity: 0, x: -36, rotate: -2.5, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <h3>
                <span className="dot" />
                Bayān n&rsquo;est pas
              </h3>
              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0px" }}
              >
                {NOT_LIST.map((item) => (
                  <motion.li key={item} variants={listItem}>
                    <span className="compare-icon no">
                      <CrossIcon />
                    </span>
                    <span className="compare-text">
                      <motion.span
                        className="compare-strike"
                        variants={strikeVariants}
                      />
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="compare-card yes"
              initial={{ opacity: 0, x: 36, rotate: 2.5, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            >
              <h3>
                <span className="dot" />
                Bayān est
              </h3>
              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0px" }}
              >
                {IS_LIST.map((item) => (
                  <motion.li key={item} variants={listItem}>
                    <span className="compare-icon yes">
                      <CheckIcon />
                    </span>
                    <span className="compare-text">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
