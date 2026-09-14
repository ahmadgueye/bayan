import Image from "next/image";
import { Reveal } from "@/components/motion";
import { Spark } from "@/components/icons";

export function Story() {
  return (
    <section className="story">
      <div className="container">
        <Reveal>
          <div className="eyebrow c-sky">
            <Spark />
            L&rsquo;histoire de Bayān
          </div>
          <blockquote>
            &laquo;&nbsp;Née d&rsquo;un besoin de transmettre, avec exactitude.&nbsp;&raquo;
          </blockquote>
          <div className="story-text">
            <p>
              J&rsquo;ai créé Bayān alors que j&rsquo;étais moi-même en train
              d&rsquo;apprendre. En avançant dans mon parcours, j&rsquo;ai ressenti
              le besoin de partager ce que je comprenais, selon la méthodologie
              apprise auprès de mes enseignants &mdash; avec leur accord, pour
              transmettre les matières maîtrisées.
            </p>
            <p>
              Bayān est né de cette dynamique : apprendre, transmettre, et
              progresser ensemble. Aujourd&rsquo;hui, Bayān accompagne celles et
              ceux qui souhaitent poser des bases solides en lecture arabe et en
              sciences islamiques &mdash; sans confusion, sans précipitation, et
              sans prétention.
            </p>
          </div>
          <p className="attribution">&mdash; Muhammad Ahmad, fondateur de Bayān</p>
        </Reveal>
        <Reveal className="story-portrait">
          <Image
            src="/images/founder-portrait.webp"
            alt="Muhammad Ahmad, fondateur de Bayān"
            width={620}
            height={1237}
          />
        </Reveal>
      </div>
    </section>
  );
}
