import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ – Reise nach Neuseeland: Visum, NZeTA, Klima" },
      { name: "description", content: "Knapp beantwortet: Visum, NZeTA, Reisezeit, Gesundheit, Trinkwasser, Notruf, Linksverkehr und Naturgefahren." },
      { property: "og:title", content: "FAQ – Reise nach Neuseeland" },
      { property: "og:description", content: "Antworten zu Visum, NZeTA, Klima, Sicherheit und mehr." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  {
    q: "Brauche ich ein Visum für Neuseeland?",
    a: "Deutsche, österreichische und schweizerische Staatsangehörige benötigen für touristische Aufenthalte bis 90 Tage kein klassisches Visum, jedoch eine elektronische Reisegenehmigung (NZeTA) plus Tourismusabgabe (IVL).",
    sources: [{ label: "Immigration NZ", url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta" }],
  },
  {
    q: "Was ist die NZeTA und wie beantrage ich sie?",
    a: "Die NZeTA (New Zealand Electronic Travel Authority) ist 2 Jahre gültig und kostet 17 NZD (App) bzw. 23 NZD (Web), zzgl. 100 NZD IVL. Beantragung idealerweise mind. 72 Stunden vor Abflug.",
    sources: [{ label: "NZeTA-Antrag", url: "https://nzeta.immigration.govt.nz/" }],
  },
  {
    q: "Wann ist die beste Reisezeit?",
    a: "Hochsaison ist Dezember bis Februar (Sommer). Für Ski Juli bis September. Wandern & wenig Andrang: März/April und Oktober/November.",
    sources: [{ label: "Tourism NZ – Klima", url: "https://www.newzealand.com/de/feature/weather-and-climate/" }],
  },
  {
    q: "Welche Gesundheitsvorsorge brauche ich?",
    a: "Keine Pflichtimpfungen für Direkteinreisen aus DACH. Standardimpfungen aktuell halten. Eine Auslandskrankenversicherung mit Rücktransport ist dringend empfohlen.",
    sources: [{ label: "Auswärtiges Amt", url: "https://www.auswaertiges-amt.de/de/service/laender/neuseeland-node/neuseelandsicherheit/211628" }],
  },
  {
    q: "Kann ich Leitungswasser trinken?",
    a: "In Städten ist Leitungswasser unbedenklich. In der Wildnis Wasser aus Bächen und Seen vor dem Trinken filtern oder abkochen (Giardien-Risiko).",
    sources: [{ label: "Ministry of Health NZ", url: "https://www.health.govt.nz/your-health/healthy-living/environmental-health/drinking-water" }],
  },
  {
    q: "Welche Notrufnummer gilt in Neuseeland?",
    a: "Die zentrale Notrufnummer ist 111 (Polizei, Feuerwehr, Rettungsdienst). Für Wanderer: Personal Locator Beacon (PLB) mitnehmen.",
    sources: [{ label: "NZ Police", url: "https://www.police.govt.nz/contact-us/emergency" }],
  },
  {
    q: "Wie funktioniert der Linksverkehr?",
    a: "In Neuseeland herrscht Linksverkehr. An Kreisverkehren hat das von rechts kommende Fahrzeug Vorfahrt. Viele Straßen sind schmal und kurvig – realistische Fahrzeiten einplanen.",
    sources: [{ label: "NZ Transport Agency", url: "https://www.nzta.govt.nz/safety/driving-safely/visiting-drivers/" }],
  },
  {
    q: "Welche Naturgefahren gibt es?",
    a: "Erdbeben, Vulkane (z. B. Tongariro, White Island), Tsunamis, schnelle Wetterumschwünge in den Bergen und starke UV-Strahlung. Vor Outdoor-Aktivitäten Wetter und Warnungen prüfen.",
    sources: [
      { label: "GeoNet", url: "https://www.geonet.org.nz/" },
      { label: "MetService", url: "https://www.metservice.com/" },
    ],
  },
  {
    q: "Brauche ich einen internationalen Führerschein?",
    a: "Empfohlen ist ein internationaler Führerschein zusammen mit dem deutschen Führerschein, oder eine beglaubigte englische Übersetzung. Gültig bis zu 12 Monate.",
    sources: [{ label: "NZTA – Visiting drivers", url: "https://www.nzta.govt.nz/safety/driving-safely/visiting-drivers/" }],
  },
];

function FAQ() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Häufige Fragen</p>
      <h1 className="font-display text-4xl font-bold text-foreground md:text-6xl">FAQ – Reise nach Neuseeland</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Alle Antworten kurz und mit Quellen. Bitte beachte: Einreise- und Gesundheitsregeln können sich ändern – prüfe vor Reiseantritt die offiziellen Seiten.
      </p>

      <div className="relative mt-8">
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
    </div>
  );
}
