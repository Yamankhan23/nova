import Hero from "./components/Hero";
import Features from "./components/Features";
import Highlight from "./components/Highlight";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative z-10 overflow-visible">
      <Hero />
      <Features />
      <Highlight />
      <Contact />
    </main>
  );
}
