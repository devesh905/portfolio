import Elias from "../components/ui/elias-author-hero";

const DEVESH_LETTER = {
  eyebrow: "Engineering Principles",
  greeting: "To engineering leads & hiring teams,",
  stamp: "VERIFIED IN PROD",
  postmark: "SUBHARTI ICU",
  seal: "DU",
  sealing: "Deterministic .NET & Precision AI",
  messages: [
    "Software deployed in intensive care units and frontier AI training leaves zero room for casual assumptions.",
    "I engineer thread-safe ASP.NET Core architectures using IServiceScopeFactory, zero-allocation buffers, and strict memory safety.",
    "In multimodal AI annotation and RLHF, precision at the pixel and token level is mandatory to eliminate hallucination.",
    "From 500Hz cardiac waveform streaming to production SQL Server optimization, every design decision is measured under real load."
  ],
  counter: "Rule"
};

function Hero() {
  return (
    <section id="home" className="relative w-full">
      <Elias
        name={{ first: "DEVESH", last: "UPADHYAY" }}
        brand={{ name: "DEVESH", href: "#top" }}
        navLinks={{
          left: [
            { label: "Systems", href: "#projects" },
            { label: "Capabilities", href: "#systems" }
          ],
          right: [
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" }
          ]
        }}
        navStatus={{
          label: "Subharti ICU",
          detail: "Active Dev"
        }}
        navCta={{
          label: "Inspect Systems",
          href: "#projects"
        }}
        intro={{
          roles: [".NET 8 Engineer", "500Hz ICU Telemetry", "AI Data & RLHF"],
          headline: [
            "Engineering backend systems",
            "where reliability is absolute."
          ],
          description:
            "Backend engineer at Subharti Hospital building thread-safe ASP.NET Core services, 500Hz real-time ICU telemetry with SignalR, and training frontier AI models with multimodal image/video annotation & RLHF alignment."
        }}
        portrait={{
          src: "/devesh-portrait.png",
          alt: "Devesh Kumar Upadhyay",
          width: 721,
          height: 832
        }}
        letter={DEVESH_LETTER}
        socialLinks={[
          { label: "GitHub", href: "https://github.com/devesh905" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/devesh-kumar-upadhyay/" },
          { label: "Resume (PDF)", href: "/DeveshKumarUpadhyay.pdf" },
          { label: "Subharti Hospital", href: "#experience" }
        ]}
      />
    </section>
  );
}

export default Hero;
