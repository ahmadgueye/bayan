"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Reveal } from "@/components/motion";

const PARAGRAPHS = [
  "J’ai créé Bayān alors que j’étais moi-même en train d’apprendre. En avançant dans mon parcours, j’ai ressenti le besoin de partager ce que je comprenais, selon la méthodologie apprise auprès de mes enseignants — avec leur accord, pour transmettre les matières maîtrisées.",
  "Bayān est né de cette dynamique : apprendre, transmettre, et progresser ensemble. Aujourd’hui, Bayān accompagne celles et ceux qui souhaitent poser des bases solides en lecture arabe et en sciences islamiques — sans confusion, sans précipitation, et sans prétention.",
];

function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  return (
    <motion.span className="story-word" style={{ opacity }}>
      {word}{" "}
    </motion.span>
  );
}

export function Story() {
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const wordsByPara = PARAGRAPHS.map((p) => p.split(" "));
  const total = wordsByPara.reduce((sum, words) => sum + words.length, 0);
  let counter = -1;

  return (
    <section className="story">
      <div className="container">
        <Reveal className="story-portrait-wrap">
          <div className="story-portrait">
            <Image
              src="/images/bayan-story.webp"
              alt="Qur&rsquo;an ouvert sur un rahle en bois"
              fill
              sizes="(max-width: 940px) 90vw, 40vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="story-kicker">
            <span>L&rsquo;histoire de Bayân</span>
          </div>
          <div className="story-quote">
            <blockquote>
              Née d&rsquo;un besoin de transmettre, avec exactitude.
            </blockquote>
          </div>
          <div className="story-text" ref={textRef}>
            {wordsByPara.map((words, pi) => (
              <p key={pi}>
                {words.map((word, wi) => {
                  counter += 1;
                  return (
                    <ScrollWord
                      key={wi}
                      word={word}
                      index={counter}
                      total={total}
                      progress={textProgress}
                    />
                  );
                })}
              </p>
            ))}
          </div>
          <p className="attribution">&mdash; Ahmad, CEO</p>
        </Reveal>
      </div>
    </section>
  );
}
