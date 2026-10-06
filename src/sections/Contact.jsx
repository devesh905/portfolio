import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight, Send, AlertCircle, CheckCircle2, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrevvwrg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Engineering Role / Full-Time",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText("deveshkumarupadhayay@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          topic: "Engineering Role / Full-Time",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-[#183654] font-semibold block mb-2.5">
            05 // Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#141413] tracking-tight leading-tight mb-4">
            Have a project in mind, or a technical role to discuss?
          </h2>
          <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
            Let's talk about what you're trying to build. I'm always open to discussing new engineering challenges, backend architecture, or distributed real-time systems.
          </p>
        </div>

        {/* Contact Composition (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card with 1-Click Copy */}
            <div className="border border-[#E5E5DE] bg-white rounded-lg p-6 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div>
                <span className="font-mono text-[11px] text-[#787A72] uppercase tracking-wider block">
                  Direct Email
                </span>
                <span className="text-sm font-semibold text-[#141413] block mt-1 break-all">
                  deveshkumarupadhayay@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="mailto:deveshkumarupadhayay@gmail.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#141413] hover:bg-[#2A2B29] rounded transition-all"
                >
                  <Mail size={13} />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A4C46] hover:text-[#141413] border border-[#E5E5DE] bg-[#FBFBF9] hover:bg-white rounded transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-[#1F3D2C]" />
                      <span className="text-[#1F3D2C] font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Instant Channels */}
            <div className="border border-[#E5E5DE] bg-white rounded-lg p-6 space-y-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <span className="font-mono text-[11px] text-[#787A72] uppercase tracking-wider block">
                Instant Messaging &amp; Social
              </span>

              <div className="space-y-3 text-xs">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919058705009?text=Hi%20Devesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-[#EFEFE8] hover:border-[#C8C8BE] bg-[#FBFBF9] hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-[#141413] font-medium">
                    <FaWhatsapp size={16} className="text-[#1F3D2C]" />
                    <span>WhatsApp: +91 9058705009</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#183654] font-semibold">
                    Direct Chat &rarr;
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/devesh-kumar-upadhyay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-[#EFEFE8] hover:border-[#C8C8BE] bg-[#FBFBF9] hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-[#141413] font-medium">
                    <FaLinkedin size={15} className="text-[#183654]" />
                    <span>linkedin.com/in/devesh-kumar-upadhyay</span>
                  </div>
                  <ArrowUpRight size={14} className="text-[#787A72]" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/devesh905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded border border-[#EFEFE8] hover:border-[#C8C8BE] bg-[#FBFBF9] hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-[#141413] font-medium">
                    <FaGithub size={15} />
                    <span>github.com/devesh905</span>
                  </div>
                  <ArrowUpRight size={14} className="text-[#787A72]" />
                </a>
              </div>
            </div>

            {/* Practical Logistics */}
            <div className="border border-[#E5E5DE] bg-[#F3F3ED] rounded-lg p-5 space-y-2 text-xs text-[#4A4C46]">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#787A72] flex-shrink-0" />
                <span>Location: Meerut, UP, India (IST / UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#787A72] flex-shrink-0" />
                <span>Response Time: Typically within 24 business hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Form */}
          <div className="lg:col-span-7 border border-[#E5E5DE] bg-white rounded-lg p-6 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#EDF3F9] border border-[#D0DFEF] flex items-center justify-center text-[#183654] mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#141413]">
                  Message Received
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4C46] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Devesh has received your message and will respond promptly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-4 py-2 rounded text-xs font-medium border border-[#E5E5DE] bg-[#FBFBF9] text-[#141413] hover:bg-white"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Topic selector */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#787A72] uppercase tracking-wider block">
                    Discussion Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Engineering Role / Full-Time",
                      "Distributed / .NET Backend",
                      "Real-Time Telemetry / IoT",
                      "Full-Stack Web Project",
                      "General Technical Discussion",
                    ].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setFormData({ ...formData, topic })}
                        className={`px-3 py-1.5 rounded text-xs transition-colors cursor-pointer ${
                          formData.topic === topic
                            ? "bg-[#183654] text-white font-medium"
                            : "bg-[#F3F3ED] text-[#4A4C46] hover:text-[#141413] border border-[#E5E5DE]"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="topic" value={formData.topic} />
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-mono text-xs text-[#787A72] uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="e.g. Sarah Jenkins"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#FBFBF9] border border-[#E5E5DE] rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#141413] placeholder-[#9EA098] focus:border-[#183654] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-mono text-xs text-[#787A72] uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="e.g. sarah@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#FBFBF9] border border-[#E5E5DE] rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#141413] placeholder-[#9EA098] focus:border-[#183654] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-mono text-xs text-[#787A72] uppercase tracking-wider block">
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Brief overview of the technical requirements, engineering role, or questions..."
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#FBFBF9] border border-[#E5E5DE] rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#141413] placeholder-[#9EA098] focus:border-[#183654] focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#141413] hover:bg-[#2A2B29] rounded transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={13} />
                    <span>{status === "sending" ? "Transmitting..." : "Send Message"}</span>
                  </button>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 border border-red-300 bg-red-50 rounded p-3 text-red-700 text-xs">
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>Transmission error. Please email directly at deveshkumarupadhayay@gmail.com</span>
                  </div>
                )}
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;