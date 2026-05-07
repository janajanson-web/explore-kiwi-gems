import north from "@/assets/region-north.jpg";
import south from "@/assets/region-south.jpg";
import stewart from "@/assets/region-stewart.jpg";

export type Region = {
  slug: "nordinsel" | "suedinsel" | "stewart-island";
  name: string;
  tagline: string;
  image: string;
  highlights: string[];
  facts: { label: string; value: string }[];
  intro: string;
  bestTime: string;
  sources: { label: string; url: string }[];
};

export const regions: Region[] = [
  {
    slug: "nordinsel",
    name: "Nordinsel",
    tagline: "Vulkane, Maori-Kultur und subtropische Strände",
    image: north,
    intro:
      "Die Nordinsel (Te Ika-a-Māui) ist das kulturelle Herz Neuseelands – mit dampfenden Geysiren in Rotorua, der Metropole Auckland und endlosen Surfstränden an der Coromandel-Küste.",
    bestTime: "November bis April",
    highlights: [
      "Tongariro Alpine Crossing",
      "Maori-Kultur in Rotorua",
      "Bay of Islands & Cape Reinga",
      "Hobbiton Movie Set",
    ],
    facts: [
      { label: "Hauptstadt", value: "Wellington" },
      { label: "Größte Stadt", value: "Auckland (1,7 Mio.)" },
      { label: "Fläche", value: "113.729 km²" },
      { label: "Klima", value: "Subtropisch bis gemäßigt" },
    ],
    sources: [
      { label: "Tourism New Zealand", url: "https://www.newzealand.com/de/north-island/" },
    ],
  },
  {
    slug: "suedinsel",
    name: "Südinsel",
    tagline: "Fjorde, Gletscher und die Southern Alps",
    image: south,
    intro:
      "Die Südinsel (Te Waipounamu) ist das Postkartenmotiv schlechthin: Milford Sound, Mount Cook, die Weinregion Marlborough und Adrenalin-Hotspot Queenstown liegen alle hier.",
    bestTime: "Dezember bis März (Sommer) / Juli–September (Ski)",
    highlights: [
      "Milford & Doubtful Sound",
      "Aoraki / Mount Cook National Park",
      "Franz Josef & Fox Glacier",
      "Queenstown & Wanaka",
    ],
    facts: [
      { label: "Größte Stadt", value: "Christchurch (380.000)" },
      { label: "Höchster Berg", value: "Aoraki / Mt Cook (3.724 m)" },
      { label: "Fläche", value: "150.437 km²" },
      { label: "Klima", value: "Gemäßigt, alpine Zonen" },
    ],
    sources: [
      { label: "Tourism New Zealand", url: "https://www.newzealand.com/de/south-island/" },
    ],
  },
  {
    slug: "stewart-island",
    name: "Stewart Island",
    tagline: "Wildnis am Ende der Welt – Heimat des Kiwi",
    image: stewart,
    intro:
      "Rakiura, wie die Maori die Insel nennen, ist Neuseelands drittgrößte Insel. 85 % stehen unter Naturschutz – ideal, um wilde Kiwis zu sehen und Polarlichter zu erleben.",
    bestTime: "Oktober bis April",
    highlights: [
      "Rakiura Great Walk (3 Tage)",
      "Ulva Island Sanctuary",
      "Kiwi-Spotting bei Nacht",
      "Aurora Australis (Polarlicht)",
    ],
    facts: [
      { label: "Bewohner", value: "ca. 400" },
      { label: "Hauptort", value: "Oban (Halfmoon Bay)" },
      { label: "Fläche", value: "1.746 km²" },
      { label: "Anreise", value: "Fähre ab Bluff (1 h)" },
    ],
    sources: [
      { label: "Department of Conservation", url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/stewart-island-rakiura/" },
    ],
  },
];

export const getRegion = (slug: string) => regions.find((r) => r.slug === slug);
