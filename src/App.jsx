import Navbar from './components/Navbar';
import Hero from './sections/Hero';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
   <Navbar name="Devesh" title="Portfolio" />
   <Hero />
    </div>
  );
}

export default App;