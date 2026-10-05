import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { Sparkles, Code2, FolderGit2 } from "lucide-react";

const categories = ["All Projects", "Healthcare & Real-Time", "Full-Stack & Cloud", "AI & Telephony"];

const projects = [
  {
    id: 1,
    title: "Digital ICU Management System",
    category: "Healthcare & Real-Time",
    description:
      "Real-time patient monitoring platform integrating intensive care medical devices via TCP/IP and HL7, streaming live ECG waveforms at 500Hz with custom delta-encoded compression achieving 25-45x reduction in bandwidth.",
    fullDescription:
      "Designed and built a highly responsive ICU management system that handles high-frequency real-time telemetry from medical devices, supports instantaneous clinician notifications, and provides doctors with live waveform visualization. The architecture integrates HL7 protocols, secure hardware communication, and low-latency SignalR streams for ICU teams where every millisecond counts.",
    tech: ["ASP.NET Core", "SignalR", "HL7 Protocols", "SQL Server", "C#", "WebSockets"],
    highlights: [
      "Live ECG waveform streaming at 500Hz synchronization rate",
      "Custom delta-encoded compression reduced telemetry data bandwidth by up to 45x",
      "Integrated multi-bed real-time ICU telemetry streams into a unified clinical panel",
      "Zero-downtime architecture handling continuous vital signs feeds",
    ],
    features: [
      "Real-time clinical patient monitoring dashboard with custom chart renderers",
      "Event-driven alert dispatch & critical threshold notifications for intensive care units",
      "Role-based secure authentication and HIPAA-conscious audit logging in SQL Server",
      "Resilient reconnect and offline telemetry cache buffering for unstable hospital networks",
    ],
    span: "md:col-span-2",
    status: "Production",
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "Lucy — AI Voice Assistant & Telephony",
    category: "AI & Telephony",
    description:
      "Voice-driven AI assistant integrating Whisper STT, Piper TTS, and Groq/LLaMA 3.3 with Asterisk PBX phone systems to automate hospital procurement and inventory queries.",
    fullDescription:
      "Lucy is an end-to-end voice-enabled AI assistant built to automate hospital procurement workflows and order routing. It directly interfaces with Asterisk VoIP PBX phone systems, transcribing clinician and supplier speech via Faster-Whisper, evaluating intent using LLaMA models, and responding verbally in real-time via low-latency Piper TTS.",
    tech: ["Python", "Groq API", "Asterisk PBX", "LLaMA 3.3", "Faster-Whisper", "Piper TTS"],
    highlights: [
      "Low-latency speech-to-text and conversational AI pipeline over VoIP",
      "Telephony PBX integration automating phone-based purchase inquiries",
      "Automated stock level verification & order placement for hospital staff",
      "Reduced procurement overhead by up to 60%",
    ],
    features: [
      "Whisper-powered speech-to-text recognition fine-tuned for healthcare terms",
      "Instantaneous audio response synthesis via neural Piper engine",
      "LLaMA intent classification and integration with purchase ERP systems",
      "Call recording, transcription audit logs, and status dashboards",
    ],
    span: "",
    status: "Production",
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "SmartFleet — Microservices Logistics Platform",
    category: "Full-Stack & Cloud",
    description:
      "Modern distributed fleet management system built with .NET microservices, YARP API gateway, RabbitMQ event streaming, and a high-velocity React dashboard.",
    fullDescription:
      "SmartFleet is a scalable cloud-ready transport operations platform that centralizes vehicle tracking, workload orchestration, and real-time delivery messaging. Built with .NET microservices, YARP reverse proxy gateway routing, and RabbitMQ event streaming, it demonstrates clean decoupled enterprise architecture.",
    tech: [".NET Microservices", "React", "RabbitMQ", "YARP Gateway", "Docker", "Tailwind CSS"],
    highlights: [
      "Distributed event-driven pub/sub communication queue via RabbitMQ",
      "Gateway routing and authentication offloading with Microsoft YARP",
      "Live vehicle fleet tracking dashboard UI with interactive telemetry",
      "Fully containerized architecture ready for Docker and Kubernetes",
    ],
    features: [
      "Live vehicle status monitoring and job dispatch assignment system",
      "Workload dispatch queue with reliable transaction retry mechanisms",
      "Modular microservices: Auth, Vehicles, Trips, and Telemetry services",
      "Responsive React UI with real-time state updates and route map rendering",
    ],
    span: "",
    status: "In Progress",
    github: "https://github.com/devesh905/smartfleetWeb",
    demo: null,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="px-4 sm:px-6 py-24 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <span>Featured Engineering</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Selected <span className="gradient-text-cyan">Projects &amp; Case Studies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          Explore production-grade software engineered for high reliability, zero latency tolerance,
          and distributed scale.
        </motion.p>
      </div>

      {/* Category Filter Pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${activeCategory === category
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                : "bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              {...project}
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;