import { useNavigate } from "@tanstack/react-router";
import nzMap from "@/assets/nz-map.png";

type IslandSlug = "nordinsel" | "suedinsel" | "stewart-island";

type Zone = {
  slug: IslandSlug;
  label: string;
  // Bounding box in % der Bildfläche
  left: number;
  top: number;
  width: number;
  height: number;
};

const zones: Zone[] = [
  { slug: "nordinsel", label: "Nordinsel", left: 47, top: 5, width: 32, height: 45 },
  { slug: "suedinsel", label: "Südinsel", left: 30, top: 47, width: 30, height: 42 },
  { slug: "stewart-island", label: "Stewart Island", left: 33, top: 86, width: 7, height: 8 },
];

export function NewZealandMap() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative">
        <img
          src={nzMap}
          alt="Karte Neuseelands mit den wichtigsten Flughäfen"
          className="h-auto w-full rounded-xl border border-border shadow-sm"
          loading="lazy"
        />
        {zones.map((z) => (
          <button
            key={z.slug}
            type="button"
            aria-label={`${z.label} – Region öffnen`}
            title={z.label}
            onClick={() => navigate({ to: "/regionen/$slug", params: { slug: z.slug } })}
            style={{
              left: `${z.left}%`,
              top: `${z.top}%`,
              width: `${z.width}%`,
              height: `${z.height}%`,
            }}
            className="absolute cursor-pointer rounded-2xl border-2 border-transparent bg-transparent transition hover:border-[color:var(--ocean)] hover:bg-[color:var(--ocean)]/15 focus:outline-none focus-visible:border-[color:var(--ocean)] focus-visible:bg-[color:var(--ocean)]/20"
          >
            <span className="sr-only">{z.label}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-base font-medium text-foreground md:text-lg">
        Klicke auf eine Insel, um die zugehörige Region zu öffnen.
      </p>
    </div>
  );
}
