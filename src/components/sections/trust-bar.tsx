import { BookOpenText, CalendarCheck2, Languages } from "lucide-react";
import { Reveal } from "@/components/motion";

const TONE_CLASSES = {
  sky: "bg-[color-mix(in_srgb,var(--color-sky)_30%,transparent)] text-sky-ink",
  gold: "bg-[color-mix(in_srgb,var(--color-gold)_30%,transparent)] text-gold-ink",
  orange:
    "bg-[color-mix(in_srgb,var(--color-orange)_22%,transparent)] text-orange",
} as const;

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
    <Reveal as="section">
      <div className="container flex py-6 border-t border-b border-rule">
        <ul className="grid grid-cols-3 gap-y-4 gap-x-8 list-none m-0 p-0 w-full max-[760px]:grid-cols-1">
          {ITEMS.map(({ icon: Icon, tone, text }) => (
            <li
              key={text}
              className="list-none flex items-center gap-[0.85rem] text-sm font-medium text-text-soft"
            >
              <span
                className={`flex items-center justify-center w-10 h-10 flex-none rounded-none ${TONE_CLASSES[tone]}`}
              >
                <Icon className="w-[18px] h-[18px] flex-none" strokeWidth={2} />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
