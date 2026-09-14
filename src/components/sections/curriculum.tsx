import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

const STEPS = [
  {
    n: "01",
    title: "Bases de la lecture arabe",
    text: "L'alphabet et la lecture, sans translittération — la fondation de tout le reste.",
  },
  {
    n: "02",
    title: "Initiation au Tajwīd",
    text: "Les règles de récitation correcte du Qur'an.",
  },
  {
    n: "03",
    title: "Mémorisation du Qur'an",
    text: "Progression hebdomadaire suivie, page après page.",
  },
  {
    n: "04",
    title: "Bases de Tawhīd, Hadith & Tafsīr",
    text: "Comprendre l'essentiel de la croyance musulmane.",
  },
  {
    n: "05",
    title: "Introduction au Fiqh",
    text: "La purification et les premières règles pratiques.",
  },
];

export function Curriculum() {
  return (
    <section id="programme" style={{ paddingTop: 0 }}>
      <Reveal as="section" className="journey-banner">
        <Image
          src="/images/journey-banner.webp"
          alt="Voyageur et chameau traversant le désert au coucher du soleil"
          width={1800}
          height={600}
        />
        <div className="scrim" />
        <div className="cap">
          <div className="eyebrow">Le programme, étape par étape</div>
          <h2>Un parcours qui se construit dans l&rsquo;ordre</h2>
        </div>
      </Reveal>
      <div className="container">
        <StaggerGroup className="curriculum-list">
          {STEPS.map((step) => (
            <StaggerItem className="curr-item" key={step.n}>
              <div className="n">{step.n}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem as="span" className="curr-more">
            Et d&rsquo;autres modules à venir, in shā&rsquo; Allah.
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
