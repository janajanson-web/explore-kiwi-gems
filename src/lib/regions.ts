import north from "@/assets/region-north.jpg";
import south from "@/assets/region-south.jpg";
import stewart from "@/assets/region-stewart.jpg";
import excMilford from "@/assets/excursion-milford-sound.jpg";
import excHooker from "@/assets/excursion-hooker-valley.jpg";
import excFranzJosef from "@/assets/excursion-franz-josef.jpg";
import excRouteburn from "@/assets/excursion-routeburn.jpg";
import excRoysPeak from "@/assets/excursion-roys-peak.jpg";
import foodMarlborough from "@/assets/food-marlborough-sauvignon.jpg";
import foodBluffOysters from "@/assets/food-bluff-oysters.jpg";
import foodCentralOtago from "@/assets/food-central-otago-pinot.jpg";
import foodCanterburyLamb from "@/assets/food-canterbury-lamb.jpg";
import excTongariro from "@/assets/excursion-tongariro.jpg";
import excCapeReinga from "@/assets/excursion-cape-reinga.jpg";
import foodHawkesBay from "@/assets/food-hawkes-bay.jpg";
import foodAucklandFishMarket from "@/assets/food-auckland-fish-market.jpg";
import foodCoromandelOysters from "@/assets/food-coromandel-oysters.jpg";
import foodHangiRotorua from "@/assets/food-hangi-rotorua.jpg";
import excCathedralCove from "@/assets/excursion-cathedral-cove.jpg";
import excWaitomo from "@/assets/excursion-waitomo.jpg";
import excKiwiSpotting from "@/assets/excursion-kiwi-spotting.jpg";
import excMasonBay from "@/assets/excursion-mason-bay.jpg";
import excAuroraAustralis from "@/assets/excursion-aurora-australis.jpg";
import excAuroraRuggedy from "@/assets/excursion-aurora-ruggedy.jpg";
import foodMuttonbird from "@/assets/food-muttonbird.jpg";
import foodSouthSeaHotel from "@/assets/food-south-sea-hotel.jpg";
import excUlvaIsland from "@/assets/excursion-ulva-island.jpg";
import excRakiuraTrack from "@/assets/excursion-rakiura-track.jpg";
import excKawarauBungy from "@/assets/excursion-kawarau-bungy.jpg";
import excHobbiton from "@/assets/excursion-hobbiton.jpg";
import excTePaTu from "@/assets/excursion-te-pa-tu.jpg";

export type Effort = "easy" | "moderate" | "challenging";

export type Excursion = {
  id: string;
  title: string;
  description: string;
  effort: Effort;
  duration: string;
  priceRange: string;
  tags: string[];
  source: string;
  sourceUrl?: string;
  imageQuery: string;
  image?: string;
};

export type FoodItem = {
  id: string;
  title: string;
  location: string;
  description: string;
  insiderTip?: string;
  imageQuery: string;
  image?: string;
};

export type SafetyItem = {
  id: string;
  category: "natural" | "weather" | "general";
  title: string;
  description: string;
  source: string;
  sourceUrl: string;
};

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
  excursions: Excursion[];
  foodAndWine: FoodItem[];
  regionalSafety: SafetyItem[];
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
    excursions: [
      {
        id: "tongariro",
        title: "Tongariro Alpine Crossing",
        description:
          "19,4 km Tageswanderung über einen aktiven Vulkan – mit den leuchtenden Emerald Lakes und Blick auf den perfekten Kegel des Mt Ngauruhoe. Eine der besten Tageswanderungen der Welt.",
        effort: "challenging",
        duration: "1 Tag (7–9 Stunden)",
        priceRange: "Wanderung kostenlos · Shuttle ca. € 34 p. P.",
        tags: ["Tageswanderung", "Vulkan", "19,4 km"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tongariro-alpine-crossing/",
        imageQuery: "tongariro-alpine-crossing-emerald-lakes",
        image: excTongariro,
      },
      {
        id: "cape-reinga",
        title: "Cape Reinga & Ninety-Mile Beach",
        description:
          "Spiritueller Maori-Ort an der Nordspitze, wo sich Tasmansee und Pazifik treffen. Endlose Sanddünen, einsamer Leuchtturm und eine Autotour über den breiten Ninety-Mile Beach.",
        effort: "easy",
        duration: "Tagesausflug (3,5 Std. Anfahrt ab Kerikeri)",
        priceRange: "Park & Parking kostenlos (Selbstanreise empfohlen)",
        tags: ["Autotour", "Küste", "Kultur"],
        source: "Tourism New Zealand",
        sourceUrl: "https://www.newzealand.com/de/cape-reinga/",
        imageQuery: "cape-reinga-lighthouse-new-zealand",
        image: excCapeReinga,
      },
      {
        id: "waitomo",
        title: "Waitomo Glowworm Caves",
        description:
          "Eine Bootstour durch dunkle Höhlen unter einem Sternenhimmel aus tausenden Glühwürmchen – magisch still und unvergesslich.",
        effort: "easy",
        duration: "ca. 1 Stunde",
        priceRange: "Erw. ca. € 31 · Kind ca. € 14 · Family ca. € 78",
        tags: ["Höhle", "Familienfreundlich"],
        source: "Tourism New Zealand",
        sourceUrl: "https://www.newzealand.com/de/feature/waitomo-glowworm-caves/",
        imageQuery: "waitomo-glowworm-caves",
        image: excWaitomo,
      },
      {
        id: "cathedral-cove",
        title: "Cathedral Cove (Coromandel)",
        description:
          "Ca. 1,5-stündige Küstenwanderung zum berühmten Felsbogen Te Hoho im Te Whanganui-A-Hei Marine Reserve: türkisblaues Wasser, weißer Sand und Pōhutukawa-Bäume rahmen die kathedralartige Formation. Filmkulisse u. a. für „Die Chroniken von Narnia: Prinz Kaspian“. Nach Cyclone-Schäden 2023 wieder zugänglich — Anreise per Wanderung, Park & Ride Shuttle ab Hahei oder Wassertaxi.",
        effort: "moderate",
        duration: "ca. 1,5–2 Stunden hin",
        priceRange: "Walk kostenlos · Shuttle ca. € 4 · Water Taxi ca. € 20 einfach",
        tags: ["Küstenwanderung", "Strand"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/coromandel/",
        imageQuery: "cathedral-cove-coromandel-new-zealand",
        image: excCathedralCove,
      },
      {
        id: "hobbiton-movie-set",
        title: "Hobbiton Movie Set (Matamata)",
        description:
          "Das Originalfilmset aus „Der Herr der Ringe\" und „Der Hobbit\" — auf einer privaten Schaffarm in der Waikato-Region. Geführte 2,5-Stunden-Tour durch das 12-Acre-Set: 44 farbige Hobbit-Türen, Bag End, Party Tree, das Innere von Bagshot Row und ein komplimentäres Getränk im Green Dragon Inn. Das Set ist nur per geführter Tour zugänglich. Tipp: ca. 45 Min Fahrt von Rotorua — perfekt kombinierbar mit einem Te-Pā-Tū-Abend.",
        effort: "easy",
        duration: "ca. 2,5 Stunden (inkl. Bustransfer)",
        priceRange: "Erw. ca. € 65 · Jugendl. (11–17) ca. € 33 · Family Pass ca. € 167 · Kinder 0–10 frei",
        tags: ["Filmset", "Familienfreundlich", "Geführte Tour"],
        source: "Hobbiton Movie Set Tours",
        sourceUrl: "https://www.hobbitontours.com/",
        imageQuery: "Hobbiton Movie Set Bag End hobbit hole New Zealand",
        image: excHobbiton,
      },
      {
        id: "te-pa-tu-maori",
        title: "Te Pā Tū — Maori-Kultur in Rotorua",
        description:
          "3,5-stündiger Maori-Kulturabend im Tawa-Wald-Pā: Pōwhiri (Begrüßungszeremonie), Kapa-Haka-Performance und traditionelles Hāngī aus dem Erdofen mit 3-Gänge-Fusion-Menü. Die Inhalte folgen dem Maramataka, dem Maori-Mondkalender — jede Saison eine andere Geschichte. Qualmark-zertifiziert, von einer Maori-Familie geführt; Bus-Transfer ab Rotorua inklusive.",
        effort: "easy",
        duration: "ca. 3,5 Stunden (abends, inkl. Transfer)",
        priceRange: "Erw. ca. € 135 · Kinder 5–15 ca. € 58 · Kleinkinder 0–4 frei",
        tags: ["Kultur", "Abendprogramm", "Familienfreundlich"],
        source: "Te Pā Tū (ehemals Tamaki Maori Village)",
        sourceUrl: "https://te-pa-tu.com/",
        imageQuery: "Maori carved meeting house pou whenua Rotorua",
        image: excTePaTu,
      },
    ],
    foodAndWine: [
      {
        id: "hangi",
        title: "Hangi in Rotorua",
        location: "Rotorua",
        description:
          "Im traditionellen Maori-Erdofen werden Lamm, Süßkartoffel und Hühnchen stundenlang über heißen Steinen gegart – serviert mit Haka, Gesang und Geschichten beim Marae-Besuch.",
        insiderTip: "Tamaki Maori Village kombiniert Hangi mit einem authentischen Kulturabend – früh buchen.",
        imageQuery: "maori-hangi-traditional-food",
        image: foodHangiRotorua,
      },
      {
        id: "auckland-fish-market",
        title: "Auckland Fish Market",
        location: "Auckland Wynyard Quarter",
        description:
          "Direkt am Hafen wird der Fang des Tages versteigert. Daneben Foodcourts mit Snapper, Green-Lipped-Mussels und perfekt frittierten Fish & Chips – am besten draußen am Wasser essen.",
        imageQuery: "auckland-fish-market-seafood",
        image: foodAucklandFishMarket,
      },
      {
        id: "hawkes-bay",
        title: "Hawke's Bay Wineries",
        location: "Napier & Hastings",
        description:
          "Sonnenverwöhnte Hügel, Art-déco-Charme in Napier und über 70 Weingüter. Hawke's Bay ist berühmt für vollmundigen Chardonnay und elegante Syrah – die meisten Cellar Doors haben Bistros mit lokalem Käse und Lamm.",
        insiderTip: "Mit dem Rad über die Hawke's Bay Trails – flache Strecken zwischen den Weingütern.",
        imageQuery: "hawkes-bay-vineyard-new-zealand",
        image: foodHawkesBay,
      },
      {
        id: "coromandel-oysters",
        title: "Coromandel Oysters",
        location: "Coromandel Town",
        description:
          "Direkt vom Erzeuger an der Mündung: pralle, salzig-süße Austern – pur mit Zitrone oder kurz auf dem Grill. Die beste Adresse: The Coromandel Oyster Company an der Hauptstraße.",
        imageQuery: "fresh-oysters-new-zealand",
        image: foodCoromandelOysters,
      },
    ],
    regionalSafety: [
      {
        id: "volcano",
        category: "natural",
        title: "Vulkangefahr Tongariro & Whakaari",
        description:
          "Die Warnstufen vor jeder Tour prüfen – das Tongariro Crossing wird bei erhöhter Aktivität gesperrt. Whakaari/White Island ist seit 2019 für Touristen geschlossen.",
        source: "GeoNet",
        sourceUrl: "https://www.geonet.org.nz/volcano",
      },
      {
        id: "alpine-weather",
        category: "weather",
        title: "Wettersturz im Alpenbereich",
        description:
          "Auch im Sommer drohen plötzliche Stürme und Schneefälle auf dem Tongariro. Bei Schlechtwetter Tour abbrechen – Wind- und Regenschicht immer mitführen.",
        source: "MetService",
        sourceUrl: "https://www.metservice.com/national-parks/tongariro-national-park",
      },
      {
        id: "west-coast-surf",
        category: "general",
        title: "Brandung an der Westküste",
        description:
          "Strände wie Piha und Muriwai haben starke Strömungen (Rip Currents). Nur zwischen den gelb-roten Flaggen der Surf Lifeguards baden.",
        source: "SafeTravel NZ",
        sourceUrl: "https://www.safetravel.govt.nz/staying-safe-new-zealand",
      },
      {
        id: "marae-etiquette",
        category: "general",
        title: "Kulturelle Etikette auf einem Marae",
        description:
          "Beim Besuch eines Marae oder bei einer Pōwhiri-Zeremonie bitte den Anweisungen der Gastgeber folgen — Schuhe vor dem Wharenui ausziehen, nicht über Speisen hinwegsteigen und keine Hüte im Versammlungshaus tragen.",
        source: "Tourism New Zealand",
        sourceUrl: "https://www.newzealand.com/de/feature/marae-etiquette/",
      },
    ],
  },
  {
    slug: "suedinsel",
    name: "Südinsel",
    tagline: "Fjorde, Gletscher und die Southern Alps",
    image: south,
    intro:
      'Die Südinsel (Te Waipounamu) ist das Postkartenmotiv schlechthin: Milford Sound, Mount Cook, die Weinregion Marlborough und Adrenalin-Hotspot Queenstown — die „Adventure Capital of the World" mit Bungee, Jet Boats und Skydiving — liegen alle hier.',
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
    excursions: [
      {
        id: "milford",
        title: "Milford Sound Bootstour",
        description:
          "Zwei Stunden durch den spektakulärsten Fjord der Welt – mit tosenden Wasserfällen, Robbenkolonien und (mit Glück) Delfinen. Start meist ab Te Anau oder Queenstown.",
        effort: "easy",
        duration: "Cruise 1h45–2 Std.",
        priceRange: "Standard-Cruise ca. € 63–91 · Premium ca. € 120–197",
        tags: ["Bootstour", "Fjord"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/milford-sound-piopiotahi/",
        imageQuery: "milford-sound-fjord-waterfall",
        image: excMilford,
      },
      {
        id: "hooker-valley",
        title: "Hooker Valley Track",
        description:
          "10 km hin und zurück durch das Hooker Valley – mit Hängebrücken über Gletscherflüsse und Aoraki/Mt Cook am Horizont. Eine der schönsten leichten Wanderungen Neuseelands.",
        effort: "moderate",
        duration: "3–4 Stunden",
        priceRange: "Track kostenlos · Parking White Horse Hill ca. € 25 / 2 Tage",
        tags: ["Tageswanderung", "Alpine View"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/aoraki-mount-cook-national-park/things-to-do/tracks/hooker-valley-track/",
        imageQuery: "hooker-valley-track-mount-cook",
        image: excHooker,
      },
      {
        id: "franz-josef",
        title: "Franz Josef Glacier",
        description:
          "Geführte Gletscherwanderung oder spektakuläre Heli-Hike auf das ewige Eis – nur mit Guide möglich, da der Gletscher sich ständig verändert.",
        effort: "challenging",
        duration: "Heli-Hike ca. 4 Std. (2,5 Std. auf dem Eis)",
        priceRange: "Valley Walk kostenlos · Heli-Hike ca. € 405 · Scenic Flights € 100–253",
        tags: ["Gletscher", "Helitour"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/west-coast/places/westland-tai-poutini-national-park/",
        imageQuery: "franz-josef-glacier-new-zealand",
        image: excFranzJosef,
      },
      {
        id: "roys-peak",
        title: "Roy's Peak (Wanaka)",
        description:
          "16 km steiler Aufstieg mit dem berühmten Instagram-Aussichtspunkt über den Lake Wanaka und die umliegenden Berge. Früh starten – bei Sonnenaufgang am magischsten.",
        effort: "challenging",
        duration: "ca. 5–6 Stunden",
        priceRange: "Track & Parking kostenlos (geschlossen 1. Okt – 10. Nov)",
        tags: ["Bergtour", "Aussicht"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/mount-aspiring-national-park/things-to-do/roys-peak-track/",
        imageQuery: "roys-peak-wanaka-summit",
        image: excRoysPeak,
      },
      {
        id: "routeburn",
        title: "Routeburn Track",
        description:
          "32 km Great Walk über drei Tage – durch Buchenwald, alpine Pässe und entlang glasklarer Bergseen. Hütten müssen Monate im Voraus gebucht werden.",
        effort: "challenging",
        duration: "3 Tage / 2 Nächte",
        priceRange: "Hütte ca. € 60 (intl.) / € 40 p. P./Nacht in der Saison · Transfer € 80–150",
        tags: ["Great Walk", "3 Tage"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/",
        imageQuery: "routeburn-track-new-zealand",
        image: excRouteburn,
      },
      {
        id: "kawarau-bridge-bungy",
        title: "Kawarau Bridge Bungy (Queenstown)",
        description:
          "Der weltweit erste kommerzielle Bungy-Sprung — seit 1988 in Betrieb. 43 Meter freier Fall von der historischen Kawarau-Brücke über dem türkisfarbenen Kawarau River, mit optionalem Wassertouch. AJ Hackett Bungy ist Pionier und weltweiter Marktführer in Sachen Sicherheit.",
        effort: "challenging",
        duration: "ca. 2 Stunden (inkl. Anreise und Briefing)",
        priceRange: "€ 130–140 (inkl. Foto/Video und T-Shirt)",
        tags: ["Adrenalin", "Bungy"],
        source: "AJ Hackett Bungy New Zealand",
        sourceUrl: "https://www.bungy.co.nz/queenstown/kawarau-bungy-centre/kawarau-bridge-bungy/",
        imageQuery: "Kawarau Bridge bungy jump Queenstown New Zealand",
        image: excKawarauBungy,
      },
    ],
    foodAndWine: [
      {
        id: "marlborough",
        title: "Marlborough Sauvignon Blanc",
        location: "Blenheim",
        description:
          "Das weltweit bekannteste Anbaugebiet für Sauvignon Blanc – knackig, grasig, mit Passionsfrucht-Note. Über 30 Weingüter rund um Blenheim, viele mit eigenem Restaurant.",
        insiderTip: "Cloudy Bay startete den Hype – aber kleine Familienweingüter wie Hans Herzog sind oft eindrucksvoller.",
        imageQuery: "marlborough-vineyard-sauvignon-blanc",
        image: foodMarlborough,
      },
      {
        id: "central-otago",
        title: "Central Otago Pinot Noir",
        location: "Cromwell & Bannockburn",
        description:
          "Im südlichsten Weinanbaugebiet der Welt entstehen mineralische, kühle Pinot Noirs mit Tiefe. Tagestouren ab Queenstown führen durch goldbraune Hügel und alte Goldgräberorte.",
        imageQuery: "central-otago-pinot-noir-vineyard",
        image: foodCentralOtago,
      },
      {
        id: "bluff-oysters",
        title: "Bluff Oysters (März–August)",
        location: "Bluff",
        description:
          "Die saisonale Spezialität aus dem äußersten Süden – kräftig, salzig, fleischig. Wer im Saisonfenster reist, sollte den Umweg nach Bluff oder Invercargill nicht missen.",
        imageQuery: "bluff-oysters-new-zealand",
        image: foodBluffOysters,
      },
      {
        id: "canterbury-lamb",
        title: "Canterbury Lamb",
        location: "Christchurch",
        description:
          "Der traditionelle Sonntagsbraten der Südinsel: zartes Lamm aus den Canterbury-Ebenen mit Rosmarin und Minzsoße. In Christchurch-Pubs wie The Original Sin Tavern fast schon Pflicht.",
        imageQuery: "new-zealand-lamb-roast",
        image: foodCanterburyLamb,
      },
    ],
    regionalSafety: [
      {
        id: "sandflies",
        category: "natural",
        title: "Sandflies an Westküste & Fiordland",
        description:
          "Die kleinen Plagegeister attackieren in Schwärmen, besonders am Wasser. Repellent mit DEET oder Picaridin, lange Kleidung und die Innenräume der Unterkünfte schließen.",
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/nature/pests-and-threats/animal-pests/sandflies/",
      },
      {
        id: "alpine-cold",
        category: "weather",
        title: "Wetter im Hochgebirge",
        description:
          "Auch im Sommer können in den Southern Alps Schneefälle auftreten. Wärmeschicht, Mütze und Notfalldecke gehören in jeden Tagesrucksack – Wetterbericht des MetService täglich prüfen.",
        source: "MetService",
        sourceUrl: "https://www.metservice.com/rural/regions/canterbury",
      },
      {
        id: "earthquake",
        category: "natural",
        title: "Erdbeben in Canterbury & Marlborough",
        description:
          "Die Region liegt auf der Alpine Fault. Bei Beben gilt: Drop, Cover, Hold On – unter einen stabilen Tisch und Kopf schützen. An der Küste danach sofort höher gelegenes Gelände aufsuchen (Tsunami).",
        source: "GeoNet",
        sourceUrl: "https://www.geonet.org.nz/earthquake",
      },
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
      "Dark Sky Sanctuary (5. weltweit, seit 2019)",
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
    excursions: [
      {
        id: "rakiura-track",
        title: "Rakiura Track",
        description:
          "32 km Great Walk über drei Tage durch dichten Regenwald und entlang einsamer Buchten. Zwei DOC-Hütten unterwegs – im Voraus buchen.",
        effort: "moderate",
        duration: "3 Tage / 2 Nächte",
        priceRange: "Hütte ca. € 28 (intl.) / € 19 (NZ) p. P./Nacht · Fähre Bluff–Oban ca. € 56 return",
        tags: ["Great Walk", "3 Tage"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/stewart-island-rakiura/things-to-do/tracks/rakiura-track/",
        imageQuery: "rakiura-track-stewart-island",
        image: excRakiuraTrack,
      },
      {
        id: "ulva-island",
        title: "Ulva Island",
        description:
          "Pestizidfreie Vogelinsel – Heimat von Saddleback, Kaka und Yellowhead. Ein Wassertaxi bringt Besucher in 10 Minuten hin, leichte Tagesrundwege erschließen die Insel.",
        effort: "easy",
        duration: "ca. 3–4 Stunden",
        priceRange: "Insel kostenlos · Wassertaxi ca. € 15 Erw. / € 10 Kind (return)",
        tags: ["Vogelreservat", "Tagesausflug"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/stewart-island-rakiura/places/ulva-island-te-wharawhara/",
        imageQuery: "ulva-island-native-bird-new-zealand",
        image: excUlvaIsland,
      },
      {
        id: "kiwi-spotting",
        title: "Kiwi Spotting Tour",
        description:
          "Stewart Island ist einer der wenigen Orte weltweit, wo wilde Kiwis tagsüber und in der Dämmerung zu sehen sind. Geführte Abendtour mit Rotlicht – respektvoll und leise.",
        effort: "easy",
        duration: "ca. 3–4 Stunden (abends)",
        priceRange: "€ 100–150",
        tags: ["Tierbeobachtung", "Nachttour"],
        source: "Lokale Guides (DOC-zertifiziert)",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/stewart-island-rakiura/things-to-do/",
        imageQuery: "kiwi-bird-new-zealand-night",
        image: excKiwiSpotting,
      },
      {
        id: "mason-bay",
        title: "Mason Bay",
        description:
          "Abgelegene Bucht an der Westküste – über mehrtägige Wanderung oder per Buschflugzeug erreichbar. Eine der besten Stellen, wilde Kiwis am Strand zu sehen.",
        effort: "challenging",
        duration: "2–3 Tage",
        priceRange: "Coast-to-Coast-Paket ab ca. € 530 · Mason Bay Hut ca. € 15 / Nacht",
        tags: ["Mehrtagestour", "Remote"],
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/stewart-island-rakiura/places/mason-bay/",
        imageQuery: "mason-bay-stewart-island-beach",
        image: excMasonBay,
      },
      {
        id: "viva-expeditions-dark-sky",
        title: "Viva Expeditions — Stewart Island Dark Sky Delights",
        description:
          "6-tägige Aurora-Australis-Kleingruppenreise ab/bis Invercargill: Aurora-Abend mit lokalem Astronomen, Ulva Island, Paterson Inlet Cruise, Kiwi-Spotting und 5 Übernachtungen. Termine zwischen April und September um Neumond.",
        effort: "easy",
        duration: "6 Tage / 5 Nächte",
        priceRange: "ab € 1.635 p. P. · EZ-Zuschlag ca. € 448",
        tags: ["Aurora", "Dark Sky", "Kleingruppe"],
        source: "Viva Expeditions",
        sourceUrl:
          "https://vivaexpeditions.com/tours/new-zealand/stewart-island/stewart-island-dark-sky-delights-small-group-tour",
        imageQuery: "aurora-australis-stewart-island",
        image: excAuroraAustralis,
      },
      {
        id: "ruggedy-range-dark-sky",
        title: "Ruggedy Range™ — Dark Sky & Aurora Tour",
        description:
          "Geführte Dark-Sky-Beobachtung mit lokalem Astronomen (Alistair) inklusive Teleskop und Storytelling. Flexibel buchbar in kleinen Gruppen, optional kombinierbar mit Kiwi-Spotting oder Ulva-Island-Tour. Familiengeführt seit über 22 Jahren.",
        effort: "easy",
        duration: "Tages-/Einzeltour, flexibel",
        priceRange: "auf Anfrage · kleine Gruppen, individuell",
        tags: ["Aurora", "Dark Sky", "Teleskop"],
        source: "Ruggedy Range",
        sourceUrl: "https://www.ruggedyrange.com/stewart-island/aurora-australis/",
        imageQuery: "aurora-australis-rakiura-night-sky",
        image: excAuroraRuggedy,
      },
    ],
    foodAndWine: [
      {
        id: "south-sea-hotel",
        title: "South Sea Hotel (Oban)",
        location: "Halfmoon Bay, Oban",
        description:
          "Das Herz des Inseldorfs: einfaches Pub-Ambiente, dafür fangfrischer Sole, Blue Cod und Tuna direkt vom Hafen nebenan. Donnerstags Pub-Quiz mit allen Inselbewohnern.",
        insiderTip: "Den Blue Cod 'beer-battered' bestellen – die lokale Spezialität.",
        imageQuery: "stewart-island-fresh-seafood",
        image: foodSouthSeaHotel,
      },
      {
        id: "mutton-bird",
        title: "Mutton Bird (Titi)",
        location: "Saisonal April–Mai",
        description:
          "Eine der traditionellsten Maori-Saisondelikatessen: junge Sturmtaucher mit kräftig-öligem, ganz eigenständigem Geschmack. Nur zur Erntezeit auf Karten der Inselrestaurants zu finden.",
        imageQuery: "traditional-maori-food-new-zealand",
        image: foodMuttonbird,
      },
    ],
    regionalSafety: [
      {
        id: "weather-wind",
        category: "weather",
        title: "Wetter & Wind",
        description:
          "Roaring Forties – das Wetter wechselt im Stundentakt. Die Fähre ab Bluff fällt regelmäßig aus, immer einen Pufferttag einplanen und wasserdichte Kleidung mitnehmen.",
        source: "MetService",
        sourceUrl: "https://www.metservice.com/towns-cities/locations/stewart-island",
      },
      {
        id: "no-signal",
        category: "general",
        title: "Eingeschränkter Mobilfunkempfang",
        description:
          "Außerhalb von Oban kein Netz. Mehrtagestouren bei DOC registrieren (Outdoor Intentions), Karte, Kompass und idealerweise PLB (Personal Locator Beacon) mitführen.",
        source: "DOC AdventureSmart",
        sourceUrl: "https://www.adventuresmart.nz/",
      },
      {
        id: "wet-tracks",
        category: "natural",
        title: "Nasse Wege & Schlamm",
        description:
          "Die Pfade sind notorisch schlammig – auch mitten im Sommer. Robuste Wanderstiefel, Gamaschen und für Mehrtagestrek eine geführte Tour empfohlen.",
        source: "DOC",
        sourceUrl: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/stewart-island-rakiura/",
      },
    ],
  },
];

export const getRegion = (slug: string) => regions.find((r) => r.slug === slug);
