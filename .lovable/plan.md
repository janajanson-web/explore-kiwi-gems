## Ziel
Hero-Bilder kommen wieder farbintensiv zur Geltung – ohne den großflächigen, halbtransparenten Forest-Green-Schleier. Die Headline und der Sub-Text bleiben auf jedem Bild gut lesbar.

## Lösung: Leichter Bottom-Verlauf + Textschatten

### 1. Vollflächigen Schleier ersetzen
In `src/routes/index.tsx` (HeroSlider) wird der bisherige Overlay-Layer
`bg-gradient-to-r from-primary/80 via-primary/50 to-transparent`
durch einen deutlich dezenteren Verlauf ausgetauscht, der nur das untere Drittel sanft abdunkelt:
- Verlauf von unten (kräftiger, ca. 60–70 % schwarz/forest) nach oben transparent
- Höhe etwa 55–65 % der Hero-Sektion (`from-black/65 via-black/25 to-transparent`)
- Obere Bildhälfte bleibt komplett frei – Farben, Himmel und Details kommen voll zur Geltung

### 2. Typo-Effekt für zusätzliche Lesbarkeit
Auf den Hero-Texten (H1 und Sub-Text in `index.tsx`) wird ein dezenter, weicher Schatten ergänzt – kein harter Glow, sondern eine feine Tiefe, die den Text auch über hellen Bildbereichen klar absetzt:
- Headline: kräftigerer Schatten (z. B. `drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]`)
- Sub-Text & Buttons-Bereich: leichterer Schatten (`drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]`)

### 3. Slider-Indikatoren absichern
Die Pagination-Dots am unteren Rand bekommen einen minimalen Schatten, damit sie auf hellen Bildern (z. B. Cable Bay) sichtbar bleiben.

### 4. Was nicht angefasst wird
- Bilder, Reihenfolge und Auto-Rotation (9 s) bleiben unverändert
- Designsystem-Farben, Typografie, restliche Seiten unverändert
- Nur die Hero-Sektion auf der Startseite wird angepasst

## Ergebnis
- Bilder wirken kräftiger und lebendiger, weil ⅔ der Fläche ohne Farbfilter bleiben
- Headline und Sub-Text bleiben klar lesbar dank Bottom-Verlauf + Textschatten
- Responsive auf Mobile, Tablet, Desktop (Verlauf skaliert mit der Höhe der Hero-Sektion)