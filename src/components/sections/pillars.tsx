import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { Spark } from "@/components/icons";

const PILLARS = [
  {
    title: "Lecture Arabe",
    img: "/images/pillar-lecture.webp",
    alt: "Étudiant lisant le Qur'an sous une arcade",
    text: "Apprendre à lire le Qur'an dans sa langue d'origine, lettre par lettre, sans translittération. Une progression structurée pour poser des bases solides dès le départ.",
  },
  {
    title: "Mémorisation",
    img: "/images/pillar-memorisation.webp",
    alt: "Jeune étudiant récitant sur une tablette coranique",
    text: "Mémoriser le Qur'an à votre rythme, avec une méthodologie éprouvée et un suivi régulier. Chaque semaine, une page, un verset, une lettre à la fois.",
  },
  {
    title: "Fondements de l'Islam",
    img: "/images/pillar-fondements.webp",
    alt: "Étudiante étudiant dans une bibliothèque",
    text: "Comprendre les bases essentielles du Tawhīd, du Fiqh et du Tafsīr, telles qu'enseignées selon le Qur'an et la Sunnah.",
  },
];

export function Pillars() {
  return (
    <section id="pedagogie">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">
            <Spark />
            Trois piliers
          </div>
          <h2>Ce que vous construisez, dans l&rsquo;ordre</h2>
        </Reveal>
        <StaggerGroup className="pillars-grid">
          {PILLARS.map((pillar) => (
            <StaggerItem className="pillar-card" key={pillar.title}>
              <div className="thumb">
                <Image src={pillar.img} alt={pillar.alt} width={760} height={570} />
              </div>
              <div className="body">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
