import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getRegion, regions, type Region } from "@/lib/regions";

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

function RegionDetail() {
  const { region: r } = Route.useLoaderData() as { region: Region };

  return (
    <article>
      <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img src={r.image} alt={r.name} width={1024} height={768} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 text-primary-foreground md:px-8">
          <Link to="/regionen" className="text-xs uppercase tracking-widest opacity-80 hover:opacity-100">← Alle Regionen</Link>
          <h1 className="mt-3 font-display text-5xl font-bold md:text-7xl">{r.name}</h1>
          <p className="mt-2 text-lg opacity-90">{r.tagline}</p>
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
    </article>
  );
}
