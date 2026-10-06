import { useState } from "react";
import { ArrowRight, ChevronDown, Info } from "lucide-react";

const flowNodes = [
  {
    id: "device",
    step: "01",
    label: "BEDSIDE DEVICE",
    name: "Mindray / Comen",
    summary: "Continuous ICU hardware",
    responsibility: "Streams high-frequency physiological vital signs directly from intensive care patients over hospital Ethernet.",
  },
  {
    id: "transport",
    step: "02",
    label: "SOCKET LAYER",
    name: "TCP/IP Sockets",
    summary: "Raw socket listener",
    responsibility: "Maintains persistent, low-overhead socket connections without HTTP polling delays.",
  },
  {
    id: "parser",
    step: "03",
    label: "DATA PROTOCOL",
    name: "HL7 Parser",
    summary: "Packet normalization",
    responsibility: "Normalizes incoming vendor-specific medical packets into uniform application-level clinical observations.",
  },
  {
    id: "core",
    step: "04",
    label: "ENGINEERING CORE",
    name: "Telemetry Engine",
    summary: "Delta & Scope Guard",
    responsibility: "Applies custom 25–45x delta compression and isolates DbContext lifecycles using IServiceScopeFactory to prevent thread locks.",
  },
  {
    id: "push",
    step: "05",
    label: "REAL-TIME STREAM",
    name: "SignalR Hub",
    summary: "500Hz WebSockets",
    responsibility: "Pushes synchronized 500Hz waveform packets to connected clinician interfaces with <40ms transit latency.",
  },
  {
    id: "ui",
    step: "06",
    label: "CLIENT PANEL",
    name: "ICU Dashboard",
    summary: "Bedside visualizer",
    responsibility: "Renders smooth Lead II ECG, SpO2 Pleth traces, and instant vital sign threshold notifications.",
  },
];

function IcuArchitectureFlow() {
  const [activeNode, setActiveNode] = useState(flowNodes[3]); // Default to Telemetry Core

  return (
    <div className="border border-[#232B3A] bg-[#0E121A] text-white rounded-lg p-4 sm:p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E2738] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1E56A0]" />
          <span className="font-bold text-slate-200">INTERACTIVE TELEMETRY PIPELINE</span>
        </div>
        <span className="text-[11px] text-slate-400">Hover any node to inspect engineering responsibility</span>
      </div>

      {/* Horizontal Flow Pipeline on Desktop / Stacked on Mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {flowNodes.map((node, idx) => {
          const isSelected = activeNode.id === node.id;

          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setActiveNode(node)}
              onClick={() => setActiveNode(node)}
              className={`text-left p-3 rounded border transition-all duration-200 cursor-pointer relative ${
                isSelected
                  ? "bg-[#162030] border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.15)] ring-1 ring-[#3B82F6]"
                  : "bg-[#111722] border-[#1E2738] hover:border-[#2D3B52] hover:bg-[#141C2A]"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className={isSelected ? "text-blue-400 font-bold" : "text-slate-500"}>
                  {node.step}
                </span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider truncate max-w-[80px]">
                  {node.label}
                </span>
              </div>
              <div className="font-bold text-xs text-white truncate">
                {node.name}
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                {node.summary}
              </div>
            </button>
          );
        })}
      </div>

      {/* Node Responsibility Dynamic Card */}
      <div className="bg-[#121824] border border-[#1E2738] rounded-md p-3.5 flex items-start gap-3 text-xs">
        <div className="p-1.5 rounded bg-blue-950/80 border border-blue-800 text-blue-400 shrink-0 mt-0.5">
          <Info size={14} />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-blue-400 font-bold">
              NODE {activeNode.step} // {activeNode.name}
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400 text-[11px] uppercase font-mono">{activeNode.label}</span>
          </div>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
            {activeNode.responsibility}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IcuArchitectureFlow;
