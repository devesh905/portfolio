import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import EngineeringStrip from "./components/EngineeringStrip";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#FBFBF9] text-[#141413] min-h-screen overflow-x-hidden selection:bg-[#1E56A0] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <EngineeringStrip />
        <Services />
        <Projects />
        <Process />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
