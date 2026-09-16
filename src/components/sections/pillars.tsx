"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { BookOpen, Repeat2, Landmark } from "lucide-react";

const ACCENTS = ["var(--color-orange)", "var(--color-gold)", "var(--color-sky)"];

const EASE = [0.16, 0.8, 0.24, 1] as const;

const TITLE = "Ce que vous construisez, dans l’ordre";

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

const PILLARS = [
  {
    n: "01",
    icon: BookOpen,
    title: "Lecture Arabe",
    img: "/images/pillar-lecture.webp",
    alt: "Étudiant lisant le Qur'an sous une arcade",
    text: "Apprendre à lire le Qur'an dans sa langue d'origine, lettre par lettre, sans translittération. Une progression structurée pour poser des bases solides dès le départ.",
  },
  {
    n: "02",
    icon: Repeat2,
    title: "Mémorisation",
    img: "/images/pillar-memorisation.webp",
    alt: "Jeune étudiant récitant sur une tablette coranique",
    text: "Mémoriser le Qur'an à votre rythme, avec une méthodologie éprouvée et un suivi régulier. Chaque semaine, une page, un verset, une lettre à la fois.",
  },
  {
    n: "03",
    icon: Landmark,
    title: "Fondements de l'Islam",
    img: "/images/pillar-fondements.webp",
    alt: "Étudiante étudiant dans une bibliothèque",
    text: "Comprendre les bases essentielles du Tawhīd, du Fiqh et du Tafsīr, telles qu'enseignées selon le Qur'an et la Sunnah.",
  },
] as const;

function PillarPanel({
  pillar,
  index,
  onActive,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
  onActive: (index: number) => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const isFocused = useInView(panelRef, { margin: "-45% 0px -45% 0px" });
  const { scrollYProgress } = useScroll({
    target: thumbRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const Icon = pillar.icon;

  useEffect(() => {
    if (isFocused) onActive(index);
  }, [isFocused, index, onActive]);

  return (
    <motion.article
      ref={panelRef}
      id={`pillar-${pillar.n}`}
      className="group relative aspect-[4/3] border border-[color-mix(in_srgb,var(--color-cream)_14%,transparent)] rounded-none overflow-hidden flex flex-col justify-between transition-[box-shadow,border-color] duration-300 ease-brand hover:shadow-[var(--shadow)] hover:border-[var(--accent)]"
      style={{ "--accent": ACCENTS[index] } as React.CSSProperties}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.6 },
      }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden" ref={thumbRef}>
        <motion.div
          className="absolute inset-x-0 top-[-7%] bottom-[-7%]"
          style={{ y }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Image
            src={pillar.img}
            alt={pillar.alt}
            fill
            sizes="(max-width: 900px) 88vw, 55vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,color-mix(in_srgb,var(--color-brown)_88%,transparent)_0%,color-mix(in_srgb,var(--color-brown)_58%,transparent)_48%,color-mix(in_srgb,var(--color-brown)_38%,transparent)_100%)]" />
      <div className="relative z-[2] flex items-end justify-between px-6 pt-6 pb-[1.1rem]">
        <span
          className="font-serif text-[clamp(2.25rem,4vw,2.75rem)] leading-none text-[var(--accent)] transition-transform duration-300 ease-brand group-hover:translate-x-[2px]"
        >
          {pillar.n}
        </span>
        <span className="flex items-center justify-center w-10 h-10 flex-none rounded-none backdrop-blur-[6px] bg-[color-mix(in_srgb,var(--accent)_30%,transparent)] text-[var(--accent)]">
          <Icon className="w-[18px] h-[18px] flex-none" strokeWidth={2} />
        </span>
      </div>
      <div className="relative z-[2] px-[1.6rem] pt-[1.4rem] pb-[1.8rem]">
        <h3 className="text-lg font-semibold mb-2 text-cream">
          {pillar.title}
        </h3>
        <p className="text-[color-mix(in_srgb,var(--color-cream)_75%,transparent)] text-sm">
          {pillar.text}
        </p>
      </div>
    </motion.article>
  );
}

export function Pillars() {
  const words = TITLE.split(" ");
  const [active, setActive] = useState(0);
  const panelsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelsRef,
    offset: ["start start", "end end"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="pedagogie">
      <div className="container">
        <div className="grid grid-cols-2 gap-[clamp(2rem,5vw,4.5rem)] items-start max-[900px]:grid-cols-1">
          <div className="sticky top-[clamp(5rem,12vh,7.5rem)] self-start max-[900px]:static">
            <motion.div
              className="mb-[clamp(2rem,4vw,3rem)]"
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
                <span>Trois piliers</span>
              </motion.div>
              <motion.h2
                className="text-[clamp(var(--text-3xl),3.2vw,var(--text-4xl))]"
                variants={wordGroupVariants}
              >
                {words.map((word, i) => (
                  <span className="word-mask" key={`${word}-${i}`}>
                    <motion.span className="word" variants={wordVariants}>
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            </motion.div>
            <div className="flex gap-[1.1rem] mt-[clamp(2.5rem,5vw,3.5rem)] max-[900px]:hidden">
              <span className="relative w-px flex-none bg-rule">
                <motion.span
                  className="absolute top-0 left-0 w-full bg-orange [transform-origin:top]"
                  style={{ height: fillHeight }}
                />
              </span>
              <ul className="list-none m-0 p-0 flex flex-col gap-[1.6rem]">
                {PILLARS.map((pillar, i) => (
                  <li key={pillar.n}>
                    <button
                      type="button"
                      className={clsx(
                        "flex items-baseline gap-[0.65rem] bg-transparent border-none p-0 cursor-pointer transition-colors duration-300 ease-brand",
                        i === active ? "text-text" : "text-muted",
                      )}
                      onClick={() =>
                        document
                          .getElementById(`pillar-${pillar.n}`)
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          })
                      }
                    >
                      <span className="font-serif text-lg">{pillar.n}</span>
                      <span className="text-sm text-left">
                        {pillar.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="flex flex-col gap-[clamp(4rem,9vh,6.5rem)] max-[900px]:gap-6"
            ref={panelsRef}
          >
            {PILLARS.map((pillar, i) => (
              <PillarPanel
                pillar={pillar}
                index={i}
                onActive={setActive}
                key={pillar.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
