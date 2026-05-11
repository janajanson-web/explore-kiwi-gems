import { useNavigate } from "@tanstack/react-router";
import nzMap from "@/assets/nz-map.png";

type IslandSlug = "nordinsel" | "suedinsel" | "stewart-island";

type IslandShape = {
  slug: IslandSlug;
  label: string;
  // Polygonpunkte in % der Bildfläche (viewBox 100x100), möglichst entlang der Küstenlinie
  points: string;
  // Position des Labels in %
  labelX: number;
  labelY: number;
};

const islands: IslandShape[] = [
  {
    slug: "nordinsel",
    label: "Nordinsel",
    points: [
      [52, 4],   // Cape Reinga
      [56, 8],
      [60, 14],
      [64, 18],  // Coromandel
      [70, 22],  // Bay of Plenty
      [76, 28],  // East Cape
      [74, 34],
      [70, 40],  // Hawke's Bay
      [68, 46],
      [64, 51],  // Wairarapa
      [60, 52],  // Wellington
      [55, 50],
      [50, 46],
      [44, 40],  // Taranaki Bulge
      [42, 36],
      [46, 30],
      [48, 24],
      [50, 18],
      [50, 12],
      [51, 8],
    ]
      .map((p) => p.join(","))
      .join(" "),
    labelX: 60,
    labelY: 30,
  },
  {
    slug: "suedinsel",
    label: "Südinsel",
    points: [
      [24, 54],  // Cape Farewell
      [32, 55],
      [42, 56],
      [50, 58],  // Marlborough
      [54, 62],  // Kaikoura
      [56, 68],  // Christchurch
      [54, 74],
      [52, 80],  // Otago
      [48, 84],  // Dunedin
      [44, 88],
      [38, 90],  // Bluff
      [30, 88],
      [24, 84],  // Fiordland SW
      [20, 78],
      [18, 72],  // West Coast
      [20, 66],
      [22, 60],
    ]
      .map((p) => p.join(","))
      .join(" "),
    labelX: 38,
    labelY: 72,
  },
  {
    slug: "stewart-island",
    label: "Stewart Island",
    points: [
      [32, 93],
      [37, 92],
      [42, 93],
      [44, 96],
      [40, 99],
      [34, 98.5],
      [31, 96],
    ]
      .map((p) => p.join(","))
      .join(" "),
    labelX: 50,
    labelY: 96,
  },
];

export function NewZealandMap() {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <img
        src={nzMap}
        alt="Karte Neuseelands mit anklickbaren Regionen"
        className="h-auto w-full rounded-xl border border-border shadow-sm"
        loading="lazy"
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {islands.map((isl) => (
          <polygon
            key={isl.slug}
            points={isl.points}
            onClick={() => navigate({ to: "/regionen/$slug", params: { slug: isl.slug } })}
            className="cursor-pointer fill-[color:var(--forest)]/0 stroke-[color:var(--forest)]/60 transition hover:fill-[color:var(--forest)]/25 hover:stroke-[color:var(--forest)] focus:outline-none focus-visible:fill-[color:var(--forest)]/30"
            strokeWidth={0.6}
            vectorEffect="non-scaling-stroke"
            tabIndex={0}
            role="button"
            aria-label={`${isl.label} – Region öffnen`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate({ to: "/regionen/$slug", params: { slug: isl.slug } });
              }
            }}
          >
            <title>{isl.label}</title>
          </polygon>
        ))}
      </svg>

      {/* Region-Labels über der SVG (nicht-interaktiv) */}
      {islands.map((isl) => (
        <span
          key={`label-${isl.slug}`}
          style={{ left: `${isl.labelX}%`, top: `${isl.labelY}%` }}
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-[color:var(--soft-white)]/85 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--forest)] shadow-sm md:text-xs"
        >
          {isl.label}
        </span>
      ))}

      <p className="mt-4 text-center text-base font-medium text-foreground md:text-lg">
        Klicke auf eine Insel, um die zugehörige Region zu öffnen.
      </p>
    </div>
  );
}
