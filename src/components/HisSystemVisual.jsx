import { Building2, Cpu, CheckCircle2, ShieldCheck, Printer, FileText } from "lucide-react";

function HisSystemVisual() {
  return (
    <div className="border border-[#1E2638] bg-[#0A0E18] rounded-lg overflow-hidden text-slate-100 shadow-xl">
      {/* Top Clinical Header Bar */}
      <div className="bg-[#0F1424] border-b border-[#1E2638] px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800 text-blue-400 font-semibold text-[11px]">
            <Building2 size={12} />
            <span>SUBHARTI HOSPITAL EHR</span>
          </div>
          <span className="font-bold text-white">Clinical &amp; Enterprise Services</span>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="text-slate-400 hidden sm:inline">.NET 8 &bull; EF Core 8 &bull; SQL Server</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Active In-Hospital Deployment</span>
        </div>
      </div>

      {/* Main 3-Column Clinical Modules Representation */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-3.5 bg-[#070B14]">
        
        {/* Module 1: OPD Registration & Kiosk */}
        <div className="border border-[#182335] bg-[#0E1321] rounded p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[10px] uppercase font-bold text-blue-400">
              01 &bull; OPD Ingestion
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 font-semibold border border-emerald-800">
              UHID Issued
            </span>
          </div>
          <div>
            <div className="font-bold text-sm text-white">Patient Self-Kiosk</div>
            <div className="text-xs font-mono text-slate-400 mt-0.5">UHID: SUB-2026-91823</div>
          </div>
          <div className="text-[11px] text-slate-300 space-y-1.5 pt-1.5 border-t border-[#1C263B]">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Department:</span>
              <strong className="text-white">General Medicine</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Queue Token:</span>
              <strong className="text-white">Token #42</strong>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 pt-1">
              <Printer size={12} />
              <span>Thermal barcode OPD card printed</span>
            </div>
          </div>
        </div>

        {/* Module 2: Hardware Scanner Bridge */}
        <div className="border border-[#182335] bg-[#0E1321] rounded p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[10px] uppercase font-bold text-blue-400">
              02 &bull; Hardware Bridge
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950/60 text-blue-400 font-semibold border border-blue-800">
              ws://127.0.0.1:8181
            </span>
          </div>
          <div>
            <div className="font-bold text-sm text-white">HIS.ScannerBridge</div>
            <div className="text-xs font-mono text-slate-400 mt-0.5">Canon Flatbed Scanner</div>
          </div>
          <div className="text-[11px] text-slate-300 space-y-1.5 pt-1.5 border-t border-[#1C263B]">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Local Loopback:</span>
              <strong className="text-white">C# WebSocket Service</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Digitization:</span>
              <strong className="text-white">Prescription OCR Sync</strong>
            </div>
            <div className="flex items-center gap-1.5 text-blue-400 pt-1">
              <FileText size={12} />
              <span>Direct streaming into web EHR</span>
            </div>
          </div>
        </div>

        {/* Module 3: Pharmacy Stock & Billing */}
        <div className="border border-[#182335] bg-[#0E1321] rounded p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[10px] uppercase font-bold text-blue-400">
              03 &bull; Campus Pharmacy
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-400 font-semibold border border-cyan-800">
              Live Inventory
            </span>
          </div>
          <div>
            <div className="font-bold text-sm text-white">Stock &amp; Billing Ledger</div>
            <div className="text-xs font-mono text-slate-400 mt-0.5">Store A &bull; Central Dispensary</div>
          </div>
          <div className="text-[11px] text-slate-300 space-y-1.5 pt-1.5 border-t border-[#1C263B]">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Batch Lookup:</span>
              <strong className="text-white">Paracetamol 650 (Batch 99)</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Billing Engine:</span>
              <strong className="text-white">Automated Tax &amp; Discount</strong>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 pt-1">
              <CheckCircle2 size={12} />
              <span>Synchronized with doctor prescription</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HisSystemVisual;
