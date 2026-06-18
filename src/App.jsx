import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import About from "./sections/About";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
   <Navbar name="Devesh" title="Portfolio" />
   <Hero  />
<About />
   <Projects />
   <Contact />
   <Footer />
    </div>
  );
}

export default App;