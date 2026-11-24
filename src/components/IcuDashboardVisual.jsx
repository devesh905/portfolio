import { useEffect, useRef, useState } from "react";
import { Activity, Heart, Wifi, CheckCircle2, SlidersHorizontal, ShieldCheck } from "lucide-react";

function IcuDashboardVisual() {
  const [activeLead, setActiveLead] = useState("Lead II");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let offset = 0;

    function getEcgY(phase) {
      if (phase < 0.15) return 45;
      if (phase < 0.25) {
        const p = (phase - 0.15) / 0.1;
        return 45 - Math.sin(p * Math.PI) * 7;
      }
      if (phase < 0.35) return 45;
      if (phase < 0.38) {
        const q = (phase - 0.35) / 0.03;
        return 45 + q * 5;
      }
      if (phase < 0.43) {
        const r = (phase - 0.38) / 0.05;
        return 50 - r * 42;
      }
      if (phase < 0.48) {
        const s = (phase - 0.43) / 0.05;
        return 8 + s * 52;
      }
      if (phase < 0.52) {
        const end = (phase - 0.48) / 0.04;
        return 60 - end * 15;
      }
      if (phase < 0.65) return 45;
      if (phase < 0.8) {
        const t = (phase - 0.65) / 0.15;
        return 45 - Math.sin(t * Math.PI) * 11;
      }
      return 45;
    }

    function render() {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Hospital Grid
      ctx.strokeStyle = "#131C2E";
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

      // Live Lead II ECG (Emerald)
      ctx.shadowColor = "#10B981";
      ctx.shadowBlur = 4;
      ctx.strokeStyle = "#10B981";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      const cycleWidth = 110;
      for (let x = 0; x < width; x++) {
        const globalX = x + offset;
        const phase = (globalX % cycleWidth) / cycleWidth;
        const yVal = getEcgY(phase);
        const y = 8 + (yVal / 80) * 65;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      offset += 1.5;
      animationFrameId = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeLead]);

  return (
    <div className="border border-[#1E2638] bg-[#0A0E18] rounded-lg overflow-hidden text-slate-100 shadow-xl">
      {/* Top Clinical Header */}
      <div className="bg-[#0F1424] border-b border-[#1E2638] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800 text-emerald-400 font-semibold text-[11px]">
            <Activity size={12} />
            <span>500Hz TELEMETRY STREAM</span>
          </div>
          <span className="font-bold text-white">ICU Central Station</span>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="text-slate-400 hidden sm:inline">Bed 04 &bull; Comen W3 Patient Monitor</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SignalR Connected (38ms)</span>
        </div>
      </div>

      {/* Main Waveform Screen */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B14]">
        <div className="relative border border-[#162033] bg-[#040710] rounded-md overflow-hidden">
          <div className="absolute top-2 left-3 z-10 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
            <span className="font-bold">{activeLead} (ECG)</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">Filter: Diagnostic (0.05 - 150 Hz)</span>
          </div>

          <div className="absolute top-2 right-3 z-10 flex items-center gap-1.5 text-[10px] font-mono">
            {["Lead I", "Lead II", "Lead III"].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setActiveLead(l)}
                className={`px-2 py-0.5 rounded-sm transition-colors cursor-pointer ${
                  activeLead === l
                    ? "bg-[#1E293B] text-emerald-400 font-semibold"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <canvas
            ref={canvasRef}
            width={600}
            height={115}
            className="w-full h-[115px] block"
          />
        </div>

        {/* Real-time Numeric Vitals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
          <div className="border border-[#182335] bg-[#0E1321] rounded p-2.5">
            <div className="text-[10px] text-slate-400 uppercase flex items-center justify-center gap-1">
              <span>HEART RATE</span>
              <Heart size={10} className="text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 mt-0.5">78</div>
            <div className="text-[10px] text-slate-500">bpm (Normal Sinus)</div>
          </div>

          <div className="border border-[#182335] bg-[#0E1321] rounded p-2.5">
            <div className="text-[10px] text-slate-400 uppercase">SpO2 PULSE</div>
            <div className="text-2xl font-bold text-cyan-400 mt-0.5">98%</div>
            <div className="text-[10px] text-slate-500">Pleth Good</div>
          </div>

          <div className="border border-[#182335] bg-[#0E1321] rounded p-2.5">
            <div className="text-[10px] text-slate-400 uppercase">NIBP (mmHg)</div>
            <div className="text-2xl font-bold text-slate-100 mt-0.5">120/80</div>
            <div className="text-[10px] text-slate-500">MAP 93 (Normal)</div>
          </div>

          <div className="border border-[#182335] bg-[#0E1321] rounded p-2.5">
            <div className="text-[10px] text-slate-400 uppercase">RESP RATE</div>
            <div className="text-2xl font-bold text-blue-400 mt-0.5">16</div>
            <div className="text-[10px] text-slate-500">rpm (Ventilator Sync)</div>
          </div>
        </div>

        {/* Compression & Protocol Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#162033] text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>TCP/IP Sockets &bull; HL7 Protocol Normalization</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Bandwidth Compression: <strong className="text-emerald-400">32x Saved</strong></span>
            <span>Retention: <strong className="text-slate-300">7-Day Purge Service</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IcuDashboardVisual;
