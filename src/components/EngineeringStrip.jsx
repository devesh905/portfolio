function EngineeringStrip() {
  const items = [
    "C#",
    "ASP.NET CORE",
    "SQL SERVER",
    "SIGNALR",
    "REACT",
    "REAL-TIME SYSTEMS",
    "TCP/IP",
    "HL7",
    "MICROSERVICES",
  ];

  return (
    <div className="w-full border-y border-[#E5E5DE] bg-[#F7F7F4] py-3.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs font-mono tracking-widest text-[#5A5C55] uppercase select-none">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-4 sm:gap-6">
              <span className="font-semibold hover:text-[#1E56A0] transition-colors">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="text-[#C8C8BE] hidden sm:inline">&mdash;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EngineeringStrip;
