export enum ServiceSlug {
  CreationSiteWeb = "creation-site-web",
  CreationApplicationLogiciel = "creation-application-logiciel",
  ConceptionCreationGraphique = "conception-creation-graphique",
  ImpressionNumeriqueOffset = "impression-numerique-offset",
  DesignCreation3d = "design-creation-3d",
  ConceptionEvenementielle = "conception-evenementielle",
}

export const services = [
  {
    value: "creation-site-web",
    title: "Création de sites web",
    short: "Vitrine, e-commerce, dynamique ou CMS, du design à la maintenance.",
    description:
      "Du site vitrine à la boutique en ligne, nous concevons, développons et hébergeons votre site. Son design moderne s'adapte à tous les écrans, et son référencement est travaillé dès le départ.",
    href: "/services/creation-site-web",
    image: "/services/web-placeholder.jpeg",
    className: "lg:col-span-2",
  },
  {
    value: "conception-creation-graphique",
    title: "Conception graphique",
    short: "Logos, chartes graphiques, cartes de visite, flyers et brochures.",
    description:
      "Nous créons votre logo et votre charte graphique, puis nous les déclinons sur vos cartes de visite, flyers, brochures, bannières et kakémonos.",
    image: "/services/graphic-design-placeholder.png",
    href: "/services/conception-creation-graphique",
  },
  {
    value: "impression-numerique-offset",
    title: "Impression numérique & offset",
    short:
      "Affiches, bâches, packaging, signalétique et habillage de véhicules.",
    description:
      "Affiches, bâches, menus, étiquettes, packaging, sérigraphie : en petit ou grand format. Nous réalisons aussi les panneaux publicitaires, la signalétique et l'habillage de véhicules, complet ou partiel.",
    href: "/services/impression-numerique-offset",
    image: "/services/printing-placeholder.jpeg",
  },
  {
    value: "conception-evenementielle",
    title: "Événementiel",
    short: "Stands, salons, séminaires, cocktails et production technique.",
    description:
      "Stands design ou modulaires pour foires et salons, séminaires, colloques, inaugurations et cocktails d'entreprise. Nous assurons aussi la production technique : son, image et média.",
    href: "/services/conception-evenementielle",
    image: "/services/events-placeholder.jpeg",
  },
  {
    value: "design-creation-3d",
    title: "Design & création 3D",
    short:
      "Plans de masse, images d'architecture et illustrations 3D de produits.",
    description:
      "Des visuels 3D réalistes pour vos catalogues, plaquettes commerciales et présentations de projets : plans de masse, images d'architecture et illustrations de vos produits.",
    href: "/services/design-creation-3d",
    image: "/services/3d-placeholder.jpeg",
  },
  {
    value: "creation-application-logiciel",
    title: "Création d'applications",
    short: "Applications web et desktop conçues selon vos besoins.",
    description:
      "Nous développons des applications web et desktop d'après vos attentes et les besoins de votre activité.",
    href: "/services/creation-application-logiciel",
    image: "/services/application-placeholder.jpeg",
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
  slug: string;
  quoteService: string;
  group: ServiceGroup;
  title: string;
  /** Short line shown in lists (home, overview, related) */
  summary: string;
  hero: {
    eyebrow?: string;
    title: string;
    /** Substring of `title` rendered in serif italic + primary color */
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
  meta: { title: string; description: string };
};

export const serviceGroups: Record<
  ServiceGroup,
  { label: string; description: string }
> = {
  digital: {
    label: "Digital",
    description: "Sites web et applications sur mesure.",
  },
  "identite-impression": {
    label: "Identité et impression",
    description: "De l'identité de marque au support imprimé.",
  },
  espace: {
    label: "Espace et événementiel",
    description: "Visualisation 3D, stands et événements.",
  },
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "creation-site-web",
    quoteService: "site-web",
    group: "digital",
    title: "Création de sites web",
    summary: "Vitrine, dynamique, CMS, e-commerce",
    hero: {
      title: "Création de sites web à Fès",
      accent: "sites web",
      subtitle:
        "Vitrine, dynamique, CMS ou e-commerce. Une seule équipe vous accompagne, de l'étude à la maintenance.",
    },
    gallery: [
      {
        src: "/services/creation-site-web-1.png",
        alt: "Exemple de site web réalisé par L'unicreative",
      },
      {
        src: "/services/creation-site-web-2.png",
        alt: "Site web dynamique, vitrine ou e-commerce conçu par L'unicreative",
      },
      {
        src: "/services/creation-site-web-3.png",
        alt: "Site internet conçu par L'unicreative à Fès",
      },
    ],
    intro: [
      "Un site web ne sert que s'il est vu. L'unicreative, agence web basée à Fès, crée votre site professionnel (vitrine, e-commerce, WordPress, blog) et l'optimise pour Google, Bing et Yahoo.",
      "Chaque site a un design moderne et s'affiche parfaitement sur téléphone, tablette et ordinateur. Nous travaillons avec les entreprises comme avec les particuliers.",
      "Depuis 12 ans, nous accompagnons nos clients au Maroc et en France, avec plus de 100 réalisations. Étude, UX/UI, conception, design, développement, hébergement, maintenance : nous prenons en charge chaque étape.",
    ],
    reasons: [
      {
        title: "Un site conçu pour être trouvé",
        text: "Un design soigné et une optimisation pour les moteurs de recherche, pour rendre votre entreprise plus visible en ligne.",
      },
      {
        title: "Un site rapide",
        text: "Vos visiteurs sont pressés, et la vitesse d'un site pèse sur leur expérience. Nous utilisons les fonctionnalités intégrées de notre outil de développement pour construire des sites plus rapides.",
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
          "Le prix dépend du temps de travail nécessaire : fonctionnalités, nombre de pages, complexité du projet, rédaction des contenus, originalité du design, modules, outils utilisés, hébergement et nom de domaine.",
          "Décrivez-nous votre projet et nous vous répondons avec un devis.",
        ],
      },
      {
        q: "Comment créer un site web ?",
        a: [
          "Créer et administrer un site demande du temps et des compétences techniques. Une agence comme L'unicreative s'occupe de la technique et vous accompagne tout au long du projet.",
        ],
      },
      {
        q: "Quel est le délai de création d'un site web ?",
        a: [
          "Cela dépend du type de site. En moyenne, un site vitrine est prêt à être publié après 3 semaines à 2 mois de développement.",
          "Ce délai varie selon vos besoins, les modifications demandées et les objectifs du projet.",
        ],
      },
      {
        q: "Quels langages sont utilisés pour développer un site internet ?",
        a: [
          "Un site moderne combine plusieurs langages. Côté front-end : HTML pour la structure des pages, CSS pour la mise en forme, JavaScript pour les éléments dynamiques.",
          "Côté back-end, un langage serveur (PHP, Python, Ruby, Java ou JavaScript, par exemple) génère le contenu à la demande, souvent avec une base de données (SQL, par exemple).",
        ],
      },
      {
        q: "Pourquoi le référencement naturel (SEO) est-il important ?",
        a: [
          "Un site très bien fait mais que personne ne voit ne sert à rien. Le SEO améliore la visibilité de votre site dans les résultats des moteurs de recherche, pour attirer du trafic et donc des ventes.",
        ],
      },
    ],
    // TODO(à vérifier) : formules, prix et contenus ci-dessous absents des
    // fichiers sources. À confirmer avec l'agence avant publication.
    pricing: {
      title: "Nos offres",
      plans: [
        {
          name: "Site vitrine",
          price: 2999,
          features: [
            "Nom de domaine (.com, .net, .org) pendant 1 an",
            "Optimisation SEO (On-Site)",
            "5 à 10 pages",
            "5 emails professionnels",
            "Hébergement pendant 1 an",
          ],
          quoteSubservice: "site-vitrine",
        },
        {
          name: "Site dynamique",
          price: 4999,
          features: [
            "Nom de domaine (.com, .net, .org) pendant 1 an",
            "Optimisation SEO (On-Site)",
            "10 à 20 pages",
            "10 emails professionnels",
            "Hébergement pendant 1 an",
          ],
          quoteSubservice: "site-dynamique",
        },
        {
          name: "Site e-commerce",
          price: 5999,
          features: [
            "Nom de domaine (.com, .net, .org) pendant 1 an",
            "Optimisation SEO (On-Site et Off-Site)",
            "Nombre de pages illimité",
            "100 emails professionnels",
            "Hébergement pendant 1 an",
          ],
          quoteSubservice: "site-e-commerce",
        },
      ],
    },
    meta: {
      title: "Création de sites web à Fès | L'unicreative",
      description:
        "Agence web à Fès : sites vitrine, e-commerce, dynamiques et CMS, de l'étude à la maintenance. SEO, hébergement, design adapté à tous les écrans.",
    },
  },
  {
    slug: "creation-application-logiciel",
    quoteService: "applications",
    group: "digital",
    title: "Création d'applications",
    summary: "Applications web et desktop",
    hero: {
      title: "Création d'applications web et desktop",
      accent: "applications",
      subtitle:
        "Des applications web et desktop conçues d'après vos attentes et les besoins de votre activité.",
    },
    gallery: [
      {
        src: "/services/creation-application-logiciel-1.png",
        alt: "Exemple d'application web développée par L'unicreative",
      },
      {
        src: "/services/creation-application-logiciel-2.png",
        alt: "Interface d'une application desktop développée par L'unicreative",
      },
      {
        src: "/services/creation-application-logiciel-3.png",
        alt: "Application sur mesure conçue par L'unicreative",
      },
    ],
    // Peu de matière dans les sources : ajouter des exemples réels quand disponibles.
    intro: [
      "L'unicreative développe des applications web et des applications desktop, conçues d'après vos attentes et les besoins de votre activité.",
    ],
    meta: {
      title: "Création d'applications web et desktop à Fès | L'unicreative",
      description:
        "Applications web et desktop développées par L'unicreative, agence basée à Fès. Décrivez votre besoin et recevez un devis.",
    },
  },
  {
    slug: "conception-creation-graphique",
    quoteService: "creation-graphique",
    group: "identite-impression",
    title: "Conception et création graphique",
    summary: "Logos, chartes graphiques, cartes de visite, flyers",
    hero: {
      title: "Conception et création graphique",
      accent: "création graphique",
      subtitle:
        "Votre identité de marque et vos supports de communication, pensés pour être reconnus.",
    },
    gallery: [
      {
        src: "/services/conception-creation-graphique-1.png",
        alt: "Identité visuelle réalisée par L'unicreative",
      },
      {
        src: "/services/conception-creation-graphique-2.png",
        alt: "Supports de communication conçus par L'unicreative",
      },
      {
        src: "/services/conception-creation-graphique-3.png",
        alt: "Création graphique pour une marque, par L'unicreative",
      },
    ],
    intro: [
      "La création graphique est le pilier de votre communication visuelle. Nous créons votre logo et votre charte graphique, puis nous les déclinons sur tous vos supports.",
      "Nous partons de vos attentes et de vos besoins pour adapter votre identité visuelle à votre marché, afin que votre marque se distingue et soit reconnue.",
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
      title: "Conception et création graphique à Fès | L'unicreative",
      description:
        "Logos, chartes graphiques, cartes de visite, flyers et brochures : construisez une identité visuelle cohérente avec L'unicreative, agence à Fès.",
    },
  },
  {
    slug: "impression-numerique-offset",
    quoteService: "impression",
    group: "identite-impression",
    title: "Impression numérique et offset",
    summary: "Affiches, bâches, packaging, habillage de véhicules",
    hero: {
      title: "Impression numérique et offset",
      accent: "impression",
      subtitle:
        "Du petit au grand format : affiches, bâches, packaging, signalétique et habillage de véhicules.",
    },
    gallery: [
      {
        src: "/services/impression-numerique-offset-1.jpeg",
        alt: "Support imprimé réalisé par L'unicreative",
      },
      {
        src: "/services/impression-numerique-offset-2.png",
        alt: "Impression grand format réalisée par L'unicreative",
      },
      {
        src: "/services/impression-numerique-offset-3.jpeg",
        alt: "Habillage ou signalétique réalisé par L'unicreative",
      },
    ],
    intro: [
      "Nous réalisons tous vos supports de communication imprimés, en petit ou grand format, en impression numérique comme en offset.",
      "Notre studio graphique conçoit et imprime vos supports, quel que soit votre secteur d'activité.",
    ],
    itemsTitle: "Ce que nous imprimons",
    items: [
      "Affiches et bâches",
      "Flyers et supports marketing",
      "Menus et étiquettes",
      "Packaging et sérigraphie",
      "Panneaux publicitaires et signalétique",
      "Habillage de véhicules, complet ou partiel",
    ],
    meta: {
      title: "Impression numérique et offset à Fès | L'unicreative",
      description:
        "Affiches, bâches, menus, packaging, signalétique et habillage de véhicules : impression numérique et offset, petit et grand format, à Fès.",
    },
  },
  {
    slug: "design-creation-3d",
    quoteService: "design-3d",
    group: "espace",
    title: "Design et création 3D",
    summary: "Plans de masse, architecture, produits en 3D",
    hero: {
      title: "Design et création 3D",
      accent: "création 3D",
      subtitle:
        "Plans de masse, images d'architecture et illustrations de produits en 3D, pour présenter vos projets.",
    },
    gallery: [
      {
        src: "/services/design-creation-3d-1.jpeg",
        alt: "Image d'architecture en 3D réalisée par L'unicreative",
      },
      {
        src: "/services/design-creation-3d-2.png",
        alt: "Plan de masse en 3D réalisé par L'unicreative",
      },
      {
        src: "/services/design-creation-3d-3.png",
        alt: "Illustration 3D de produit réalisée par L'unicreative",
      },
    ],
    intro: [
      "Nous modélisons vos produits et vos projets d'architecture pour en faire des images 3D modernes et attractives.",
      "Pour l'architecture et l'immobilier, nous réalisons des plans de masse et de situation hyper réalistes, en 3D extérieure comme intérieure. Ces images servent de base à tous vos outils de communication et de commercialisation.",
      "Pour vos produits, nos illustrations 3D enrichissent vos catalogues, vos plaquettes commerciales et vos supports de présentation.",
    ],
    itemsTitle: "Ce que nous réalisons",
    items: [
      "Plans de masse et plans de situation",
      "Images d'architecture, extérieur et intérieur",
      "Illustrations 3D de produits",
      "Visuels pour catalogues et plaquettes commerciales",
    ],
    meta: {
      title: "Design et création 3D à Fès | L'unicreative",
      description:
        "Plans de masse, images d'architecture et illustrations 3D de produits : modélisation et rendu 3D par L'unicreative, agence à Fès.",
    },
  },
  {
    slug: "conception-evenementielle",
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
        src: "/services/conception-evenementielle-1.jpeg",
        alt: "Stand conçu par L'unicreative pour un salon",
      },
      {
        src: "/services/conception-evenementielle-2.png",
        alt: "Événement organisé par L'unicreative",
      },
      {
        src: "/services/conception-evenementielle-3.jpeg",
        alt: "Production technique d'un événement par L'unicreative",
      },
    ],
    intro: [
      "Nous concevons et organisons des événements qui font passer votre message, renforcent votre image de marque et impressionnent vos invités : stands design et modulaires pour foires et salons, séminaires, colloques, inaugurations et réceptions.",
      "Notre équipe assure aussi la production technique (son, image et média), pour vos concerts comme pour vos événements d'entreprise.",
    ],
    itemsTitle: "Nos domaines d'intervention",
    items: [
      "Stands design et modulaires",
      "Foires et salons",
      "Organisation de salons et séminaires",
      "Colloques",
      "Inaugurations",
      "Cocktails d'entreprise",
      "Fêtes et buffets",
      "Concerts",
      "Production technique : son, image et média",
    ],
    meta: {
      title: "Conception événementielle à Fès | L'unicreative",
      description:
        "Stands design, foires, salons, séminaires, colloques et cocktails d'entreprise : conception événementielle et production technique à Fès.",
    },
  },
];

export const getService = (slug: string) =>
  serviceDetails.find((service) => service.slug === slug);
