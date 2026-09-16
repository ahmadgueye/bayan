"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const TITLE = "Toujours pas convaincu ?";

const headVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.02 } },
};
const kickerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const wordGroupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.55, ease: EASE } },
};
const btnVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function FinalCta() {
  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section className="relative overflow-hidden text-center" ref={bannerRef}>
      <motion.div
        className="absolute inset-x-0 top-[-18%] bottom-[-18%]"
        style={{ y, scale }}
      >
        <Image
          src="/images/aqsa.webp"
          alt="Le Dôme du Rocher à la mosquée Al-Aqsa sous un ciel bleu"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,8,0.55),rgba(20,12,8,0.45)_45%,rgba(20,12,8,0.78))]" />
      <div className="relative w-full max-w-[42rem] mx-auto px-[clamp(1.5rem,5vw,4.5rem)]">
        <motion.div
          className="section-head"
          variants={headVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div
            className="flex items-center justify-center gap-[0.85rem] mb-4 font-sans text-lg text-gold"
            variants={kickerVariants}
          >
            <span className="kicker-star" aria-hidden="true" />
            <span>Une dernière question ?</span>
          </motion.div>
          <motion.h2
            className="text-cream text-[clamp(1.35rem,7.5vw,var(--text-5xl))] whitespace-nowrap mb-5"
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
          <motion.a
            href="#"
            className="btn btn-primary mx-auto"
            variants={btnVariants}
          >
            Je pose ma question sur WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
