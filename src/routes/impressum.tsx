import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Explore New Zealand" },
      { name: "description", content: "Impressum nach §5 TMG für den Reiseblog Explore New Zealand." },
    ],
  }),
  component: Imprint,
});

function Imprint() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="font-display text-4xl font-bold md:text-5xl">Impressum</h1>
      <p className="mt-2 text-sm text-muted-foreground">Angaben gemäß § 5 TMG</p>

      <section className="prose prose-sm mt-8 max-w-none text-foreground">
        <h2 className="mt-8 font-display text-xl font-bold">Diensteanbieter</h2>
        <p>Max Mustermann<br />Musterstraße 12<br />10115 Berlin<br />Deutschland</p>

        <h2 className="mt-8 font-display text-xl font-bold">Kontakt</h2>
        <p>E-Mail: kontakt@explore-newzealand.example<br />Telefon: +49 (0) 30 000000</p>

        <h2 className="mt-8 font-display text-xl font-bold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Max Mustermann (Anschrift wie oben)</p>

        <h2 className="mt-8 font-display text-xl font-bold">Haftungsausschluss</h2>
        <p>Die Inhalte dieses Reiseblogs werden mit größter Sorgfalt erstellt, dennoch übernimmt der Anbieter keine Gewähr für Aktualität, Vollständigkeit und Richtigkeit. Reise-, Einreise- und Sicherheitsinformationen können sich kurzfristig ändern – bitte prüfe vor Reiseantritt die offiziellen Quellen (z. B. Auswärtiges Amt, Immigration New Zealand).</p>

        <h2 className="mt-8 font-display text-xl font-bold">Urheberrecht</h2>
        <p>Sämtliche Inhalte (Texte, Bilder, Grafiken) unterliegen dem Urheberrecht. Eine Verwendung außerhalb der gesetzlich zulässigen Grenzen bedarf der schriftlichen Zustimmung.</p>

        <h2 className="mt-8 font-display text-xl font-bold">Bildnachweise</h2>
        <p>
          Sämtliche auf dieser Website verwendeten Fotografien stammen von{" "}
          <a className="text-primary underline" href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a>{" "}
          und werden unter der{" "}
          <a className="text-primary underline" href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash-Lizenz</a>{" "}
          kostenfrei zur kommerziellen und nicht-kommerziellen Nutzung bereitgestellt. Wir danken den Fotografinnen und Fotografen der Unsplash-Community für die Bereitstellung ihrer Werke.
        </p>
        <ul>
          <li>Hero-Bild „Neuseeland-Landschaft“ – Quelle: unsplash.com</li>
          <li>Region Nordinsel – Quelle: unsplash.com</li>
          <li>Region Südinsel – Quelle: unsplash.com</li>
          <li>Region Stewart Island – Quelle: unsplash.com</li>
        </ul>
        <p className="text-sm text-muted-foreground">Sollte trotz sorgfältiger Recherche eine Urheberrechtsverletzung vorliegen, bitten wir um eine kurze Nachricht – die betroffenen Inhalte werden umgehend entfernt.</p>

        <h2 className="mt-8 font-display text-xl font-bold">Streitschlichtung</h2>
        <p>Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a className="text-primary underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">ec.europa.eu/consumers/odr</a>. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </section>

      <p className="mt-12 text-sm">
        <Link to="/datenschutz" className="text-primary underline">Zur Datenschutzerklärung →</Link>
      </p>
    </div>
  );
}
