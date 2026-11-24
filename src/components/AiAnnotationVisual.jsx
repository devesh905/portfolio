import { useState } from "react";
import { 
  Eye, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  SlidersHorizontal, 
  Tag, 
  ShieldCheck, 
  Clock, 
  FileCode,
  Sparkles,
  Maximize2
} from "lucide-react";

function AiAnnotationVisual() {
  const [activeTab, setActiveTab] = useState("vision"); // "vision" | "rlhf"
  const [showBoxes, setShowBoxes] = useState(true);
  const [showMasks, setShowMasks] = useState(true);
  const [showKeypoints, setShowKeypoints] = useState(true);
  const [activeBox, setActiveBox] = useState("box1");

  return (
    <div className="border border-[#1E2638] bg-[#0A0E18] rounded-lg overflow-hidden text-slate-100 shadow-xl">
      {/* Top Header Bar */}
      <div className="bg-[#0F1424] border-b border-[#1E2638] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800 text-emerald-400 font-semibold text-[11px]">
            <Layers size={12} />
            <span>AI TRAINING &amp; DATA LAB</span>
          </div>
          <span className="font-bold text-white">Generalist Expert Workbench</span>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="text-slate-400 hidden sm:inline">Multimodal CV &amp; RLHF Quality Pipeline</span>
        </div>

        {/* View Switcher Tabs (Strict: NO capsule buttons) */}
        <div className="flex items-center bg-[#070B14] p-0.5 rounded-md border border-[#1E2638] text-[11px]">
          <button
            type="button"
            onClick={() => setActiveTab("vision")}
            className={`px-3 py-1 rounded transition-colors font-medium cursor-pointer ${
              activeTab === "vision"
                ? "bg-[#162032] text-emerald-400 font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Image &amp; Video Annotation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("rlhf")}
            className={`px-3 py-1 rounded transition-colors font-medium cursor-pointer ${
              activeTab === "rlhf"
                ? "bg-[#162032] text-blue-400 font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            RLHF &amp; Model Evaluation
          </button>
        </div>
      </div>

      {/* TAB 1: COMPUTER VISION & MULTIMODAL ANNOTATION */}
      {activeTab === "vision" && (
        <div className="p-4 sm:p-5 space-y-4 bg-[#070B14]">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-b border-[#162033] pb-3">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Layer Toggles:</span>
              <button
                type="button"
                onClick={() => setShowBoxes(!showBoxes)}
                className={`px-2 py-1 rounded border text-[10px] transition-colors cursor-pointer ${
                  showBoxes
                    ? "bg-emerald-950/60 border-emerald-700 text-emerald-400 font-bold"
                    : "bg-[#0E1321] border-[#1C263B] text-slate-500"
                }`}
              >
                Bounding Boxes {showBoxes ? "[ON]" : "[OFF]"}
              </button>
              <button
                type="button"
                onClick={() => setShowMasks(!showMasks)}
                className={`px-2 py-1 rounded border text-[10px] transition-colors cursor-pointer ${
                  showMasks
                    ? "bg-blue-950/60 border-blue-700 text-blue-400 font-bold"
                    : "bg-[#0E1321] border-[#1C263B] text-slate-500"
                }`}
              >
                Polygon Masks {showMasks ? "[ON]" : "[OFF]"}
              </button>
              <button
                type="button"
                onClick={() => setShowKeypoints(!showKeypoints)}
                className={`px-2 py-1 rounded border text-[10px] transition-colors cursor-pointer ${
                  showKeypoints
                    ? "bg-purple-950/60 border-purple-700 text-purple-400 font-bold"
                    : "bg-[#0E1321] border-[#1C263B] text-slate-500"
                }`}
              >
                Keypoints {showKeypoints ? "[ON]" : "[OFF]"}
              </button>
            </div>

            <div className="text-[11px] text-slate-400">
              Inter-Annotator Agreement: <strong className="text-emerald-400 font-bold">99.8%</strong>
            </div>
          </div>

          {/* Interactive Annotation Canvas Simulation */}
          <div className="relative h-64 sm:h-72 border border-[#1A2538] rounded-md bg-[#050811] overflow-hidden select-none">
            {/* Background Studio Grid & Video Timeline overlay */}
            <div className="absolute inset-0 bg-grid-studio opacity-40 pointer-events-none" />

            {/* Video Frame Metadata Header */}
            <div className="absolute top-2.5 left-3 z-20 flex items-center gap-2 text-[10px] font-mono bg-[#0A0F1A]/85 backdrop-blur-sm border border-[#1A2538] px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-slate-300 font-semibold">SURGERY_FEED_4K.MP4</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-emerald-400">FPS: 60 &bull; Frame: #04,812 [00:01:20.15]</span>
            </div>

            {/* Bounding Box 1: Telemetry Monitor (Emerald) */}
            {showBoxes && (
              <div
                onClick={() => setActiveBox("box1")}
                className={`absolute top-12 left-8 sm:left-14 w-44 sm:w-56 h-28 sm:h-36 border-2 transition-all cursor-pointer ${
                  activeBox === "box1"
                    ? "border-emerald-400 bg-emerald-500/15 shadow-[0_0_15px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400"
                    : "border-emerald-500/70 bg-emerald-500/5 hover:border-emerald-400"
                }`}
              >
                <div className="absolute -top-5 left-0 bg-emerald-500 text-black text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-t">
                  ICU_Monitor_Display [Conf: 0.99]
                </div>
                {/* Simulated Polygon Mask Layer */}
                {showMasks && (
                  <svg className="w-full h-full opacity-60">
                    <polygon
                      points="4,4 95%,6% 92%,94% 6%,90%"
                      fill="#10B981"
                      fillOpacity="0.25"
                      stroke="#10B981"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </div>
            )}

            {/* Bounding Box 2: Infusion Pump / Device (Blue) */}
            {showBoxes && (
              <div
                onClick={() => setActiveBox("box2")}
                className={`absolute bottom-6 right-8 sm:right-16 w-36 sm:w-48 h-24 sm:h-32 border-2 transition-all cursor-pointer ${
                  activeBox === "box2"
                    ? "border-blue-400 bg-blue-500/15 shadow-[0_0_15px_rgba(59,130,246,0.3)] ring-1 ring-blue-400"
                    : "border-blue-500/70 bg-blue-500/5 hover:border-blue-400"
                }`}
              >
                <div className="absolute -top-5 left-0 bg-blue-500 text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-t">
                  Syringe_Pump_Console [Conf: 0.98]
                </div>
                {showMasks && (
                  <svg className="w-full h-full opacity-60">
                    <polygon
                      points="8%,12% 90%,8% 95%,88% 10%,92%"
                      fill="#3B82F6"
                      fillOpacity="0.25"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </div>
            )}

            {/* Keypoints Visualization */}
            {showKeypoints && (
              <div className="absolute top-20 right-1/2 translate-x-12 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-purple-400 border border-white animate-ping" />
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 border border-white -mt-2.5 shadow-[0_0_10px_#A855F7]" />
                <span className="bg-purple-950/80 border border-purple-700 text-purple-300 font-mono text-[8px] px-1 rounded mt-1">
                  Lead_Placement_Electrode_V1
                </span>
              </div>
            )}

            {/* Temporal Video Scrub Bar */}
            <div className="absolute bottom-2 left-3 right-3 bg-[#0A0F1A]/90 backdrop-blur-sm border border-[#1A2538] px-3 py-1.5 rounded flex items-center justify-between text-[10px] font-mono">
              <div className="flex items-center gap-2">
                <Clock size={11} className="text-slate-400" />
                <span className="text-slate-300">Temporal Action Tag:</span>
                <span className="text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
                  Cardiac_Defibrillator_Calibration [00:01:14 - 00:01:38]
                </span>
              </div>
              <span className="text-slate-400 hidden sm:inline">Rubrics: Tier-1 Exact Match</span>
            </div>
          </div>

          {/* Active Box Inspector Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="border border-[#182335] bg-[#0E1321] rounded p-2.5">
              <span className="text-[10px] text-slate-400 block uppercase">Selected Label</span>
              <strong className="text-white mt-0.5 block">
                {activeBox === "box1" ? "ICU_Monitor_Display" : "Syringe_Pump_Console"}
              </strong>
            </div>

            <div className="border border-[#182335] bg-[#0E1321] rounded p-2.5">
              <span className="text-[10px] text-slate-400 block uppercase">Spatial Attributes</span>
              <span className="text-slate-300 mt-0.5 block">
                Occlusion: 0% &bull; Truncation: 0% &bull; Sub-pixel bbox
              </span>
            </div>

            <div className="border border-[#182335] bg-[#0E1321] rounded p-2.5">
              <span className="text-[10px] text-slate-400 block uppercase">Project Domain</span>
              <span className="text-emerald-400 mt-0.5 block font-semibold">
                Healthcare Computer Vision Dataset
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RLHF & MODEL EVALUATION */}
      {activeTab === "rlhf" && (
        <div className="p-4 sm:p-5 space-y-4 bg-[#070B14]">
          {/* Prompt Header */}
          <div className="border border-[#1A2538] bg-[#0A0F1A] rounded p-3 text-xs font-mono space-y-1">
            <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-[#1A2538] pb-1.5">
              <span className="text-blue-400 font-bold">RLHF PROMPT AUDIT // C# &amp; EF CORE CONCURRENCY</span>
              <span className="text-slate-400">Model Family: Frontier Reasoning LLM</span>
            </div>
            <p className="text-slate-200 text-xs sm:text-sm pt-1">
              "How do I prevent EF Core <code className="text-blue-300 bg-blue-950/80 px-1 py-0.5 rounded">InvalidOperationException</code> when streaming high-frequency SignalR packets from multiple background threads?"
            </p>
          </div>

          {/* Model Response Comparison Grid (Chosen vs Rejected) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Chosen Response (Preferred) */}
            <div className="border border-emerald-500/50 bg-[#081512] rounded p-3.5 space-y-2.5 relative">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-700 font-bold text-[10px]">
                  <CheckCircle2 size={12} />
                  <span>RESPONSE A &bull; CHOSEN (5/5)</span>
                </span>
                <span className="text-emerald-400 text-[11px] font-bold">Zero Hallucination</span>
              </div>

              <div className="text-xs text-slate-200 font-mono space-y-1.5">
                <p className="text-slate-300">
                  Correctly identifies that <code className="text-emerald-300">DbContext</code> is not thread-safe. Recommends injecting <code className="text-emerald-300">IServiceScopeFactory</code>:
                </p>
                <div className="bg-[#040B09] border border-emerald-900/60 p-2 rounded text-[11px] text-emerald-300 font-mono">
                  {`using var scope = _scopeFactory.CreateScope();
var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
await db.Vitals.AddRangeAsync(batch);
await db.SaveChangesAsync();`}
                </div>
              </div>

              <div className="text-[10px] font-mono text-emerald-400 border-t border-emerald-900/50 pt-2 flex items-center justify-between">
                <span>Rubrics: Correct, Safe, Architectural Best-Practice</span>
                <span>Rank #1</span>
              </div>
            </div>

            {/* Rejected Response */}
            <div className="border border-red-500/30 bg-[#160B0E] rounded p-3.5 space-y-2.5 relative">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800 font-bold text-[10px]">
                  <XCircle size={12} />
                  <span>RESPONSE B &bull; REJECTED (1/5)</span>
                </span>
                <span className="text-red-400 text-[11px] font-bold">Dangerous Race Condition</span>
              </div>

              <div className="text-xs text-slate-300 font-mono space-y-1.5">
                <p className="text-slate-400">
                  Hallucinates that wrapping a single singleton DbContext in <code className="text-red-400">lock(_lockObj)</code> is acceptable for 500Hz streaming:
                </p>
                <div className="bg-[#0B0406] border border-red-950 p-2 rounded text-[11px] text-red-300/80 font-mono line-through">
                  {`// CRITICAL FLAW: Bottlenecks throughput and causes connection pool exhaustion under 500Hz load`}
                </div>
                <p className="text-[11px] text-red-300">
                  Critique: Causes thread contention, blocks UI thread, and violates enterprise DI scoping.
                </p>
              </div>

              <div className="text-[10px] font-mono text-red-400 border-t border-red-950 pt-2 flex items-center justify-between">
                <span>Annotator Evaluation: Severe Architectural Flaw</span>
                <span>Rank #2</span>
              </div>
            </div>
          </div>

          {/* Model Training Summary Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#162033] text-[11px] font-mono text-slate-400">
            <span>Specializations: C# / .NET, SQL Server, Python, STEM Logic, Medical Protocols</span>
            <span className="text-emerald-400 font-semibold">Ready for Frontier Model Fine-Tuning</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AiAnnotationVisual;
