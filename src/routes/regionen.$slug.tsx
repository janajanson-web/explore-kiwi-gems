import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, CloudRain, Info, ShieldAlert, Lightbulb, ExternalLink, Clock, Wallet, Telescope, Sparkles } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getRegion, regions, type Region, type Effort, type SafetyItem } from "@/lib/regions";

export const Route = createFileRoute("/regionen/$slug")({
  loader: ({ params }) => {
    const region = getRegion(params.slug);
    if (!region) throw notFound();
    return { region };
  },
  head: ({ loaderData }) => {
    const r = loaderData?.region;
    if (!r) return { meta: [{ title: "Region nicht gefunden" }] };
    return {
      meta: [
        { title: `${r.name} – Explore New Zealand` },
        { name: "description", content: r.intro.slice(0, 155) },
        { property: "og:title", content: `${r.name} – ${r.tagline}` },
        { property: "og:description", content: r.intro.slice(0, 155) },
        { property: "og:image", content: r.image },
      ],
    };
  },
  component: RegionDetail,
});

const imageFor = (query: string, w = 1200, h = 800) =>
  `https://loremflickr.com/${w}/${h}/${encodeURIComponent(query)}?lock=${Math.abs(
    [...query].reduce((a, c) => a + c.charCodeAt(0), 0),
  )}`;

const effortLabel: Record<Effort, string> = {
  easy: "Leicht",
  moderate: "Mittel",
  challenging: "Anspruchsvoll",
};

const effortClass: Record<Effort, string> = {
  easy: "bg-primary text-primary-foreground hover:bg-primary",
  moderate: "bg-[hsl(206_38%_40%)] text-primary-foreground hover:bg-[hsl(206_38%_40%)]",
  challenging: "bg-destructive text-destructive-foreground hover:bg-destructive",
};

const safetyIcon: Record<SafetyItem["category"], typeof AlertTriangle> = {
  natural: AlertTriangle,
  weather: CloudRain,
  general: Info,
};

function RegionDetail() {
  const { region: r } = Route.useLoaderData() as { region: Region };

  return (
    <article>
      <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img src={r.image} alt={r.name} width={1024} height={768} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 text-primary-foreground md:px-8">
          <Link to="/regionen" className="text-xs uppercase tracking-widest opacity-90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] hover:opacity-100">← Alle Regionen</Link>
          <h1 className="mt-3 font-display text-5xl font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] md:text-7xl">{r.name}</h1>
          <p className="mt-2 text-lg opacity-95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">{r.tagline}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-8">
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-foreground">{r.intro}</p>

          <h2 className="mt-12 font-display text-3xl font-bold">Highlights & Aktivitäten</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {r.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-lg bg-secondary p-4 text-sm">
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="font-medium text-foreground">{h}</span>
              </li>
            ))}
          </ul>

          <Alert className="mt-6 border-primary/20 bg-secondary text-primary">
            <AlertTriangle className="h-5 w-5 !text-primary" />
            <AlertDescription className="text-foreground">
              <strong className="font-semibold text-primary">Hinweis:</strong> Vor jeder Aktivität bitte unsere{" "}
              <Link to="/faq" className="font-semibold text-primary underline underline-offset-2 hover:text-accent">Sicherheitsinformationen</Link>{" "}
              beachten – besonders bei Wassersport, Bergwanderungen und Skifahren.
            </AlertDescription>
          </Alert>

          <h2 className="mt-12 font-display text-3xl font-bold">Beste Reisezeit</h2>
          <p className="mt-2 text-muted-foreground">{r.bestTime}</p>

          <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">Quellen:</strong>{" "}
            {r.sources.map((s, i) => (
              <span key={s.url}>
                <a href={s.url} target="_blank" rel="noreferrer" className="text-primary underline hover:text-accent">{s.label}</a>
                {i < r.sources.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-xl bg-secondary p-6">
          <h3 className="font-display text-xl font-bold text-foreground">Fakten auf einen Blick</h3>
          <dl className="mt-4 space-y-4">
            {r.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                <dd className="font-semibold text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-8 font-display text-lg font-bold text-foreground">Weitere Regionen</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {regions.filter((x) => x.slug !== r.slug).map((x) => (
              <li key={x.slug}>
                <Link to="/regionen/$slug" params={{ slug: x.slug }} className="text-primary hover:text-accent">→ {x.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Excursions */}
      <section id="aktivitaeten" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ausflüge & Wanderungen</h2>
          <p className="mt-2 text-muted-foreground">Unsere Empfehlungen – von Spaziergang bis Mehrtagestour.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {r.excursions.map((e) => (
              <Card key={e.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={e.image ?? imageFor(e.imageQuery)}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold leading-tight text-foreground">{e.title}</h3>
                    <Badge className={cn("shrink-0", effortClass[e.effort])}>{effortLabel[e.effort]}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
                  <div className="mt-4 space-y-3 border-t border-[color:var(--sand,theme(colors.secondary.DEFAULT))] pt-3 text-sm">
                    <div className="grid grid-cols-[1.25rem_5.5rem_1fr] items-start gap-x-2 gap-y-1">
                      <Clock className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span className="font-medium text-foreground whitespace-nowrap">Dauer:</span>
                      <span className="text-muted-foreground">{e.duration}</span>
                    </div>
                    <div className="grid grid-cols-[1.25rem_5.5rem_1fr] items-start gap-x-2 gap-y-1">
                      <Wallet className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span className="font-medium text-foreground whitespace-nowrap">Kosten p. P.:</span>
                      <ul className="space-y-0.5 text-muted-foreground">
                        {e.priceRange.split("·").map((part, idx) => (
                          <li key={idx}>{part.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                    Quelle:{" "}
                    {e.sourceUrl ? (
                      <a
                        href={e.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-accent"
                      >
                        {e.source} <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-foreground">{e.source}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-lg border border-primary/20 bg-secondary px-4 py-3 text-sm text-foreground">
            <ShieldAlert className="h-5 w-5 shrink-0 text-primary" />
            <p>
              <strong className="font-semibold text-primary">Hinweis:</strong> Vor jeder Aktivität bitte unsere{" "}
              <Link to="/faq" className="font-semibold text-primary underline underline-offset-2 hover:text-accent">
                Sicherheitsinformationen
              </Link>{" "}
              lesen.
            </p>
          </div>
        </div>
      </section>

      {/* Stewart Island: Dark Sky Sanctuary */}
      {r.slug === "stewart-island" && <DarkSkySection />}

      {/* Kulinarisches */}
      <section id="kulinarisches" className="scroll-mt-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Kulinarisches aus der Region</h2>
          <p className="mt-2 text-muted-foreground">
            {r.slug === "stewart-island"
              ? "Geschmack der Insel – fangfrische Meeresfrüchte und traditionelle Spezialitäten direkt vom Hafen."
              : r.slug === "suedinsel"
                ? "Geschmack der Südinsel – weltberühmte Weinregionen, frische Meeresfrüchte und alpine Spezialitäten."
                : "Geschmack der Region – Spezialitäten, Märkte, Manufakturen und ausgewählte Weine."}
          </p>

          <div className="mt-10 space-y-12">
            {r.foodAndWine.map((f, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={f.id}
                  className={cn(
                    "grid items-center gap-8 md:grid-cols-2",
                    reverse && "md:[&>div:first-child]:order-2",
                  )}
                >
                  <div className="overflow-hidden rounded-xl shadow-md">
                    <img
                      src={f.image ?? imageFor(f.imageQuery, 1000, 750)}
                      alt={f.title}
                      loading="lazy"
                      className="aspect-[4/3] h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-accent">{f.location}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">{f.title}</h3>
                    <p className="mt-3 leading-relaxed text-foreground/85">{f.description}</p>
                    {f.insiderTip && (
                      <div className="mt-4 flex gap-3 rounded-lg border-l-4 border-accent bg-background p-4">
                        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <p className="text-sm text-foreground">
                          <strong className="font-semibold text-accent">Insider-Tipp:</strong> {f.insiderTip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Safety */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Sicherheit in dieser Region</h2>
          <p className="mt-2 text-muted-foreground">
            Region-spezifische Hinweise – ergänzend zu den allgemeinen{" "}
            <Link to="/faq" className="text-primary underline hover:text-accent">
              Sicherheitsinformationen
            </Link>
            .
          </p>

          <ul className="mt-8 space-y-4">
            {r.regionalSafety.map((s) => {
              const Icon = safetyIcon[s.category];
              return (
                <li
                  key={s.id}
                  className="rounded-r-lg border-l-4 border-primary bg-secondary/60 p-5"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/85">{s.description}</p>
                      <a
                        href={s.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:text-accent"
                      >
                        Quelle: {s.source} <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </article>
  );
}


function DarkSkySection() {
  return (
    <section id="dark-sky" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <div className="relative overflow-hidden rounded-xl border-l-4 border-primary bg-secondary/60 p-6 md:p-8">
          <Badge className="absolute right-4 top-4 hidden bg-primary text-primary-foreground hover:bg-primary sm:inline-flex">
            Dark Sky Sanctuary — IDA 2019
          </Badge>
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 h-7 w-7 shrink-0 text-primary" aria-hidden />
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Rakiura — Land der leuchtenden Himmel
              </h2>
              <Badge className="mt-2 inline-flex bg-primary text-primary-foreground hover:bg-primary sm:hidden">
                Dark Sky Sanctuary — IDA 2019
              </Badge>
              <p className="mt-3 leading-relaxed text-foreground/85">
                Der Māori-Name Rakiura bedeutet „Land der leuchtenden Himmel". 2019 wurde Stewart
                Island als 5. International Dark Sky Sanctuary der Welt ausgezeichnet — der
                südlichste seiner Art, mit Messwerten nahe am theoretischen Maximum der Dunkelheit.
                Mehrtägige Aurora-Hunting-Touren mit Guides, Teleskopen und Foto-Anleitung bieten
                u. a. Viva Expeditions und Ruggedy Range an.
              </p>
              <a
                href="https://www.stewartisland.co.nz/dark-sky-sanctuary/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:text-accent"
              >
                Quelle: Stewart Island Promotion Association / IDA{" "}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
