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
    <div
      className="relative h-[clamp(320px,46vw,480px)] mb-[clamp(3.5rem,7vw,5.5rem)] overflow-hidden border border-card-border max-[700px]:h-[clamp(300px,70vw,420px)]"
      ref={bannerRef}
    >
      <motion.div
        className="absolute inset-x-0 top-[-18%] bottom-[-18%]"
        style={{ y, scale }}
      >
        <Image
          src="/images/journey-banner.png"
          alt="Voyageur et chameau traversant le désert au coucher du soleil"
          width={1800}
          height={600}
          className="w-full h-full object-cover object-[center_70%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,8,0.55),rgba(20,12,8,0.38)_45%,rgba(20,12,8,0.72))]" />
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-[clamp(1.5rem,5vw,3rem)]"
        variants={headVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20% 0px" }}
      >
        <motion.div
          className="flex items-center justify-center gap-[0.55em] font-semibold text-xs tracking-[0.1em] uppercase text-gold mb-[0.9rem]"
          variants={kickerVariants}
        >
          <span className="kicker-star" aria-hidden="true" />
          <span>Le programme, étape par étape</span>
        </motion.div>
        <motion.h2
          className="text-cream text-[clamp(var(--text-3xl),5vw,var(--text-6xl))] max-w-[22ch]"
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
    </div>
  );
}

function CurrStep({ step }: { step: (typeof STEPS)[number] }) {
  const Icon = step.icon;

  return (
    <motion.div
      className="relative flex flex-col border border-card-border p-[clamp(1.5rem,3vw,2rem)]"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      <div className="flex flex-col gap-5">
        <div className="relative w-[clamp(2.75rem,6vw,3.25rem)] aspect-square border border-dashed border-rule bg-bg-inset flex items-center justify-center overflow-hidden">
          <span className="flex items-center justify-center text-muted transition-colors duration-[400ms] ease-brand">
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="text-[clamp(var(--text-base),1.5vw,var(--text-lg))] font-semibold mb-[0.4rem]">
            {step.title}
          </h3>
          <p className="text-text-soft text-sm">{step.text}</p>
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
        <div className="grid grid-cols-3 gap-[clamp(1.5rem,3vw,2.25rem)] max-[700px]:grid-cols-1">
          {STEPS.map((step) => (
            <CurrStep step={step} key={step.n} />
          ))}
          <div className="relative flex flex-col border border-dashed border-rule p-[clamp(1.5rem,3vw,2rem)]">
            <div className="flex flex-col gap-5">
              <div className="relative w-[clamp(2.75rem,6vw,3.25rem)] aspect-square border border-dashed border-rule bg-bg-inset flex items-center justify-center overflow-hidden">
                <span className="flex items-center justify-center text-muted transition-colors duration-[400ms] ease-brand">
                  <Plus className="w-6 h-6" strokeWidth={1.5} />
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-[clamp(var(--text-base),1.5vw,var(--text-lg))] font-semibold mb-[0.4rem] text-muted italic">
                  À venir
                </h3>
                <p className="text-muted text-sm">
                  Et d&rsquo;autres modules à venir, in shā&rsquo; Allah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
