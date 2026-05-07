import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Explore New Zealand" },
      { name: "description", content: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="font-display text-4xl font-bold md:text-5xl">Datenschutzerklärung</h1>

      <section className="prose prose-sm mt-8 max-w-none text-foreground">
        <h2 className="mt-8 font-display text-xl font-bold">1. Verantwortlicher</h2>
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist der im Impressum genannte Diensteanbieter.</p>

        <h2 className="mt-8 font-display text-xl font-bold">2. Erhebung allgemeiner Informationen</h2>
        <p>Beim Aufruf der Website werden automatisch Informationen (z. B. Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse, Uhrzeit) durch den Hosting-Anbieter in Server-Logs gespeichert. Eine personenbezogene Auswertung erfolgt nicht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>

        <h2 className="mt-8 font-display text-xl font-bold">3. Cookies</h2>
        <p>Diese Website verwendet ausschließlich technisch notwendige Cookies. Es findet kein Tracking durch Drittanbieter statt.</p>

        <h2 className="mt-8 font-display text-xl font-bold">4. Externe Links</h2>
        <p>Inhalte verweisen auf externe Quellen (z. B. newzealand.com, immigration.govt.nz). Für deren Datenschutzpraktiken sind ausschließlich die jeweiligen Anbieter verantwortlich.</p>

        <h2 className="mt-8 font-display text-xl font-bold">5. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21 DSGVO). Wenden Sie sich dazu an die im Impressum genannte Adresse.</p>

        <h2 className="mt-8 font-display text-xl font-bold">6. Beschwerderecht</h2>
        <p>Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren, etwa beim Bundesbeauftragten für den Datenschutz und die Informationsfreiheit.</p>
      </section>
    </div>
  );
}
