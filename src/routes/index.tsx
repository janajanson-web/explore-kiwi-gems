import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { regions } from "@/lib/regions";
import { Compass, Mountain, ShieldCheck, HelpCircle } from "lucide-react";
import cableBay from "@/assets/hero-cable-bay.jpg";
import haka from "@/assets/hero-haka.jpg";
import auckland from "@/assets/hero-auckland.jpg";
import waiheke from "@/assets/hero-waiheke.jpg";
import splitApple from "@/assets/hero-split-apple.jpg";
import kiwi from "@/assets/hero-kiwi.jpg";
import hobbiton from "@/assets/hero-hobbiton.jpg";

const slides = [
  { src: cableBay, alt: "Cable Bay bei Nelson mit türkisem Wasser und Schafen" },
  { src: haka, alt: "Maori-Tänzer beim Haka" },
  { src: auckland, alt: "Skyline von Auckland bei Sonnenuntergang" },
  { src: kiwi, alt: "Kiwi-Vogel im neuseeländischen Farnwald" },
  { src: hobbiton, alt: "Hobbiton Movie Set in Matamata mit Hobbithöhle" },
  { src: waiheke, alt: "Weinberge auf Waiheke Island" },
  { src: splitApple, alt: "Split Apple Rock bei Kaiteriteri" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore New Zealand – 100% Neuseeland entdecken" },
      { name: "description", content: "Atemberaubende Landschaften, echte Abenteuer und ehrliche Insider-Tipps aus dem Land der Kiwis." },
      { property: "og:title", content: "Explore New Zealand – 100% Neuseeland" },
      { property: "og:description", content: "Insider-Tipps und Live-Eindrücke aus Aotearoa." },
      { property: "og:image", content: cableBay },
    ],
  }),
  component: Index,
});

function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 9000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="absolute inset-0">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={s.src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <img
                src={s.src}
                alt={s.alt}
                width={1920}
                height={1088}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center gap-2 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.5))]">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${selected === i ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/60 hover:bg-primary-foreground/90"}`}
          />
        ))}
      </div>
    </div>
  );
}

type QuickLink = {
  icon: typeof Compass;
  title: string;
  text: string;
} & (
  | { to: "/regionen" | "/faq"; params?: undefined }
  | { to: "/regionen/$slug"; params: { slug: string } }
);

const quickLinks: QuickLink[] = [
  { icon: Compass, title: "Top-Regionen", text: "Sehenswerte Orte", to: "/regionen" },
  { icon: Mountain, title: "Abenteuer & Aktivitäten", text: "Wandern & Outdoor", to: "/regionen/$slug", params: { slug: "suedinsel" } },
  { icon: ShieldCheck, title: "Sicherheit", text: "Hinweise vor Ort", to: "/faq" },
  { icon: HelpCircle, title: "Häufige Fragen", text: "Visum, Klima & mehr", to: "/faq" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroSlider />
        <div className="pointer-events-none relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">Naturally Epic</p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
            100% Neuseeland
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/90 md:text-xl">
            Entdecke atemberaubende Landschaften, echte Abenteuer und ehrliche Insider-Tipps aus dem Land der Kiwis.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <Link to="/regionen" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
              Regionen entdecken →
            </Link>
            <Link to="/faq" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
              Reise planen
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links bar */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4 md:px-8">
          {quickLinks.map((it) => {
            const inner = (
              <>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground">{it.title}</div>
                  <div className="text-sm text-muted-foreground">{it.text}</div>
                </div>
              </>
            );
            const cls = "group flex items-center gap-3 rounded-lg p-3 transition hover:bg-card hover:shadow-sm";
            if (it.to === "/regionen/$slug") {
              return (
                <Link key={it.title} to={it.to} params={it.params} className={cls}>{inner}</Link>
              );
            }
            return (
              <Link key={it.title} to={it.to} className={cls}>{inner}</Link>
            );
          })}
        </div>
      </section>

      {/* Regions */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Entdecke unsere Regionen</h2>
            <p className="mt-3 text-muted-foreground">Von wilden Küsten bis zu alpinen Gipfeln – jede Region erzählt ihre eigene Geschichte.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {regions.map((r) => (
            <Link
              key={r.slug}
              to="/regionen/$slug"
              params={{ slug: r.slug }}
              className="group relative overflow-hidden rounded-xl shadow-md transition hover:shadow-xl"
            >
              <img src={r.image} alt={r.name} width={1024} height={768} loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <div className="font-display text-2xl font-bold">{r.name}</div>
                <div className="mt-1 text-sm opacity-90">{r.tagline}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                  Mehr erfahren <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 md:items-center md:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Reise gut vorbereitet</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Visum, NZeTA, Linksverkehr, Naturgefahren – im FAQ-Bereich findest du knappe Antworten mit verlässlichen Quellen.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link to="/faq" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
              Zu den FAQ →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
