import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Award, Terminal } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E56A0] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Identity &bull; Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight leading-tight">
            About Devesh.
          </h2>
        </div>

        {/* Split Layout: Typographic Identity on Left, Personal Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Typographic & Graphic Visual Identity Card (Col 5) */}
          <div className="lg:col-span-5 border border-[#E5E5DE] bg-white rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] relative">
            
            {/* Monogram & Coordinates Frame */}
            <div className="border border-[#EFEFE8] bg-[#FBFBF9] rounded-lg p-6 text-center space-y-3 relative overflow-hidden">
              <div className="font-mono text-[10px] text-[#9EA098] tracking-widest uppercase">
                COORDINATES: 28.9845&deg; N, 77.7064&deg; E
              </div>

              <div className="text-6xl sm:text-7xl font-bold font-mono tracking-tighter text-[#183654]">
                DKU
              </div>

              <div className="font-mono text-xs text-[#1E56A0] font-semibold uppercase tracking-wider">
                Devesh Kumar Upadhyay
              </div>
            </div>

            {/* Engineer Profile Spec Sheet */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between py-2 border-b border-[#EFEFE8]">
                <span className="text-[#787A72]">Current Role</span>
                <span className="font-bold text-[#141413]">Jr. Software Developer</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#EFEFE8]">
                <span className="text-[#787A72]">Organization</span>
                <span className="text-[#1E56A0] font-semibold">Subharti Hospital</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#EFEFE8]">
                <span className="text-[#787A72]">Primary Stack</span>
                <span className="font-medium text-[#141413]">C# &bull; .NET 8 &bull; SQL Server</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#EFEFE8]">
                <span className="text-[#787A72]">Degree</span>
                <span className="font-medium text-[#141413]">B.Tech CSE (OGPA 8.09)</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-[#787A72]">Status</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Available for Remote Roles
                </span>
              </div>
            </div>

            {/* Direct Connect Prompt */}
            <div className="pt-2 border-t border-[#EFEFE8]">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E56A0] hover:underline"
              >
                <span>Discuss an engineering opportunity</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

          {/* RIGHT: Authentic Personal Narrative (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#383A35] leading-relaxed font-normal">
            <p>
              I'm a backend and full-stack software engineer based in India, currently writing production software at Subharti Hospital. Most of my daily work centers around C#, ASP.NET Core, SQL Server, and real-time streaming architectures.
            </p>

            <p>
              I became drawn to backend systems because there is nowhere to hide. When hundreds of devices or hospital departments push data every second, you have to think carefully about memory lifetimes, socket buffering, and thread safety from day one. Seeing raw byte streams from medical devices transform into clean, synchronized clinician waveforms in under 40 milliseconds is what made me fall in love with real-time software.
            </p>

            <p>
              Working directly with medical hardware and hospital workflows taught me how different real-world production is from building toy apps. Physical devices disconnect unexpectedly, networks drop packets, and databases lock up if you don't isolate your contexts. Building through those challenges made me care deeply about writing simple, dependable code that just works.
            </p>

            <p>
              I'm currently looking for full-time engineering roles where I can join a team building serious backend systems, real-time services, or complex web applications. Whether that involves distributed systems, API architecture, or low-latency data pipelines, I want to be where technical rigor and code quality matter.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;