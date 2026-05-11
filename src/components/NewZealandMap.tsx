import { useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import nzSvg from "@/assets/nz-map.svg?raw";

type IslandSlug = "nordinsel" | "suedinsel" | "stewart-island";

const labels: Record<IslandSlug, string> = {
  nordinsel: "Nordinsel",
  suedinsel: "Südinsel",
  "stewart-island": "Stewart Island",
};

// Label-Positionen in viewBox-Koordinaten der SVG (viewBox="100 -10 820 1044")
const labelPos: Record<IslandSlug, { x: number; y: number }> = {
  nordinsel: { x: 760, y: 280 },
  suedinsel: { x: 360, y: 740 },
  "stewart-island": { x: 320, y: 1010 },
};

export function NewZealandMap() {
  const navigate = useNavigate();

  // SVG-Inhalt zwischen <svg ...> und </svg> extrahieren, damit wir
  // die Pfade in unserem eigenen <svg> mit Event-Handlern rendern können.
  const { inner, viewBox } = useMemo(() => {
    const vbMatch = nzSvg.match(/viewBox="([^"]+)"/);
    const innerMatch = nzSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
    return {
      viewBox: vbMatch?.[1] ?? "0 0 1024 1024",
      inner: innerMatch?.[1] ?? "",
    };
  }, []);

  const handleClick = (slug: IslandSlug) => {
    navigate({ to: "/regionen/$slug", params: { slug } });
  };

  // Wir rendern die Roh-SVG als HTML und legen darüber ein zweites <svg>
  // mit unsichtbaren, klickbaren Overlay-Pfaden – die Original-Pfade
  // werden per id referenziert, damit Form & Klickfläche identisch sind.
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div
        className="text-[color:var(--forest)]"
        // Original-SVG mit den 3 Insel-Pfaden – nur als sichtbare Form
        dangerouslySetInnerHTML={{
          __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" class="block h-auto w-full" aria-hidden="true">${inner}</svg>`,
        }}
      />

      {/* Klickbare Overlay-Pfade (gleiche Form, transparente Füllung, Hover-Highlight) */}
      <svg
        viewBox={viewBox}
        className="absolute inset-0 block h-full w-full"
        role="img"
        aria-label="Karte Neuseelands – klicke auf eine Insel, um die Region zu öffnen"
      >
        {(Object.keys(labels) as IslandSlug[]).map((slug) => (
          <use
            key={slug}
            href={`#${slug}`}
            onClick={() => handleClick(slug)}
            tabIndex={0}
            role="button"
            aria-label={`${labels[slug]} – Region öffnen`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick(slug);
              }
            }}
            className="cursor-pointer fill-transparent stroke-transparent transition hover:fill-[color:var(--ocean)]/30 hover:stroke-[color:var(--ocean)] focus:outline-none focus-visible:fill-[color:var(--ocean)]/40 focus-visible:stroke-[color:var(--ocean)]"
            strokeWidth={6}
            vectorEffect="non-scaling-stroke"
          >
            <title>{labels[slug]}</title>
          </use>
        ))}
        {(Object.keys(labels) as IslandSlug[]).map((slug) => (
          <text
            key={`l-${slug}`}
            x={labelPos[slug].x}
            y={labelPos[slug].y}
            textAnchor="middle"
            className="pointer-events-none fill-[color:var(--soft-white)] text-[34px] font-semibold uppercase tracking-wider"
            style={{ paintOrder: "stroke", stroke: "var(--forest)", strokeWidth: 6 }}
          >
            {labels[slug]}
          </text>
        ))}
      </svg>

      <p className="mt-4 text-center text-base font-medium text-foreground md:text-lg">
        Klicke auf eine Insel, um die zugehörige Region zu öffnen.
      </p>
    </div>
  );
}
