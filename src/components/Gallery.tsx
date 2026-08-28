import { useEffect, useState } from "react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import { Reveal } from "./Reveal";

const IMAGES = [
  { src: g1, alt: "Corte masculino com degradê finalizado", span: "lg:row-span-2" },
  { src: g3, alt: "Ferramentas de barbearia sobre bancada escura", span: "" },
  { src: g2, alt: "Barbeiro fazendo o desenho da barba com navalha", span: "lg:row-span-2" },
  { src: g5, alt: "Ambiente da barbearia com espelhos e luz quente", span: "" },
  { src: g4, alt: "Detalhe da cadeira de barbeiro em couro", span: "" },
  { src: g6, alt: "Cliente com corte e barba finalizados", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const current = active !== null ? IMAGES[active] : undefined;

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {IMAGES.map((img, i) => (
          <Reveal key={img.alt} delay={i * 70} className={`h-full ${img.span}`}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative h-full w-full overflow-hidden gold-frame"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-background/45 transition-opacity duration-500 group-hover:opacity-0" />
              <span className="absolute inset-x-0 bottom-0 p-4 text-left font-display text-[0.7rem] uppercase tracking-[0.22em] text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Ampliar
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm animate-in fade-in duration-300"
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[86vh] max-w-full border border-gold/30 object-contain"
          />
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 border border-border px-4 py-2 font-display text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:text-gold"
          >
            Fechar
          </button>
        </div>
      )}
    </>
  );
}
