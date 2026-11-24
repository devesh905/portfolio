import { useState } from "react";
import { ArrowRight, ChevronDown, Info } from "lucide-react";

const flowNodes = [
  {
    id: "device",
    step: "01",
    label: "BEDSIDE MONITORS",
    name: "Mindray & Comen",
    summary: "Hardware monitors",
    responsibility: "Streams raw physiological vital signs continuously over hospital Ethernet via TCP/IP and serial bridges.",
  },
  {
    id: "transport",
    step: "02",
    label: "SOCKET INGESTION",
    name: "TCP/IP Sockets",
    summary: "Persistent listener",
    responsibility: "Maintains low-overhead persistent socket streams without HTTP polling delays or handshake spikes.",
  },
  {
    id: "parser",
    step: "03",
    label: "NORMALIZATION",
    name: "HL7 Parser",
    summary: "Protocol parsing",
    responsibility: "Parses multi-vendor medical packets into standardized clinical observations and structured vitals.",
  },
  {
    id: "core",
    step: "04",
    label: "CORE TELEMETRY",
    name: "Engine & Scopes",
    summary: "Delta & scope guard",
    responsibility: "Compresses vitals 25–45x using delta encoding & GZip, and isolates DbContext scopes using IServiceScopeFactory to eliminate deadlocks.",
  },
  {
    id: "push",
    step: "05",
    label: "LIVE STREAMING",
    name: "SignalR Hub",
    summary: "500Hz WebSockets",
    responsibility: "Streams 500Hz waveform packets to bedside nurse dashboards with sub-40ms latency and automatic reconnection.",
  },
  {
    id: "ui",
    step: "06",
    label: "CLINICAL UI",
    name: "Bedside Monitor",
    summary: "Live vital graphs",
    responsibility: "Renders real-time ECG waveforms via HTML5 Canvas and triggers instant critical threshold alerts for ICU clinicians.",
  },
];

function IcuArchitectureFlow() {
  const [activeNode, setActiveNode] = useState(flowNodes[3]); // Default to Telemetry Core

  return (
    <div className="border border-[#1E2638] bg-[#0A0E18] text-slate-100 rounded-lg p-4 sm:p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1A2234] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="font-bold text-white">TELEMETRY DATA PIPELINE ARCHITECTURE</span>
        </div>
        <span className="text-[11px] text-slate-400">Click any stage to inspect design decision</span>
      </div>

      {/* Horizontal Flow Pipeline on Desktop / Stacked on Mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {flowNodes.map((node) => {
          const isSelected = activeNode.id === node.id;

          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setActiveNode(node)}
              onClick={() => setActiveNode(node)}
              className={`text-left p-3 rounded-md border transition-all duration-200 cursor-pointer relative ${
                isSelected
                  ? "bg-[#141E33] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.25)] ring-1 ring-blue-500"
                  : "bg-[#0E1321] border-[#1C263B] hover:border-blue-400/50 hover:bg-[#12192B]"
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

      {/* Active Node Detail Card */}
      <div className="border border-[#1A2438] bg-[#070B14] rounded-md p-3.5 flex items-start gap-3 text-xs">
        <div className="p-1.5 rounded-sm bg-blue-950/80 border border-blue-800 text-blue-400 shrink-0 mt-0.5">
          <Info size={14} />
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-blue-400 font-bold">
              STAGE {activeNode.step} // {activeNode.name}
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400 text-[11px] uppercase font-mono">{activeNode.label}</span>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {activeNode.responsibility}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IcuArchitectureFlow;
