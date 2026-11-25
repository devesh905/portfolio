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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

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
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#57534e] leading-relaxed font-normal">
            <p>
              I am a backend-focused full-stack software engineer based in Meerut / NCR, India. While my core specialization is resilient server-side architecture, I also build responsive, modern web interfaces using <strong className="text-[#171412] font-bold">React.js, Next.js, Bootstrap, HTML/CSS, and JavaScript</strong>. At <strong className="text-[#171412] font-bold">Subharti Hospital</strong>, I develop end-to-end production systems where clinical web dashboards interface directly with bedside medical monitors.
            </p>

            <p>
              Hospital wards are the ultimate test for backend reliability: hardware disconnects unexpectedly, Ethernet networks experience jitter, and parallel data feeds can deadlock relational databases if service scopes are not strictly isolated. Engineering a <strong className="text-[#171412] font-bold">500Hz live ECG waveform stream</strong> using SignalR with custom delta compression taught me to prioritize defensive design, thread safety (<code className="text-[#171412] bg-[#efe9df] border border-[#d6cebf] px-1 py-0.5 rounded font-mono text-xs font-semibold">IServiceScopeFactory</code>), and sub-40ms latency over textbook assumptions.
            </p>

            <p>
              In parallel with full-stack engineering, I work as a <strong className="text-[#171412] font-bold">Generalist AI Specialist &amp; Model Trainer</strong>. I annotate complex multimodal datasets (2D/3D bounding boxes, polygon semantic segmentation, keypoints, and temporal video action tags) with a 99.8% Inter-Annotator Agreement. I also conduct rigorous RLHF evaluations—curating SFT prompts, ranking response pairs, and auditing AI code generation and STEM logic to eliminate hallucinations.
            </p>

            <p>
              I am actively seeking <strong className="text-[#171412] font-bold">full-time backend-focused or full-stack engineering roles (.NET / C# / React / Next.js)</strong>, real-time distributed systems positions, or technical AI training contracts where engineering precision and high data quality are paramount.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
