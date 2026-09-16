import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";

const TESTIMONIALS = [
  {
    name: "Hadi",
    flag: "🇵🇹",
    quote:
      "Je me suis converti en 2024 sans aucune notion d'arabe. En 3 mois avec Bayān, j'ai mémorisé l'alphabet, appris à l'écrire et à le lire. Un vrai tremplin, accessible depuis chez soi — je le recommande pour tout âge.",
  },
  {
    name: "Khadija",
    flag: "🇸🇳",
    quote:
      "En un an de programme, j'ai progressé sur la lecture arabe, l'organisation et l'apprentissage du Coran. C'est un programme sérieux, avec un vrai accompagnement qui fait la différence.",
  },
  {
    name: "Lamine",
    flag: "🇸🇳",
    quote:
      "Absolument tout a évolué : ma lecture, ma compréhension, ma motivation. Pour la qualité de l'enseignement ? Les meilleurs sur le marché, sans hésitation.",
  },
  {
    name: "Rose",
    flag: "🇫🇷",
    quote:
      "Un enseignant patient et minutieux, qui analyse ton niveau dès le départ et insiste sur chaque détail. Pour la santé mentale et spirituelle, ça a été un vrai tournant.",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages">
      <div className="container">
        <Reveal className="section-head">
          <div className="flex items-center gap-[0.85rem] mb-4 font-sans text-lg text-muted">
            <span className="kicker-star" aria-hidden="true" />
            <span>Ils apprennent avec Bayān</span>
          </div>
          <h2>Ce qu&rsquo;en disent les étudiants</h2>
        </Reveal>
        <StaggerGroup className="grid grid-cols-2 gap-[1.1rem] max-[760px]:grid-cols-1">
          {TESTIMONIALS.map((t) => (
            <StaggerItem
              className="bg-panel-tint text-text border border-card-border rounded-none p-[1.6rem] transition-[transform,box-shadow] duration-300 ease-brand hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
              key={t.name}
            >
              <div className="flex items-center gap-2 mb-[0.85rem] font-serif text-lg">
                {t.name} <span>{t.flag}</span>
              </div>
              <p className="text-text-soft text-sm leading-[1.65]">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
