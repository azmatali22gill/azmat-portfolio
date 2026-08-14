import Boot from "@/components/Boot";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Boot />

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}