import { useEffect, useRef, useState } from "react";
import { Activity, Heart, Wifi, CheckCircle2 } from "lucide-react";

function IcuDashboardVisual() {
  const [pulse, setPulse] = useState(false);
  const canvasRef = useRef(null);

  // Smooth medical ECG & Pleth waveform animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let offset = 0;

    // Single cardiac cycle points for Lead II ECG (normalized 0 to 100)
    // Baseline at 50, P at 43, Q at 55, R at 10, S at 70, T at 40
    function getEcgY(phase) {
      // phase: 0 to 1
      if (phase < 0.15) return 50; // baseline
      if (phase < 0.25) {
        // P wave
        const pPhase = (phase - 0.15) / 0.1;
        return 50 - Math.sin(pPhase * Math.PI) * 7;
      }
      if (phase < 0.35) return 50; // PR segment
      if (phase < 0.38) {
        // Q wave
        const qPhase = (phase - 0.35) / 0.03;
        return 50 + qPhase * 5;
      }
      if (phase < 0.43) {
        // R wave peak
        const rPhase = (phase - 0.38) / 0.05;
        return 55 - rPhase * 43; // peak at ~12
      }
      if (phase < 0.48) {
        // S wave dip
        const sPhase = (phase - 0.43) / 0.05;
        return 12 + sPhase * 55; // dip to 67
      }
      if (phase < 0.52) {
        // Return to baseline
        const sEndPhase = (phase - 0.48) / 0.04;
        return 67 - sEndPhase * 17;
      }
      if (phase < 0.65) return 50; // ST segment
      if (phase < 0.8) {
        // T wave
        const tPhase = (phase - 0.65) / 0.15;
        return 50 - Math.sin(tPhase * Math.PI) * 11;
      }
      return 50; // baseline to next cycle
    }

    // Pleth (SpO2 pulse) wave
    function getPlethY(phase) {
      if (phase < 0.25) {
        // Systolic upstroke
        const uPhase = phase / 0.25;
        return 35 - Math.sin(uPhase * (Math.PI / 2)) * 22;
      }
      if (phase < 0.45) {
        // Dicrotic notch
        const nPhase = (phase - 0.25) / 0.2;
        return 13 + Math.sin(nPhase * Math.PI) * 7;
      }
      if (phase < 0.9) {
        // Diastolic runoff
        const rPhase = (phase - 0.45) / 0.45;
        return 16 + rPhase * 19;
      }
      return 35;
    }

    function render() {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Draw medical grid (subtle 16px squares)
      ctx.strokeStyle = "#16222F";
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

      // Draw ECG Waveform (Lead II in bright medical green)
      ctx.strokeStyle = "#10B981";
      ctx.lineWidth = 1.75;
      ctx.shadowColor = "rgba(16, 185, 129, 0.4)";
      ctx.shadowBlur = 4;
      ctx.beginPath();

      const ecgCycleWidth = 140; // pixels per cardiac cycle
      for (let x = 0; x < width; x++) {
        const globalX = x + offset;
        const phase = (globalX % ecgCycleWidth) / ecgCycleWidth;
        const yVal = getEcgY(phase);
        // Map 0-100 to canvas top half (e.g. 15 to 95)
        const canvasY = 15 + (yVal / 100) * 80;

        if (x === 0) ctx.moveTo(x, canvasY);
        else ctx.lineTo(x, canvasY);
      }
      ctx.stroke();

      // Reset shadow for Pleth
      ctx.strokeStyle = "#38BDF8";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "rgba(56, 189, 248, 0.35)";
      ctx.shadowBlur = 3;
      ctx.beginPath();

      // Draw Pleth Waveform (SpO2 in cyan) in lower half
      for (let x = 0; x < width; x++) {
        const globalX = x + offset;
        const phase = (globalX % ecgCycleWidth) / ecgCycleWidth;
        const yVal = getPlethY(phase);
        // Map to canvas bottom half (e.g. 105 to 155)
        const canvasY = 105 + (yVal / 50) * 45;

        if (x === 0) ctx.moveTo(x, canvasY);
        else ctx.lineTo(x, canvasY);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw current sweep line indicator (faint vertical scanner line)
      const sweepX = (offset * 1.5) % width;
      ctx.fillStyle = "rgba(16, 185, 129, 0.15)";
      ctx.fillRect(sweepX, 0, 4, height);

      offset += 1.2;
      animationFrameId = requestAnimationFrame(render);
    }

    render();

    // Pulse heartbeat interval
    const pulseInterval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 770);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div className="border border-[#1E293B] bg-[#0A0F1D] text-white rounded-lg overflow-hidden shadow-md">
      
      {/* Top Clinical Header Bar */}
      <div className="bg-[#0F172A] border-b border-[#1E293B] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE TELEMETRY
          </span>
          <span className="font-bold text-slate-200">BED 04 &bull; ICU EAST</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">UHID: SUB-2025-08492</span>
          <span className="text-slate-500 hidden md:inline">|</span>
          <span className="text-slate-400 hidden md:inline">58M &bull; Sinus Rhythm</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <Wifi size={12} />
            SignalR: 500Hz
          </span>
          <span className="hidden sm:inline text-slate-500">&bull;</span>
          <span className="hidden sm:inline">Latency: ~38ms</span>
        </div>
      </div>

      {/* Main Monitoring Screen Grid: Waveforms (Left 7) + Numeric Tiles (Right 5) */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#1E293B]">
        
        {/* Left Side: Waveform Display */}
        <div className="md:col-span-8 p-3 sm:p-4 space-y-2 relative bg-[#070B14]">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Activity size={13} />
              <span>LEAD II (ECG) &bull; 25mm/s &bull; 10mm/mV</span>
            </div>
            <span className="text-slate-500">Mindray / Comen Feed</span>
          </div>

          {/* Canvas Waveform Display */}
          <div className="relative w-full overflow-hidden rounded bg-[#050811] border border-[#16202C]">
            <canvas
              ref={canvasRef}
              width={560}
              height={165}
              className="w-full h-[155px] sm:h-[165px] block"
            />

            {/* Inset Label for Pleth */}
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-sky-400 font-medium">
              PLETH &bull; SpO2 ARTERIAL WAVE
            </div>
          </div>

          {/* Real-Time Telemetry Pipeline Status */}
          <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={11} className="text-emerald-400" />
              <span>Delta-Compression: 32x Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={11} className="text-emerald-400" />
              <span>Scope Isolation: DbContext Safe</span>
            </div>
            <div className="text-slate-500">7-Day Retention Purge: Active</div>
          </div>
        </div>

        {/* Right Side: Vital Signs Numeric Tiles */}
        <div className="md:col-span-4 p-3 sm:p-4 bg-[#0A0F1D] grid grid-cols-2 sm:grid-cols-2 gap-2.5 content-start font-mono">
          
          {/* HR Tile */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-emerald-400">
              <span className="font-semibold">HR</span>
              <Heart
                size={12}
                className={`transition-transform duration-200 ${
                  pulse ? "scale-125 text-emerald-400" : "scale-100 text-emerald-600"
                }`}
              />
            </div>
            <div className="text-3xl font-bold text-emerald-400 tracking-tight my-1">
              78
            </div>
            <div className="text-[10px] text-slate-400">bpm &bull; 60-100</div>
          </div>

          {/* SpO2 Tile */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-sky-400">
              <span className="font-semibold">SpO2</span>
              <span>%</span>
            </div>
            <div className="text-3xl font-bold text-sky-400 tracking-tight my-1">
              98
            </div>
            <div className="text-[10px] text-slate-400">Norm &gt; 95%</div>
          </div>

          {/* BP Tile */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-slate-200">
              <span className="font-semibold">NIBP</span>
              <span className="text-[10px] text-slate-400">SYS/DIA</span>
            </div>
            <div className="text-2xl font-bold text-white tracking-tight my-1">
              120/80
            </div>
            <div className="text-[10px] text-slate-400">MAP (93) mmHg</div>
          </div>

          {/* RESP Tile */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-amber-400">
              <span className="font-semibold">RESP</span>
              <span>/min</span>
            </div>
            <div className="text-2xl font-bold text-amber-400 tracking-tight my-1">
              16
            </div>
            <div className="text-[10px] text-slate-400">Norm 12-20</div>
          </div>

          {/* TEMP Full Width */}
          <div className="col-span-2 bg-[#0F172A] border border-[#1E293B] rounded px-2.5 py-1.5 flex items-center justify-between text-xs text-slate-300">
            <span className="text-[11px] text-slate-400">CORE TEMP</span>
            <span className="font-bold text-slate-100">36.8 &deg;C</span>
            <span className="text-[10px] text-emerald-400 font-semibold">NORMAL</span>
          </div>

        </div>

      </div>

      {/* Honest, Clear Editorial Disclaimer */}
      <div className="bg-[#080C16] border-t border-[#1E293B] px-4 py-2 text-[11px] font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span>
          <strong className="text-slate-300">Project Visual Specification:</strong> Abstract UI representation of the bedside telemetry dashboard engineered for intensive care units.
        </span>
        <span className="text-emerald-500 font-medium">Production Subharti Hospital Deployment</span>
      </div>

    </div>
  );
}

export default IcuDashboardVisual;
