import { ArrowUpRight } from "lucide-react";
import { LeInviteOpening } from "@/components/ui/le-invite-scroll-to-unwrap";

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#e2dad0] bg-[#f6f4f0] text-[#171412]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-14">

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

        {/* Split Layout: Sticky Spec Sheet Card on Left, Scroll-to-Unwrap 3D Envelope on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT: Engineer Profile Spec Sheet (Col 5, sticky & vertically centered with envelope stage) */}
          <div className="lg:col-span-5 lg:sticky lg:top-[96px] lg:h-[calc(100svh-116px)] lg:min-h-[520px] lg:max-h-[760px] lg:flex lg:items-center">
            <div className="w-full border border-[#e2dad0] bg-white rounded-xl p-6 sm:p-7 space-y-6 shadow-sm">
            <div className="border border-[#d6cebf] bg-[#efe9df] rounded-lg p-5 text-center space-y-2">
              <div className="font-mono text-[10px] text-[#77716e] tracking-widest uppercase font-semibold">
                LOCATION // DELHI NCR, INDIA
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
          </div>

          {/* RIGHT: Interactive Scroll-to-Unwrap 3D Envelope (Col 7) */}
          <div className="lg:col-span-7 min-w-0">
            <LeInviteOpening
              id="about-letter"
              contained={true}
              theme="light"
              fontFamily='"Figtree", "Inter", sans-serif'
              vellumSubtitle="Engineering Where Reliability Is Absolute."
              body={
                <>
                  <p>
                    I build software for moments where reliability isn&rsquo;t a feature&mdash;it&rsquo;s the floor.
                    As a backend-focused full-stack engineer at <strong>Subharti Hospital</strong>, I pair resilient{" "}
                    <strong>ASP.NET Core (.NET 8)</strong> &amp; <strong>SQL Server</strong> architectures with crisp{" "}
                    <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Bootstrap</strong> interfaces.
                  </p>
                  <p>
                    In live ICUs, hardware disconnects without warning. Designing a{" "}
                    <strong>500Hz ECG SignalR stream</strong> with 45% delta compression and{" "}
                    <code>IServiceScopeFactory</code> isolation taught me to treat concurrency, sub-40ms latency, and
                    thread safety as non-negotiable craft.
                  </p>
                  <p>
                    Alongside production engineering, I train frontier AI models with{" "}
                    <strong>99.8% IAA</strong> precision&mdash;because whether it&rsquo;s a patient&rsquo;s heartbeat or a
                    model&rsquo;s reasoning chain, excellence lives in the details.
                  </p>
                </>
              }
              signature="— Devesh Kumar Upadhyay"
              subSignature="Open to .NET / Full-Stack & AI Roles"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
