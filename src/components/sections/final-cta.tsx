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
    <section className="final-cta" ref={bannerRef}>
      <motion.div className="final-cta-img" style={{ y, scale }}>
        <Image
          src="/images/aqsa.webp"
          alt="Le Dôme du Rocher à la mosquée Al-Aqsa sous un ciel bleu"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="scrim" />
      <div className="container">
        <motion.div
          className="section-head"
          variants={headVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          <motion.div className="final-cta-kicker" variants={kickerVariants}>
            <span className="kicker-star" aria-hidden="true" />
            <span>Une dernière question ?</span>
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
          <motion.a
            href="#"
            className="btn btn-primary"
            variants={btnVariants}
          >
            Je pose ma question sur WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
