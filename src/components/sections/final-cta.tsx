import { Reveal } from "@/components/motion";

export function FinalCta() {
  return (
    <Reveal as="section" className="final-cta">
      <div className="container">
        <div className="eyebrow c-gold">Une dernière question ?</div>
        <h2>Toujours pas convaincu&nbsp;?</h2>
        <a href="#" className="btn btn-primary">
          Je pose ma question sur WhatsApp
        </a>
      </div>
    </Reveal>
  );
}
