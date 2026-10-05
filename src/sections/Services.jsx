import { motion } from "framer-motion";
import { 
  Globe, 
  Server, 
  Activity, 
  Bot, 
  Layers, 
  ArrowUpRight,
  ShieldCheck,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    badge: "Client Favorite",
    description:
      "Crafting high-converting, lightning-fast modern websites, administrative dashboards, and client portals with React, Vite, and tailored animations that leave a lasting impression.",
    deliverables: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "High-speed performance (95+ Lighthouse Score)",
      "SEO-friendly architecture & rich metadata",
      "API integrations & smooth checkout/form flows"
    ],
    accent: "from-cyan-500/20 to-blue-500/5",
    border: "group-hover:border-cyan-400/40",
    iconColor: "text-cyan-400",
  },
  {
    icon: Server,
    title: "Robust .NET Core & REST APIs",
    badge: "Enterprise Ready",
    description:
      "Architecting clean, scalable backend services using ASP.NET Core, C#, Entity Framework Core, and SQL Server. Built for high security, data integrity, and peak concurrency.",
    deliverables: [
      "Clean Architecture & Microservices design",
      "Secure JWT authentication & role-based access",
      "Relational database design & query tuning",
      "Scalable RESTful & gRPC endpoints"
    ],
    accent: "from-blue-500/20 to-indigo-500/5",
    border: "group-hover:border-blue-400/40",
    iconColor: "text-blue-400",
  },
  {
    icon: Activity,
    title: "Real-Time Telemetry & Systems",
    badge: "Mission Critical",
    description:
      "Specialized in sub-second real-time streaming, medical hardware data ingestion (HL7/TCP), SignalR event broadcasting, and custom delta compression algorithms.",
    deliverables: [
      "SignalR & WebSocket bi-directional streaming",
      "Medical device & IoT telemetry pipelines (500Hz)",
      "Live ECG waveform charting & status monitors",
      "High-ratio telemetry delta compression (up to 45x)"
    ],
    accent: "from-emerald-500/20 to-teal-500/5",
    border: "group-hover:border-emerald-400/40",
    iconColor: "text-emerald-400",
  },
  {
    icon: Bot,
    title: "AI Voice & Telephony Automation",
    badge: "Next-Gen Tech",
    description:
      "Integrating cutting-edge AI speech engines (Whisper STT, Piper TTS, LLaMA) with PBX telephony (Asterisk) to automate customer support, hospital procurement, and voice workflows.",
    deliverables: [
      "Low-latency speech-to-text & text-to-speech pipelines",
      "LLM intent classification & structured output extraction",
      "Asterisk PBX VoIP phone integration",
      "Automated stock querying & phone assistant bots"
    ],
    accent: "from-violet-500/20 to-fuchsia-500/5",
    border: "group-hover:border-violet-400/40",
    iconColor: "text-violet-400",
  },
];

function Services() {
  return (
    <section id="services" className="px-4 sm:px-6 py-24 max-w-6xl mx-auto relative">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Zap size={14} />
          <span>Client &amp; Technical Solutions</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          How I Can Help <span className="gradient-text-cyan">Your Business Grow</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          From high-converting modern websites to complex real-time enterprise backends, I bring
          full-cycle engineering rigor and design polish to every project.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${service.border} hover:-translate-y-1.5`}
            >
              <div>
                {/* Top icon and badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.accent} border border-white/10 flex items-center justify-center ${service.iconColor} shadow-inner`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-400/90 font-mono block">
                    What's Included:
                  </span>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Discuss this service</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-cyan-950/20 via-slate-900/40 to-blue-950/20"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">Need a custom website or software solution?</h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
              I can help architect, build, and deploy your project on time with transparent pricing.
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transform hover:-translate-y-0.5"
        >
          Book a Free Consultation
        </a>
      </motion.div>
    </section>
  );
}

export default Services;
