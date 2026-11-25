function EngineeringStrip() {
  const items = [
    "ASP.NET CORE (.NET 8)",
    "REACT.JS & NEXT.JS",
    "BOOTSTRAP & MODERN UI",
    "C# & CLEAN ARCHITECTURE",
    "SQL SERVER (T-SQL)",
    "500HZ SIGNALR TELEMETRY",
    "MULTIMODAL ANNOTATION (CV)",
    "RLHF & MODEL TRAINING",
    "TCP/IP & HL7 PROTOCOLS",
    "MICROSERVICES & YARP",
  ];

  return (
    <div className="w-full border-y border-[#e2dad0] bg-[#efe9df] py-3.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs font-mono tracking-wider text-[#57534e] uppercase select-none">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-4 sm:gap-6">
              <span className="font-semibold hover:text-[#ff4829] transition-colors">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="text-[#ff4829] hidden sm:inline">&bull;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EngineeringStrip;
