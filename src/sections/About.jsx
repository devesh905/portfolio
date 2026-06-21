import { motion } from "framer-motion";
import {
  SiDotnet,
  SiSharp,
  SiReact,
  SiMysql,
  SiDocker,
  SiJavascript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Backend & Real-Time",
    skills: [
      { name: "ASP.NET Core", icon: SiDotnet, style: "hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5" },
      { name: "C#", icon: SiSharp, style: "hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5" },
      { name: "EF Core", icon: SiDotnet, style: "hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/5" },
      { name: "SignalR", icon: TbApi, style: "hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5" },
    ],
  },
  {
    title: "Databases & Protocols",
    skills: [
      { name: "SQL Server", icon: SiMysql, style: "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5" },
      { name: "HL7 Protocol", icon: TbApi, style: "hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5" },
    ],
  },
  {
    title: "Frontend & Styling",
    skills: [
      { name: "React", icon: SiReact, style: "hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5" },
      { name: "JavaScript", icon: SiJavascript, style: "hover:text-yellow-400 hover:border-yellow-500/30 hover:bg-yellow-500/5" },
      { name: "Tailwind CSS", icon: SiTailwindcss, style: "hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/5" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker, style: "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5" },
      { name: "Git", icon: SiGit, style: "hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/5" },
    ],
  },
];

const timeline = [
  {
    year: "2024 — Present",
    title: "Junior Software Developer",
    institution: "Subharti Hospital",
    description:
      "Leading real-time healthcare systems development. Integrated medical telemetry devices streaming critical ICU ECG waveforms using SignalR, and built an automated AI-driven voice assistant for procurement integrated with hospital phone systems.",
  },
  {
    year: "2024",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Graduation",
    description:
      "Fostered deep knowledge of data structures, database optimization, algorithms, and distributed systems architecture.",
  },
];

function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
        >
          About Me
        </motion.h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed"
        >
          <p>
            I'm a backend-focused developer who enjoys writing software where reliability actually matters.
            In my work with healthcare systems, a missing packet or microsecond delay can disrupt an ICU telemetry stream. 
            I bridge the gap between medical hardware and clinician interfaces, streaming live diagnostics at high frequencies.
          </p>
          <p>
            My engineering philosophy centers around performance tuning, writing cleaner concurrency code, and leveraging AI 
            to simplify operational overhead—such as integrating speech recognition models (STT/TTS) into VoIP networks 
            to streamline staff workflows.
          </p>
        </motion.div>

        {/* Dynamic metrics card to catch recruiter eyes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="glass-panel rounded-2xl p-6 border border-slate-800/80 flex flex-col gap-6"
        >
          <h4 className="text-sm font-semibold tracking-wider uppercase text-cyan-400 font-mono">
            Fast Metrics
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/40 border border-slate-800/40 p-4 rounded-xl text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-white">2+</span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Years Exp</span>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/40 p-4 rounded-xl text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-cyan-400">45x</span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Data Comp</span>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/40 p-4 rounded-xl text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-white">500Hz</span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Signal Sync</span>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/40 p-4 rounded-xl text-center">
              <span className="block text-2xl md:text-3xl font-extrabold text-cyan-400">100%</span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">API Uptime</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience & Education Timeline */}
      <div className="mb-24">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-10 text-center">
          Work History &amp; Education
        </h3>
        
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8">
          {/* Timeline center line */}
          <div className="absolute left-[7px] sm:left-[8px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />
          
          <div className="flex flex-col gap-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline node */}
                <span className="absolute -left-[24px] sm:-left-[26px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                
                {/* Content glass card */}
                <div className="glass-panel rounded-2xl p-6 border border-slate-800/60 hover:border-cyan-400/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 mb-3">
                    <div>
                      <h4 className="text-white text-lg font-bold font-sans">
                        {item.title}
                      </h4>
                      <p className="text-cyan-400/90 text-sm font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <span className="inline-flex self-start sm:self-auto px-2.5 py-1 rounded-md text-[10px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 uppercase tracking-wider">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-slate-350 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Skills section */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-10 text-center">
          Skills &amp; Toolkit
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-panel rounded-2xl p-6 border border-slate-800/60"
            >
              <h4 className="text-white text-base font-bold font-sans mb-4 pb-2 border-b border-slate-800/80 tracking-wide">
                {category.title}
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-3 bg-slate-900/35 border border-slate-800/40 rounded-xl px-3.5 py-2.5 transition-all duration-300 font-sans ${skill.style}`}
                    >
                      <Icon size={18} className="transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                      <span className="text-slate-350 text-xs font-semibold">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;