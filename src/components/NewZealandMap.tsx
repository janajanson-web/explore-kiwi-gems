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
  slug: IslandSlug;
};

const airports: Airport[] = [
  { code: "AKL", name: "Auckland", x: 56.5, y: 22.5, slug: "nordinsel" },
  { code: "WLG", name: "Wellington", x: 62.5, y: 49.5, slug: "nordinsel" },
  { code: "CHC", name: "Christchurch", x: 52.5, y: 66.5, slug: "suedinsel" },
  { code: "ZQN", name: "Queenstown", x: 36.5, y: 79.5, slug: "suedinsel" },
  { code: "DUD", name: "Dunedin", x: 46.5, y: 83.5, slug: "suedinsel" },
  { code: "IVC", name: "Invercargill", x: 38.5, y: 88.5, slug: "suedinsel" },
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

        {airports.map((ap) => (
          <Tooltip key={ap.code}>
            <TooltipTrigger asChild>
              <button
                type="button"
                aria-label={`${ap.name} (${ap.code}) – Region öffnen`}
                onClick={() => navigate({ to: "/regionen/$slug", params: { slug: ap.slug } })}
                style={{ left: `${ap.x}%`, top: `${ap.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              >
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--muted-red)] opacity-40 group-hover:opacity-70" />
                  <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--muted-red)] text-[color:var(--soft-white)] ring-2 ring-[color:var(--soft-white)] shadow transition group-hover:scale-110 group-focus-visible:scale-110">
                    <Plane className="h-3.5 w-3.5" />
                  </span>
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-[color:var(--forest)] px-1.5 py-0.5 text-[10px] font-semibold text-[color:var(--soft-white)] shadow">
                  {ap.code}
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span className="font-semibold">{ap.code}</span> · {ap.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Klick auf einen Flughafen, um die zugehörige Region zu öffnen.
      </p>
    </TooltipProvider>
  );
}
