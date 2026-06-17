import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
   <Navbar name="Devesh" title="Portfolio" />
   <Hero />
   <Projects />
    </div>
  );
}

export default App;