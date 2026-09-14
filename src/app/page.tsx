import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollSpine } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Pillars } from "@/components/sections/pillars";
import { Story } from "@/components/sections/story";
import { Problems } from "@/components/sections/problems";
import { Compare } from "@/components/sections/compare";
import { Curriculum } from "@/components/sections/curriculum";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <ScrollSpine />
      <SiteHeader />
      <main id="top">
        <Hero />
        <TrustBar />
        <Pillars />
        <Story />
        <Problems />
        <Compare />
        <Curriculum />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
