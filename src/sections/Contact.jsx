import { useState } from "react";

// Replace this with your actual Formspree endpoint after signing up at formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-20 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        Get In Touch
      </h2>

      {status === "success" ? (
        <div className="text-center py-10">
          <p className="text-cyan-400 text-lg font-medium mb-2">
            Message sent successfully.
          </p>
          <p className="text-white/50 text-sm">
            Thanks for reaching out — I'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-colors"
          ></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      )}
    </section>
  );
}

export default Contact;