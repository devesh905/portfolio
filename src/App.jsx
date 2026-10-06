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
    <div className="bg-[#FBFBF9] text-[#141413] min-h-screen overflow-x-hidden selection:bg-[#183654] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

