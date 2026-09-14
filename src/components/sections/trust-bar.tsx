import { Check } from "lucide-react";
import { Reveal } from "@/components/motion";

const ITEMS = [
  "Basé sur le Qur'an et la Sunnah",
  "Suivi hebdomadaire, pas d'abandon en silence",
  "Lecture arabe sans translittération dès la 1ᵉ leçon",
];

export function TrustBar() {
  return (
    <Reveal as="section" className="trustbar">
      <div className="container">
        <ul>
          {ITEMS.map((item) => (
            <li key={item}>
              <Check strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
