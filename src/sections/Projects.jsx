import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailModal from "../components/ProjectDetailModal";

const projects = [
  {
    id: 1,
    title: "Digital ICU Management System",
    description:
      "Real-time ICU monitoring platform integrating medical devices via TCP/IP and HL7, streaming ECG waveforms at 500Hz with custom delta-encoded compression achieving 25-45x reduction.",
    fullDescription:
      "Designed and built a highly responsive ICU management system that handles real-time telemetry from medical devices, supports fast notifications, and provides clinicians with live waveform visualization. The solution integrates HL7 messaging, secure device communication, and real-time charting for intensive care teams.",
    tech: ["ASP.NET Core", "SignalR", "HL7 Protocols", "SQL Server"],
    highlights: [
      "Live ECG waveform streaming at 500Hz sync rate",
      "Delta-encoded compression reduced telemetry bandwidth by up to 45x",
      "Integrated multiple real-time ICU monitoring devices into a single clinical panel",
    ],
    features: [
      "Real-time clinical patient monitoring dashboard",
      "Event-driven alert dispatch and tracking for intensive care units",
      "Role-based secure authentication and comprehensive database audit logs",
    ],
    span: "md:col-span-2",
    status: "Production",
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "Lucy — AI Voice Assistant",
    description:
      "Voice-driven assistant integrating Faster-Whisper STT, Piper TTS, and Groq/LLaMA 3.3 with Asterisk PBX for hospital procurement workflows.",
    fullDescription:
      "Lucy is a voice-enabled assistant built to automate procurement-related conversations for healthcare teams. It combines speech recognition, text-to-speech, and AI-based intent handling to streamline sourcing, order verification, and staff workflows over phone systems.",
    tech: ["Python", "Groq API", "Asterisk PBX", "LLaMA 3.3"],
    highlights: [
      "Natural language processing for hospital procurement workflows",
      "Telephony integration using Asterisk PBX",
      "Automated stock ordering and procurement querying",
    ],
    features: [
      "Whisper-powered speech-to-text command recognition",
      "TTS responses synthesised with low-latency Piper engines",
      "LLaMA intent classification and integration with purchase systems",
    ],
    span: "",
    status: "Production",
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "SmartFleet",
    description:
      "Fleet management system built with .NET microservices, YARP gateway, RabbitMQ, and React — a deep dive into distributed systems architecture.",
    fullDescription:
      "SmartFleet is a microservices-based transport operations platform that centralizes vehicle tracking, workload orchestration, and messaging. Built with .NET services, YARP gateway routing, and RabbitMQ event streaming, it demonstrates scalable cloud-ready architecture.",
    tech: [".NET Microservices", "React", "RabbitMQ", "YARP Gateway"],
    highlights: [
      "Distributed event-driven pub/sub communication queue via RabbitMQ",
      "Gateway routing and authentication offloading with YARP",
      "Real-time vehicle fleet tracking dashboard UI",
    ],
    features: [
      "Live vehicle status monitoring and job assignment system",
      "Workload dispatch queue with reliable transaction retry mechanisms",
      "Fully containerized service scaling (Docker/Docker-Compose configurations)",
    ],
    span: "",
    status: "In Progress",
    github: "https://github.com/devesh905/smartfleetWeb",
    demo: null,
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
        >
          Selected Projects
        </motion.h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            onClick={() => setSelectedProject(project)}
            {...project}
            index={index}
          />
        ))}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;