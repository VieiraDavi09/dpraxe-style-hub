import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import { Header } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon, PinIcon, ServiceIcon, WhatsAppIcon } from "@/components/Icons";
import { DIFERENCIAIS, SERVICES, SITE, whatsappLink } from "@/lib/site";

const title = "D'PRAXE BARBEARIA — Barbearia no Shopping Morumbi Town, SP";
const description =
  "Corte, barba e estilo na D'PRAXE BARBEARIA, no Shopping Morumbi Town, Vila Andrade, São Paulo. Agende seu horário pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="inicio">
        <Hero />
        <Diferenciais />
        <Servicos />
        <Sobre />
        <GaleriaSection />
        <Agendamento />
        <Localizacao />
        <InstagramSection />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}

function SectionTitle({ eyebrow, title: t }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl text-cream sm:text-4xl lg:text-5xl">{t}</h2>
      <div className="mx-auto mt-6 hairline max-w-[120px]" />
    </Reveal>
  );
}

function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Interior da barbearia D'PRAXE com iluminação sofisticada"
        width={1920}
        height={1280}
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 text-center lg:px-8 lg:text-left">
        <Reveal>
          <p className="eyebrow">Vila Andrade · São Paulo</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
            Seu estilo.
            <br />
            <span className="text-gold">Nossa praxe.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-7 max-w-xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Corte, barba e estilo em um ambiente pensado para quem valoriza presença e
            personalidade.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-display text-sm uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:bg-gold-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar horário
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center border border-border px-8 py-4 font-display text-sm uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Conhecer serviços
            </a>
          </div>
        </Reveal>
        <Reveal delay={430}>
          <p className="mt-10 inline-flex items-center gap-2 font-body text-sm text-muted-foreground">
            <PinIcon className="h-4 w-4 text-gold" />
            Shopping Morumbi Town – Piso Térreo
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Diferenciais() {
  return (
    <section className="border-y border-border bg-charcoal">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {DIFERENCIAIS.map((d, i) => (
          <Reveal key={d.title} delay={i * 90} className="h-full">
            <div className="h-full bg-charcoal px-7 py-10 transition-colors duration-500 hover:bg-accent">
              <span className="font-display text-xs tracking-[0.3em] text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-lg text-cream">{d.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {d.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="O que fazemos" title="Nossos serviços" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col bg-card p-8 gold-frame">
                <ServiceIcon name={s.icon} className="text-gold" />
                <h3 className="mt-6 text-xl text-cream">{s.name}</h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <p className="mt-6 font-display text-sm uppercase tracking-[0.2em] text-gold">
                  {s.price}
                </p>
                <a
                  href={whatsappLink(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 border border-gold/50 px-6 py-3 font-display text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
                >
                  Agendar
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="border-y border-border bg-charcoal px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[auto_1fr]">
        <Reveal className="flex justify-center">
          <img
            src={logo}
            alt="Logotipo D'PRAXE Barbearia"
            width={816}
            height={816}
            loading="lazy"
            className="h-40 w-40 object-contain lg:h-56 lg:w-56"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">Sobre a D&apos;Praxe</p>
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl">
              Mais do que um corte. Uma experiência.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
              A D&apos;PRAXE BARBEARIA nasceu para oferecer uma experiência completa de cuidado
              masculino, unindo estilo, qualidade e atendimento em um ambiente moderno e
              confortável.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 border border-gold px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agendar horário
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GaleriaSection() {
  return (
    <section id="galeria" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Nosso trabalho" title="Galeria" />
        <Gallery />
      </div>
    </section>
  );
}

function Agendamento() {
  return (
    <section
      id="agendamento"
      className="relative overflow-hidden border-y border-gold/25 bg-charcoal px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <img src={heroImg} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow">Reserve seu momento</p>
          <h2 className="mt-4 text-4xl text-cream sm:text-5xl">Agende seu horário</h2>
          <div className="mx-auto mt-6 hairline max-w-[120px]" />
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-7 font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
            Escolha o melhor horário para você e venha viver a experiência D&apos;PRAXE.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-3 bg-gold px-10 py-5 font-display text-sm uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:bg-gold-soft"
          >
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </a>
          <p className="mt-5 font-body text-sm text-muted-foreground">{SITE.phoneDisplay}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Localizacao() {
  return (
    <section id="localizacao" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Venha nos visitar" title="Onde estamos" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <div className="bg-card p-9 gold-frame">
              <PinIcon className="h-6 w-6 text-gold" />
              <address className="mt-6 space-y-1 font-body text-base not-italic leading-relaxed text-cream">
                <p>{SITE.address.line1}</p>
                <p>{SITE.address.line2}</p>
                <p className="text-muted-foreground">{SITE.address.line3}</p>
              </address>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-gold px-6 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
                >
                  Como chegar
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all duration-300 hover:bg-gold-soft"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="h-[340px] w-full overflow-hidden border border-border sm:h-[420px]">
              <iframe
                title="Mapa da localização da D'PRAXE Barbearia"
                src={SITE.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[35%] contrast-[1.1]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="border-t border-border bg-charcoal px-5 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Instagram</p>
        <h2 className="mt-4 text-3xl text-cream sm:text-4xl">Siga a D&apos;Praxe</h2>
        <p className="mt-5 font-body text-base text-muted-foreground">
          Acompanhe nossos cortes, trabalhos e novidades.
        </p>
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border border-gold px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
        >
          <InstagramIcon className="h-4 w-4" />
          {SITE.instagramHandle}
        </a>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 pt-16 pb-28 lg:px-8 lg:pb-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" aria-hidden="true" width={40} height={40} loading="lazy" className="h-9 w-9 object-contain" />
            <span className="font-display text-base tracking-[0.22em] text-cream">
              D&apos;PRAXE <span className="text-gold">BARBEARIA</span>
            </span>
          </div>
          <p className="mt-5 font-body text-sm leading-relaxed text-muted-foreground">
            {SITE.address.line1}
            <br />
            {SITE.address.line2} – São Paulo/SP
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.25em] text-gold">Contato</h3>
          <p className="mt-5 font-body text-sm text-muted-foreground">{SITE.phoneDisplay}</p>
          <p className="mt-2 font-body text-sm text-muted-foreground">{SITE.instagramHandle}</p>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.25em] text-gold">Links</h3>
          <ul className="mt-5 space-y-3 font-body text-sm">
            <li>
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-gold">
                Instagram
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-gold">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-gold">
                Localização
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-border pt-7">
        <p className="text-center font-body text-xs tracking-wide text-muted-foreground">
          © 2026 D&apos;PRAXE BARBEARIA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-background/95 p-3 backdrop-blur lg:hidden">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 bg-gold py-4 font-display text-sm uppercase tracking-[0.22em] text-primary-foreground"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Agendar horário
      </a>
    </div>
  );
}
