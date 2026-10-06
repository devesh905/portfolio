import { Building2, Cpu, CheckCircle2, ShieldCheck, FileSpreadsheet } from "lucide-react";

function HisSystemVisual() {
  return (
    <div className="border border-[#D5D5CE] bg-white rounded-lg overflow-hidden shadow-sm text-[#141413]">
      
      {/* Top Clinical Header Bar */}
      <div className="bg-[#F5F5EE] border-b border-[#E5E5DE] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#183654] text-white font-semibold text-[11px]">
            <Building2 size={12} />
            <span>SUBHARTI HOSPITAL HIS</span>
          </div>
          <span className="font-bold text-[#141413]">Clinical &amp; Enterprise Portal</span>
          <span className="text-[#9EA098] hidden sm:inline">&bull;</span>
          <span className="text-[#62645D] hidden sm:inline">.NET 8 &bull; EF Core 8 &bull; SQL Server</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-[#2E6B47] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#2E6B47]" />
          <span>Active In-Hospital Deployment</span>
        </div>
      </div>

      {/* Main 3-Column Clinical Modules Representation */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-3.5 bg-[#FDFDFB]">
        
        {/* Module 1: OPD Registration & Kiosk */}
        <div className="border border-[#E5E5DE] bg-white rounded p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[10px] uppercase font-bold text-[#183654]">
              01 &bull; OPD Ingestion
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
              UHID Issued
            </span>
          </div>
          <div>
            <div className="font-bold text-sm text-[#141413]">Patient Self-Kiosk</div>
            <div className="text-xs font-mono text-[#787A72] mt-0.5">UHID: SUB-2026-91823</div>
          </div>
          <div className="text-[11px] text-[#4A4C46] space-y-1 pt-1 border-t border-[#EFEFE8]">
            <div className="flex items-center justify-between">
              <span>Department:</span>
              <strong className="text-[#141413]">General Medicine</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Queue Token:</span>
              <strong className="text-[#141413]">Token #42</strong>
            </div>
            <div className="flex items-center gap-1 text-[#2E6B47] pt-1">
              <CheckCircle2 size={11} />
              <span>Barcode OPD card printed</span>
            </div>
          </div>
        </div>

        {/* Module 2: Hardware Scanner Bridge */}
        <div className="border border-[#E5E5DE] bg-white rounded p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[10px] uppercase font-bold text-[#183654]">
              02 &bull; Hardware Bridge
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200">
              ws://127.0.0.1
            </span>
          </div>
          <div>
            <div className="font-bold text-sm text-[#141413]">HIS.ScannerBridge</div>
            <div className="text-xs font-mono text-[#787A72] mt-0.5">Canon P-208II Flatbed</div>
          </div>
          <div className="text-[11px] text-[#4A4C46] space-y-1 pt-1 border-t border-[#EFEFE8]">
            <div className="flex items-center justify-between">
              <span>Local Loopback:</span>
              <strong className="text-[#141413]">C# WebSocket (8181)</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>AI Ingestion:</span>
              <strong className="text-[#141413]">Prescription OCR</strong>
            </div>
            <div className="flex items-center gap-1 text-[#2E6B47] pt-1">
              <ShieldCheck size={11} />
              <span>Drug interaction safety checked</span>
            </div>
          </div>
        </div>

        {/* Module 3: Pharmacy Stock & Billing */}
        <div className="border border-[#E5E5DE] bg-white rounded p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[10px] uppercase font-bold text-[#183654]">
              03 &bull; Pharmacy &amp; Billing
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold border border-amber-200">
              Live Stock
            </span>
          </div>
          <div>
            <div className="font-bold text-sm text-[#141413]">Campus Stock &amp; Ledger</div>
            <div className="text-xs font-mono text-[#787A72] mt-0.5">Central Dispensary Store</div>
          </div>
          <div className="text-[11px] text-[#4A4C46] space-y-1 pt-1 border-t border-[#EFEFE8]">
            <div className="flex items-center justify-between">
              <span>Stock Query:</span>
              <strong className="text-[#141413]">Real-time availability</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Billing Engine:</span>
              <strong className="text-[#141413]">Receipt #OPD-8821</strong>
            </div>
            <div className="flex items-center gap-1 text-[#2E6B47] pt-1">
              <FileSpreadsheet size={11} />
              <span>Smart lab report auto-linked</span>
            </div>
          </div>
        </div>

      </div>

      {/* Clear Editorial Disclaimer */}
      <div className="bg-[#F5F5EE] border-t border-[#E5E5DE] px-4 py-2 text-[11px] font-mono text-[#787A72] flex flex-wrap items-center justify-between gap-2">
        <span>
          <strong className="text-[#141413]">Project Visual Specification:</strong> Abstract UI overview of the multi-module hospital system deployed across outpatient, hardware scanning, and pharmacy workflows.
        </span>
        <span className="text-[#183654] font-medium">Subharti Hospital Production Deployment</span>
      </div>

    </div>
  );
}

export default HisSystemVisual;
