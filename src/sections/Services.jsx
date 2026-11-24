import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Activity, Brain, ArrowUpRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "BACKEND & DISTRIBUTED SYSTEMS",
    subtitle: "ASP.NET Core (.NET 8) & SQL Server",
    icon: Server,
    description:
      "Architecting enterprise-grade RESTful APIs and microservices with clean architecture, SOLID principles, and thread-safe dependency injection. Deep focus on high-throughput database schemas, stored procedure tuning, delta compression, and multi-tier RBAC security.",
    stack: [
      "ASP.NET Core / .NET 8",
      "C# (OOP & SOLID)",
      "EF Core & LINQ",
      "SQL Server (T-SQL)",
      "Microservices & YARP",
      "JWT & Role-Based Access",
    ],
    badge: "THREAD-SAFE .NET",
    metrics: "45% footprint reduction with Delta & GZip",
  },
  {
    number: "02",
    title: "REAL-TIME TELEMETRY & HARDWARE",
    subtitle: "500Hz Streams & Medical Device Sockets",
    icon: Activity,
    description:
      "Bridging the physical world with software. Ingesting raw byte streams from bedside hardware over TCP/IP and HL7, streaming 500Hz physiological waveforms via SignalR WebSockets, and engineering local loopback WebSocket services to integrate hardware scanners with web EHRs.",
    stack: [
      "SignalR & WebSockets",
      "TCP/IP Sockets",
      "HL7 Medical Protocols",
      "Hardware Bridges (C#)",
      "Delta Compression (32x)",
      "HTML5 Canvas Rendering",
    ],
    badge: "SUB-40MS LATENCY",
    metrics: "500Hz real-time ECG broadcast without packet drops",
  },
  {
    number: "03",
    title: "AI MODEL TRAINING & DATA SPECIALIST",
    subtitle: "Multimodal Annotation & RLHF Curation",
    icon: Brain,
    description:
      "Generalist expert training frontier AI models across diverse projects. End-to-end multimodal annotation (bounding boxes, polygon segmentation, temporal video action tagging) and rigorous RLHF evaluation (SFT prompt curation, preference ranking, and hallucination audits in code and STEM).",
    stack: [
      "Image & Video Annotation",
      "Polygon Segmentation & Bounding Boxes",
      "RLHF & SFT Prompt Curation",
      "Model Evaluation & Red-Teaming",
      "Groq LLaMA 3.3 & OpenAI",
      "Whisper STT & Asterisk VoIP",
    ],
    badge: "GENERALIST EXPERT",
    metrics: "99.8% Inter-Annotator Agreement (IAA) precision",
  },
];

function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="systems" className="py-24 sm:py-32 border-b border-[#e2dad0] bg-[#f6f4f0] text-[#171412]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#efe9df] border border-[#d6cebf] text-[#ff4829] text-xs font-mono font-semibold uppercase tracking-wider">
            <span>Core Engineering Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#171412] tracking-tight leading-tight">
            What I deliver to engineering teams.
          </h2>
          <p className="text-base sm:text-lg text-[#57534e] leading-relaxed font-normal">
            Proven competence across mission-critical backends, live hardware telemetry, and frontier AI model training.
          </p>
        </div>

        {/* 3 High-Impact Cards (Bento Rhythm) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const isHovered = hoveredIdx === idx;
            const IconComponent = cap.icon;

            return (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative border rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-white shadow-sm ${
                  isHovered
                    ? "border-[#ff4829]/70 shadow-[0_12px_32px_rgba(23,20,18,0.08)] -translate-y-1"
                    : "border-[#e2dad0]"
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-2xl font-black font-display text-[#ff4829]">
                      {cap.number}
                    </span>
                    <span className="px-2 py-0.5 rounded-sm bg-[#efe9df] border border-[#d6cebf] text-[10px] font-semibold text-[#171412] uppercase tracking-wider">
                      {cap.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 text-[#171412]">
                      <IconComponent size={18} className="text-[#ff4829] shrink-0" />
                      <h3 className="text-lg font-bold text-[#171412] tracking-tight">
                        {cap.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#77716e] mt-1 block">
                      {cap.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed font-normal">
                    {cap.description}
                  </p>

                  {/* Stack Tags */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#77716e] block font-semibold">
                      Key Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.stack.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-mono text-[#171412] bg-[#efe9df]/70 border border-[#e2dad0] px-2 py-0.5 rounded-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Metric */}
                <div className="pt-5 mt-5 border-t border-[#e2dad0] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#171412] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#ff4829] shrink-0" />
                    <span>{cap.metrics}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;
