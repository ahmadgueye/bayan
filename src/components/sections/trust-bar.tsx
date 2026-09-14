import { BookOpenText, CalendarCheck2, Languages } from "lucide-react";
import { Reveal } from "@/components/motion";

const ITEMS = [
  {
    icon: BookOpenText,
    tone: "sky",
    text: "Basé sur le Qur'an et la Sunnah",
  },
  {
    icon: CalendarCheck2,
    tone: "gold",
    text: "Suivi hebdomadaire, pas d'abandon en silence",
  },
  {
    icon: Languages,
    tone: "orange",
    text: "Lecture arabe sans translittération dès la 1ᵉ leçon",
  },
] as const;

export function TrustBar() {
  return (
    <Reveal as="section" className="trustbar">
      <div className="container">
        <ul>
          {ITEMS.map(({ icon: Icon, tone, text }) => (
            <li key={text}>
              <span className={`trustbar-icon tone-${tone}`}>
                <Icon strokeWidth={2} />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
