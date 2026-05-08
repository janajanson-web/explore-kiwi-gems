import { createFileRoute, Link } from "@tanstack/react-router";
import { regions } from "@/lib/regions";
import { NewZealandMap } from "@/components/NewZealandMap";

export const Route = createFileRoute("/regionen/")({
  head: () => ({
    meta: [
      { title: "Regionen Neuseelands – Nordinsel, Südinsel, Stewart Island" },
      { name: "description", content: "Übersicht der wichtigsten Regionen Neuseelands mit Highlights, Klima und besten Reisezeiten." },
      { property: "og:title", content: "Regionen Neuseelands" },
      { property: "og:description", content: "Highlights und Fakten zu Nord-, Südinsel und Stewart Island." },
    ],
  }),
  component: RegionsPage,
});

function RegionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <header className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Regionen</p>
        <h1 className="font-display text-4xl font-bold text-foreground md:text-6xl">Drei Inseln, unzählige Welten</h1>
        <p className="mt-4 text-muted-foreground">Klick dich durch die wichtigsten Regionen Neuseelands und entdecke Fakten, Highlights und beste Reisezeiten.</p>
      </header>

      <section className="mb-16 rounded-2xl border border-border bg-card p-6 md:p-10">
        <h2 className="mb-6 text-center font-display text-2xl font-bold text-foreground">Neuseeland im Überblick</h2>
        <NewZealandMap />
      </section>

      <div className="grid gap-10">
        {regions.map((r, i) => (
          <article key={r.slug} className={`grid gap-8 overflow-hidden rounded-2xl bg-card shadow-sm md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
            <img src={r.image} alt={r.name} width={1024} height={768} loading="lazy" className="h-72 w-full object-cover md:h-full" />
            <div className="p-8">
              <h2 className="font-display text-3xl font-bold text-foreground">{r.name}</h2>
              <p className="mt-1 text-sm font-medium text-primary">{r.tagline}</p>
              <p className="mt-4 text-muted-foreground">{r.intro}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {r.facts.slice(0, 4).map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                    <dd className="font-semibold text-foreground">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/regionen/$slug" params={{ slug: r.slug }} className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                Region erkunden →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
