import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { Spark } from "@/components/icons";

const PROBLEMS = [
  { n: "01", strong: "par où commencer", rest: "Vous ne savez pas " },
  { n: "02", strong: "de cadre et de méthode", rest: "Vous manquez " },
  {
    n: "03",
    strong: "trop complexes ou confuses",
    rest: "Les explications trouvées en ligne sont ",
  },
  { n: "04", strong: "chargé", rest: "Votre emploi du temps est " },
  {
    n: "05",
    strong: "converti(e) récemment",
    rest: "Vous vous êtes ",
    after: " et partez de zéro",
  },
  {
    n: "06",
    strong: "sans jamais vraiment progresser",
    rest: "Vous avez déjà essayé seul(e), ",
  },
];

export function Problems() {
  return (
    <section className="problems">
      <div className="container">
        <Reveal className="problems-img">
          <Image
            src="/images/problems-visual.webp"
            alt="Étudiante écrivant dans un cahier"
            width={760}
            height={950}
          />
        </Reveal>
        <Reveal>
          <div className="eyebrow c-gold">
            <Spark />
            Vous vous reconnaissez ?
          </div>
          <h2>Vous souhaitez apprendre l&rsquo;islam, mais&hellip;</h2>
          <StaggerGroup className="problems-list" as="ul">
            {PROBLEMS.map((p) => (
              <StaggerItem as="li" key={p.n}>
                <span className="num">{p.n}</span>
                <span>
                  {p.rest}
                  <b>{p.strong}</b>
                  {p.after ?? ""}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
