import { useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Plus, Minus, RotateCcw } from "lucide-react";
import nzMap from "@/assets/nz-map.png";

type IslandSlug = "nordinsel" | "suedinsel" | "stewart-island";

type Zone = {
  slug: IslandSlug;
  label: string;
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

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const STEP = 0.5;

export function NewZealandMap() {
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const clamp = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
  const reset = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    setOffset({
      x: dragRef.current.ox + (e.clientX - dragRef.current.x),
      y: dragRef.current.oy + (e.clientY - dragRef.current.y),
    });
  };
  const onPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative overflow-hidden rounded-xl border border-border shadow-sm">
        <div
          className={zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: dragRef.current ? "none" : "transform 0.2s ease-out",
          }}
        >
          <div className="relative">
            <img
              src={nzMap}
              alt="Karte Neuseelands mit den wichtigsten Flughäfen"
              className="block h-auto w-full select-none"
              loading="lazy"
              draggable={false}
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
        </div>

        {/* Zoom-Steuerung oben rechts */}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-1 rounded-md bg-[color:var(--soft-white)]/95 p-1 shadow-md ring-1 ring-border backdrop-blur">
          <button
            type="button"
            onClick={() => setZoom((z) => clamp(z + STEP))}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Vergrößern"
            className="grid h-8 w-8 place-items-center rounded text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => clamp(z - STEP))}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Verkleinern"
            className="grid h-8 w-8 place-items-center rounded text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={reset}
            disabled={zoom === 1 && offset.x === 0 && offset.y === 0}
            aria-label="Zoom zurücksetzen"
            className="grid h-8 w-8 place-items-center rounded text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="mt-4 text-center text-base font-medium text-foreground md:text-lg">
        Klicke auf eine Insel, um die zugehörige Region zu öffnen.
        {zoom > 1 && " Karte ziehen, um den Ausschnitt zu verschieben."}
      </p>
    </div>
  );
}
