"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { BookOpen, Repeat2, Landmark } from "lucide-react";

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
      className="pillar-card"
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="thumb" ref={thumbRef}>
        <motion.div
          className="thumb-frame"
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
      <div className="pillar-scrim" />
      <div className="pillar-head">
        <span className="pillar-n">{pillar.n}</span>
        <span className="pillar-icon">
          <Icon strokeWidth={2} />
        </span>
      </div>
      <div className="body">
        <h3>{pillar.title}</h3>
        <p>{pillar.text}</p>
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
        <div className="pillars-layout">
          <div className="pillars-sticky">
            <motion.div
              className="pillars-head"
              variants={headVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              <motion.div className="pillars-kicker" variants={kickerVariants}>
                <span className="kicker-star" aria-hidden="true" />
                <span>Trois piliers</span>
              </motion.div>
              <motion.h2 className="pillars-title" variants={wordGroupVariants}>
                {words.map((word, i) => (
                  <span className="word-mask" key={`${word}-${i}`}>
                    <motion.span className="word" variants={wordVariants}>
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h2>
            </motion.div>
            <div className="pillars-progress">
              <span className="pillars-progress-track">
                <motion.span
                  className="pillars-progress-fill"
                  style={{ height: fillHeight }}
                />
              </span>
              <ul>
                {PILLARS.map((pillar, i) => (
                  <li
                    key={pillar.n}
                    className={i === active ? "is-active" : undefined}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById(`pillar-${pillar.n}`)
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          })
                      }
                    >
                      <span className="pillars-progress-n">{pillar.n}</span>
                      <span className="pillars-progress-label">
                        {pillar.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pillars-panels" ref={panelsRef}>
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
