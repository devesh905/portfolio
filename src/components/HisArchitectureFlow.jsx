import { useState } from "react";
import { Info } from "lucide-react";

const hisNodes = [
  {
    id: "kiosk",
    step: "01",
    label: "PATIENT CHECK-IN",
    name: "OPD Self-Kiosk",
    summary: "UHID Issuance",
    responsibility: "Validates patient info, assigns a unique UHID, and prints barcode appointment cards.",
  },
  {
    id: "bridge",
    step: "02",
    label: "HARDWARE BRIDGE",
    name: "HIS.ScannerBridge",
    summary: "C# WebSocket (8181)",
    responsibility: "Local C# loopback service streaming scanned prescriptions directly to web EHR for OCR digitization.",
  },
  {
    id: "core",
    step: "03",
    label: "BACKEND API",
    name: ".NET 8 Web API",
    summary: "EF Core 8 & SQL",
    responsibility: "Handles clinician appointment rosters, secure JWT auth, and SQL Server transactions.",
  },
  {
    id: "ops",
    step: "04",
    label: "PHARMACY & BILLING",
    name: "Stock & Ledger",
    summary: "Live Stock & Billing",
    responsibility: "Verifies campus pharmacy medicine stock in real time and computes automated billing.",
  },
];

function HisArchitectureFlow() {
  const [activeNode, setActiveNode] = useState(hisNodes[1]); // Default to ScannerBridge

  return (
    <div className="border border-[#E5E5DE] bg-[#F7F7F4] text-[#141413] rounded-lg p-4 sm:p-5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5E5DE] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#183654]" />
          <span className="font-bold text-[#141413]">HOSPITAL SYSTEM PIPELINE</span>
        </div>
        <span className="text-[11px] text-[#787A72]">Click or hover any module to inspect</span>
      </div>

      {/* Horizontal Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {hisNodes.map((node) => {
          const isSelected = activeNode.id === node.id;

          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setActiveNode(node)}
              onClick={() => setActiveNode(node)}
              className={`text-left p-3 rounded border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-white border-[#183654] shadow-sm ring-1 ring-[#183654]"
                  : "bg-white/80 border-[#E5E5DE] hover:border-[#C8C8BE] hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className={isSelected ? "text-[#183654] font-bold" : "text-[#787A72]"}>
                  {node.step}
                </span>
                <span className="text-[9px] text-[#787A72] uppercase tracking-wider truncate">
                  {node.label}
                </span>
              </div>
              <div className="font-bold text-xs text-[#141413] truncate">
                {node.name}
              </div>
              <div className="text-[10px] text-[#62645D] truncate mt-0.5 font-mono">
                {node.summary}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card */}
      <div className="bg-white border border-[#E5E5DE] rounded-md p-3.5 flex items-start gap-3 text-xs">
        <div className="p-1.5 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E56A0] shrink-0 mt-0.5">
          <Info size={14} />
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-[#183654] font-bold">
              MODULE {activeNode.step} // {activeNode.name}
            </span>
            <span className="text-[#C8C8BE]">&bull;</span>
            <span className="text-[#787A72] text-[11px] uppercase font-mono">{activeNode.label}</span>
          </div>
          <p className="text-[#383A35] text-xs sm:text-sm leading-relaxed">
            {activeNode.responsibility}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HisArchitectureFlow;
