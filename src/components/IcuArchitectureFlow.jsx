import { useState } from "react";
import { ArrowRight, ChevronDown, Info } from "lucide-react";

const flowNodes = [
  {
    id: "device",
    step: "01",
    label: "BEDSIDE MONITORS",
    name: "Mindray & Comen",
    summary: "Hardware monitors",
    responsibility: "Streams raw physiological vital signs continuously over hospital Ethernet.",
  },
  {
    id: "transport",
    step: "02",
    label: "SOCKET INGESTION",
    name: "TCP/IP Sockets",
    summary: "Persistent listener",
    responsibility: "Maintains low-overhead socket streams without HTTP polling delays.",
  },
  {
    id: "parser",
    step: "03",
    label: "NORMALIZATION",
    name: "HL7 Parser",
    summary: "Protocol parsing",
    responsibility: "Parses vendor medical packets into standardized clinical observations.",
  },
  {
    id: "core",
    step: "04",
    label: "CORE TELEMETRY",
    name: "Engine & Scopes",
    summary: "Delta & scope guard",
    responsibility: "Compresses vitals 25–45x and isolates DbContext scopes using IServiceScopeFactory to eliminate deadlocks.",
  },
  {
    id: "push",
    step: "05",
    label: "LIVE STREAMING",
    name: "SignalR Hub",
    summary: "500Hz WebSockets",
    responsibility: "Streams 500Hz waveform packets to bedside nurse dashboards with sub-40ms latency.",
  },
  {
    id: "ui",
    step: "06",
    label: "CLINICAL UI",
    name: "Bedside Monitor",
    summary: "Live vital graphs",
    responsibility: "Renders real-time ECG waveforms and triggers critical vital threshold alerts.",
  },
];

function IcuArchitectureFlow() {
  const [activeNode, setActiveNode] = useState(flowNodes[3]); // Default to Telemetry Core

  return (
    <div className="border border-[#2F1F5E] bg-[#0E0722] text-white rounded-lg p-4 sm:p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#25184F] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#6f4fcc]" />
          <span className="font-bold text-white">TELEMETRY DATA PIPELINE</span>
        </div>
        <span className="text-[11px] text-[#C4B5FD]">Click or hover any node to inspect</span>
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
                  ? "bg-[#25184F] border-[#6f4fcc] shadow-[0_0_15px_rgba(111,79,204,0.35)] ring-1 ring-[#6f4fcc]"
                  : "bg-[#150E30] border-[#2E1E57] hover:border-[#6f4fcc] hover:bg-[#1C123D]"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className={isSelected ? "text-[#C4B5FD] font-bold" : "text-[#8C7DAE]"}>
                  {node.step}
                </span>
                <span className="text-[9px] text-[#C4B5FD] uppercase tracking-wider truncate max-w-[80px]">
                  {node.label}
                </span>
              </div>
              <div className="font-bold text-xs text-white truncate">
                {node.name}
              </div>
              <div className="text-[10px] text-[#C4B5FD] truncate mt-0.5">
                {node.summary}
              </div>
            </button>
          );
        })}
      </div>

      {/* Node Responsibility Dynamic Card */}
      <div className="bg-[#160E33] border border-[#2F1F5E] rounded-md p-3.5 flex items-start gap-3 text-xs">
        <div className="p-1.5 rounded bg-[#25184F] border border-[#523396] text-[#C4B5FD] shrink-0 mt-0.5">
          <Info size={14} />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-[#C4B5FD] font-bold">
              NODE {activeNode.step} // {activeNode.name}
            </span>
            <span className="text-[#523396]">&bull;</span>
            <span className="text-[#A78BFA] text-[11px] uppercase font-mono">{activeNode.label}</span>
          </div>
          <p className="text-white text-xs sm:text-sm leading-relaxed font-normal">
            {activeNode.responsibility}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IcuArchitectureFlow;
