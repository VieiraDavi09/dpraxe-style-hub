import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { SITE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Agendamento", href: "#agendamento" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt={SITE.name} width={48} height={48} className="h-10 w-10 shrink-0 object-contain" />
          <span className="min-w-0 truncate font-display text-base tracking-[0.22em] text-cream sm:text-lg">
            D&apos;PRAXE <span className="text-gold">BARBEARIA</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative font-body text-[0.8rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-gold px-5 py-2.5 font-display text-[0.78rem] uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar horário
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
          >
            <span
              className={`h-px w-5 bg-cream transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-cream transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background/98 transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col px-5 py-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 font-display text-sm uppercase tracking-[0.22em] text-cream transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
