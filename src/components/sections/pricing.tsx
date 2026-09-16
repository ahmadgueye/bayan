"use client";

import { Check, Users, UserRound } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import clsx from "clsx";

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
      className={clsx(
        "rounded-none p-[1.75rem] flex flex-col border transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-[3px] hover:shadow-[var(--shadow)]",
        plan.featured
          ? "bg-ink text-cream border-ink"
          : "bg-panel-tint border-card-border",
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.65, ease: EASE, delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-[1.1rem]">
        <span
          className="flex items-center justify-center w-10 h-10 flex-none rounded-none"
          style={{
            color: `var(--${plan.accent})`,
            background: `color-mix(in srgb, var(--${plan.accent}) 18%, transparent)`,
          }}
        >
          <Icon className="w-[18px] h-[18px] flex-none" strokeWidth={1.75} />
        </span>
        <div
          className={clsx(
            "h-5 inline-flex items-center text-xs font-semibold tracking-[0.04em] px-[0.55rem] rounded-none border",
            plan.featured ? "text-gold border-gold" : "text-orange border-orange",
          )}
        >
          {plan.tag}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
      <p
        className={clsx(
          "text-sm opacity-[0.82] mb-5",
          plan.featured && "text-tan",
        )}
      >
        {plan.desc}
      </p>
      <ul className="list-none m-0 mb-[1.4rem] p-0 grid gap-[0.7rem] flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-[0.6rem] text-sm items-start">
            <Check
              className={clsx(
                "flex-none w-[14px] h-[14px] mt-[0.2rem]",
                plan.featured ? "text-gold" : "text-orange",
              )}
              strokeWidth={2}
            />
            {f}
          </li>
        ))}
      </ul>
      <div
        className={clsx(
          "flex items-baseline gap-2 mb-[1.1rem] pt-[1.1rem] border-t",
          plan.featured
            ? "border-t-[rgba(245,245,237,0.16)]"
            : "border-rule",
        )}
      >
        {plan.strike && (
          <span className="text-sm line-through opacity-[0.55]">
            {plan.strike}
          </span>
        )}
        <span className="font-serif text-2xl">
          {plan.amount}{" "}
          <span className="font-sans text-xs font-semibold opacity-70">
            {plan.unit}
          </span>
        </span>
      </div>
      <a
        href="#"
        className={
          plan.featured
            ? "btn bg-gold text-cream hover:bg-[color-mix(in_srgb,var(--color-orange)_82%,var(--color-bg))]"
            : "btn btn-primary"
        }
      >
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
          <motion.div
            className="flex items-center gap-[0.85rem] mb-4 font-sans text-lg text-muted"
            variants={kickerVariants}
          >
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
        <div className="grid grid-cols-2 gap-5 items-stretch max-[860px]:grid-cols-1">
          {PLANS.map((plan, i) => (
            <PriceCard plan={plan} index={i} key={plan.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
