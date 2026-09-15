"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  BookOpen,
  AudioLines,
  Repeat2,
  Landmark,
  Scale,
  Plus,
} from "lucide-react";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const TITLE = "Un parcours qui se construit dans l’ordre";

const STEPS = [
  {
    n: "01",
    icon: BookOpen,
    title: "Bases de la lecture arabe",
    text: "L'alphabet et la lecture, sans translittération. Chaque lettre, chaque son, appris et corrigé un par un — la fondation sur laquelle tout le reste s'appuie.",
  },
  {
    n: "02",
    icon: AudioLines,
    title: "Initiation au Tajwīd",
    text: "Les règles de récitation correcte du Qur'an : la prononciation, les pauses, les allongements. De quoi lire avec justesse, pas seulement avec fluidité.",
  },
  {
    n: "03",
    icon: Repeat2,
    title: "Mémorisation du Qur'an",
    text: "Une progression hebdomadaire suivie, page après page, avec des rappels réguliers pour consolider ce qui a déjà été appris.",
  },
  {
    n: "04",
    icon: Landmark,
    title: "Bases de Tawhīd, Hadith & Tafsīr",
    text: "Comprendre l'essentiel de la croyance musulmane : les fondements rapportés par les textes, et le sens des versets étudiés.",
  },
  {
    n: "05",
    icon: Scale,
    title: "Introduction au Fiqh",
    text: "La purification et les premières règles pratiques du quotidien, pour que la pratique s'installe avec la compréhension.",
  },
] as const;

const headVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};
const kickerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const ruleVariants: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.7, ease: EASE } },
};
const wordGroupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.6, ease: EASE } },
};

function JourneyBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);

  return (
    <div className="journey-banner" ref={bannerRef}>
      <motion.div className="journey-banner-img" style={{ y, scale }}>
        <Image
          src="/images/journey-banner.webp"
          alt="Voyageur et chameau traversant le désert au coucher du soleil"
          width={1800}
          height={600}
        />
      </motion.div>
      <div className="scrim" />
      <motion.div
        className="cap"
        variants={headVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20% 0px" }}
      >
        <motion.div className="eyebrow" variants={kickerVariants}>
          <span className="kicker-star" aria-hidden="true" />
          <span>Le programme, étape par étape</span>
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
        <motion.span className="cap-rule" variants={ruleVariants} />
      </motion.div>
    </div>
  );
}

function CurrStep({ step }: { step: (typeof STEPS)[number] }) {
  const Icon = step.icon;

  return (
    <motion.div
      className="curr-row"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      <div className="curr-row-body">
        <div className="curr-row-media">
          <span className="curr-media-icon">
            <Icon strokeWidth={1.5} />
          </span>
        </div>
        <div className="curr-row-content">
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Curriculum() {
  return (
    <section id="programme" style={{ paddingTop: 0 }}>
      <JourneyBanner />
      <div className="container">
        <div className="curr-rail-wrap">
          {STEPS.map((step) => (
            <CurrStep step={step} key={step.n} />
          ))}
          <div className="curr-row curr-more-card">
            <div className="curr-row-body">
              <div className="curr-row-media">
                <span className="curr-media-icon">
                  <Plus strokeWidth={1.5} />
                </span>
              </div>
              <div className="curr-row-content">
                <h3>À venir</h3>
                <p>Et d&rsquo;autres modules à venir, in shā&rsquo; Allah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
