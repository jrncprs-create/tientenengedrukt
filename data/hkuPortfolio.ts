import {
  hkuAsset,
  hkuFile,
  hkuFilesSorted,
  numberedFiles,
  type HkuMediaGroup,
} from "@/lib/hkuMedia";

export type HkuChapterType =
  | "intro"
  | "process"
  | "final"
  | "reflection"
  | "sources";

export type HkuChapter = {
  id: string;
  label: string;
  type: HkuChapterType;
  title: string;
  text: string;
  mediaGroups?: HkuMediaGroup[];
};

export type HkuProject = {
  id: string;
  title: string;
  type: string;
  role: string;
  chapters: HkuChapter[];
};

export type HkuPortfolioContent = {
  intro: {
    name: string;
    kicker: string;
    degree: string;
    summary: string;
    focus: string[];
  };
  projects: HkuProject[];
  cv: {
    title: string;
    summary: string;
    pdfHref: string;
    pdfLabel: string;
    highlights: { year: string; title: string; text: string }[];
  };
  assetOptimizationNote: string;
  sanityMigrationNote: string;
};

const artDesignBase = ["1_Art & Design"];
const bilalBase = ["2_Bilal Wahib"];
const mocharBase = ["3_Mochar"];
const sprinterBase = ["4_SprinterSoundSystem"];
const tdfwBase = ["5_TDFW Posters"];

const artDesignLook1: HkuMediaGroup = {
  title: "Look 01",
  pairPortraits: true,
  items: numberedFiles(
    [...artDesignBase, "Look 1"],
    "LOOK 1_",
    1,
    7,
    "jpg",
    "Art & Design look 01",
  ),
};

const artDesignLook2: HkuMediaGroup = {
  title: "Look 02",
  pairPortraits: true,
  items: numberedFiles(
    [...artDesignBase, "Look 2"],
    "LOOK 2_",
    1,
    6,
    "jpg",
    "Art & Design look 02",
  ),
};

const artDesignLook3: HkuMediaGroup = {
  title: "Look 03",
  pairPortraits: true,
  items: numberedFiles(
    [...artDesignBase, "Look 3"],
    "LOOK 3_",
    1,
    6,
    "jpg",
    "Art & Design look 03",
  ),
};

const bilalOtherOptions: HkuMediaGroup = {
  title: "Ontwerprichtingen",
  items: numberedFiles(
    [...bilalBase, "Proces", "Other options"],
    "Presentatie-",
    2,
    11,
    "jpg",
    "Bilal Wahib ontwerpoptie",
    2,
  ),
};

const bilalPosterInUse: HkuMediaGroup = {
  title: "Poster in use",
  items: hkuFilesSorted(
    [...bilalBase, "Poster in Use"],
    [
      "IMG_2571.jpg",
      "IMG_2574.jpg",
      "IMG_2575.jpg",
      "Poster on wall.jpg",
      "poster closeup.jpg",
      "poster closeup 2.jpg",
    ],
    (filename) => `Bilal Wahib poster in gebruik: ${filename}`,
  ),
};

const mocharLogoSketches: HkuMediaGroup = {
  title: "Logo schetsen",
  items: numberedFiles(
    [...mocharBase, "Proces"],
    "logo schetsen_Mochar-",
    1,
    32,
    "jpg",
    "MocHar logo schets",
    2,
  ),
};

const mocharLogoIterations: HkuMediaGroup = {
  title: "Logo iteraties",
  items: numberedFiles(
    [...mocharBase, "Proces"],
    "MocHar_Logo_1-",
    1,
    17,
    "jpg",
    "MocHar logo iteratie",
    2,
  ),
};

const mocharCoffeeBeans: HkuMediaGroup = {
  title: "Verpakking",
  items: hkuFilesSorted(
    [...mocharBase, "MocHar Mockups", "Coffee Beans"],
    [
      "Decaf.jpg",
      "Mild.jpg",
      "Original.jpg",
      "Patta colab.jpg",
      "Strong.jpg",
    ],
    (filename) => `MocHar koffiebonen ${filename.replace(".jpg", "")}`,
  ),
};

const mocharCoffeeCup: HkuMediaGroup = {
  title: "Toepassingen",
  items: [
    hkuFile(
      [...mocharBase, "MocHar Mockups", "Coffee cup", "Coffee Cup front.jpg"],
      "MocHar koffiebeker front",
    ),
    hkuFile(
      [...mocharBase, "MocHar Mockups", "Coffee cup", "Coffee Cup group.jpg"],
      "MocHar koffiebekers groep",
    ),
  ],
};

const mocharWebsite: HkuMediaGroup = {
  title: "Website",
  items: [
    hkuFile(
      [...mocharBase, "MocHar Mockups", "Website", "All products page.jpg"],
      "MocHar website alle producten",
    ),
    hkuFile(
      [...mocharBase, "MocHar Mockups", "Website", "Mochar story.jpg"],
      "MocHar story pagina",
    ),
    hkuFile(
      [...mocharBase, "MocHar Mockups", "Website", "Product page.jpg"],
      "MocHar productpagina",
    ),
    hkuFile(
      [
        ...mocharBase,
        "MocHar Mockups",
        "Website",
        "Patta Colab Product page.jpg",
      ],
      "MocHar Patta collab productpagina",
    ),
  ],
};

const sprinterSchetsen: HkuMediaGroup = {
  title: "Ruimtelijke schetsen",
  items: [
    hkuFile(
      [...sprinterBase, "Schetsen", "Schets sprinter.jpg"],
      "Schets sprinter exterieur",
    ),
    hkuFile(
      [...sprinterBase, "Schetsen", "binnen kant schets.jpg"],
      "Schets interieur",
    ),
    hkuFile(
      [...sprinterBase, "Schetsen", "sketch.jpg"],
      "Schets concept",
    ),
  ],
};

const tdfwPosters: HkuMediaGroup = {
  title: "Jaaroverzicht",
  items: [
    ...numberedFiles(
      tdfwBase,
      "TDFW Jaaroverzicht-",
      1,
      12,
      "jpg",
      "TDFW poster",
      2,
    ),
    hkuFile([...tdfwBase, "Thumbnail.jpg"], "TDFW thumbnail overzicht"),
  ],
};

export const hkuPortfolio: HkuPortfolioContent = {
  intro: {
    name: "Joep Cuypers",
    kicker: "HKU toelatingsportfolio",
    degree: "Associate degree Digital Media",
    summary:
      "Ik werk op het snijvlak van art direction, beeld en digitale media. Niet alleen het eindbeeld telt: onderzoek, schetsen, keuzes en reflectie maken zichtbaar hoe ik tot een visuele richting kom. Deze selectie laat zien hoe ik concepten ontwikkel, experimenteer met vorm en materiaal, en dat vertaal naar identiteit, campagne en productie.",
    focus: [
      "Concept & onderzoek",
      "Beeld & typografie",
      "Digitale media",
      "Proces & reflectie",
      "Culturele context",
    ],
  },
  projects: [
    {
      id: "art-design",
      title: "Art & Design",
      type: "Keuzedeel — mode, styling & visuele identiteit",
      role: "Concept, art direction, styling, fotografie, productie en procesdocumentatie",
      chapters: [
        {
          id: "intro",
          label: "",
          type: "intro",
          title: "Projectintro",
          text: "Tijdens het keuzedeel Art & Design kreeg ik de opdracht een autonoom kunstwerk te maken. Omdat styling al een groot deel van mijn praktijk is, wilde ik dat als uitgangspunt gebruiken. Na feedback van een docent besloot ik mezelf verder uit te dagen: niet alleen stylen, maar ook kledingstukken maken en die verwerken in samenhangende looks.",
        },
        {
          id: "aanpak",
          label: "01",
          type: "process",
          title: "Aanpak",
          text: "Ik ben begonnen met het verkennen van de werkplaats en het uitproberen van druktechnieken: riso, linosnede, cyanotype, 3D-geprinte stempel en vinyldruk. Zo kreeg ik snel beeld van wat visueel sterk was en waar ik me op kon richten bij het concept.",
          mediaGroups: [
            {
              title: "Werkplaats & proces",
              pairPortraits: true,
              items: [
                hkuFile(
                  [...artDesignBase, "Proces", "IMG_2016.jpg"],
                  "Procesfoto tijdens maken",
                ),
                hkuFile(
                  [...artDesignBase, "Proces", "IMG_2017.jpg"],
                  "Procesfoto tijdens maken",
                ),
              ],
            },
          ],
        },
        {
          id: "concept",
          label: "02",
          type: "process",
          title: "Concept",
          text: "Ik wilde mode en grafische druktechnieken samenvoegen tot een autonoom kunstwerk. Het concept draait om anarchie — als politiek statement, maar ook als esthetische houding. Verzet tegen autoriteit, religie en gevestigde orde vormt de rode draad. Ik maakte de kledingstukken zelf en bewerkte ze met de technieken die ik had geleerd, zodat elk stuk een eigen boodschap kreeg.",
        },
        {
          id: "kledingstukken",
          label: "03",
          type: "process",
          title: "Kledingstukken",
          text: "Drie kledingstukken vormen de basis van de serie. De Barbed Tanktop: een strak ribshirt met prikkeldraad — het zachtste kledingstuk met het hardste motief. Summer Never Came: een militaire sweater uit 1970 met palmboom en anarchiesymbool. Jesus Would Riot: een oversized zwarte sweater met het gezicht van Jezus, maar met anarchiesymbolen in plaats van een doornenkroon.",
          mediaGroups: [
            {
              title: "Prototypes",
              items: [
                hkuFile(
                  [...artDesignBase, "Proces", "Unused Tanktop.jpg"],
                  "Barbed Tanktop prototype",
                  "Barbed Tanktop",
                ),
                hkuFile(
                  [...artDesignBase, "Proces", "unused sweater .jpg"],
                  "Summer Never Came prototype",
                  "Summer Never Came",
                ),
              ],
            },
          ],
        },
        {
          id: "selectieproces",
          label: "04",
          type: "process",
          title: "Selectieproces",
          text: "Het stylingproces begint in mijn eigen kledingkast. Vanuit wat er al is maak ik combinaties en kijk ik wat mist. Wat ontbreekt source ik via Vinted of tweedehandswinkels. Aanvankelijk was er een vierde look met het prikkeldraad-shirt, maar die styling kwam niet op het gewenste niveau. Drie looks voelt beter — elk stuk krijgt ruimte en samen vormen ze een geheel.",
          mediaGroups: [
            {
              title: "Styling",
              items: [
                hkuFile(
                  [...artDesignBase, "Proces", "Styling looks at home.jpg"],
                  "Styling van looks thuis",
                ),
              ],
            },
          ],
        },
        {
          id: "look-01",
          label: "05",
          type: "process",
          title: "Look 01",
          text: "De eerste look vertaalt het thema naar een strakke, bijna onschuldige silhouette met een hard contrast: lichte kleding, zware symboliek. Prikkeldraad omsluit het lichaam alsof het vasthoudt — gevangen zien er soms ook gewoon uit als mensen.",
          mediaGroups: [artDesignLook1],
        },
        {
          id: "look-02",
          label: "06",
          type: "process",
          title: "Look 02",
          text: "Look 02 werkt met militaire herkomst en zomerse beelden die botsen: een anti-oorlogsstatement verpakt in palmbomen en sterren. De zomer die nooit kwam, maar ergens toch blijft bestaan.",
          mediaGroups: [artDesignLook2],
        },
        {
          id: "look-03",
          label: "07",
          type: "process",
          title: "Look 03",
          text: "De derde look neemt een religieus icoon en draait het om. Jezus draagt anarchiesymbolen in plaats van een doornenkroon — een bekend beeld, maar dan anders. Simpel van boodschap, complex van lagen.",
          mediaGroups: [artDesignLook3],
        },
        {
          id: "expo",
          label: "FINAL",
          type: "final",
          title: "Expo & presentatie",
          text: "Voor de expositie combineerde ik prints van de looks met een video die ik maakte tijdens de shoots. In Resolume legde ik beelden en thematische elementen over elkaar, zodat er naast de stilstaande foto's ook een dynamisch beeld ontstond dat aandacht trekt.",
          mediaGroups: [
            {
              title: "Expositie",
              items: [
                hkuFile(
                  [...artDesignBase, "Proces", "Expo pic.jpg"],
                  "Expositie-opstelling",
                  "Expo",
                ),
                hkuFile(
                  [...artDesignBase, "Proces", "Printing on a1 for expo.jpg"],
                  "Print op A1 voor expositie",
                ),
              ],
            },
            {
              title: "Presentatievideo",
              items: [
                hkuFile(
                  [...artDesignBase, "Video", "Art & Design Video Full.mp4"],
                  "Art & Design presentatievideo",
                  "Presentatievideo",
                ),
              ],
            },
          ],
        },
        {
          id: "reflectie",
          label: "",
          type: "reflection",
          title: "Van onderzoek naar beeld",
          text: "Ik heb mezelf uitgedaagd om verder te gaan dan alleen styling. Door zelf kledingstukken te maken en druktechnieken in te zetten, kon ik mijn concept persoonlijker uitwerken. Het thema anarchie gaf richting, maar ook ruimte om te experimenteren. Kritische keuzes — zoals vier looks terugbrengen naar drie — maakten de serie sterker. De expo was minder voorbereid dan ik wilde, maar de video compenseerde dat met een extra laag beweging en aandacht.",
        },
        {
          id: "bronnen",
          label: "",
          type: "sources",
          title: "Bronbestanden",
          text: "",
          mediaGroups: [
            {
              title: "Documentatie",
              items: [
                hkuFile(
                  [
                    ...artDesignBase,
                    "Text",
                    "Proces verslag Keuzedeel_Art&Design_Joep_Cuypers_4GV4.pdf",
                  ],
                  "Procesverslag Art & Design",
                  "Procesverslag (PDF)",
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "bilal-wahib",
      title: "Bilal Wahib",
      type: "Campagnevisual & posterproductie",
      role: "Art direction, compositie, typografie, beeldbewerking en drukbestanden",
      chapters: [
        {
          id: "intro",
          label: "",
          type: "intro",
          title: "Projectintro",
          text: "Voor Bilal Wahib maakte ik een campagnevisual die werkt op A3, in straatbeeld en op social — sterk genoeg om op te vallen, maar zonder de artiest visueel te verdringen.",
        },
        {
          id: "opdracht",
          label: "01",
          type: "process",
          title: "Opdracht",
          text: "De opdracht vroeg om een poster die de energie van de artiest draagt, maar ook standalone werkt als grafisch object. Ik moest rekening houden met drukformaat, contrast op afstand en de balans tussen beeld en typografie.",
        },
        {
          id: "ontwerprichtingen",
          label: "02",
          type: "process",
          title: "Ontwerprichtingen",
          text: "Ik testte meerdere composities op contrast, hierarchie en sfeer. Elke richting onderzocht ik op hoe het beeld zich gedraagt op formaat: wat leest van verre, wat werkt in detail, en waar de spanning zit tussen artiest en vorm.",
          mediaGroups: [bilalOtherOptions],
        },
        {
          id: "eindproduct",
          label: "FINAL",
          type: "final",
          title: "Definitieve poster & poster in use",
          text: "Uit de ontwerprichtingen koos ik de sterkste richting en scherpte die aan voor druk: crop, kleur en typografische spanning op A3. De in-use-foto's laten zien hoe het ontwerp zich gedraagt aan de muur en in detail.",
          mediaGroups: [bilalPosterInUse],
        },
        {
          id: "reflectie",
          label: "",
          type: "reflection",
          title: "Wat dit project laat zien",
          text: "Dit project laat zien dat ik campagnebeeld kan maken vanuit muziekcultuur, met oog voor zowel scherm als straat. Ik test eerst breed, kies daarna scherp en lever drukklaar op. Het eindbeeld is niet alleen een ontwerp — het is gedocumenteerd in context.",
        },
        {
          id: "bronnen",
          label: "",
          type: "sources",
          title: "Bronbestanden",
          text: "",
          mediaGroups: [
            {
              title: "Documentatie",
              items: [
                hkuFile(
                  [...bilalBase, "Proces", "Bilal Para Artwork v2.pdf"],
                  "Bilal Para artwork proces",
                  "Artwork v2 (PDF)",
                ),
                hkuFile(
                  [...bilalBase, "Bilal Para A3 Print.pdf"],
                  "Bilal Para A3 print",
                  "A3 print (PDF)",
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "mochar",
      title: "Mochar",
      type: "Meridentiteit & digitale productpresentatie",
      role: "Branding, logo-ontwerp, packaging, webdesign en conceptpresentatie",
      chapters: [
        {
          id: "intro",
          label: "",
          type: "intro",
          title: "Projectintro",
          text: "MocHar is een fictief koffiemerk waarvoor ik een volledige visuele identiteit ontwikkelde: van logo en verpakking tot website-mockups. Het project combineert onderzoek, positionering en uitwerking in één merksysteem.",
        },
        {
          id: "briefing",
          label: "01",
          type: "process",
          title: "Briefing",
          text: "MocHar moest een sterke merkidentiteit krijgen die past bij duurzaamheid, vakmanschap en een moderne stijl. Het doel: een duidelijke positie in de markt en jonge koffiedrinkers aanspreken met beleving, lifestyle en een sterke boodschap.",
        },
        {
          id: "concept",
          label: "02",
          type: "process",
          title: "Concept",
          text: "Ik ontwikkelde een visuele identiteit die verwijst naar de Jemenitische herkomst van de koffiebonen — in logo, kleur en grafische elementen. De Golden Circle hielp me communiceren vanuit waarom MocHar bestaat, hoe het dat doet en wat het aanbiedt.",
        },
        {
          id: "logo-onderzoek",
          label: "03",
          type: "process",
          title: "Logo-onderzoek",
          text: "Het logo begon met tientallen schetsen. Ik combineerde motieven van koffiebloem, bonen en koffiekringen met decoratieve elementen uit traditionele Jemenitische patronen, en testte welke vormen het merk het meest herkenbaar en modern maakten.",
          mediaGroups: [mocharLogoSketches],
        },
        {
          id: "logo-iteraties",
          label: "04",
          type: "process",
          title: "Logo-iteraties",
          text: "Vanuit de schetsen werkte ik systematisch door naar strakkere iteraties. Ik testte proporties, contrast en leesbaarheid op klein formaat én op verpakking, totdat het logo werkte als anker voor het hele systeem.",
          mediaGroups: [mocharLogoIterations],
        },
        {
          id: "verpakking",
          label: "05",
          type: "process",
          title: "Verpakking",
          text: "Ik vertaalde de identiteit naar standbodembeutels op kraftpapier, met PMS-kleuren en varianten per blend. Elk pakket moest het verhaal van herkomst en vakmanschap dragen, maar ook op het schap en online overtuigen.",
          mediaGroups: [mocharCoffeeBeans],
        },
        {
          id: "website",
          label: "06",
          type: "process",
          title: "Website",
          text: "De website-mockups tonen hoe het merk online werkt: productpagina's, story en een collab-variant met Patta. Ik hield rekening met typografische hiërarchie, Jemen-rood als huisstijlkleur en een consistente beeldtaal.",
          mediaGroups: [mocharWebsite],
        },
        {
          id: "toepassingen",
          label: "07",
          type: "process",
          title: "Social & toepassingen",
          text: "Naast verpakking en web werkte ik het merk door naar bekers en lifestyle-beelden. Zo werd zichtbaar hoe MocHar zich gedraagt in verschillende touchpoints — niet als losse assets, maar als één wereld.",
          mediaGroups: [mocharCoffeeCup],
        },
        {
          id: "eindproduct",
          label: "FINAL",
          type: "final",
          title: "Eindpresentatie",
          text: "Het eindresultaat is een consistent merksysteem: logo, verpakkingen, bekers en website-mockups die samen één verhaal vertellen. Van schets tot toepassing laat ik zien hoe ik een merk kan uitdenken en presenteren.",
          mediaGroups: [mocharCoffeeBeans, mocharCoffeeCup, mocharWebsite],
        },
        {
          id: "reflectie",
          label: "",
          type: "reflection",
          title: "Mijn keuzes",
          text: "Mochar laat zien dat ik een merk kan bouwen van onderzoek tot mockup. De hoeveelheid iteraties maakt duidelijk dat ik keuzes test in plaats van het eerste idee vast te zetten. Ik denk in systemen: identiteit, product en digitale toepassing horen bij elkaar.",
        },
        {
          id: "bronnen",
          label: "",
          type: "sources",
          title: "Bronbestanden",
          text: "",
          mediaGroups: [
            {
              title: "Documentatie",
              items: [
                hkuFile(
                  [...mocharBase, "MocHar_Conceptpresentatie_DEF.pdf"],
                  "MocHar conceptpresentatie",
                  "Conceptpresentatie (PDF)",
                ),
                hkuFile(
                  [...mocharBase, "Mochar Project Presentation Final.pdf"],
                  "MocHar eindpresentatie",
                  "Eindpresentatie (PDF)",
                ),
                hkuFile(
                  [...mocharBase, "Beroepsexamen_K1-W1-W2_Mochar_vs1.pdf"],
                  "Beroepsexamen W1-W2",
                  "Beroepsexamen W1-W2 (PDF)",
                ),
                hkuFile(
                  [...mocharBase, "Beroepsexamen_K1-W5_Mochar_Joep_C_4GV4.pdf"],
                  "Beroepsexamen W5",
                  "Beroepsexamen W5 (PDF)",
                ),
                hkuFile(
                  [...mocharBase, "Beroepsexamen_K1-W6_Mochar_Joep_Cuypers_vs1.pdf"],
                  "Beroepsexamen W6",
                  "Beroepsexamen W6 (PDF)",
                ),
                hkuFile(
                  [...mocharBase, "Beroepsexamen_K1-W7_Mochar_Joep_Cuypers_4gv4.pdf"],
                  "Beroepsexamen W7",
                  "Beroepsexamen W7 (PDF)",
                ),
                hkuFile(
                  [
                    ...mocharBase,
                    "Joep_Cuypers_4GV4_Beroepsexamen_K1-W1-W2_Mochar_vs1.pdf",
                  ],
                  "Beroepsexamen W1-W2 (alternatief)",
                  "Beroepsexamen W1-W2 alt. (PDF)",
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sprinter-sound-system",
      title: "Sprinter Sound System",
      type: "Concept & ruimtelijke identiteit",
      role: "Concept, visuele identiteit, ruimtelijke schetsen, technisch schema en pitch",
      chapters: [
        {
          id: "intro",
          label: "",
          type: "intro",
          title: "Projectintro",
          text: "Triple S (Sprinter Sound System) is een concept voor een mobiel soundsystem in een Mercedes Sprinter: een culturele plek die kan verplaatsen, opbouwen en weer verdwijnen. Muziek, beeld en community in één herkenbaar format.",
        },
        {
          id: "probleem",
          label: "01",
          type: "process",
          title: "Probleem",
          text: "De Nederlandse underground groeit, maar mist een centraal platform dat scenes samenbrengt. Veel initiatieven focussen op één genre, terwijl house, techno, rap, punk en experimentele clubcultuur cultureel dichter naar elkaar groeien. Ook ontbreekt vaak een consistente visuele wereld rond artiesten en communities.",
        },
        {
          id: "oplossing",
          label: "02",
          type: "process",
          title: "Oplossing",
          text: "SprinterSoundSystem brengt underground scenes samen in één audiovisueel platform. Door muziek, visuele identiteit, mobiele performances en community te combineren, ontstaat een herkenbare plek voor een nieuwe generatie artiesten en subculturen.",
        },
        {
          id: "branding",
          label: "03",
          type: "process",
          title: "Branding",
          text: "De Mercedes Sprinter is niet alleen locatie — het is de identiteit van SSS. Rauw, industrieel en intiem. Het mobiele karakter zorgt voor een herkenbare wereld waarin elke performance onderdeel wordt van hetzelfde format.",
          mediaGroups: [
            {
              title: "Logo",
              items: [
                hkuFile(
                  [...sprinterBase, "SSS logo.jpg"],
                  "Sprinter Sound System logo",
                ),
              ],
            },
          ],
        },
        {
          id: "format",
          label: "04",
          type: "process",
          title: "Format",
          text: "SSS werkt met DJ-sets (20–60 min) en live acts (3–5 tracks), opgenomen in en rondom de Sprinter. Content moet zowel longform als shortform werken: volledige sets op YouTube, highlights op Instagram en TikTok.",
          mediaGroups: [sprinterSchetsen],
        },
        {
          id: "visual-identity",
          label: "05",
          type: "process",
          title: "Visual identity",
          text: "Ik tekende de bus van buiten en binnen: waar staat de DJ, waar beweegt het publiek, welke zones zijn nodig voor geluid en veiligheid. Die ruimtelijke logica werd de basis voor het visuele systeem en de pitch.",
        },
        {
          id: "events",
          label: "06",
          type: "process",
          title: "Events & expansion",
          text: "SSS is ontworpen als meer dan een contentplatform. Het format is de basis voor toekomstige live events, pop-ups en culturele samenwerkingen. Doordat de wereld eerst groeit via content en community, voelen fysieke events niet als een losse uitbreiding.",
        },
        {
          id: "eindproduct",
          label: "FINAL",
          type: "final",
          title: "Pitch & positionering",
          text: "De pitch brengt probleem, oplossing, branding, format en expansie samen in één document. Samen met logo en ruimtelijke schetsen vormt dit het eindproduct: een werkbaar concept, niet alleen een plaatje.",
          mediaGroups: [
            {
              title: "Identiteit & schetsen",
              items: [
                hkuFile(
                  [...sprinterBase, "SSS logo.jpg"],
                  "Sprinter Sound System logo",
                ),
                ...sprinterSchetsen.items,
              ],
            },
            {
              title: "Pitch",
              items: [
                hkuFile(
                  [...sprinterBase, "Triple S Pitch.pdf"],
                  "Triple S pitch",
                  "Pitch (PDF)",
                ),
              ],
            },
          ],
        },
        {
          id: "reflectie",
          label: "",
          type: "reflection",
          title: "Onderzoek & richting",
          text: "Dit project toont mijn interesse in culturele infrastructuur en tijdelijke ruimtes. Ik denk in systemen: hoe een idee fysiek, digitaal en sociaal kan bestaan. SSS is een platform, een format en een visuele wereld tegelijk.",
        },
        {
          id: "bronnen",
          label: "",
          type: "sources",
          title: "Bronbestanden",
          text: "",
          mediaGroups: [
            {
              title: "Documentatie",
              items: [
                hkuFile(
                  [...sprinterBase, "Schetsen", "SprinterSoundSchema.pdf"],
                  "Sprinter Sound schema",
                  "Ruimtelijk schema (PDF)",
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "tdfw-posters",
      title: "TDFW Posters",
      type: "Editorial posterreeks",
      role: "Art direction, typografie, layout en drukklare posteropbouw",
      chapters: [
        {
          id: "intro",
          label: "",
          type: "intro",
          title: "Projectintro",
          text: "Voor TDFW maakte ik een posterreeks per editie: herkenbaar in beeld, maar met variatie en een duidelijke grafische lijn door de reeks heen.",
        },
        {
          id: "systeem",
          label: "01",
          type: "process",
          title: "Systeem & reeks",
          text: "Per poster bepaalde ik eerst wat leidend moest zijn: naam, datum, sfeer of beeld. Daarna bouwde ik een compositie die snel leesbaar is — ook op afstand en in een drukke omgeving. De reeks loopt van 01 tot 12 zodat de ontwikkeling in de tijd zichtbaar blijft.",
        },
        {
          id: "eindproduct",
          label: "FINAL",
          type: "final",
          title: "Jaaroverzicht",
          text: "Twaalf posters als jaaroverzicht, plus een thumbnail die de reeks als geheel samenvat. Elk poster is een eigen editie, maar samen vormen ze een systeem dat je herkent als TDFW.",
          mediaGroups: [tdfwPosters],
        },
        {
          id: "reflectie",
          label: "",
          type: "reflection",
          title: "Reflectie",
          text: "Deze reeks onderstreept mijn affiniteit met muziek- en nachtcultuur. Ik kan snel sterke beelden maken die ook op straat en in de club werken — met variatie binnen één grafische lijn.",
        },
      ],
    },
  ],
  cv: {
    title: "CV & contact",
    summary:
      "Ondersteunend aan dit portfolio: ervaring, opleiding en contactgegevens. Het volledige CV is als PDF beschikbaar.",
    pdfHref: hkuAsset("CV", "Joep_CV_2026.pdf"),
    pdfLabel: "Download CV (PDF)",
    highlights: [
      {
        year: "2025",
        title: "Freelance art direction & visuele productie",
        text: "Concepten, campagnes en productie voor culturele en commerciele opdrachten.",
      },
      {
        year: "2024",
        title: "MBO Grafisch Ontwerp (4GV)",
        text: "Beroepsgerichte projecten in branding, packaging, editorial en digitale media.",
      },
      {
        year: "2023",
        title: "Ruimtelijke en grafische systemen",
        text: "Identiteitswerk vertaald naar signage, print en on-site details.",
      },
      {
        year: "2022",
        title: "Artiestvisuals & productie",
        text: "Beelddirection en layout voor muziekgerichte projecten.",
      },
    ],
  },
  assetOptimizationNote:
    "Beelden in public/hku zijn JPG (max 2200px, quality 82-85). HEIC-bronbestanden blijven in de map; de site gebruikt de JPG-versies. Video Art & Design is gehercodeerd (H.264). Resterend risico: PDF's (~120MB totaal), vooral Proces verslag Art & Design (36MB).",
  sanityMigrationNote:
    "Deze pagina leest uit data/hkuPortfolio.ts. Voor Sanity: maak een hkuPortfolio singleton met intro-velden en een array hkuProject-documenten. Elk project krijgt chapters met type, title, text en geneste mediaGroups. Upload assets naar Sanity CDN en vervang src-paden door image/file-referenties.",
};
