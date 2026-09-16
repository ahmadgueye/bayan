"use client";

import { Check, Users, UserRound } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const TITLE = "Choisissez le parcours qui correspond à votre rythme";

const headVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.02 } },
};
const kickerVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};
const wordGroupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.55, ease: EASE } },
};

const COLLECTIF_FEATURES = [
  "Sessions live en groupe",
  "4 séances de mémorisation par semaine",
  "1 cours théorique par semaine (Arabe, Fiqh, Tawhid…)",
  "PDF des cours & accès à la communauté",
  "Suivi collectif de la progression",
];

const SOLO_FEATURES = [
  "Sessions live individuelles avec l'enseignant",
  "4 séances de mémorisation par semaine",
  "Flexibilité des horaires selon votre disponibilité",
  "Progression entièrement personnalisée",
  "Suivi rapproché et feedback direct",
];

const PLANS = [
  {
    icon: Users,
    accent: "orange",
    tag: "Format groupe",
    title: "Parcours Collectif",
    desc: "Apprenez aux côtés d’autres étudiants dans un cadre structuré et bienveillant.",
    features: COLLECTIF_FEATURES,
    strike: null as string | null,
    amount: "15 000",
    unit: "FCFA / mois",
    cta: "Je rejoins le parcours",
    featured: false,
  },
  {
    icon: UserRound,
    accent: "gold",
    tag: "Suivi individuel",
    title: "Parcours Solo",
    desc: "Accompagnement individuel et flexible, adapté à votre rythme. Places limitées à 3 étudiants.",
    features: SOLO_FEATURES,
    strike: "45 000 FCFA",
    amount: "30 000",
    unit: "FCFA / mois",
    cta: "Je réserve ma place",
    featured: true,
  },
] as const;

function PriceCard({
  plan,
  index,
}: {
  plan: (typeof PLANS)[number];
  index: number;
}) {
  const Icon = plan.icon;

  return (
    <motion.div
      className={plan.featured ? "price-card featured" : "price-card"}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.65, ease: EASE, delay: index * 0.1 }}
    >
      <div className="price-top">
        <span
          className="price-icon"
          style={{
            color: `var(--${plan.accent})`,
            background: `color-mix(in srgb, var(--${plan.accent}) 18%, transparent)`,
          }}
        >
          <Icon strokeWidth={1.75} />
        </span>
        <div className="tag">{plan.tag}</div>
      </div>
      <h3>{plan.title}</h3>
      <p className="desc">{plan.desc}</p>
      <ul>
        {plan.features.map((f) => (
          <li key={f}>
            <Check strokeWidth={2} />
            {f}
          </li>
        ))}
      </ul>
      <div className="price-row">
        {plan.strike && <span className="strike">{plan.strike}</span>}
        <span className="amount">
          {plan.amount} <span>{plan.unit}</span>
        </span>
      </div>
      <a href="#" className="btn btn-primary">
        {plan.cta}
      </a>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="offres">
      <div className="container">
        <motion.div
          className="section-head"
          variants={headVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div className="pricing-kicker" variants={kickerVariants}>
            <span className="kicker-star" aria-hidden="true" />
            <span>Découvrez nos offres</span>
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
        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <PriceCard plan={plan} index={i} key={plan.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
