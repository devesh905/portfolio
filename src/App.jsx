import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050811] text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

