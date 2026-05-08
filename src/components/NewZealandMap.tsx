import { useNavigate } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type IslandSlug = "nordinsel" | "suedinsel" | "stewart-island";

// Stylized outlines (simplified) on a 400x600 viewBox
const islands: { slug: IslandSlug; name: string; d: string }[] = [
  {
    slug: "nordinsel",
    name: "Nordinsel",
    d: "M230 40 L260 70 L275 110 L255 150 L270 185 L240 215 L260 245 L235 275 L200 260 L185 230 L160 215 L145 185 L165 150 L150 115 L175 85 L205 60 Z",
  },
  {
    slug: "suedinsel",
    name: "Südinsel",
    d: "M205 295 L240 315 L255 355 L240 395 L215 430 L185 460 L150 485 L115 500 L85 490 L70 460 L80 425 L100 395 L110 360 L135 335 L165 315 Z",
  },
  {
    slug: "stewart-island",
    name: "Stewart Island",
    d: "M115 525 L140 535 L150 555 L130 570 L105 565 L95 545 Z",
  },
];

const airports: { code: string; name: string; x: number; y: number; slug: IslandSlug }[] = [
  { code: "AKL", name: "Auckland", x: 215, y: 95, slug: "nordinsel" },
  { code: "WLG", name: "Wellington", x: 215, y: 255, slug: "nordinsel" },
  { code: "CHC", name: "Christchurch", x: 195, y: 360, slug: "suedinsel" },
  { code: "ZQN", name: "Queenstown", x: 110, y: 430, slug: "suedinsel" },
  { code: "DUD", name: "Dunedin", x: 165, y: 455, slug: "suedinsel" },
  { code: "IVC", name: "Invercargill", x: 115, y: 480, slug: "suedinsel" },
];

export function NewZealandMap() {
  const navigate = useNavigate();

  return (
    <TooltipProvider delayDuration={150}>
      <div className="mx-auto w-full max-w-md md:max-w-xl">
        <svg
          viewBox="0 0 400 600"
          className="h-auto w-full"
          role="img"
          aria-label="Interaktive Karte Neuseelands mit Inseln und Flughäfen"
        >
          {/* Ocean backdrop */}
          <rect width="400" height="600" fill="var(--ocean)" opacity="0.08" rx="16" />

          {islands.map((isl) => (
            <g
              key={isl.slug}
              role="link"
              tabIndex={0}
              aria-label={`Region ${isl.name} öffnen`}
              onClick={() => navigate({ to: "/regionen/$slug", params: { slug: isl.slug } })}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate({ to: "/regionen/$slug", params: { slug: isl.slug } });
                }
              }}
              className="cursor-pointer outline-none transition [&>path]:fill-[var(--forest)] [&>path]:hover:fill-[var(--ocean)] [&>path]:focus-visible:fill-[var(--ocean)]"
            >
              <path
                d={isl.d}
                stroke="var(--soft-white)"
                strokeWidth="2"
                style={{ transition: "fill 200ms, filter 200ms" }}
              />
              <title>{isl.name}</title>
            </g>
          ))}

          {/* Airports */}
          {airports.map((ap) => (
            <Tooltip key={ap.code}>
              <TooltipTrigger asChild>
                <g
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate({ to: "/regionen/$slug", params: { slug: ap.slug } });
                  }}
                >
                  <circle cx={ap.x} cy={ap.y} r="11" fill="var(--soft-white)" stroke="var(--muted-red)" strokeWidth="2" />
                  <foreignObject x={ap.x - 7} y={ap.y - 7} width="14" height="14" className="pointer-events-none">
                    <Plane className="h-3.5 w-3.5 text-[color:var(--muted-red)]" />
                  </foreignObject>
                </g>
              </TooltipTrigger>
              <TooltipContent>
                <span className="font-semibold">{ap.code}</span> · {ap.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </svg>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Klick auf eine Insel oder einen Flughafen, um zur Region zu gelangen.
        </p>
      </div>
    </TooltipProvider>
  );
}
