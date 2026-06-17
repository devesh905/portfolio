function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      {/* Glow blob background */}
      <div className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse top-1/3 -z-10"></div>

      <h2 className="text-lg text-cyan-400 font-mono mb-4">Hi, I'm</h2>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Devesh
      </h1>
      <p className="text-xl text-white/70 max-w-xl">
        .NET Core Developer building real-time healthcare systems —
        ICU monitoring, AI voice assistants, and scalable backends.
      </p>
    </section>
  );
}

export default Hero;