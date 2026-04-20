import { useEffect, useRef } from "react";

const BRAND = "#77A9ED";
const SPEED = 50; // px/s

const items = [
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`, label: "Behörig & Försäkrad" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>`, label: "4.9 ★ Google-betyg" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>`, label: "20 år i branschen" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>`, label: "3 200 avklarade uppdrag" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>`, label: "2 års garantiarbete" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>`, label: "Jour dygnet runt" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`, label: "Fast pris — inga dolda avgifter" },
];

// Render one full set of items + separators
function TrackItems() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0 2rem", fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.01em", flexShrink: 0, whiteSpace: "nowrap" }}>
          <svg width="15" height="15" fill="none" stroke={BRAND} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }} aria-hidden="true" dangerouslySetInnerHTML={{ __html: item.icon }} />
          {item.label}
          <span style={{ display: "inline-block", width: 4, height: 4, borderRadius: "50%", background: "rgba(119,169,237,0.5)", flexShrink: 0, marginLeft: "2rem" }} aria-hidden="true" />
        </span>
      ))}
    </>
  );
}

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = (ts: number) => {
      if (lastRef.current !== null) {
        const delta = ts - lastRef.current;
        posRef.current -= SPEED * delta / 1000;
        const halfW = track.scrollWidth / 2;
        if (halfW > 0 && posRef.current <= -halfW) {
          posRef.current += halfW;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      lastRef.current = ts;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        background: "#1F2937",
        borderTop: "1px solid rgba(119,169,237,0.2)",
        overflow: "hidden",
        height: 52,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to right,#1F2937,transparent)" }} />

      {/* Scrolling track — two copies for seamless loop */}
      <div ref={trackRef} style={{ display: "flex", alignItems: "center", willChange: "transform" }}>
        <TrackItems />
        <TrackItems />
      </div>

      {/* Right fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to left,#1F2937,transparent)" }} />
    </div>
  );
}
