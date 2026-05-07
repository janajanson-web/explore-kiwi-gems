import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Phone, Car, Sun, Waves, Mountain } from "lucide-react";

export const Route = createFileRoute("/sicherheit")({
  head: () => ({
    meta: [
      { title: "Sicherheit in Neuseeland – Notruf, Linksverkehr, Naturgefahren" },
      { name: "description", content: "Wichtige Sicherheitshinweise für Neuseeland-Reisende: Notruf 111, Linksverkehr, Erdbeben, UV-Strahlung und mehr." },
      { property: "og:title", content: "Sicherheit in Neuseeland" },
      { property: "og:description", content: "Notruf, Linksverkehr und Naturgefahren – kompakt erklärt." },
    ],
  }),
  component: Safety,
});

const items = [
  { icon: Phone, title: "Notruf 111", text: "Eine Nummer für Polizei, Feuerwehr und Rettungsdienst – landesweit erreichbar." },
  { icon: Car, title: "Linksverkehr", text: "Im Kreisverkehr hat von rechts Vorfahrt. Strecken werden meist unterschätzt – Pufferzeiten einplanen." },
  { icon: Mountain, title: "Erdbeben & Vulkane", text: "Bei Beben: Drop, Cover, Hold. Aktuelle Lage auf GeoNet prüfen, besonders rund um Taupo und Ruapehu." },
  { icon: Waves, title: "Tsunami-Warnungen", text: "Bei langem starken Beben an der Küste sofort hochgelegenes Gelände aufsuchen – ohne auf offizielle Warnung zu warten." },
  { icon: Sun, title: "UV-Strahlung", text: "Die UV-Strahlung ist 40 % höher als in Mitteleuropa. Sonnencreme LSF 50+, Hut und langärmlige Kleidung." },
  { icon: AlertTriangle, title: "Wetter in den Bergen", text: "Schneller Wetterumschwung möglich. DOC-Hütten registrieren, Wetterbericht (MetService) und Tracks-Status prüfen." },
];

function Safety() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sicherheit</p>
      <h1 className="font-display text-4xl font-bold text-foreground md:text-6xl">Sicher unterwegs in Aotearoa</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Neuseeland ist ein sicheres Reiseland – mit ein paar Besonderheiten, die du kennen solltest.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">{it.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-accent/30 bg-accent/10 p-6 text-sm">
        <strong className="font-semibold text-foreground">Quellen & Live-Infos:</strong>{" "}
        <a className="text-primary underline" href="https://www.geonet.org.nz/" target="_blank" rel="noreferrer">GeoNet</a>,{" "}
        <a className="text-primary underline" href="https://www.metservice.com/" target="_blank" rel="noreferrer">MetService</a>,{" "}
        <a className="text-primary underline" href="https://www.auswaertiges-amt.de/de/service/laender/neuseeland-node" target="_blank" rel="noreferrer">Auswärtiges Amt</a>.
      </div>

      <div className="mt-10">
        <Link to="/faq" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Mehr im FAQ →</Link>
      </div>
    </div>
  );
}
