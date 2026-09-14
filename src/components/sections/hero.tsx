"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const lines = ["Posez des bases solides en Islam,", "avec clarté."];

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-copy">
        <h1>
          {lines.map((line, i) => (
            <span className="line" key={line}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                  delay: 0.05 + i * 0.11,
                }}
                style={i === 1 ? { color: "var(--orange)" } : undefined}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="lede"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
        >
          Un parcours structuré en lecture arabe, mémorisation du Qur&rsquo;an
          et sciences islamiques &mdash; pensé pour les débutants et les
          convertis. Sans détour, sans précipitation, sans promesses creuses.
        </motion.p>
        <motion.div
          className="hero-cta"
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
          className="hero-proof"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        >
          Déjà suivi depuis le Sénégal, la France et le Portugal &middot;
          Réponse sous 24h sur WhatsApp
        </motion.p>
      </div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
      >
        <div className="glow" />
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
