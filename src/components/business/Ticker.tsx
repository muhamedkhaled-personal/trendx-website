interface TickerItem {
  category: string;
  value: string;
  delta: string;
}

interface TickerProps {
  label: string;
  items: TickerItem[];
}

export default function Ticker({ label, items }: TickerProps) {
  // Duplicate the list so the marquee loop is seamless
  const loop = [...items, ...items];

  return (
    <div className="mt-11 max-md:mt-8 border-y border-white/10 py-4 overflow-hidden relative flex items-center gap-3.5">
      {/* Label */}
      <div className="flex-shrink-0 ps-2 pe-3.5 border-e border-white/15 font-mono text-[11px] tracking-[0.12em] uppercase text-white/70 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7DDBA3]" />
        <span>{label}</span>
      </div>

      {/* Track with edge fade */}
      <div
        className="flex-1 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="flex gap-7 whitespace-nowrap animate-marquee rtl:animate-marquee-rtl">
          {loop.map((item, i) => (
            <div
              key={i}
              className="text-[13px] inline-flex items-center gap-2.5 flex-shrink-0"
            >
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/50">
                {item.category}
              </span>
              <span className="font-semibold text-white">{item.value}</span>
              <span className="font-mono font-semibold text-[#7DDBA3]">
                {item.delta}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20 ms-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
