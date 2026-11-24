import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import EngineeringStrip from "./components/EngineeringStrip";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f6f4f0] text-[#171412] min-h-screen overflow-x-hidden selection:bg-[#ff4829] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <EngineeringStrip />
        <Services />
        <Projects />
        <Process />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
