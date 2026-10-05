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
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { TbApi, TbBrandSpeedtest } from "react-icons/tb";
import { User, Award, CheckCircle, Code2, Briefcase, GraduationCap } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Distributed Core",
    description: "Architecting high-throughput microservices & real-time protocols",
    skills: [
      { name: "ASP.NET Core", icon: SiDotnet, style: "hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-950/20" },
      { name: "C#", icon: SiSharp, style: "hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-950/20" },
      { name: "EF Core", icon: SiDotnet, style: "hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-950/20" },
      { name: "SignalR & WebSockets", icon: TbApi, style: "hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20" },
      { name: "Python", icon: SiPython, style: "hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-950/20" },
    ],
  },
  {
    title: "Real-Time Hardware & Telemetry",
    description: "Low-latency data streaming & protocol engineering",
    skills: [
      { name: "HL7 Protocol", icon: TbApi, style: "hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-950/20" },
      { name: "TCP/IP Sockets", icon: TbBrandSpeedtest, style: "hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20" },
      { name: "500Hz Stream Parsing", icon: TbApi, style: "hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-950/20" },
      { name: "Delta Compression", icon: TbBrandSpeedtest, style: "hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-950/20" },
    ],
  },
  {
    title: "Frontend & Web Engineering",
    description: "Interactive client portals & high-speed dashboards",
    skills: [
      { name: "React", icon: SiReact, style: "hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-950/20" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, style: "hover:text-yellow-400 hover:border-yellow-500/40 hover:bg-yellow-950/20" },
      { name: "Tailwind CSS", icon: SiTailwindcss, style: "hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-950/20" },
      { name: "REST API Integration", icon: TbApi, style: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-950/20" },
    ],
  },
  {
    title: "Databases & DevOps Toolkit",
    description: "Data integrity, containerization & deployment pipelines",
    skills: [
      { name: "SQL Server", icon: SiMysql, style: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-950/20" },
      { name: "Docker", icon: SiDocker, style: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-950/20" },
      { name: "Git & GitHub", icon: SiGit, style: "hover:text-orange-400 hover:border-orange-500/40 hover:bg-orange-950/20" },
      { name: "Linux / Server Admin", icon: SiDocker, style: "hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-950/20" },
    ],
  },
];

const timeline = [
  {
    year: "2024 — Present",
    title: "Junior Software Developer",
    institution: "Subharti Hospital",
    type: "Work Experience",
    icon: Briefcase,
    description:
      "Spearheaded real-time healthcare systems development. Integrated intensive care medical telemetry streaming high-frequency ECG waveforms with custom delta compression via SignalR, and built an automated AI-driven voice assistant (Whisper/LLaMA/Asterisk PBX) for hospital procurement workflows.",
  },
  {
    year: "2024",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Graduation",
    type: "Education",
    icon: GraduationCap,
    description:
      "Graduated with distinction in core Computer Science, specializing in distributed systems, advanced data structures, concurrency, and database management systems.",
  },
];

function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-24 max-w-6xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <User size={14} />
          <span>Professional Background</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Engineering With <span className="gradient-text-cyan">Precision &amp; Purpose</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          A software engineer who loves solving high-concurrency, latency-critical challenges and building 
          digital products that delight clients.
        </motion.p>
      </div>

      {/* Main Philosophy & Quick Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr] gap-8 sm:gap-12 items-start mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Bridging Hardware, Real-Time Streams, and User Experience
          </h3>
          <p>
            I am a developer driven by reliability and performance. In my work with mission-critical 
            healthcare systems, a dropped packet or a fraction-of-a-second lag directly impairs 
            clinical patient monitoring. I specialize in making hardware telemetry, HL7 messages, 
            and web dashboards talk to each other effortlessly at <span className="text-white font-semibold">500Hz</span>.
          </p>
          <p>
            When partnering with businesses and clients, I apply this same level of engineering rigor: 
            clean modular code, robust database architectures, and intuitive modern web interfaces 
            that turn visitors into paying customers.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-cyan-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={15} /> Clean Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={15} /> Test-Driven Quality
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={15} /> Transparent Communication
            </span>
          </div>
        </motion.div>

        {/* Dynamic metrics card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/20 flex flex-col justify-between gap-6 bg-gradient-to-br from-cyan-950/20 to-slate-900/60"
        >
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h4 className="text-xs font-bold tracking-wider uppercase text-cyan-400 font-mono">
              Key Engineering Stats
            </h4>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-white/5 p-4 rounded-2xl text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white">2+</span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-4 rounded-2xl text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-300">45x</span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Data Compression</span>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-4 rounded-2xl text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white">500Hz</span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Telemetry Sync</span>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-4 rounded-2xl text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</span>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Production Uptime</span>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full text-center py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-white transition-all duration-200"
          >
            Hire Devesh For Your Next Project →
          </a>
        </motion.div>
      </div>

      {/* Experience & Education Timeline */}
      <div className="mb-24">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
          Work History &amp; Education
        </h3>
        
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8">
          {/* Timeline center line */}
          <div className="absolute left-[7px] sm:left-[8px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />
          
          <div className="flex flex-col gap-10">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline node */}
                  <span className="absolute -left-[24px] sm:-left-[26px] top-2 w-3.5 h-3.5 rounded-full bg-[#050811] border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                  
                  {/* Content glass card */}
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={16} className="text-cyan-400" />
                          <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                            {item.type}
                          </span>
                        </div>
                        <h4 className="text-white text-lg sm:text-xl font-bold font-sans">
                          {item.title}
                        </h4>
                        <p className="text-cyan-300/90 text-sm font-medium">
                          {item.institution}
                        </p>
                      </div>
                      <span className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 uppercase tracking-wider">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Categorized Skills Toolkit */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
          Skills &amp; Engineering Toolkit
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col mb-4 pb-3 border-b border-white/5">
                  <h4 className="text-white text-lg font-bold">
                    {category.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-2.5 bg-white/[0.03] border border-white/5 rounded-xl px-3.5 py-2.5 transition-all duration-200 ${skill.style}`}
                      >
                        <Icon size={18} className="flex-shrink-0" />
                        <span className="text-slate-300 text-xs font-semibold truncate">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;