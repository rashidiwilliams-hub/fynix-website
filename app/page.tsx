import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Services from "@/components/sections/Services";
import Tempo from "@/components/sections/Tempo";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Portfolio />
      <Tempo />
      <Services />
      <FAQ />
      <About />
      <Contact />
    </>
  );
}
