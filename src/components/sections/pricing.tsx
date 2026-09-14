import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { Spark } from "@/components/icons";

const COLLECTIF_FEATURES = [
  "Sessions live en groupe",
  "4 séances de mémorisation par semaine",
  "1 cours théorique par semaine (Arabe, Fiqh, Tawhid…)",
  "PDF des cours & accès à la communauté",
  "Suivi collectif de la progression",
];

const SOLO_FEATURES = [
  "Sessions live individuelles avec l'enseignant",
  "4 séances de mémorisation par semaine",
  "Flexibilité des horaires selon votre disponibilité",
  "Progression entièrement personnalisée",
  "Suivi rapproché et feedback direct",
];

export function Pricing() {
  return (
    <section id="offres">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">
            <Spark />
            Découvrez nos offres
          </div>
          <h2>Choisissez le parcours qui correspond à votre rythme</h2>
        </Reveal>
        <StaggerGroup className="pricing-grid">
          <StaggerItem className="price-card">
            <div className="tag">Format groupe</div>
            <h3>Parcours Collectif</h3>
            <p className="desc">
              Apprenez aux côtés d&rsquo;autres étudiants dans un cadre structuré
              et bienveillant.
            </p>
            <ul>
              {COLLECTIF_FEATURES.map((f) => (
                <li key={f}>
                  <Check strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="price-row">
              <span className="amount">
                15 000 <span>FCFA / mois</span>
              </span>
            </div>
            <a href="#" className="btn btn-primary">
              Je rejoins le parcours
            </a>
          </StaggerItem>
          <StaggerItem className="price-card featured">
            <div className="tag">Suivi individuel</div>
            <h3>Parcours Solo</h3>
            <p className="desc">
              Accompagnement individuel et flexible, adapté à votre rythme. Places
              limitées à 3 étudiants.
            </p>
            <ul>
              {SOLO_FEATURES.map((f) => (
                <li key={f}>
                  <Check strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="price-row">
              <span className="strike">45 000 FCFA</span>
              <span className="amount">
                30 000 <span>FCFA / mois</span>
              </span>
            </div>
            <a href="#" className="btn btn-primary">
              Je réserve ma place
            </a>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
