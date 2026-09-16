"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const lines = ["Posez des bases solides en Islam,", "avec clarté."];

export function Hero() {
  return (
    <section
      className="pt-[clamp(2.2rem,5vw,3.6rem)] pb-0 overflow-hidden"
      id="hero"
    >
      <div className="w-full max-w-[52rem] mx-auto px-[clamp(1.5rem,5vw,4.5rem)] text-center">
        <h1 className="text-[clamp(var(--text-4xl),5vw,var(--text-5xl))] overflow-hidden w-screen max-w-[76rem] ml-[50%] -translate-x-1/2 px-[clamp(1.5rem,5vw,4.5rem)]">
          {lines.map((line, i) => (
            <span className="block overflow-hidden pb-[0.08em]" key={line}>
              <motion.span
                className={
                  i === 1
                    ? "inline-block text-gradient-animate"
                    : "inline-block"
                }
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                  delay: 0.05 + i * 0.11,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="mt-[1.1rem] text-text-soft mx-auto"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
        >
          Un parcours structuré en lecture arabe, mémorisation du Qur&rsquo;an
          et sciences islamiques &mdash; pensé pour les débutants et les
          convertis. Sans détour, sans précipitation, sans promesses creuses.
        </motion.p>
        <motion.div
          className="mt-[1.6rem] flex flex-wrap gap-3 items-center justify-center"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.58 }}
        >
          <a href="#programme" className="btn btn-primary">
            Découvrir le programme
          </a>
          <a href="#offres" className="btn btn-ghost">
            Voir les offres
          </a>
        </motion.div>
        <motion.p
          className="mt-[1.1rem] text-xs text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        >
          Déjà suivi depuis le Sénégal, la France et le Portugal &middot;
          Réponse sous 24h sur WhatsApp
        </motion.p>
      </div>
      <motion.div
        className="relative w-full max-w-[100rem] mx-auto mt-[clamp(1.5rem,4vw,2.5rem)] px-[clamp(1.5rem,5vw,4.5rem)]"
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
      >
        <div className="absolute top-[10%] right-[15%] bottom-[-5%] left-[15%] -z-[1] blur-[10px] bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--color-gold)_32%,transparent),transparent_70%)]" />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/hero-kaaba.webp"
            alt="La Kaaba entourée de pèlerins en ihram"
            width={2200}
            height={847}
            priority
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
