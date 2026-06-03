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
        <p>Aufpoliert Markenmanufaktur<br />Inhaberin: Jana Janson<br />Sandforter Weg 67<br />59379 Selm<br />Deutschland</p>

        <h2 className="mt-8 font-display text-xl font-bold">Kontakt</h2>
        <p>E-Mail: info@aufpoliert.eu<br />Telefon: +49 15221938425</p>

        <h2 className="mt-8 font-display text-xl font-bold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Jana Janson (Anschrift wie oben)</p>

        <h2 className="mt-8 font-display text-xl font-bold">Haftungsausschluss</h2>
        <p>Die Inhalte dieses Reiseblogs werden mit größter Sorgfalt erstellt, dennoch übernimmt der Anbieter keine Gewähr für Aktualität, Vollständigkeit und Richtigkeit. Reise-, Einreise- und Sicherheitsinformationen können sich kurzfristig ändern – bitte prüfe vor Reiseantritt die offiziellen Quellen (z. B. Auswärtiges Amt, Immigration New Zealand).</p>

        <h2 className="mt-8 font-display text-xl font-bold">Urheberrecht</h2>
        <p>Sämtliche Inhalte (Texte, Bilder, Grafiken) unterliegen dem Urheberrecht. Eine Verwendung außerhalb der gesetzlich zulässigen Grenzen bedarf der schriftlichen Zustimmung.</p>

        <h2 className="mt-8 font-display text-xl font-bold">Hinweis zu Preisangaben</h2>
        <p>Sämtliche auf dieser Website genannten Preise (z. B. für Ausflüge, Touren, Eintritte, Verpflegung und Unterkünfte) sind <strong>grobe Schätzungen</strong> und dienen ausschließlich der ersten Orientierung. Tatsächliche Kosten können je nach Anbieter, Saison, Verfügbarkeit, Wechselkurs und individuellen Leistungen abweichen. Verbindliche Preise erhältst du stets direkt beim jeweiligen Anbieter. Eine Gewähr für die Richtigkeit oder Aktualität der angegebenen Preise wird nicht übernommen.</p>

        <h2 className="mt-8 font-display text-xl font-bold">Bildnachweise</h2>
        <p>
          Die auf dieser Website verwendeten Fotografien stammen von{" "}
          <a className="text-primary underline" href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a>{" "}
          (Unsplash-Lizenz) sowie von{" "}
          <a className="text-primary underline" href="https://www.pexels.com/" target="_blank" rel="noreferrer">Pexels</a>{" "}
          (
          <a className="text-primary underline" href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Pexels-Lizenz</a>
          ) und werden kostenfrei zur kommerziellen und nicht-kommerziellen Nutzung bereitgestellt. Wir danken den Fotografinnen und Fotografen beider Communities für die Bereitstellung ihrer Werke.
        </p>
        <h3 className="mt-6 font-display text-lg font-semibold">Quelle: Unsplash</h3>
        <ul>
          <li>Hero-Slider „Milford Sound mit Mitre Peak“</li>
          <li>Hero-Slider „Aoraki / Mt Cook bei Sonnenaufgang“</li>
          <li>Hero-Slider „Lake Tekapo mit Church of the Good Shepherd und Lupinen“</li>
          <li>Hero-Slider „Tongariro Alpine Crossing mit Emerald Lakes“</li>
          <li>Hero-Slider „Cathedral Cove“</li>
          <li>Region Nordinsel</li>
          <li>Region Südinsel</li>
          <li>Region Stewart Island</li>
        </ul>
        <h3 className="mt-6 font-display text-lg font-semibold">Quelle: Pexels</h3>
        <ul>
          <li>Übersichtskarte Neuseeland (Illustration / Kartenmaterial)</li>
          <li>Weitere Hero- und Stimmungsbilder: Auckland Skyline, Hobbiton, Haka-Aufführung, Kiwi-Vogel, Kiwi-Straßenschild, Cable Bay, Split Apple Rock, Waiheke Island</li>
          <li>Ausflüge & Aktivitäten: Cape Reinga, Cathedral Cove, Franz Josef Glacier, Hooker Valley Track, Kiwi Spotting, Mason Bay, Milford Sound (Bootstour), Rakiura Track, Routeburn Track, Roys Peak, Tongariro Alpine Crossing, Ulva Island, Waitomo Caves</li>
          <li>Kulinarisches aus den Regionen: Auckland Fish Market, Bluff Oysters, Canterbury Lamb, Central Otago Pinot Noir, Coromandel Oysters, Hāngī Rotorua, Hawke's Bay, Marlborough Sauvignon Blanc, Muttonbird (Tītī), South Sea Hotel (Stewart Island)</li>
        </ul>
        <p className="text-sm text-muted-foreground">Sollte trotz sorgfältiger Recherche eine Urheberrechtsverletzung vorliegen, bitten wir um eine kurze Nachricht – die betroffenen Inhalte werden umgehend entfernt.</p>

        <h2 className="mt-8 font-display text-xl font-bold">Quellen & Abkürzungen</h2>
        <p>Inhaltliche Informationen stützen sich auf offizielle Quellen. Häufig verwendete Abkürzungen:</p>
        <ul>
          <li><strong>DOC</strong> = Department of Conservation (Te Papa Atawhai), neuseeländische Naturschutzbehörde. Verwaltet Nationalparks, Wanderwege (u. a. Great Walks), Hütten und Campingplätze und veröffentlicht offizielle Sicherheits- und Wetterwarnungen. Website: <a className="text-primary underline" href="https://www.doc.govt.nz/" target="_blank" rel="noreferrer">doc.govt.nz</a>.</li>
          <li><strong>NZeTA</strong> = New Zealand Electronic Travel Authority (elektronische Reisegenehmigung).</li>
          <li><strong>IVL</strong> = International Visitor Conservation and Tourism Levy (Tourismusabgabe).</li>
          <li><strong>NZTA</strong> = New Zealand Transport Agency (Verkehrsbehörde).</li>
        </ul>

        <h2 className="mt-8 font-display text-xl font-bold">Streitschlichtung</h2>
        <p>Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a className="text-primary underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">ec.europa.eu/consumers/odr</a>. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </section>

      <p className="mt-12 text-sm">
        <Link to="/datenschutz" className="text-primary underline">Zur Datenschutzerklärung →</Link>
      </p>
    </div>
  );
}
