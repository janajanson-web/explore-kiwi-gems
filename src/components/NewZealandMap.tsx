import { useNavigate } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import nzMap from "@/assets/nz-map.png";

type IslandSlug = "nordinsel" | "suedinsel" | "stewart-island";

type Airport = {
  code: string;
  name: string;
  x: number; // % relativ zum Bild
  y: number;
};

const airports: Airport[] = [
  { code: "AKL", name: "Auckland", x: 56.5, y: 22.5 },
  { code: "WLG", name: "Wellington", x: 62.5, y: 49.5 },
  { code: "CHC", name: "Christchurch", x: 52.5, y: 66.5 },
  { code: "ZQN", name: "Queenstown", x: 36.5, y: 79.5 },
  { code: "DUD", name: "Dunedin", x: 46.5, y: 83.5 },
  { code: "IVC", name: "Invercargill", x: 38.5, y: 88.5 },
];

type IslandZone = {
  slug: IslandSlug;
  label: string;
  // Bounding box in % of the image
  left: number;
  top: number;
  width: number;
  height: number;
  rounded: string;
};

const islandZones: IslandZone[] = [
  { slug: "nordinsel", label: "Nordinsel", left: 38, top: 4, width: 42, height: 48, rounded: "rounded-[55%_45%_60%_40%/55%_50%_50%_45%]" },
  { slug: "suedinsel", label: "Südinsel", left: 18, top: 54, width: 52, height: 38, rounded: "rounded-[60%_40%_55%_45%/50%_55%_45%_55%]" },
];

export function NewZealandMap() {
  const navigate = useNavigate();

  return (
    <TooltipProvider delayDuration={150}>
      <div className="relative mx-auto w-full max-w-2xl">
        <img
          src={nzMap}
          alt="Karte Neuseelands mit den wichtigsten Flughäfen"
          className="h-auto w-full rounded-xl border border-border shadow-sm"
          loading="lazy"
        />

        {/* Klickbare Insel-Zonen mit Pulsation */}
        {islandZones.map((zone) => (
          <button
            key={zone.slug}
            type="button"
            aria-label={`${zone.label} – Region öffnen`}
            onClick={() => navigate({ to: "/regionen/$slug", params: { slug: zone.slug } })}
            style={{
              left: `${zone.left}%`,
              top: `${zone.top}%`,
              width: `${zone.width}%`,
              height: `${zone.height}%`,
            }}
            className={`group absolute z-10 cursor-pointer ${zone.rounded} bg-[color:var(--forest)]/0 ring-2 ring-[color:var(--forest)]/40 transition hover:bg-[color:var(--forest)]/20 hover:ring-[color:var(--forest)] hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--ocean)] motion-safe:animate-pulse`}
          >
            <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[color:var(--forest)]/0 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--forest)] opacity-0 transition group-hover:bg-[color:var(--soft-white)]/90 group-hover:opacity-100">
              {zone.label}
            </span>
          </button>
        ))}

        {/* Stewart Island – eigene sichtbare Insel-Form */}
        <button
          type="button"
          aria-label="Stewart Island – Region öffnen"
          onClick={() => navigate({ to: "/regionen/$slug", params: { slug: "stewart-island" } })}
          style={{ left: "30%", top: "93%", width: "14%", height: "8%" }}
          className="group absolute z-10 -translate-y-1/2 cursor-pointer rounded-[60%_40%_55%_45%/55%_60%_40%_50%] bg-[color:var(--forest)] ring-2 ring-[color:var(--soft-white)] shadow-md transition hover:scale-110 hover:bg-[color:var(--forest)] hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--ocean)] motion-safe:animate-pulse"
        >
          <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-[color:var(--forest)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--soft-white)] shadow">
            Stewart Island
          </span>
        </button>

        {/* Flughäfen – statische Info-Marker (nicht klickbar) */}
        {airports.map((ap) => (
          <Tooltip key={ap.code}>
            <TooltipTrigger asChild>
              <span
                role="img"
                aria-label={`Flughafen ${ap.name} (${ap.code})`}
                style={{ left: `${ap.x}%`, top: `${ap.y}%` }}
                className="pointer-events-auto absolute z-20 -translate-x-1/2 -translate-y-1/2"
              >
                <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--muted-red)] text-[color:var(--soft-white)] ring-2 ring-[color:var(--soft-white)] shadow">
                  <Plane className="h-3 w-3" />
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-[color:var(--forest)] px-1.5 py-0.5 text-[10px] font-semibold text-[color:var(--soft-white)] shadow">
                  {ap.code}
                </span>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <span className="font-semibold">{ap.code}</span> · {ap.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <p className="mt-4 text-center text-base font-medium text-foreground md:text-lg">
        Klicke auf eine Insel, um die zugehörige Region zu öffnen. Flughäfen dienen nur zur Orientierung.
      </p>
    </TooltipProvider>
  );
}
