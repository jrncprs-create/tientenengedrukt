import {
  hkuAsset,
  hkuFile,
  hkuFilesSorted,
  numberedFiles,
  type HkuMediaGroup,
} from "@/lib/hkuMedia";

export type HkuProject = {
  id: string;
  title: string;
  type: string;
  context: string;
  role: string;
  process: string;
  outcome: string;
  reflection: string;
  mediaGroups: HkuMediaGroup[];
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

const artDesignLooks: HkuMediaGroup[] = [
  {
    title: "Look 1",
    items: numberedFiles(
      [...artDesignBase, "Look 1"],
      "LOOK 1_",
      1,
      7,
      "jpg",
      "Art & Design look 1",
    ),
  },
  {
    title: "Look 2",
    items: numberedFiles(
      [...artDesignBase, "Look 2"],
      "LOOK 2_",
      1,
      6,
      "jpg",
      "Art & Design look 2",
    ),
  },
  {
    title: "Look 3",
    items: numberedFiles(
      [...artDesignBase, "Look 3"],
      "LOOK 3_",
      1,
      6,
      "jpg",
      "Art & Design look 3",
    ),
  },
];

const artDesignProcess: HkuMediaGroup = {
  title: "Proces",
  items: [
    hkuFile(
      [...artDesignBase, "Proces", "Expo pic.jpg"],
      "Expositie-opstelling",
      "Expo",
    ),
    hkuFile(
      [...artDesignBase, "Proces", "IMG_2016.jpg"],
      "Procesfoto tijdens maken",
    ),
    hkuFile(
      [...artDesignBase, "Proces", "IMG_2017.jpg"],
      "Procesfoto tijdens maken",
    ),
    hkuFile(
      [...artDesignBase, "Proces", "Printing on a1 for expo.jpg"],
      "Print op A1 voor expositie",
    ),
    hkuFile(
      [...artDesignBase, "Proces", "Styling looks at home.jpg"],
      "Styling van looks thuis",
    ),
    hkuFile(
      [...artDesignBase, "Proces", "unused sweater .jpg"],
      "Ongebruikt prototype sweater",
    ),
    hkuFile(
      [...artDesignBase, "Proces", "Unused Tanktop.jpg"],
      "Ongebruikt prototype tanktop",
    ),
  ],
};

const bilalPosterInUse: HkuMediaGroup = {
  title: "Poster in Use",
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

const bilalOtherOptions: HkuMediaGroup = {
  title: "Proces - Other options",
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

const mocharLogoSketches: HkuMediaGroup = {
  title: "Proces - Logo schetsen",
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
  title: "Proces - Logo iteraties",
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
  title: "MocHar Mockups - Coffee Beans",
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
      type: "Keuzedeel - mode, styling & visuele identiteit",
      context:
        "Voor dit keuzedeel ontwikkelde ik drie looks rond een visuele wereld: van onderzoek en referenties naar kleding, styling, beeld en een afsluitende presentatie.",
      role: "Concept, art direction, styling, fotografie, productie en procesdocumentatie.",
      process:
        "Ik begon met beeldonderzoek en moodboards, testte silhouetten en materialen, en maakte onafgemaakte prototypes om keuzes te toetsen. Looks werden thuis gestyled en later samengebracht in een expositie-opstelling. Het procesverslag en de video tonen de stap van schets naar eindpresentatie.",
      outcome:
        "Drie afgeronde looks met een consistente visuele taal, ondersteund door procesmateriaal, een geschreven verslag en een presentatievideo.",
      reflection:
        "Dit project laat zien dat ik niet alleen kan stylen, maar ook een eigen visuele lijn kan opbouwen, keuzes kan onderbouwen en werk kan presenteren alsof het al in een professionele context staat.",
      mediaGroups: [
        artDesignProcess,
        {
          title: "Text",
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
        {
          title: "Video",
          items: [
            hkuFile(
              [...artDesignBase, "Video", "Art & Design Video Full.mp4"],
              "Art & Design presentatievideo",
              "Presentatievideo",
            ),
          ],
        },
        ...artDesignLooks,
      ],
    },
    {
      id: "bilal-wahib",
      title: "Bilal Wahib",
      type: "Campagnevisual & posterproductie",
      context:
        "Opdracht voor een Bilal Wahib-postercampagne: een sterk beeld dat werkt op A3, in straatbeeld en op social, zonder de artiest visueel te verdringen.",
      role: "Art direction, compositie, typografie, beeldbewerking en voorbereiding van drukbestanden.",
      process:
        "Ik testte eerst meerdere composities (Presentatie 02-11) op contrast, hierarchie en sfeer. Daarna scherpte ik het artwork aan voor druk: crop, kleur en typografische spanning op formaat. De in-use-foto's tonen hoe het ontwerp zich gedraagt op muur en in detail.",
      outcome:
        "Een A3-postersetup en het definitieve artwork, plus documentatie van het werk in context - aan de muur en in detail.",
      reflection:
        "Hier zie je mijn affiniteit met muziekcultuur, mijn oog voor campagnebeeld en mijn vermogen om ontwerpkeuzes te maken die ook buiten het scherm werken.",
      mediaGroups: [
        {
          title: "Proces",
          items: [
            hkuFile(
              [...bilalBase, "Proces", "Bilal Para Artwork v2.pdf"],
              "Bilal Para artwork proces",
              "Artwork v2 (PDF)",
            ),
          ],
        },
        bilalOtherOptions,
        {
          title: "Eindresultaat",
          items: [
            hkuFile(
              [...bilalBase, "Bilal Para A3 Print.pdf"],
              "Bilal Para A3 print",
              "A3 print (PDF)",
            ),
          ],
        },
        bilalPosterInUse,
      ],
    },
    {
      id: "mochar",
      title: "Mochar",
      type: "Meridentiteit & digitale productpresentatie",
      context:
        "MocHar is een fictief koffiemerk waarvoor ik een volledige visuele identiteit ontwikkelde: van logo en verpakking tot website-mockups en onderwijsdocumentatie.",
      role: "Branding, logo-ontwerp, packaging, webdesign en conceptpresentatie.",
      process:
        "Het proces begon met tientallen logo-schetsen en systematische iteraties. Daarna vertaalde ik de gekozen identiteit naar verpakkingen, productpagina's en een collab-variant. De beroepsexamen-PDF's tonen hoe ik onderzoek, positionering en uitwerking documenteer.",
      outcome:
        "Een consistent merksysteem met mockups voor bonen, bekers en website, ondersteund door concept- en eindpresentaties.",
      reflection:
        "Mochar laat zien dat ik een merk kan uitdenken van schets tot mockup: onderzoek, positionering, visuele systemen en digitale toepassing. De hoeveelheid iteraties maakt duidelijk dat ik keuzes test in plaats van het eerste idee vast te zetten.",
      mediaGroups: [
        mocharLogoSketches,
        mocharLogoIterations,
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
          ],
        },
        mocharCoffeeBeans,
        {
          title: "MocHar Mockups - Coffee cup",
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
        },
        {
          title: "MocHar Mockups - Website",
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
        },
      ],
    },
    {
      id: "sprinter-sound-system",
      title: "Sprinter Sound System",
      type: "Concept & ruimtelijke identiteit",
      context:
        "Triple S (Sprinter Sound System) is een concept voor een mobiel soundsystem in een bus: een culturele plek die kan verplaatsen, opbouwen en weer verdwijnen.",
      role: "Concept, visuele identiteit, ruimtelijke schetsen, technisch schema en pitch.",
      process:
        "Ik tekende eerst de bus van buiten en binnen: waar staat de DJ, waar beweegt het publiek, welke zones heb je nodig voor geluid en veiligheid. Daarna vertaalde ik dat naar een logo en een pitch die het idee helder maakt voor anderen - niet alleen als plaatje, maar als werkbaar plan.",
      outcome:
        "Een pitchdocument, ruimtelijke schetsen en een logo dat de energie van het concept samenvat.",
      reflection:
        "Dit project toont mijn interesse in culturele infrastructuur en tijdelijke ruimtes. Ik denk in systemen - niet alleen in een poster, maar in hoe een idee fysiek en digitaal kan bestaan.",
      mediaGroups: [
        {
          title: "Identiteit",
          items: [
            hkuFile(
              [...sprinterBase, "SSS logo.jpg"],
              "Sprinter Sound System logo",
            ),
          ],
        },
        {
          title: "Schetsen",
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
            hkuFile(
              [...sprinterBase, "Schetsen", "SprinterSoundSchema.pdf"],
              "Sprinter Sound schema",
              "Ruimtelijk schema (PDF)",
            ),
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
      id: "tdfw-posters",
      title: "TDFW Posters",
      type: "Editorial posterreeks",
      context:
        "TDFW vroeg om herkenbare postercommunicatie per editie, met variatie in beeld maar een duidelijke grafische lijn door de reeks heen.",
      role: "Art direction, typografie, layout en drukklare posteropbouw.",
      process:
        "Per poster bepaalde ik eerst wat leidend moest zijn: naam, datum, sfeer of beeld. Daarna bouwde ik een compositie die snel leesbaar is, ook op afstand en in een drukke omgeving. De reeks loopt van 01 tot 12 zodat de ontwikkeling in de tijd zichtbaar blijft.",
      outcome:
        "Twaalf posters als jaaroverzicht, plus een thumbnail die de reeks als geheel samenvat.",
      reflection:
        "Deze reeks onderstreept mijn affiniteit met muziek- en nachtcultuur, en mijn vermogen om snel sterke beelden te maken die ook op straat en in de club werken.",
      mediaGroups: [tdfwPosters],
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
    "Deze pagina leest nu uit data/hkuPortfolio.ts. Voor Sanity: maak een hkuPortfolio singleton met intro-velden en een array hkuProject-documenten. Elk project krijgt dezelfde velden (type, context, role, process, outcome, reflection) en geneste mediaGroups met getypeerde items (image | pdf | video). Upload assets naar Sanity CDN en vervang src-paden door image/file-referenties. De bestaande project-schema kan blijven voor de hoofdsite; HKU-content is een apart documenttype om toelatingsspecifieke structuur niet te vermengen met de reguliere work-index.",
};
