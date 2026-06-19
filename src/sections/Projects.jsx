import { useState } from "react";
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
    tech: ["ASP.NET Core", "SignalR", "HL7", "SQL Server"],
    highlights: [
      "Live ECG waveform streaming at 500Hz",
      "Delta-encoded compression reduced bandwidth by up to 45x",
      "Integrated multiple ICU devices into one operational view",
    ],
    features: [
      "Real-time patient monitoring dashboard",
      "Alerting and event tracking for care teams",
      "Secure role-based access and audit trails",
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
    tech: ["Python", "Groq API", "Asterisk PBX"],
    highlights: [
      "Natural language procurement workflows",
      "Phone system integration with Asterisk PBX",
      "Automated ordering and information retrieval",
    ],
    features: [
      "Speech-to-text command recognition",
      "Text-to-speech responses powered by Piper",
      "AI-driven intent classification and task management",
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
    tech: [".NET Microservices", "React", "RabbitMQ"],
    highlights: [
      "Distributed event-driven communication",
      "Gateway routing with YARP",
      "Real-time fleet tracking UI",
    ],
    features: [
      "Vehicle status and assignment dashboard",
      "Dispatch workflow with reliable message queues",
      "Microservice-based request routing and scaling",
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
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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