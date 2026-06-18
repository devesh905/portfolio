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

const skills = [
  { name: "ASP.NET Core", icon: SiDotnet },
  { name: "C#", icon: SiSharp },
  { name: "Entity Framework Core", icon: SiDotnet },
  { name: "SignalR", icon: TbApi },
  { name: "SQL Server", icon: SiMysql },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HL7", icon: TbApi },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
];

const timeline = [
  {
    year: "2024",
    title: "B.Tech in Computer Science",
    description:
      "Graduated with a strong foundation in data structures, algorithms, and systems design.",
  },
  {
    year: "2024 — Present",
    title: "Junior Software Developer, Subharti Hospital",
    description:
      "Building real-time healthcare systems — from device-integrated ICU monitoring to AI-driven voice assistants — using ASP.NET Core, SignalR, and SQL Server.",
  },
];

function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-10 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16"
      >
        I'm a .NET Core developer who enjoys solving problems where reliability
        actually matters — like keeping an ICU monitor's data flowing without a
        hiccup. My work sits at the intersection of backend engineering and
        real-time systems: parsing medical device protocols, streaming live
        waveforms, and building voice interfaces that hospital staff actually
        want to use.
      </motion.p>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto mb-20">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
        <div className="flex flex-col gap-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8"
            >
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
              <span className="text-cyan-400 text-sm font-mono">{item.year}</span>
              <h3 className="text-white text-xl font-semibold mt-1">
                {item.title}
              </h3>
              <p className="text-white/60 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills grid */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-white mb-8 text-center"
      >
        Skills & Tools
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <Icon size={20} className="text-cyan-400 flex-shrink-0" />
              <span className="text-white/80 text-sm font-medium">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default About;