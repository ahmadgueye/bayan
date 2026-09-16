"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/motion";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const PARAGRAPHS = [
  "J’ai créé Bayān alors que j’étais moi-même en train d’apprendre. En avançant dans mon parcours, j’ai ressenti le besoin de partager ce que je comprenais, selon la méthodologie apprise auprès de mes enseignants — avec leur accord, pour transmettre les matières maîtrisées.",
  "Bayān est né de cette dynamique : apprendre, transmettre, et progresser ensemble. Aujourd’hui, Bayān accompagne celles et ceux qui souhaitent poser des bases solides en lecture arabe et en sciences islamiques — sans confusion, sans précipitation, et sans prétention.",
];

const wordGroupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0.25 },
  show: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
};

function Word({ word }: { word: string }) {
  return (
    <motion.span className="inline" variants={wordVariants}>
      {word}{" "}
    </motion.span>
  );
}

export function Story() {
  const wordsByPara = PARAGRAPHS.map((p) => p.split(" "));

  return (
    <section className="bg-panel-tint">
      <div className="container flex items-center gap-[clamp(2rem,5vw,4.5rem)]">
        <Reveal className="relative flex-[0.85_1_0] max-[940px]:hidden">
          <div className="relative aspect-[4/5] rounded-none overflow-hidden">
            <Image
              src="/images/bayan-story.webp"
              alt="Qur&rsquo;an ouvert sur un rahle en bois"
              fill
              sizes="40vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Reveal>
        <Reveal className="flex-1">
          <div className="flex items-center gap-[0.85rem] mb-6 font-sans text-lg text-muted">
            <span className="kicker-star" aria-hidden="true" />
            <span>L&rsquo;histoire de Bayân</span>
          </div>
          <div className="mb-7">
            <blockquote className="m-0 font-serif font-medium text-[clamp(var(--text-xl),2.2vw,var(--text-2xl))] leading-[1.4] text-text">
              Née d&rsquo;un besoin de transmettre, avec exactitude.
            </blockquote>
          </div>
          <motion.div
            variants={wordGroupVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            {wordsByPara.map((words, pi) => (
              <p key={pi} className="mb-4 text-text-soft text-base">
                {words.map((word, wi) => (
                  <Word key={wi} word={word} />
                ))}
              </p>
            ))}
          </motion.div>
          <p className="text-sm font-semibold">&mdash; Ahmad, CEO</p>
        </Reveal>
      </div>
    </section>
  );
}
