import { useNavigate } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type IslandSlug = "nordinsel" | "suedinsel" | "stewart-island";

// More realistic outlines of New Zealand on a 400x640 viewBox.
// Coordinates approximated from a Mercator-style outline of NZ.
const islands: { slug: IslandSlug; name: string; d: string }[] = [
  {
    slug: "nordinsel",
    name: "Nordinsel",
    d: `M252,38
        C262,40 268,52 266,64
        C272,72 270,82 264,88
        C272,96 280,108 282,124
        C286,140 278,152 268,160
        C278,170 286,184 290,200
        C294,216 286,232 274,242
        C282,256 286,272 280,288
        C272,304 254,312 240,316
        C232,326 218,332 204,330
        C190,328 178,318 172,306
        C158,304 146,294 142,280
        C138,266 144,252 154,244
        C146,232 142,216 148,202
        C140,194 134,182 138,168
        C130,160 126,146 132,134
        C124,124 124,108 134,100
        C130,88 138,74 152,72
        C160,62 174,56 188,60
        C198,50 214,42 230,44
        C236,38 244,36 252,38 Z`,
  },
  {
    slug: "suedinsel",
    name: "Südinsel",
    d: `M232,330
        C246,336 254,350 252,366
        C258,378 254,392 244,400
        C250,414 244,430 232,438
        C238,452 232,468 220,476
        C224,490 216,504 204,510
        C208,524 198,536 184,540
        C188,554 176,566 162,568
        C166,580 154,592 140,592
        C130,598 116,594 110,584
        C96,584 86,572 90,558
        C78,556 70,544 76,532
        C68,524 66,510 74,500
        C68,488 72,474 84,468
        C80,454 88,440 102,438
        C104,424 116,414 130,416
        C138,406 150,400 162,402
        C170,392 184,388 198,392
        C210,386 224,388 232,398
        L232,330 Z`,
  },
  {
    slug: "stewart-island",
    name: "Stewart Island",
    d: `M118,608
        C130,608 142,614 144,624
        C150,632 146,644 136,648
        C128,656 114,654 108,646
        C98,644 94,632 100,624
        C104,614 110,608 118,608 Z`,
  },
];

type City = {
  code?: string;
  name: string;
  x: number;
  y: number;
  slug: IslandSlug;
  isAirport?: boolean;
  capital?: boolean;
};

const cities: City[] = [
  // North Island
  { code: "AKL", name: "Auckland", x: 218, y: 110, slug: "nordinsel", isAirport: true },
  { name: "Hamilton", x: 220, y: 145, slug: "nordinsel" },
  { name: "Tauranga", x: 250, y: 140, slug: "nordinsel" },
  { name: "Rotorua", x: 240, y: 170, slug: "nordinsel" },
  { name: "Napier", x: 260, y: 220, slug: "nordinsel" },
  { name: "New Plymouth", x: 175, y: 215, slug: "nordinsel" },
  { code: "WLG", name: "Wellington", x: 220, y: 305, slug: "nordinsel", isAirport: true, capital: true },
  // South Island
  { name: "Nelson", x: 170, y: 360, slug: "suedinsel" },
  { code: "CHC", name: "Christchurch", x: 188, y: 440, slug: "suedinsel", isAirport: true },
  { code: "ZQN", name: "Queenstown", x: 110, y: 510, slug: "suedinsel", isAirport: true },
  { code: "DUD", name: "Dunedin", x: 168, y: 540, slug: "suedinsel", isAirport: true },
  { code: "IVC", name: "Invercargill", x: 118, y: 580, slug: "suedinsel", isAirport: true },
  { name: "Greymouth", x: 122, y: 450, slug: "suedinsel" },
];

export function NewZealandMap() {
  const navigate = useNavigate();

  return (
    <TooltipProvider delayDuration={150}>
      <div className="mx-auto w-full max-w-md md:max-w-xl">
        <svg
          viewBox="0 0 400 680"
          className="h-auto w-full"
          role="img"
          aria-label="Karte Neuseelands mit Inseln, Städten und Flughäfen"
        >
          <defs>
            <pattern id="ocean-lines" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M0,3 L6,3" stroke="var(--ocean)" strokeOpacity="0.08" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Ocean backdrop */}
          <rect width="400" height="680" fill="var(--ocean)" opacity="0.06" rx="16" />
          <rect width="400" height="680" fill="url(#ocean-lines)" rx="16" />

          {/* Compass */}
          <g transform="translate(360, 40)">
            <circle r="14" fill="var(--soft-white)" stroke="var(--forest)" strokeWidth="1" />
            <path d="M0,-10 L3,0 L0,10 L-3,0 Z" fill="var(--forest)" />
            <text y="-16" textAnchor="middle" fontSize="9" fill="var(--forest)" fontWeight="600">N</text>
          </g>

          {/* Islands */}
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
              className="cursor-pointer outline-none [&>path]:fill-[var(--forest)] [&>path]:hover:fill-[var(--ocean)] [&>path]:focus-visible:fill-[var(--ocean)]"
            >
              <path
                d={isl.d}
                stroke="var(--soft-white)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                style={{ transition: "fill 200ms" }}
              />
              <title>{isl.name}</title>
            </g>
          ))}

          {/* Island labels */}
          <text x="305" y="170" fontSize="11" fill="var(--soft-white)" fontFamily="var(--font-display)" fontStyle="italic" opacity="0.9">Nordinsel</text>
          <text x="270" y="490" fontSize="11" fill="var(--soft-white)" fontFamily="var(--font-display)" fontStyle="italic" opacity="0.9">Südinsel</text>
          <text x="160" y="635" fontSize="9" fill="var(--forest)" fontFamily="var(--font-display)" fontStyle="italic">Stewart Island</text>

          {/* Cities */}
          {cities.map((c) => (
            <Tooltip key={c.name}>
              <TooltipTrigger asChild>
                <g
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate({ to: "/regionen/$slug", params: { slug: c.slug } });
                  }}
                >
                  {c.isAirport ? (
                    <>
                      <circle cx={c.x} cy={c.y} r="9" fill="var(--soft-white)" stroke="var(--muted-red)" strokeWidth="1.8" />
                      <foreignObject x={c.x - 6} y={c.y - 6} width="12" height="12" className="pointer-events-none">
                        <Plane className="h-3 w-3 text-[color:var(--muted-red)]" />
                      </foreignObject>
                    </>
                  ) : (
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="3"
                      fill="var(--soft-white)"
                      stroke="var(--forest)"
                      strokeWidth="1.2"
                    />
                  )}
                  <text
                    x={c.x + (c.isAirport ? 13 : 6)}
                    y={c.y + 3}
                    fontSize="9"
                    fontWeight={c.capital ? 700 : 500}
                    fill="var(--soft-white)"
                    stroke="var(--forest)"
                    strokeWidth="2.5"
                    paintOrder="stroke"
                  >
                    {c.name}
                    {c.capital ? " ★" : ""}
                  </text>
                </g>
              </TooltipTrigger>
              <TooltipContent>
                {c.code ? <span className="font-semibold">{c.code} · </span> : null}
                {c.name}
                {c.capital ? " (Hauptstadt)" : ""}
              </TooltipContent>
            </Tooltip>
          ))}
        </svg>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Klick auf eine Insel, Stadt oder einen Flughafen, um zur Region zu gelangen.
        </p>
      </div>
    </TooltipProvider>
  );
}
