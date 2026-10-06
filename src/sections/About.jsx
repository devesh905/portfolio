import { ArrowUpRight } from "lucide-react";

const workExperience = [
  {
    period: "Aug 2025 — Present",
    role: "Jr. Software Developer",
    organization: "Chhatrapati Shivaji Subharti Hospital",
    location: "Meerut, UP, India",
    type: "Full-Time Engineering",
    responsibilities: [
      "Engineered real-time Digital ICU telemetry platform streaming 500Hz ECG waveforms with custom delta-encoded compression (25–45x bandwidth reduction).",
      "Architected scope-isolated chunk loading using IServiceScopeFactory, eliminating EF Core DbContext multi-thread concurrency crashes during stream decompression.",
      "Designed unified parsing layer for HL7 and TCP/IP protocols normalizing dissimilar telemetry feeds from Mindray and Comen hardware monitors.",
      "Built ingestion-time UHID normalization service that auto-corrected staff data-entry errors, reducing corrupted patient records to near-zero.",
      "Implemented automated 7-day data retention purge routine with IST-aware cutoff logic to ensure HIPAA compliance and bound database volume growth.",
    ],
  },
  {
    period: "Oct 2024 — Jan 2025",
    role: "Apprentice Engineer",
    organization: "366Pi Technologies",
    location: "Ranchi, India",
    type: "Engineering Apprenticeship",
    responsibilities: [
      "Built automated regression test suites using Selenium WebDriver (C# / ASP.NET Core) across key web and mobile application workflows.",
      "Reduced query execution latency on slow reporting endpoints by reviewing SQL execution plans and implementing index optimizations.",
      "Collaborated with senior engineers on requirement scoping and software quality standards.",
    ],
  },
];

const education = [
  {
    period: "June 2020 — July 2024",
    degree: "B.Tech in Computer Science & Engineering (OGPA: 8.09)",
    institution: "Chandra Shekhar Azad University of Agriculture & Technology",
    location: "Kanpur, India",
    details:
      "Four-year undergraduate degree with focus on distributed computing, concurrency, database design, operating systems, and object-oriented architecture.",
  },
];

const skillCategories = [
  {
    category: "Backend & Systems",
    skills: ["C#", "ASP.NET Core", "ASP.NET MVC", "Entity Framework Core", "RESTful Web APIs", "SignalR", "WebSockets", "Python"],
  },
  {
    category: "Data & Storage",
    skills: ["SQL Server", "MySQL", "Database Normalization", "Index Tuning", "Execution Plan Review", "Power BI"],
  },
  {
    category: "Protocols & Architecture",
    skills: ["HL7 Protocol", "TCP/IP Sockets", "Real-Time Telemetry (500Hz)", "Delta Compression", "RabbitMQ", "Microservices"],
  },
  {
    category: "Frontend & Web",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Modern CSS", "Vite", "Component Architecture"],
  },
  {
    category: "Testing & DevOps",
    skills: ["Selenium WebDriver (C#)", "Git & GitHub", "Docker", "Postman", "Swagger", "Linux CLI", "Visual Studio"],
  },
];

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#E5E5DE] bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2.5">
            03 // Background &amp; Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#141413] tracking-tight leading-tight mb-4">
            Engineering grounded in reality, not trends.
          </h2>
          <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
            A developer who prioritizes thread safety, memory hygiene, clean API boundaries, and system predictability.
          </p>
        </div>

        {/* Narrative / Personal Perspective (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-20 border-b border-[#E5E5DE] items-start">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#4A4C46] leading-relaxed font-normal">
            <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
              Software is best when it is quiet, robust, and invisible.
            </h3>
            <p>
              I started my professional engineering career in a hospital setting where software failures aren't just inconveniences &mdash; they affect real clinical patient monitoring. When an intensive care monitor transmits 500 vital data packets every second, a concurrency leak or thread-lock in your backend translates to frozen screens at bedside.
            </p>
            <p>
              That experience fundamentally shaped how I write code: I believe in thread safety before optimization, explicit domain models over fragile abstractions, and thorough testing over optimism. Whether I am building high-concurrency .NET Core endpoints or an intuitive React application, I treat every millisecond and every database transaction with care.
            </p>
            <p>
              I enjoy working on backend architectures, real-time protocols (SignalR, WebSockets, TCP), database query tuning, and clean full-stack web products. I am currently open to full-time software engineering roles and select technical contracting projects.
            </p>
          </div>

          <div className="lg:col-span-5 border border-[#E5E5DE] bg-white rounded-lg p-6 sm:p-7 space-y-5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#787A72] block border-b border-[#EFEFE8] pb-3">
              Engineering Snapshot
            </span>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="font-mono text-[10px] text-[#9EA098] uppercase block">Location</span>
                <span className="text-[#141413] font-medium block">Meerut &amp; Remote, India (Available Worldwide)</span>
              </div>
              <div className="pt-2 border-t border-[#EFEFE8]">
                <span className="font-mono text-[10px] text-[#9EA098] uppercase block">Specialization</span>
                <span className="text-[#141413] font-medium block">.NET Core / C#, Real-Time Telemetry &amp; Full-Stack Web</span>
              </div>
              <div className="pt-2 border-t border-[#EFEFE8]">
                <span className="font-mono text-[10px] text-[#9EA098] uppercase block">Education</span>
                <span className="text-[#141413] font-medium block">B.Tech in CSE (OGPA 8.09)</span>
              </div>
              <div className="pt-2 border-t border-[#EFEFE8]">
                <span className="font-mono text-[10px] text-[#9EA098] uppercase block">What I'm Looking For</span>
                <span className="text-[#4A4C46] leading-relaxed block mt-0.5">
                  Engineering teams building serious systems with high concurrency, real-time requirements, or complex domain logic.
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#EFEFE8]">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183654] hover:underline"
              >
                <span>Connect with Devesh</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="py-20 border-b border-[#E5E5DE]">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2">
              Work History
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight">
              Production Experience &amp; Engineering Roles
            </h3>
          </div>

          <div className="space-y-12">
            {workExperience.map((job) => (
              <div
                key={job.period}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-b border-[#EFEFE8] pb-12 last:border-b-0 last:pb-0"
              >
                <div className="lg:col-span-4 space-y-1">
                  <span className="font-mono text-xs text-[#787A72] block">
                    {job.period}
                  </span>
                  <h4 className="text-lg font-bold text-[#141413]">
                    {job.role}
                  </h4>
                  <div className="text-xs text-[#183654] font-medium">
                    {job.organization}
                  </div>
                  <div className="text-[11px] text-[#787A72]">
                    {job.location} &bull; {job.type}
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4C46]">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#183654] font-mono text-xs mt-0.5">&mdash;</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="py-16 border-b border-[#E5E5DE]">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2">
              Academic Foundation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
              Education &amp; Computer Science Degree
            </h3>
          </div>

          {education.map((edu) => (
            <div
              key={edu.degree}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
            >
              <div className="lg:col-span-4 space-y-1">
                <span className="font-mono text-xs text-[#787A72] block">
                  {edu.period}
                </span>
                <h4 className="text-base font-bold text-[#141413]">
                  {edu.degree}
                </h4>
                <div className="text-xs text-[#183654] font-medium">
                  {edu.institution}
                </div>
                <div className="text-[11px] text-[#787A72]">
                  {edu.location}
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-xs sm:text-sm text-[#4A4C46] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Engineering Toolkit */}
        <div className="pt-20">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2">
              Technical Arsenal
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight">
              Structured Skills &amp; Applied Tools
            </h3>
            <p className="text-xs sm:text-sm text-[#787A72] mt-1.5">
              Organized by architectural domain rather than superficial badge collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="border border-[#E5E5DE] bg-white rounded-lg p-6 space-y-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                <div className="border-b border-[#EFEFE8] pb-2.5">
                  <h4 className="text-sm font-bold text-[#141413] font-sans">
                    {cat.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono text-[#383A35] bg-[#F3F3ED] border border-[#E5E5DE] px-2.5 py-1 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;