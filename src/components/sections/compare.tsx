import { Check, X } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { Spark } from "@/components/icons";

const NOT_LIST = [
  "Un institut supérieur de sciences islamiques",
  "Des promesses irréalistes ou un apprentissage précipité",
  "Une formation sans suivi ni cadre pédagogique",
  "Un programme réservé aux profils avancés",
];

const IS_LIST = [
  "Une progression pas à pas, adaptée aux débutants",
  "Une méthodologie claire et authentique",
  "Un cadre sérieux, bienveillant et accessible",
  "Un suivi hebdomadaire réel, par un enseignant",
];

export function Compare() {
  return (
    <section>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">
            <Spark />
            Pour être clair
          </div>
          <h2>
            Bayān n&rsquo;est pas un institut supérieur &mdash; et ce n&rsquo;est pas
            un hasard
          </h2>
        </Reveal>
        <StaggerGroup className="compare-grid">
          <StaggerItem className="compare-card no">
            <h3>
              <span className="dot" />
              Bayān n&rsquo;est pas
            </h3>
            <ul>
              {NOT_LIST.map((item) => (
                <li key={item}>
                  <X strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem className="compare-card yes">
            <h3>
              <span className="dot" />
              Bayān est
            </h3>
            <ul>
              {IS_LIST.map((item) => (
                <li key={item}>
                  <Check strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
