import { assetPath } from "@/lib/asset";

export enum ServiceSlug {
  CreationSiteWeb = "creation-site-web",
  CreationApplicationLogiciel = "creation-application-logiciel",
  ConceptionCreationGraphique = "conception-creation-graphique",
  ImpressionNumeriqueOffset = "impression-numerique-offset",
  DesignCreation3d = "design-creation-3d",
  ConceptionEvenementielle = "conception-evenementielle",
}

const serviceHref = (slug: ServiceSlug) => `/services/${slug}`;

export const services = [
  {
    value: ServiceSlug.CreationSiteWeb,
    title: "Création de sites web",
    short:
      "Vitrine, dynamique, CMS ou e-commerce, de l'étude à la maintenance.",
    description:
      "Du site vitrine à la boutique en ligne, nous concevons, développons et hébergeons votre site. Design moderne adapté à tous les écrans, référencement travaillé dès le départ.",
    href: serviceHref(ServiceSlug.CreationSiteWeb),
    image: assetPath("/services/web-placeholder.webp"),
    className: "lg:col-span-2",
  },
  {
    value: ServiceSlug.ConceptionCreationGraphique,
    title: "Conception et création graphique",
    short: "Logos, chartes graphiques, cartes de visite, flyers et brochures.",
    description:
      "Nous créons votre logo et votre charte graphique, puis nous les déclinons sur vos cartes de visite, flyers, brochures, bannières et kakémonos.",
    image: assetPath("/services/graphic-design-placeholder.webp"),
    href: serviceHref(ServiceSlug.ConceptionCreationGraphique),
  },
  {
    value: ServiceSlug.ImpressionNumeriqueOffset,
    title: "Impression numérique et offset",
    short:
      "Affiches, bâches, packaging, signalétique et habillage de véhicules.",
    description:
      "Affiches, bâches, menus, étiquettes, packaging, sérigraphie, en petit ou grand format. Nous réalisons aussi les panneaux publicitaires, la signalétique et l'habillage de véhicules, complet ou partiel.",
    href: serviceHref(ServiceSlug.ImpressionNumeriqueOffset),
    image: assetPath("/services/printing-placeholder.webp"),
  },
  {
    value: ServiceSlug.ConceptionEvenementielle,
    title: "Événementiel",
    short: "Stands, salons, séminaires, cocktails et production technique.",
    description:
      "Stands design ou modulaires pour foires et salons, séminaires, colloques, inaugurations et cocktails d'entreprise, avec la production technique : son, image et média.",
    href: serviceHref(ServiceSlug.ConceptionEvenementielle),
    image: assetPath("/services/events-placeholder.webp"),
  },
  {
    value: ServiceSlug.DesignCreation3d,
    title: "Design et création 3D",
    short:
      "Plans de masse, images d'architecture et illustrations 3D de produits.",
    description:
      "Plans de masse, images d'architecture et illustrations de produits : des visuels 3D réalistes pour vos catalogues, plaquettes commerciales et présentations de projets.",
    href: serviceHref(ServiceSlug.DesignCreation3d),
    image: assetPath("/services/3d-placeholder.webp"),
  },
  {
    value: ServiceSlug.CreationApplicationLogiciel,
    title: "Création d'applications",
    short: "Applications web et desktop rapides, fiables et sécurisées.",
    description:
      "Des applications web et desktop rapides, fiables et sécurisées, conçues d'après vos attentes et les besoins de votre activité.",
    href: serviceHref(ServiceSlug.CreationApplicationLogiciel),
    image: assetPath("/services/application-placeholder.webp"),
  },
];

export type ServiceGroup = "digital" | "identite-impression" | "espace";

export type ServicePricingPlan = {
  name: string;
  price: number;
  features: string[];
  quoteSubservice: string;
};

export type ServiceDetail = {
  slug: ServiceSlug;
  /** Must match an option value in the quote form */
  quoteService: string;
  group: ServiceGroup;
  title: string;
  /** Short line shown in lists (home, overview, related) */
  summary: string;
  hero: {
    eyebrow?: string;
    title: string;
    /** Substring of `title` (case-sensitive) rendered in serif italic + primary color */
    accent: string;
    subtitle: string;
  };
  gallery: { src: string; alt: string }[];
  intro: string[];
  reasons?: { title: string; text: string }[];
  faq?: { q: string; a: string[] }[];
  itemsTitle?: string;
  items?: string[];
  pricing?: {
    title: string;
    plans: ServicePricingPlan[];
  };
  /**
   * SEO meta. Do NOT add the brand suffix to `title`:
   * the root layout title template ("%s | L'unicreative") appends it.
   */
  meta: { title: string; description: string };
};

export const serviceGroups: Record<
  ServiceGroup,
  { label: string; description: string }
> = {
  digital: {
    label: "Digital",
    description: "Sites web et applications web ou desktop.",
  },
  "identite-impression": {
    label: "Identité et impression",
    description: "De l'identité de marque au support imprimé.",
  },
  // Le groupe contient la 3D (architecture ET produits) et l'événementiel :
  // « Espace » ne couvrait pas les illustrations de produits.
  espace: {
    label: "3D et événementiel",
    description: "Visuels 3D, stands, salons et événements.",
  },
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: ServiceSlug.CreationSiteWeb,
    quoteService: "site-web",
    group: "digital",
    title: "Création de sites web",
    summary: "Vitrine, dynamique, CMS, e-commerce",
    hero: {
      title: "Création de sites web à Fès",
      accent: "sites web",
      subtitle:
        "Vitrine, dynamique, CMS ou e-commerce : un site moderne, rapide, qui s'affiche sur tous les écrans. Une seule équipe, de l'étude à la maintenance.",
    },
    gallery: [
      {
        src: assetPath("/services/creation-site-web-1.webp"),
        alt: "Exemple de site web réalisé par L'unicreative",
      },
      {
        src: assetPath("/services/creation-site-web-2.webp"),
        alt: "Site web dynamique, vitrine ou e-commerce conçu par L'unicreative",
      },
      {
        src: assetPath("/services/creation-site-web-3.webp"),
        alt: "Site internet conçu par L'unicreative à Fès",
      },
    ],
    intro: [
      "Un site que personne ne trouve ne sert à rien. L'unicreative, agence web à Fès, crée votre site professionnel (vitrine, e-commerce, WordPress, blog) et l'optimise pour Google, Bing et Yahoo.",
      "Chaque site a un design moderne et s'affiche parfaitement sur téléphone, tablette et ordinateur. Nous travaillons avec les entreprises comme avec les particuliers.",
      // À CONFIRMER avec l'agence : « 12 ans » est tiré du site actuel sans date.
      // Idéalement, remplacer par l'année de création et calculer la durée.
      // Ce chiffre (plus de 100 réalisations) est propre à cette page : ne pas
      // le mélanger avec les chiffres globaux de l'accueil (projets / clients).
      "Depuis 12 ans, nous accompagnons nos clients au Maroc et en France, avec plus de 100 réalisations. Étude, UX/UI, conception, design, développement, hébergement, maintenance : une seule équipe prend chaque étape en charge.",
    ],
    reasons: [
      {
        title: "Un site conçu pour être trouvé",
        text: "Un design soigné et un référencement travaillé dès le départ rendent votre entreprise plus visible sur Internet.",
      },
      {
        title: "Un site rapide",
        text: "Vos visiteurs sont pressés : la vitesse de votre site décide de leur expérience. Nous le concevons pour qu'il soit rapide.",
      },
      {
        title: "Vous gardez la main",
        text: "Nous vous donnons les options, les outils et les informations pour choisir. Nous recommandons, vous décidez.",
      },
    ],
    faq: [
      {
        q: "Combien coûte un site web ?",
        a: [
          "Le prix dépend du temps de travail nécessaire : fonctionnalités, nombre de pages, complexité du projet, création (ou non) des contenus, originalité du design, modules, outils utilisés, hébergement et nom de domaine.",
          // TODO : confirmer le tarif (et HT/TTC) avant publication.
          "Nos offres démarrent à 2 999 DH pour un site vitrine, avec nom de domaine et hébergement pendant 1 an. Pour un chiffrage précis, décrivez-nous votre projet et demandez un devis.",
        ],
      },
      {
        q: "Comment créer un site web ?",
        a: [
          "Créer et administrer un site demande du temps et des compétences techniques. Une agence comme L'unicreative prend la technique en charge et vous accompagne du début à la fin du projet.",
        ],
      },
      {
        q: "Quel est le délai de création d'un site web ?",
        a: [
          // Moyenne du secteur (source : « en moyenne par une agence web »),
          // pas un engagement de L'unicreative.
          "Cela dépend du type de site. En moyenne, une agence web livre un site vitrine après 3 semaines à 2 mois de développement.",
          "Ce délai varie selon vos besoins, les modifications demandées et les objectifs du projet.",
        ],
      },
      {
        q: "Quels langages sont utilisés pour développer un site internet ?",
        a: [
          // Réponse générique issue de la source : elle ne décrit pas la pile
          // technique de l'agence.
          "Un site moderne combine plusieurs langages. Le front-end, ce que voit le visiteur : HTML pour la structure des pages, CSS pour la mise en forme, JavaScript pour les éléments dynamiques.",
          "Le back-end, côté serveur : un langage (PHP, Python, Ruby, Java ou JavaScript, par exemple) génère le contenu à la demande, souvent à partir d'une base de données (SQL, par exemple).",
        ],
      },
      {
        q: "Pourquoi le référencement naturel (SEO) est-il important ?",
        a: [
          "Un site très bien fait, mais que personne ne voit, ne sert à rien. Le SEO améliore la visibilité de votre site dans les résultats des moteurs de recherche : plus de visiteurs, donc plus de ventes.",
        ],
      },
    ],
    // TODO : ces formules, prix et inclusions ne figurent pas dans
    // website-content.csv. À re-vérifier avec la section « Nos offres » de
    // creation-site-web.php. Non précisé : prix HT ou TTC.
    pricing: {
      title: "Nos offres de sites web",
      plans: [
        {
          name: "Site vitrine",
          price: 2999,
          features: [
            "5 à 10 pages",
            "Optimisation SEO (On-Site)",
            "Nom de domaine (.com, .net, .org) pendant 1 an",
            "Hébergement pendant 1 an",
            "5 emails professionnels",
          ],
          quoteSubservice: "site-vitrine",
        },
        {
          name: "Site dynamique",
          price: 4999,
          features: [
            "10 à 20 pages",
            "Optimisation SEO (On-Site)",
            "Nom de domaine (.com, .net, .org) pendant 1 an",
            "Hébergement pendant 1 an",
            "10 emails professionnels",
          ],
          quoteSubservice: "site-dynamique",
        },
        {
          name: "Site e-commerce",
          price: 5999,
          features: [
            "Nombre de pages illimité",
            "Optimisation SEO (On-Site et Off-Site)",
            "Nom de domaine (.com, .net, .org) pendant 1 an",
            "Hébergement pendant 1 an",
            "100 emails professionnels",
          ],
          quoteSubservice: "site-e-commerce",
        },
      ],
    },
    meta: {
      title: "Création de site web à Fès",
      description:
        "Agence web à Fès : sites vitrine, dynamiques, e-commerce et CMS, de l'étude à la maintenance. Dès 2 999 DH, domaine et hébergement 1 an inclus.",
    },
  },
  {
    slug: ServiceSlug.CreationApplicationLogiciel,
    quoteService: "applications",
    group: "digital",
    title: "Création d'applications",
    summary: "Applications web et desktop",
    hero: {
      title: "Création d'applications web et desktop",
      accent: "applications",
      subtitle:
        "Des logiciels et applications conçus pour votre activité : rapides, fiables et sécurisés.",
    },
    gallery: [
      {
        src: assetPath("/services/creation-application-logiciel-1.webp"),
        alt: "Exemple d'application web développée par L'unicreative",
      },
      {
        src: assetPath("/services/creation-application-logiciel-2.webp"),
        alt: "Interface d'une application desktop développée par L'unicreative",
      },
      {
        src: assetPath("/services/creation-application-logiciel-3.webp"),
        alt: "Application sur mesure conçue par L'unicreative",
      },
    ],
    // Aucun exemple ni cas client dans les sources : ne rien affirmer de plus
    // tant que des réalisations réelles ne sont pas fournies.
    intro: [
      "Votre équipe a besoin d'un outil adapté à sa façon de travailler ? L'unicreative développe des logiciels et des applications web ou desktop, d'après vos attentes et les besoins de votre activité.",
      // TODO : phrase absente de website-content.csv, à confirmer.
      "Notre équipe de développement s'appuie sur les dernières normes techniques pour concevoir des applications rapides et fiables.",
    ],
    // TODO : liste absente de website-content.csv, à confirmer avec l'ancienne
    // page avant publication.
    itemsTitle: "Ce que votre application vous apporte",
    items: [
      "Une base de données solide, pour que toutes vos données soient gérées avec soin",
      "Une planification flexible des tâches, selon les besoins de votre équipe",
      "Des modifications, personnalisations et ajouts faciles et rapides",
      "La confidentialité des informations personnelles et la sécurité de l'application",
    ],
    meta: {
      title: "Création d'applications web et desktop à Fès",
      description:
        "Applications web et desktop rapides, fiables et sécurisées, développées par L'unicreative à Fès. Décrivez votre besoin et recevez un devis.",
    },
  },
  {
    slug: ServiceSlug.ConceptionCreationGraphique,
    quoteService: "creation-graphique",
    group: "identite-impression",
    title: "Conception et création graphique",
    summary: "Logos, chartes graphiques, cartes de visite, flyers",
    hero: {
      title: "Conception et création graphique",
      accent: "création graphique",
      subtitle:
        "Logo, charte graphique et supports de communication : une identité visuelle cohérente, pensée pour être reconnue.",
    },
    gallery: [
      {
        src: assetPath("/services/conception-creation-graphique-1.webp"),
        alt: "Identité visuelle réalisée par L'unicreative",
      },
      {
        src: assetPath("/services/conception-creation-graphique-2.webp"),
        alt: "Supports de communication conçus par L'unicreative",
      },
      {
        src: assetPath("/services/conception-creation-graphique-3.webp"),
        alt: "Création graphique pour une marque, par L'unicreative",
      },
    ],
    intro: [
      "La création graphique est le pilier de votre communication visuelle. Nous créons votre logo et votre charte graphique, puis nous les déclinons sur tous vos supports.",
      "Nous partons de vos attentes et de vos besoins pour adapter votre identité visuelle à votre marché. Votre entreprise ou votre marque attire le regard et se fait reconnaître.",
    ],
    itemsTitle: "Ce que nous créons",
    items: [
      "Logos",
      "Chartes graphiques",
      "Cartes de visite et d'invitation",
      "Flyers et brochures",
      "Dépliants et pochettes",
      "Bannières web et publicitaires",
      "Kakémonos",
    ],
    meta: {
      title: "Conception et création graphique à Fès",
      description:
        "Logos, chartes graphiques, cartes de visite, flyers et brochures : construisez une identité visuelle cohérente avec L'unicreative, agence à Fès.",
    },
  },
  {
    slug: ServiceSlug.ImpressionNumeriqueOffset,
    quoteService: "impression",
    group: "identite-impression",
    title: "Impression numérique et offset",
    summary: "Affiches, bâches, packaging, habillage de véhicules",
    hero: {
      title: "Impression numérique et offset",
      accent: "Impression",
      subtitle:
        "Du petit au grand format : affiches, bâches, packaging, signalétique et habillage de véhicules.",
    },
    gallery: [
      {
        src: assetPath("/services/impression-numerique-offset-1.webp"),
        alt: "Support imprimé réalisé par L'unicreative",
      },
      {
        src: assetPath("/services/impression-numerique-offset-2.webp"),
        alt: "Impression grand format réalisée par L'unicreative",
      },
      {
        src: assetPath("/services/impression-numerique-offset-3.webp"),
        alt: "Habillage ou signalétique réalisé par L'unicreative",
      },
    ],
    intro: [
      "Petit ou grand format, impression numérique ou offset : nous réalisons tous vos supports de communication imprimés.",
      "Notre studio graphique conçoit et réalise vos supports, quel que soit votre secteur d'activité.",
    ],
    itemsTitle: "Ce que nous réalisons",
    items: [
      "Affiches et bâches",
      "Flyers et supports marketing",
      "Menus et étiquettes",
      "Packaging et sérigraphie",
      "Panneaux publicitaires et signalétique",
      "Habillage de véhicules, complet ou partiel",
    ],
    meta: {
      title: "Impression numérique et offset à Fès",
      description:
        "Affiches, bâches, menus, packaging, signalétique et habillage de véhicules : impression numérique et offset, petit et grand format, à Fès.",
    },
  },
  {
    slug: ServiceSlug.DesignCreation3d,
    quoteService: "design-3d",
    group: "espace",
    title: "Design et création 3D",
    summary: "Plans de masse, architecture, produits en 3D",
    hero: {
      title: "Design et création 3D",
      accent: "création 3D",
      subtitle:
        "Plans de masse, images d'architecture et illustrations de produits : des visuels 3D pour présenter vos projets.",
    },
    gallery: [
      {
        src: assetPath("/services/design-creation-3d-1.webp"),
        alt: "Image d'architecture en 3D réalisée par L'unicreative",
      },
      {
        src: assetPath("/services/design-creation-3d-2.webp"),
        alt: "Plan de masse en 3D réalisé par L'unicreative",
      },
      {
        src: assetPath("/services/design-creation-3d-3.webp"),
        alt: "Illustration 3D de produit réalisée par L'unicreative",
      },
    ],
    intro: [
      "Nous modélisons vos produits et vos projets d'architecture pour en faire des images 3D modernes et attractives, adaptées à vos attentes et à votre secteur.",
      "Architecture et immobilier : plans de masse et plans de situation réalistes, en 3D extérieure comme intérieure. Ces images servent de base visuelle à tous vos outils de communication et de commercialisation.",
      "Produits : des illustrations 3D pour vos catalogues, vos plaquettes commerciales et vos supports de présentation.",
    ],
    itemsTitle: "Ce que nous réalisons",
    items: [
      "Plans de masse et plans de situation",
      "Images d'architecture, extérieur et intérieur",
      "Illustrations 3D de produits",
      "Visuels pour catalogues et plaquettes commerciales",
    ],
    meta: {
      title: "Design et création 3D à Fès",
      description:
        "Plans de masse, images d'architecture et illustrations 3D de produits : modélisation et rendu 3D par L'unicreative, agence à Fès.",
    },
  },
  {
    slug: ServiceSlug.ConceptionEvenementielle,
    quoteService: "communication-evenementielle",
    group: "espace",
    title: "Événementiel",
    summary: "Stands, salons, séminaires, cocktails",
    hero: {
      title: "Conception événementielle",
      accent: "événementielle",
      subtitle:
        "Stands, salons, séminaires et réceptions : du design à la production technique.",
    },
    gallery: [
      {
        src: assetPath("/services/conception-evenementielle-1.webp"),
        alt: "Stand conçu par L'unicreative pour un salon",
      },
      {
        src: assetPath("/services/conception-evenementielle-2.webp"),
        alt: "Événement organisé par L'unicreative",
      },
      {
        src: assetPath("/services/conception-evenementielle-3.webp"),
        alt: "Production technique d'un événement par L'unicreative",
      },
    ],
    intro: [
      "Un bon événement fait passer votre message, renforce votre image de marque et impressionne vos invités. Nous le concevons et l'organisons : stands design et modulaires pour foires et salons, séminaires, colloques, inaugurations et cocktails d'entreprise.",
      "Notre équipe assure aussi la production technique (son, image et média), pour vos concerts et vos événements.",
    ],
    itemsTitle: "Nos domaines d'intervention",
    // « Foires et salons » (stands) et « Organisation de salons » restent
    // distincts : ce sont deux métiers différents dans les sources.
    items: [
      "Stands design et modulaires pour foires et salons",
      "Organisation de salons et de séminaires",
      "Colloques et inaugurations",
      "Cocktails d'entreprise",
      "Fêtes et buffets",
      "Concerts",
      "Production technique : son, image et média",
    ],
    meta: {
      title: "Conception événementielle à Fès",
      description:
        "Stands design, foires, salons, séminaires, colloques et cocktails d'entreprise : conception événementielle et production technique à Fès.",
    },
  },
];

export const getService = (slug: string) =>
  serviceDetails.find((service) => service.slug === slug);
