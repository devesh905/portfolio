import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Wifi, Activity, Heart, ShieldCheck, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

function HeroWorkstation() {
  const canvasRef = useRef(null);
  const [packetCount, setPacketCount] = useState(48210);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let offset = 0;

    function getEcgY(phase) {
      if (phase < 0.15) return 40;
      if (phase < 0.25) {
        const p = (phase - 0.15) / 0.1;
        return 40 - Math.sin(p * Math.PI) * 5;
      }
      if (phase < 0.35) return 40;
      if (phase < 0.38) {
        const q = (phase - 0.35) / 0.03;
        return 40 + q * 4;
      }
      if (phase < 0.43) {
        const r = (phase - 0.38) / 0.05;
        return 44 - r * 34; // sharp R spike
      }
      if (phase < 0.48) {
        const s = (phase - 0.43) / 0.05;
        return 10 + s * 42; // S dip
      }
      if (phase < 0.52) {
        const end = (phase - 0.48) / 0.04;
        return 52 - end * 12;
      }
      if (phase < 0.65) return 40;
      if (phase < 0.8) {
        const t = (phase - 0.65) / 0.15;
        return 40 - Math.sin(t * Math.PI) * 9;
      }
      return 40;
    }

    function render() {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = "#141D28";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let x = 0; x < width; x += 16) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += 16) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // ECG Waveform (Green)
      ctx.strokeStyle = "#10B981";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      const cycleWidth = 110;
      for (let x = 0; x < width; x++) {
        const globalX = x + offset;
        const phase = (globalX % cycleWidth) / cycleWidth;
        const yVal = getEcgY(phase);
        const y = 8 + (yVal / 80) * 60;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      offset += 1.4;
      animationId = requestAnimationFrame(render);
    }

    render();

    // Increment packet counter subtly
    const interval = setInterval(() => {
      setPacketCount((p) => p + Math.floor(Math.random() * 3) + 1);
    }, 400);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative group select-none">
      {/* Background Architectural Layer (Offset Card) */}
      <div className="absolute -bottom-4 -right-3 w-full h-full bg-[#183654]/10 border border-[#183654]/20 rounded-xl pointer-events-none transform translate-x-2 translate-y-2 hidden sm:block" />

      {/* Main Clinical & Telemetry Workstation Panel */}
      <div className="relative border border-[#232B3A] bg-[#0D1117] text-white rounded-xl overflow-hidden shadow-[0_20px_45px_-15px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:border-[#38455B]">
        
        {/* Top Header Bar */}
        <div className="bg-[#121722] border-b border-[#232B3A] px-4 py-2.5 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-slate-200">LIVE SYSTEM</span>
            <span className="text-slate-600">/</span>
            <span className="text-sky-400 font-semibold">DIGITAL ICU</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span className="text-emerald-400 font-semibold">500Hz TELEMETRY</span>
            <span className="text-slate-600">&bull;</span>
            <span>LATENCY 38ms</span>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-4 space-y-3 bg-[#090D14]">
          {/* Waveform Screen */}
          <div className="relative border border-[#1A2332] bg-[#050810] rounded-lg overflow-hidden">
            <div className="absolute top-2 left-2.5 z-10 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
              <Activity size={11} />
              <span>LEAD II (ECG) &bull; 500Hz STREAM</span>
            </div>
            <div className="absolute top-2 right-2.5 z-10 text-[10px] font-mono text-slate-400">
              BED 04 &bull; 58M
            </div>

            <canvas
              ref={canvasRef}
              width={460}
              height={95}
              className="w-full h-[95px] block"
            />
          </div>

          {/* Real-time Numeric Vitals */}
          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="border border-[#1E2738] bg-[#101622] rounded p-2">
              <div className="text-[10px] text-slate-400 uppercase flex items-center justify-center gap-1">
                <span>HR</span>
                <Heart size={9} className="text-emerald-400" />
              </div>
              <div className="text-xl font-bold text-emerald-400 mt-0.5">78</div>
              <div className="text-[9px] text-slate-500">bpm (Normal)</div>
            </div>

            <div className="border border-[#1E2738] bg-[#101622] rounded p-2">
              <div className="text-[10px] text-slate-400 uppercase">SpO2</div>
              <div className="text-xl font-bold text-sky-400 mt-0.5">98%</div>
              <div className="text-[9px] text-slate-500">Norm &gt; 95%</div>
            </div>

            <div className="border border-[#1E2738] bg-[#101622] rounded p-2">
              <div className="text-[10px] text-slate-400 uppercase">NIBP</div>
              <div className="text-xl font-bold text-slate-100 mt-0.5">120/80</div>
              <div className="text-[9px] text-slate-500">MAP 93 mmHg</div>
            </div>
          </div>

          {/* System Telemetry & Hardware Status Bar */}
          <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono border-t border-[#1A2332] text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Wifi size={10} />
              <span>SignalR Connected</span>
            </div>
            <div>
              Packets: <span className="text-slate-200 font-semibold">{packetCount.toLocaleString()}</span>
            </div>
            <div className="text-slate-500">
              Delta: <span className="text-sky-400 font-semibold">32x</span>
            </div>
          </div>
        </div>

        {/* Bottom Hardware Bridge Extension */}
        <div className="bg-[#121824] border-t border-[#232B3A] px-4 py-2 flex items-center justify-between text-[10px] font-mono text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="font-semibold text-slate-200">HIS.ScannerBridge</span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-slate-400">ws://127.0.0.1:8181</span>
          </div>
          <span className="text-emerald-400 font-semibold">C# Service Online</span>
        </div>

      </div>
    </div>
  );
}

function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#E5E5DE] bg-[#FBFBF9]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Asymmetrical 2-Column Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Strong Typographic Statement (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Technical Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E56A0] text-xs font-mono font-semibold uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]" />
              <span>Full-Stack / .NET Engineer</span>
            </motion.div>

            {/* Massive Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-[#141413] tracking-tight leading-[1.05]">
                I build software
                <br />
                <span className="text-[#1E56A0]">that has to work.</span>
              </h1>
            </motion.div>

            {/* Concise Human Positioning Statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg sm:text-xl text-[#383A35] leading-relaxed max-w-xl font-normal pt-1"
            >
              I build backend systems, real-time applications and software that connects with real-world devices.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#141413] hover:bg-[#1E56A0] rounded transition-all shadow-sm"
              >
                <span>View selected work</span>
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#141413] hover:text-[#1E56A0] border border-[#D5D5CE] hover:border-[#1E56A0] bg-white rounded transition-all cursor-pointer shadow-sm"
              >
                <FileText size={15} className="text-[#1E56A0]" />
                <span>Download résumé</span>
              </button>
            </motion.div>

            {/* Technical Sub-line & Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-4 flex flex-wrap items-center gap-6 border-t border-[#EFEFE8] text-xs font-mono text-[#787A72]"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Subharti Hospital &bull; India (Remote Available)</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/devesh905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#4A4C46] hover:text-[#1E56A0] transition-colors"
                >
                  <FaGithub size={13} />
                  <span>GitHub</span>
                </a>
                <span>&bull;</span>
                <a
                  href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#4A4C46] hover:text-[#1E56A0] transition-colors"
                >
                  <FaLinkedin size={13} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Engineering Workstation Product Preview (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <HeroWorkstation />
          </motion.div>

        </div>

      </div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl="/DeveshKumarUpadhyay.pdf"
      />
    </section>
  );
}

export default Hero;