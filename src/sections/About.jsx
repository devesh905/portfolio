import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Award, Terminal } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E56A0] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Background &bull; Who I Am</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight leading-tight">
            About Devesh.
          </h2>
        </div>

        {/* Split Layout: Typographic Identity on Left, Personal Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT: Typographic & Graphic Visual Identity Card (Col 5) */}
          <div className="lg:col-span-5 border border-[#E5E5DE] bg-white rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] relative">

            {/* Monogram & Location Frame */}
            <div className="border border-[#EFEFE8] bg-[#FBFBF9] rounded-lg p-6 text-center space-y-3 relative overflow-hidden">
              <div className="font-mono text-[10px] text-[#787A72] tracking-widest uppercase">
                LOCATION // MEERUT &bull; NCR, INDIA
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
                <span className="text-[#787A72]">Workplace</span>
                <span className="text-[#1E56A0] font-semibold">Subharti Hospital</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#EFEFE8]">
                <span className="text-[#787A72]">Primary Stack</span>
                <span className="font-medium text-[#141413]">C# &bull; .NET 8 &bull; SQL Server</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#EFEFE8]">
                <span className="text-[#787A72]">Education</span>
                <span className="font-medium text-[#141413]">B.Tech in Computer Science</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-[#787A72]">Availability</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Open to Full-Time &amp; Remote
                </span>
              </div>
            </div>

            {/* Direct Connect Prompt */}
            <div className="pt-2 border-t border-[#EFEFE8]">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E56A0] hover:underline"
              >
                <span>Let's talk about an engineering role</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

          {/* RIGHT: Authentic Personal Narrative (Col 7) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#383A35] leading-relaxed font-normal">
            <p>
              Hey, I'm Devesh. I'm a backend and full-stack software engineer based in India. Currently, I build production software for Subharti Hospital, working primarily with C#, ASP.NET Core, SQL Server, and real-time streaming architectures.
            </p>

            <p>
              I got drawn to backend engineering because I love systems where reliability isn't optional. When an ICU monitor streams vitals or an outpatient kiosk issues patient records, you can't afford silent dropped packets, race conditions, or database deadlocks. Turning raw TCP/IP byte streams from bedside hardware into smooth, sub-40ms waveforms on a doctor's screen is what hooked me on real-time software.
            </p>

            <p>
              Working directly in a hospital environment quickly showed me the difference between textbook apps and true production. Hardware monitors unplug, hospital networks jitter, and databases lock up if you don't isolate your scopes. That experience taught me to write simple, defensive, dependable code that just works day in and day out.
            </p>

            <p>
              Outside of work, I experiment with voice AI pipelines (like connecting Asterisk VoIP with Whisper and LLMs) and distributed microservices with RabbitMQ. I'm currently looking for full-time engineering roles where I can join a team building serious backend systems, real-time services, or complex web applications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;