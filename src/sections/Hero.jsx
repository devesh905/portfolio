import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      <div className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse top-1/3 -z-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-lg text-cyan-400 font-mono mb-4"
      >
        Hi, I'm
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4"
      >
        Devesh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl text-white/70 max-w-xl"
      >
        .NET Core Developer building real-time healthcare systems —
        ICU monitoring, AI voice assistants, and scalable backends.
      </motion.p>
    </section>
  );
}

export default Hero;