## Ziel

Die jetzige PNG-Karte mit grob geschätzten Polygonen wird ersetzt durch eine echte SVG-Karte Neuseelands, in der jede Insel (Nordinsel, Südinsel, Stewart Island) ein eigener `<path>` mit der tatsächlichen Küstenlinie ist. Die Pfade sind direkt klickbar und exakt — keine Bounding-Boxen oder Näherungs-Polygone mehr.

## Umsetzung

### 1. SVG-Quelle besorgen

- Eine Public-Domain-SVG Neuseelands wird als `src/assets/nz-map.svg` abgelegt (Quelle: Wikimedia Commons, z. B. „New Zealand location map" oder eine simplifizierte Variante mit nur Landmasse).
- Die Datei wird so aufbereitet, dass es **drei separate `<path>`-Elemente** gibt — eines pro Insel — mit den IDs `nordinsel`, `suedinsel`, `stewart-island`. Falls die Quelle nur einen einzigen Pfad hat, wird er anhand der `M`-Befehle in drei Subpfade aufgeteilt.
- Inline-Styles und Fülllfarben werden entfernt, damit die Farben aus dem Design-System (`--forest`, `--ocean` etc.) gesetzt werden können.

### 2. Komponente `NewZealandMap.tsx` umbauen

- Das `<img src={nzMap}>` und die manuell getippten Polygon-Punkte fallen weg.
- Stattdessen wird die SVG **inline gerendert** (Import als React-Komponente via `?react`-Suffix oder direkt im JSX), damit die `<path>`-Elemente Event-Handler und Tailwind-Klassen erhalten können.
- Jeder Insel-Pfad bekommt:
  - `onClick` → `navigate({ to: "/regionen/$slug", params: { slug } })`
  - Tastatur-Support (`tabIndex`, `role="button"`, Enter/Space)
  - Hover-/Focus-Styles über das Design-System (transparente Füllung, beim Hover `--forest` mit Opacity, dezenter Rand)
  - `<title>` für Tooltip + a11y-Label
- Die Insel-Labels („Nordinsel", „Südinsel", „Stewart Island") werden als `<text>`-Elemente im SVG positioniert (skaliert dann automatisch mit) statt als absolut positionierte `<span>`s.
- Das Pulsieren bleibt entfernt; auch Stewart Island ist nur durch Klick + Hover erkennbar.

### 3. Aufräumen

- `src/assets/nz-map.png` wird gelöscht (nicht mehr referenziert).
- Der Hinweistext „Klicke auf eine Insel…" bleibt erhalten.

## Technische Details

- Inline-SVG ist nötig, weil ein `<img>`-Tag keine klickbaren Subregionen erlaubt. Alternativ ginge `<object>` + DOM-Manipulation, aber Inline ist sauberer und SSR-kompatibel.
- Vite kann SVG via `?react` als Komponente importieren (vite-plugin-svgr ist üblich) oder via `?raw` als String, der dann mit `dangerouslySetInnerHTML` eingehängt wird. Falls weder Plugin noch Loader vorhanden ist, wird die SVG einfach direkt als JSX in die Komponente kopiert — das ist für drei Pfade gut handhabbar.
- Die `viewBox` der Quell-SVG wird übernommen, das umgebende `<div>` regelt die responsive Größe (`max-w-2xl`, `w-full`).
- Kein neues npm-Paket nötig, falls wir den JSX-Inline-Weg gehen.

## Out of scope

- Städte-/Flughafen-Marker bleiben weg (sind in der Karte selbst nicht mehr nötig).
- Detaillierte Subregionen (z. B. Otago, Canterbury) werden nicht eingezeichnet — nur die drei Inseln.
