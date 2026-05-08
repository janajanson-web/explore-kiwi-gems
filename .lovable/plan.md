## Plan: Explore-New-Zealand – Erweiterungen

### 1. Navigation & Footer
- **SiteHeader.tsx**: `nav`-Array reduzieren auf Start, Regionen, FAQ (Sicherheit + Impressum entfernen, sowohl Desktop als auch mobile Bottom-Nav).
- **SiteFooter.tsx**: Spalte „Entdecken" in „Reise & Information" umbenennen und um `Sicherheit` ergänzen. „Rechtliches"-Spalte (Impressum + Datenschutz) bleibt.

### 2. Hero-Slider (`src/routes/index.tsx`)
- `bun add embla-carousel-autoplay` (embla-carousel-react ist bereits über shadcn carousel vorhanden).
- 5 neue Hero-Bilder generieren (über `imagegen--generate_image`, fast quality, 1920×1080, JPG, je <200 kB) für: Milford Sound/Mitre Peak, Aoraki/Mt Cook, Lake Tekapo + Lupinen, Tongariro Emerald Lakes, Cathedral Cove. Hinweis: Wir verwenden generierte Bilder statt direkter Unsplash-Hotlinks (Unsplash erlaubt kein Hotlinking in Production-Builds, und das Projekt liefert Bilder bisher lokal aus). Im Impressum die Quellenangabe entsprechend aktualisieren.
- Carousel-Implementierung: shadcn `Carousel` + `embla-carousel-autoplay` (5 s, stop on hover, resume on leave). Slides absolut positioniert mit `opacity`-Fade (Tailwind transition, ~1 s). Hero-Text-Layer absolut darüber, bleibt fix. Indikator-Punkte unten zentriert.

### 3. Quick-Access-Leiste (`src/routes/index.tsx`)
- 4 vollständig klickbare `<Link>`-Karten mit Lucide-Icons: Compass→`/regionen`, Mountain→`/regionen/suedinsel`, ShieldCheck→`/sicherheit`, HelpCircle→`/faq`. Hover-State mit leichter Hintergrundänderung.

### 4. Sicherheits-Callout (`src/routes/regionen.$slug.tsx`)
- Unter der Highlights-Liste eine `Alert`-Box (shadcn) mit `AlertTriangle`-Icon. Background sand-beige (`bg-secondary`), Text/Icon in Forest Green, interner Link „Sicherheitsinformationen" → `/sicherheit`.

### 5. GeoNet-Link (`src/routes/sicherheit.tsx`)
- Im Abschnitt Erdbeben „GeoNet" als externen Link mit `target="_blank" rel="noopener noreferrer"` auf https://www.geonet.org.nz.

### 6. FAQ-Suchleiste (`src/routes/faq.tsx`)
- `useState` für Query, shadcn `Input` + Lucide `Search`-Icon (icon links via absolute positioning). Filter case-insensitive über `q + a`. Empty-State-Hinweistext.

### 7. Interaktive NZ-Karte (`src/routes/regionen.index.tsx`)
- Inline-SVG mit drei `<path>`-Elementen (vereinfachte Outlines Nord-, Südinsel, Stewart Island). Füllung `--primary` (Forest Green), Hover → `--ocean` (neuer Token oder `#3D6F8E`). Jede Insel `<Link>`-wrapped (über klickbaren `<g>` mit `onClick` + `useNavigate`).
- Flughäfen: 6 Marker (Lucide `Plane`-Icon als foreignObject oder kleine SVG-Kreise mit Tooltip via shadcn `Tooltip`). Positionen approximiert auf Karte (AKL, WLG, CHC, ZQN, DUD, IVC).
- Responsive: SVG mit `viewBox`, `max-w-md mx-auto` auf Mobile, `max-w-2xl` auf Desktop.

### 8. Impressum (`src/routes/impressum.tsx`)
- Bildnachweise an die neuen 5 Hero-Bilder + 3 Regionsbilder anpassen (Hinweis: KI-generiert, da Hotlinking ungeeignet) – falls User stattdessen echte Unsplash-Hotlinks bevorzugt, bitte rückmelden.

### Technische Hinweise
- Tailwind v4: ggf. neuer Token `--ocean` in `src/styles.css` ergänzen, falls noch nicht vorhanden.
- Alle Änderungen responsiv (`sm:`, `md:`, `lg:`-Breakpoints), bestehende Routen/Daten unverändert.
- Nach Implementierung: Build/Console-Check.
