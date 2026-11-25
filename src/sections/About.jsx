import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#e2dad0] bg-[#f6f4f0] text-[#171412]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">

        {/* Section Header */}
        <div className="max-w-4xl space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#171412] tracking-tight leading-[1.08]">
            About{" "}
            <span className="text-[#ff4829]">
              Devesh Kumar Upadhyay.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#57534e] leading-relaxed font-normal max-w-3xl">
            A backend-focused full-stack developer bridging medical hardware, modern web UIs, and frontier AI.
          </p>
        </div>

        {/* Split Layout: Engineer Spec Sheet on Left, Human Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 lg:items-center">

          {/* LEFT: Engineer Profile Spec Sheet (Col 5) */}
          <div className="lg:col-span-5 border border-[#e2dad0] bg-white rounded-xl p-6 sm:p-7 space-y-6 shadow-sm relative">
            <div className="border border-[#d6cebf] bg-[#efe9df] rounded-lg p-5 text-center space-y-2">
              <div className="font-mono text-[10px] text-[#77716e] tracking-widest uppercase font-semibold">
                LOCATION // MEERUT &bull; NCR, INDIA
              </div>
              <div className="text-xl font-black font-display text-[#171412] tracking-tight">
                Devesh Kumar Upadhyay
              </div>
              <div className="font-mono text-xs text-[#ff4829] font-bold">
                Backend-Focused Full-Stack &bull; Telemetry &bull; AI
              </div>
            </div>

            {/* Spec Sheet Table */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between py-2 border-b border-[#e2dad0]">
                <span className="text-[#77716e]">Current Role</span>
                <span className="font-bold text-[#171412]">Jr. Software Developer (Full-Stack)</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#e2dad0]">
                <span className="text-[#77716e]">Organization</span>
                <span className="text-[#ff4829] font-bold">Subharti Hospital</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#e2dad0]">
                <span className="text-[#77716e]">Core Stack</span>
                <span className="font-semibold text-[#171412]">.NET 8 &bull; SQL Server &bull; React &bull; Next.js</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#e2dad0]">
                <span className="text-[#77716e]">AI Specialization</span>
                <span className="font-semibold text-[#ff4829]">Multimodal Annotation &bull; RLHF</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#e2dad0]">
                <span className="text-[#77716e]">Education</span>
                <span className="font-semibold text-[#171412]">B.Tech in CSE (OGPA 8.09)</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-[#77716e]">Availability</span>
                <span className="text-[#ff4829] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff4829] animate-pulse" />
                  Full-Time, Remote &amp; Contracts
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#e2dad0]">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff4829] hover:text-[#e03a1d] transition-colors"
              >
                <span>Initiate technical discussion</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* RIGHT: Authentic Narrative (Col 7) */}
          <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-[#57534e] leading-relaxed font-normal">
            <p>
              I am a backend-focused full-stack engineer based in Meerut / NCR, India. At <strong className="text-[#171412] font-bold">Subharti Hospital</strong>, I build end-to-end production systems—pairing resilient <strong className="text-[#171412] font-bold">ASP.NET Core (.NET 8) &amp; SQL Server</strong> architectures with responsive web interfaces in <strong className="text-[#171412] font-bold">React.js, Next.js, and Bootstrap</strong>.
            </p>

            <p>
              Hospital wards leave zero margin for brittle code. Engineering a <strong className="text-[#171412] font-bold">500Hz live ECG waveform stream</strong> over SignalR with custom delta compression and <code className="text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-1 py-0.5 rounded font-mono text-xs font-semibold">IServiceScopeFactory</code> scope isolation taught me to prioritize thread safety and sub-40ms latency.
            </p>

            <p>
              Alongside software engineering, I work as an <strong className="text-[#171412] font-bold">AI Model Trainer &amp; Multimodal Data Specialist</strong> (99.8% IAA across bounding boxes, polygon segmentation, and RLHF audits), and I am open to <strong className="text-[#171412] font-bold">full-time backend-focused or full-stack roles (.NET / C# / React / Next.js)</strong> and AI training contracts.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
