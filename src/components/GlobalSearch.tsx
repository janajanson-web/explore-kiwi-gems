import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Command as CommandPrimitive } from "cmdk";
import { Search, Compass, Mountain, Utensils, HelpCircle, ShieldCheck, FileText, X } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { regions } from "@/lib/regions";
import { faqs } from "@/lib/faq";
import { cn } from "@/lib/utils";

/**
 * Substring-Filter (case-insensitive, ohne Fuzzy-Matching).
 * Verhindert, dass z. B. "wein" auf "Wetter & Wind" matcht.
 * Mehrere Wörter im Query müssen alle vorkommen.
 */
function substringFilter(value: string, search: string): number {
  const haystack = value.toLowerCase();
  const tokens = search.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return 1;
  return tokens.every((t) => haystack.includes(t)) ? 1 : 0;
}

type ResultItem = {
  id: string;
  title: string;
  sublabel: string;
  searchText: string;
  icon: typeof Compass;
  onSelect: () => void;
};

type Buckets = {
  regions: ResultItem[];
  activities: ResultItem[];
  food: ResultItem[];
  safety: ResultItem[];
  faq: ResultItem[];
  pages: ResultItem[];
};

function useBuckets(close: () => void): Buckets {
  const navigate = useNavigate();
  return useMemo<Buckets>(() => {
    const go = (fn: () => void) => () => {
      close();
      fn();
    };
    const regionItems: ResultItem[] = regions.map((r) => ({
      id: `region-${r.slug}`,
      title: r.name,
      sublabel: r.tagline,
      icon: Compass,
      searchText: [
        r.name,
        r.tagline,
        r.intro,
        r.bestTime,
        r.highlights.join(" "),
        r.facts.map((f) => `${f.label} ${f.value}`).join(" "),
        r.sources.map((s) => s.label).join(" "),
      ].join(" "),
      onSelect: go(() => navigate({ to: "/regionen/$slug", params: { slug: r.slug } })),
    }));
    const activities: ResultItem[] = [];
    const food: ResultItem[] = [];
    const safety: ResultItem[] = [];
    regions.forEach((r) => {
      r.excursions.forEach((e) => {
        activities.push({
          id: `act-${r.slug}-${e.id}`,
          title: e.title,
          sublabel: `Aktivität · ${r.name}`,
          icon: Mountain,
          searchText: [
            e.title,
            e.description,
            e.tags.join(" "),
            e.effort,
            e.duration,
            e.priceRange,
            e.source,
            r.name,
          ].join(" "),
          onSelect: go(() =>
            navigate({ to: "/regionen/$slug", params: { slug: r.slug }, hash: "aktivitaeten" }),
          ),
        });
      });
      r.foodAndWine.forEach((f) => {
        food.push({
          id: `food-${r.slug}-${f.id}`,
          title: f.title,
          sublabel: `Kulinarisches · ${r.name}`,
          icon: Utensils,
          searchText: [f.title, f.description, f.location, f.insiderTip ?? "", r.name].join(" "),
          onSelect: go(() =>
            navigate({ to: "/regionen/$slug", params: { slug: r.slug }, hash: "kulinarisches" }),
          ),
        });
      });
      r.regionalSafety.forEach((s) => {
        safety.push({
          id: `safety-${r.slug}-${s.id}`,
          title: s.title,
          sublabel: `Sicherheit · ${r.name}`,
          icon: ShieldCheck,
          searchText: [s.title, s.description, s.category, s.source, r.name].join(" "),
          onSelect: go(() =>
            navigate({ to: "/regionen/$slug", params: { slug: r.slug }, hash: "sicherheit" }),
          ),
        });
      });
    });
    const faqItems: ResultItem[] = faqs.map((f, i) => ({
      id: `faq-${i}`,
      title: f.q,
      sublabel: "FAQ & Nützliches",
      icon: HelpCircle,
      searchText: `${f.q} ${f.a} ${f.sources.map((s) => s.label).join(" ")}`,
      onSelect: go(() => navigate({ to: "/faq" })),
    }));
    const pages: ResultItem[] = [
      {
        id: "page-regionen",
        title: "Regionen-Übersicht",
        sublabel: "Alle Regionen Neuseelands",
        icon: Compass,
        searchText: "Regionen Übersicht Nordinsel Südinsel Stewart Island Aotearoa",
        onSelect: go(() => navigate({ to: "/regionen" })),
      },
      {
        id: "page-impressum",
        title: "Impressum",
        sublabel: "Anbieterkennzeichnung & Quellen",
        icon: FileText,
        searchText: "Impressum Anbieter Kontakt Quellen DOC Department of Conservation Naturschutzbehörde Haftung",
        onSelect: go(() => navigate({ to: "/impressum" })),
      },
      {
        id: "page-datenschutz",
        title: "Datenschutz",
        sublabel: "Hinweise zum Datenschutz",
        icon: FileText,
        searchText: "Datenschutz DSGVO Cookies Privatsphäre",
        onSelect: go(() => navigate({ to: "/datenschutz" })),
      },
    ];
    return { regions: regionItems, activities, food, safety, faq: faqItems, pages };
  }, [navigate, close]);
}

function ResultRow({ item }: { item: ResultItem }) {
  const Icon = item.icon;
  return (
    <CommandItem
      value={`${item.title} ${item.sublabel} ${item.searchText}`}
      onSelect={item.onSelect}
      className="cursor-pointer gap-3 px-3 py-2.5"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium text-foreground">{item.title}</span>
        <span className="block truncate text-xs text-muted-foreground">{item.sublabel}</span>
      </span>
    </CommandItem>
  );
}

function ResultGroups({ buckets, query }: { buckets: Buckets; query: string }) {
  return (
    <>
      <CommandEmpty>
        Keine Treffer für „{query}". Versuche es mit einem anderen Begriff.
      </CommandEmpty>
      {buckets.regions.length > 0 && (
        <CommandGroup heading="Regionen">
          {buckets.regions.map((it) => (
            <ResultRow key={it.id} item={it} />
          ))}
        </CommandGroup>
      )}
      {buckets.activities.length > 0 && (
        <CommandGroup heading="Aktivitäten">
          {buckets.activities.map((it) => (
            <ResultRow key={it.id} item={it} />
          ))}
        </CommandGroup>
      )}
      {buckets.food.length > 0 && (
        <CommandGroup heading="Kulinarisches">
          {buckets.food.map((it) => (
            <ResultRow key={it.id} item={it} />
          ))}
        </CommandGroup>
      )}
      {buckets.safety.length > 0 && (
        <CommandGroup heading="Sicherheit">
          {buckets.safety.map((it) => (
            <ResultRow key={it.id} item={it} />
          ))}
        </CommandGroup>
      )}
      {buckets.faq.length > 0 && (
        <CommandGroup heading="FAQ & Nützliches">
          {buckets.faq.map((it) => (
            <ResultRow key={it.id} item={it} />
          ))}
        </CommandGroup>
      )}
      {buckets.pages.length > 0 && (
        <CommandGroup heading="Seiten">
          {buckets.pages.map((it) => (
            <ResultRow key={it.id} item={it} />
          ))}
        </CommandGroup>
      )}
    </>
  );
}

/** Inline Suchfeld + Live-Dropdown (für den Hero) */
export function GlobalSearchInline({ className }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buckets = useBuckets(() => {
    setQuery("");
    setOpen(false);
  });

  // Klick außerhalb → schließen
  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={containerRef} className={cn("relative w-full max-w-2xl", className)}>
      <Command
        shouldFilter
        className="overflow-visible bg-transparent"
        loop
      >
        <div className="flex items-center gap-3 rounded-lg border border-white/40 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md focus-within:ring-2 focus-within:ring-[color:var(--ocean)]">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
          <CommandPrimitive.Input
            value={query}
            onValueChange={setQuery}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
                (e.target as HTMLInputElement).blur();
              }
            }}
            placeholder="Wonach suchst du? Region, Aktivität, Essen, FAQ..."
            className="h-8 w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
            aria-label="Globale Suche"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setOpen(true);
              }}
              className="rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Suche leeren"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        {showDropdown && (
          <div className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-xl">
            <CommandList className="max-h-[min(60vh,28rem)]">
              <ResultGroups buckets={buckets} query={query} />
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}

/** Such-Icon im Header → öffnet Modal-Dialog (Cmd/Ctrl+K) */
export function GlobalSearchTrigger({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const buckets = useBuckets(() => {
    setQuery("");
    setOpen(false);
  });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm opacity-90 transition hover:bg-white/10 hover:opacity-100",
          className,
        )}
        aria-label="Suche öffnen (Strg/Cmd + K)"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline">Suchen</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Wonach suchst du? Region, Aktivität, Essen, FAQ..."
        />
        <CommandList>
          {query.trim().length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Tippe los – z. B. „Milford", „Hangi", „NZeTA".
            </div>
          ) : (
            <ResultGroups buckets={buckets} query={query} />
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
