import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Mind } from "@/components/sections/mind";
import { Evolution } from "@/components/sections/evolution";
import { System } from "@/components/sections/system";
import { Worlds } from "@/components/sections/worlds";
import { Machine } from "@/components/sections/machine";
import { Lab } from "@/components/sections/lab";
import { Proof } from "@/components/sections/proof";
import { Now } from "@/components/sections/now";
import { Next } from "@/components/sections/next";
import { Exit } from "@/components/sections/exit";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Manifesto />
        <About />
        <Services />
        <Mind />
        <Evolution />
        <System />
        <Worlds />
        <Machine />
        <Lab />
        <Proof />
        <Now />
        <Next />
        <Exit />
      </main>
      <Footer />
    </>
  );
}