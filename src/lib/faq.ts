export type FaqEntry = {
  q: string;
  a: string;
  sources: { label: string; url: string }[];
};

export const faqs: FaqEntry[] = [
  {
    q: "Brauche ich ein Visum für Neuseeland?",
    a: "Deutsche, österreichische und schweizerische Staatsangehörige benötigen für touristische Aufenthalte bis 90 Tage kein klassisches Visum, jedoch eine elektronische Reisegenehmigung (NZeTA) plus Tourismusabgabe (IVL).",
    sources: [{ label: "Immigration NZ", url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta" }],
  },
  {
    q: "Was ist die NZeTA und wie beantrage ich sie?",
    a: "Die NZeTA (New Zealand Electronic Travel Authority) ist 2 Jahre gültig und kostet 17 NZD (App) bzw. 23 NZD (Web), zzgl. 100 NZD IVL. Beantragung idealerweise mind. 72 Stunden vor Abflug.",
    sources: [{ label: "NZeTA-Antrag", url: "https://nzeta.immigration.govt.nz/" }],
  },
  {
    q: "Wann ist die beste Reisezeit?",
    a: "Hochsaison ist Dezember bis Februar (Sommer). Für Ski Juli bis September. Wandern & wenig Andrang: März/April und Oktober/November.",
    sources: [{ label: "Tourism NZ – Klima", url: "https://www.newzealand.com/de/feature/weather-and-climate/" }],
  },
  {
    q: "Welche Gesundheitsvorsorge brauche ich?",
    a: "Keine Pflichtimpfungen für Direkteinreisen aus DACH. Standardimpfungen aktuell halten. Eine Auslandskrankenversicherung mit Rücktransport ist dringend empfohlen.",
    sources: [{ label: "Auswärtiges Amt", url: "https://www.auswaertiges-amt.de/de/service/laender/neuseeland-node/neuseelandsicherheit/211628" }],
  },
  {
    q: "Kann ich Leitungswasser trinken?",
    a: "In Städten ist Leitungswasser unbedenklich. In der Wildnis Wasser aus Bächen und Seen vor dem Trinken filtern oder abkochen (Giardien-Risiko).",
    sources: [{ label: "Ministry of Health NZ", url: "https://www.health.govt.nz/your-health/healthy-living/environmental-health/drinking-water" }],
  },
  {
    q: "Welche Notrufnummer gilt in Neuseeland?",
    a: "Die zentrale Notrufnummer ist 111 (Polizei, Feuerwehr, Rettungsdienst). Für Wanderer: Personal Locator Beacon (PLB) mitnehmen.",
    sources: [{ label: "NZ Police", url: "https://www.police.govt.nz/contact-us/emergency" }],
  },
  {
    q: "Wie funktioniert der Linksverkehr?",
    a: "In Neuseeland herrscht Linksverkehr. An Kreisverkehren hat das von rechts kommende Fahrzeug Vorfahrt. Viele Straßen sind schmal und kurvig – realistische Fahrzeiten einplanen.",
    sources: [{ label: "NZ Transport Agency", url: "https://www.nzta.govt.nz/safety/driving-safely/visiting-drivers/" }],
  },
  {
    q: "Welche Naturgefahren gibt es?",
    a: "Erdbeben, Vulkane (z. B. Tongariro, White Island), Tsunamis, schnelle Wetterumschwünge in den Bergen und starke UV-Strahlung. Vor Outdoor-Aktivitäten Wetter und Warnungen prüfen.",
    sources: [
      { label: "GeoNet", url: "https://www.geonet.org.nz/" },
      { label: "MetService", url: "https://www.metservice.com/" },
    ],
  },
  {
    q: "Was ist DOC (Department of Conservation)?",
    a: "DOC steht für Department of Conservation (Te Papa Atawhai) – die staatliche Naturschutzbehörde Neuseelands. Sie verwaltet Nationalparks, Wanderwege (inklusive aller Great Walks wie Tongariro Alpine Crossing, Routeburn und Rakiura), DOC-Hütten und Campingplätze und veröffentlicht verbindliche Sicherheits-, Wetter- und Sperrwarnungen für Outdoor-Aktivitäten. Als staatliche, nicht-kommerzielle Quelle ist DOC neutral und verlässlich – wir verlinken regelmäßig auf doc.govt.nz für offizielle Track-Daten und Hütten-Buchungen.",
    sources: [{ label: "Department of Conservation", url: "https://www.doc.govt.nz/" }],
  },
  {
    q: "Brauche ich einen internationalen Führerschein?",
    a: "Empfohlen ist ein internationaler Führerschein zusammen mit dem deutschen Führerschein, oder eine beglaubigte englische Übersetzung. Gültig bis zu 12 Monate.",
    sources: [{ label: "NZTA – Visiting drivers", url: "https://www.nzta.govt.nz/safety/driving-safely/visiting-drivers/" }],
  },
];
