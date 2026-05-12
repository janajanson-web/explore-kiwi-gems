import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, AlertTriangle, Phone, Car, Sun, Waves, Mountain, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ & Nützliches – Reise nach Neuseeland" },
      { name: "description", content: "Antworten zu Visum, NZeTA, Klima sowie wichtige Sicherheitshinweise: Notruf 111, Linksverkehr, Erdbeben, UV-Strahlung und mehr." },
      { property: "og:title", content: "FAQ & Nützliches – Reise nach Neuseeland" },
      { property: "og:description", content: "Antworten zu Visum, NZeTA, Klima, Sicherheit und mehr." },
    ],
  }),
  component: FAQ,
});

const safetyItems = [
  { icon: Phone, title: "Notruf 111", text: "Eine Nummer für Polizei, Feuerwehr und Rettungsdienst – landesweit erreichbar." },
  { icon: Car, title: "Linksverkehr", text: "Im Kreisverkehr hat von rechts Vorfahrt. Strecken werden meist unterschätzt – Pufferzeiten einplanen." },
  { icon: Mountain, title: "Erdbeben & Vulkane", text: <>Bei Beben: Drop, Cover, Hold. Aktuelle Lage auf <a href="https://www.geonet.org.nz" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-accent">GeoNet</a> prüfen, besonders rund um Taupo und Ruapehu.</> },
  { icon: Waves, title: "Tsunami-Warnungen", text: "Bei langem starken Beben an der Küste sofort hochgelegenes Gelände aufsuchen – ohne auf offizielle Warnung zu warten." },
  { icon: Sun, title: "UV-Strahlung", text: <>Die UV-Strahlung ist 40 % höher als in Mitteleuropa. Sonnencreme LSF 50+, Hut und langärmlige Kleidung. <span className="mt-2 block text-xs">Quelle: <a href="https://niwa.co.nz/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-accent">NIWA / Earth Sciences New Zealand</a></span></> },
  { icon: AlertTriangle, title: "Wetter in den Bergen", text: "Schneller Wetterumschwung möglich. DOC-Hütten registrieren, Wetterbericht (MetService) und Tracks-Status prüfen." },
];

function FAQ() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">FAQ & Nützliches</p>
      <h1 className="font-display text-4xl font-bold text-foreground md:text-6xl">Gut vorbereitet nach Aotearoa</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Häufige Fragen zur Reise – kurz, mit Quellen. Bitte beachte: Einreise-, Gesundheits- und Sicherheitsregeln können sich ändern – prüfe vor Reiseantritt die offiziellen Seiten.
      </p>

      <div className="mt-6 flex items-start gap-3 rounded-lg border-l-4 border-accent bg-secondary p-4 text-sm">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <p className="text-foreground">
          Für detaillierte Sicherheitshinweise siehe{" "}
          <Link to="/faq" hash="sicherheit" className="font-semibold text-primary underline underline-offset-2 hover:text-accent">
            Sicherheit
          </Link>
          .
        </p>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Häufige Fragen</h2>

        <div className="relative mt-6">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Suche nach Stichwort, z. B. Visum, Wetter, Notruf..."
            className="h-12 pl-10 text-base"
            aria-label="FAQ durchsuchen"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 rounded-xl border border-border bg-secondary p-6 text-center text-muted-foreground">
            Keine passenden Fragen gefunden. Schreib uns gerne, was dir fehlt.
          </p>
        ) : (
          <Accordion type="single" collapsible className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
            {filtered.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-0 px-6">
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  <p>{f.a}</p>
                  <p className="mt-3 text-xs">
                    <strong className="font-semibold text-foreground">Quelle:</strong>{" "}
                    {f.sources.map((s, j) => (
                      <span key={s.url}>
                        <a href={s.url} target="_blank" rel="noreferrer" className="text-primary underline hover:text-accent">{s.label}</a>
                        {j < f.sources.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </section>

      <section id="sicherheit" className="mt-16 scroll-mt-24">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Sicher unterwegs in Neuseeland</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Neuseeland ist ein sicheres Reiseland – mit ein paar Besonderheiten, die du kennen solltest.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {safetyItems.map((it) => (
            <div key={it.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-6 text-sm">
          <strong className="font-semibold text-foreground">Quellen & Live-Infos:</strong>{" "}
          <a className="text-primary underline" href="https://www.geonet.org.nz/" target="_blank" rel="noreferrer">GeoNet</a>,{" "}
          <a className="text-primary underline" href="https://www.metservice.com/" target="_blank" rel="noreferrer">MetService</a>,{" "}
          <a className="text-primary underline" href="https://www.auswaertiges-amt.de/de/service/laender/neuseeland-node" target="_blank" rel="noreferrer">Auswärtiges Amt</a>.
        </div>
      </section>
    </div>
  );
}
