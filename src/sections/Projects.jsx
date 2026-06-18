import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Digital ICU Management System",
    description:
      "Real-time ICU monitoring platform integrating medical devices via TCP/IP and HL7, streaming ECG waveforms at 500Hz with custom delta-encoded compression achieving 25-45x reduction.",
    tech: ["ASP.NET Core", "SignalR", "HL7", "SQL Server"],
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
    tech: ["Python", "Groq API", "Asterisk PBX"],
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
    tech: [".NET Microservices", "React", "RabbitMQ"],
    span: "",
    status: "In Progress",
    github: "https://github.com/devesh905/smartfleetWeb",
    demo: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;