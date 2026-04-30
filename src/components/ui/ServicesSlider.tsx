import { animate, motion, useMotionValue } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BRAND = "#77A9ED";
const CARD_BG = "#0f172a";
const CARD_BG_HOVER = "#1e293b";
const GAP = 16;

function getCardsVisible(width: number) {
  if (width < 480) return 1;
  if (width < 768) return 2;
  if (width < 1024) return 3;
  return 4;
}

interface Service {
  slug: string;
  title: string;
  short: string;
  tag: string;
  image: string;
}

const services: Service[] = [
  {
    slug: "residential-wiring",
    title: "Elinstallation & Ominstallation",
    short: "Säker, regelsäker elinstallation för gamla och nya hus.",
    tag: "Heminstallation",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "panel-upgrades",
    title: "Centralbyten & Elreparationer",
    short: "Uppgradera din central innan den blir en fara.",
    tag: "Elcentral",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
  },
  {
    slug: "ev-charger-installation",
    title: "EV-laddare Installation",
    short: "Level 2-laddare installerade snabbt och korrekt hemma.",
    tag: "Elbil",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
  },
  {
    slug: "lighting-installation",
    title: "Belysningsinstallation",
    short: "Inomhus- och utomhusbelysning som imponerar och håller.",
    tag: "Belysning",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  },
  {
    slug: "emergency-electrical",
    title: "Akut Eljour",
    short: "Jour dygnet runt — vi svarar när andra inte gör det.",
    tag: "Jour 24/7",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80",
  },
  {
    slug: "commercial-electrical",
    title: "Kommersiella Eltjänster",
    short: "Pålitlig el för kontor, butiker och lager.",
    tag: "Företag",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

function ServiceCard({ service, cardWidth }: { service: Service; cardWidth: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        minWidth: cardWidth,
        maxWidth: cardWidth,
        height: 400,
        borderRadius: 20,
        overflow: "hidden",
        background: hovered ? CARD_BG_HOVER : CARD_BG,
        border: hovered
          ? `1px solid ${BRAND}`
          : "1px solid rgba(119,169,237,0.2)",
        boxShadow: hovered
          ? `0 20px 40px -10px rgba(91,145,216,0.4), 0 6px 20px rgba(0,0,0,0.3)`
          : "0 4px 20px rgba(0,0,0,0.25)",
        transform: hovered ? "translateY(-8px)" : "translateY(0px)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, border-color 0.15s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 180, overflow: "hidden", flexShrink: 0 }}>
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.35s ease",
            opacity: 1,
          }}
        />
        {/* Bottom fade into card body */}
        <div style={{
          position: "absolute", inset: 0,
          background: hovered
            ? `linear-gradient(to top, ${CARD_BG_HOVER} 0%, transparent 55%)`
            : `linear-gradient(to top, ${CARD_BG} 0%, transparent 55%)`,
          transition: "background 0.15s ease",
        }} />

        {/* Tag */}
        <span style={{
          position: "absolute", top: 12, left: 12,
          padding: "3px 10px", borderRadius: 6,
          fontSize: 11, fontWeight: 700, letterSpacing: "0.05em",
          background: "rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.35)",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}>
          {service.tag}
        </span>

        {/* Hover CTA */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}>
          <a
            href={`/services/${service.slug}/`}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "9px 20px", borderRadius: 40,
              background: "#fff",
              color: BRAND, fontWeight: 700, fontSize: 13,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              transform: hovered ? "scale(1)" : "scale(0.92)",
              transition: "transform 0.15s ease",
              pointerEvents: hovered ? "auto" : "none",
            }}
          >
            Se tjänsten <ArrowRight size={13} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{
          fontSize: "0.975rem", fontWeight: 700, lineHeight: 1.35,
          marginBottom: 8, color: "#fff",
        }}>
          {service.title}
        </h3>
        <p style={{
          fontSize: "0.85rem", lineHeight: 1.65, flex: 1,
          color: "rgba(255,255,255,0.75)",
        }}>
          {service.short}
        </p>
        <div style={{
          marginTop: 14, paddingTop: 14,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          display: "flex", alignItems: "center", justifyContent: "flex-end",
        }}>
          <a
            href={`/services/${service.slug}/`}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex", alignItems: "center", gap: 5,
              fontSize: "0.8rem", fontWeight: 600,
              color: "#fff", textDecoration: "none",
              opacity: 0.9,
            }}
          >
            Läs mer
            <span style={{
              position: "absolute", width: 1, height: 1, padding: 0, margin: -1,
              overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0,
            }}>{` om ${service.title}`}</span>
            <ArrowRight
              size={13}
              style={{
                transform: hovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.15s ease",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSlider() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(280);
  const [cardsVisible, setCardsVisible] = useState(4);
  const [dragWidth, setDragWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      requestAnimationFrame(() => {
        if (!wrapperRef.current) return;
        const w = wrapperRef.current.offsetWidth;
        if (w === 0) return;
        const cv = getCardsVisible(w);
        setCardsVisible(cv);
        const cw = Math.floor((w - GAP * (cv - 1)) / cv);
        setCardWidth(cw);
        if (trackRef.current) {
          setDragWidth(Math.max(0, trackRef.current.scrollWidth - w));
        }
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    const currentX = x.get();
    const amount = (cardWidth + GAP) * cardsVisible;
    const newX =
      direction === "left"
        ? Math.min(currentX + amount, 0)
        : Math.max(currentX - amount, -dragWidth);
    animate(x, newX, { type: "spring", stiffness: 280, damping: 28, mass: 1 });
  };

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", width: "100%" }}
    >
      {/* Arrows */}
      {(["left", "right"] as const).map((dir) => (
        <button
          key={dir}
          onClick={() => scrollTo(dir)}
          aria-label={dir === "left" ? "Bläddra vänster" : "Bläddra höger"}
          style={{
            position: "absolute",
            [dir]: -20,
            top: "50%", transform: "translateY(-50%)",
            zIndex: 20, width: 40, height: 40, borderRadius: "50%",
            background: "#fff", border: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#374151",
          }}
        >
          {dir === "left" ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
        </button>
      ))}

      {/* Track */}
      <div style={{ overflow: "hidden", paddingTop: 12, paddingBottom: 16, marginTop: -12, marginBottom: -16 }}>
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ right: 0, left: -dragWidth }}
          dragElastic={0.06}
          style={{ x, display: "flex", gap: GAP, cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} cardWidth={cardWidth} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
