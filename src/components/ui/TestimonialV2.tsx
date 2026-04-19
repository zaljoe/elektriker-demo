import * as React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Ringde klockan 20 för en utlöst jordfelsbrytare. Var på plats inom 45 minuter, hittade felet och hade allt klart till 21:30. Ärlrigt pris, ingen jourtillägg. Rekommenderas varmt.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sara M.",
    role: "Akutreparation · Mars 2025",
  },
  {
    text: "Bytte panneln från 100A till 200A. De skötte tillstånd, besiktning och samordning med elnätet. Jag behövde inte göra något alls. Priset stämde exakt med offerten.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David K.",
    role: "Panelbyte · Februari 2025",
  },
  {
    text: "Installerade en Level 2-laddare i mitt garage. Klart på en halvdag, allt enligt regler. Teknikern gick igenom allt som gjorts och svarade på varje fråga. Starkt rekommenderat.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Maria T.",
    role: "EV-laddare · Januari 2025",
  },
  {
    text: "Kopplade om vårt kontor under en helg. Professionella, städade upp efter sig och klart i tid. Störde inte verksamheten alls.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "James R.",
    role: "Kommersiell el · December 2024",
  },
  {
    text: "Ominstallerades halva huset under renoveringen. Dök upp varje dag, kommunicerade tydligt och godkändes vid besiktningen första gången.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Karin B.",
    role: "Ominstallation · April 2025",
  },
  {
    text: "Brännlukt från ett vägguttag klockan 23. De kom ut, hittade en överhettad kopplingsdosa och säkrade allt. Mycket betryggande och snabbt.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Göran N.",
    role: "Akutreparation · Januari 2025",
  },
  {
    text: "Inbyggd belysning i kök och vardagsrum. Transformerade båda rummen totalt. Bra råd om placering och ljussättning.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Susan P.",
    role: "Belysning · Mars 2025",
  },
  {
    text: "Flimrande lampor i månader — annat företag hittade inget. Dessa hittade felet på 20 minuter, lös anslutning i kopplingsdosan. Perfekt.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Tom H.",
    role: "Felsökning · Februari 2025",
  },
  {
    text: "Ny undercentral för garage installerad och godkänd på två dagar. Matningsledning, central och allting på plats. Nöjdare kan man inte bli.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Carol W.",
    role: "Undercentral · Januari 2025",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => (
  <div className={className}>
    <motion.ul
      animate={{ translateY: '-50%' }}
      transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
    >
      {[0, 1].map((dupIdx) => (
        <React.Fragment key={dupIdx}>
          {testimonials.map(({ text, image, name, role }, i) => (
            <motion.li
              key={`${dupIdx}-${i}`}
              aria-hidden={dupIdx === 1 ? 'true' : 'false'}
              tabIndex={dupIdx === 1 ? -1 : 0}
              whileHover={{
                scale: 1.03,
                y: -6,
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.12)',
                transition: { type: 'spring', stiffness: 400, damping: 17 },
              }}
              className="p-8 rounded-2xl border border-neutral-200 shadow-sm max-w-xs w-full bg-white cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <blockquote className="m-0 p-0">
                <p className="text-neutral-600 leading-relaxed font-normal m-0 text-sm">
                  "{text}"
                </p>
                <footer className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={`Recension av ${name}`}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                  <div className="flex flex-col">
                    <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900">
                      {name}
                    </cite>
                    <span className="text-xs leading-5 tracking-tight text-neutral-400 mt-0.5">
                      {role}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </motion.li>
          ))}
        </React.Fragment>
      ))}
    </motion.ul>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-[#F4F6F8] py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1280px] px-6 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-neutral-300 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-500 bg-white">
              Vad kunderna säger
            </div>
          </div>
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900"
          >
            4.9 stjärnor av 148 Google-recensioner
          </h2>
          <div className="text-2xl text-yellow-400 mt-3 tracking-widest">★★★★★</div>
          <p className="text-center mt-4 text-neutral-500 text-base leading-relaxed max-w-sm">
            Verifierade omdömen från kunder i Göteborg och omnejd.
          </p>
        </div>

        <div
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', maxHeight: '740px', overflow: 'hidden' }}
          className="flex justify-center gap-6 mt-10"
          role="region"
          aria-label="Scrollande recensioner"
        >
          <TestimonialsColumn testimonials={firstColumn}  duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
}
