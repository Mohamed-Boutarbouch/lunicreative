// Source unique pour les services : cartes d'accueil, navbar, footer et formulaire de contact.
export const services = [
  {
    value: "conception-creation-graphique",
    title: "Conception & création graphique",
    short: "Logos, chartes graphiques, cartes de visite, flyers et brochures.",
    description:
      "Logos, chartes graphiques, cartes de visite, flyers, brochures et bannières : une identité visuelle cohérente sur tous vos supports.",
    image: "/services/graphic-design-placeholder.png",
    href: "/services/conception-creation-graphique",
    className: "lg:col-span-2",
  },
  {
    value: "impression-numerique-offset",
    title: "Impression numérique & offset",
    short:
      "Affiches, menus, bâches, packaging, signalétique et habillage véhicule.",
    description:
      "Affiches, menus, étiquettes, bâches et packaging, en petit ou grand format. Signalétique, panneaux publicitaires et habillage de véhicules.",
    href: "/services/impression-numerique-offset",
    image: "/services/printing-placeholder.jpeg",
  },
  {
    value: "creation-site-web",
    title: "Sites web & applications",
    short: "Sites vitrines, e-commerce, CMS et applications web ou desktop.",
    description:
      "Sites vitrines, e-commerce et CMS, adaptés à tous les écrans et optimisés pour le référencement. Applications web et desktop selon vos besoins.",
    href: "/services/creation-site-web",
    image: "/services/web-placeholder.jpeg",
  },
  {
    value: "design-creation-3d",
    title: "Design & création 3D",
    short:
      "Plans de masse, images d'architecture et illustrations 3D de produits.",
    description:
      "Plans de masse, images d'architecture et illustrations 3D de vos produits, pour vos catalogues, plaquettes et présentations.",
    href: "/services/design-creation-3d",
    image: "/services/3d-placeholder.jpeg",
  },
  {
    value: "conception-evenementielle",
    title: "Conception événementielle",
    short:
      "Stands, foires, salons, séminaires, inaugurations et production technique.",
    description:
      "Stands design et modulaires, foires, salons, séminaires, inaugurations et cocktails d'entreprise, avec production technique son, image et média.",
    href: "/services/conception-evenementielle",
    image: "/services/events-placeholder.jpeg",
  },
];

export type ServiceGroup = "digital" | "identite-impression" | "espace";

export type ServiceDetail = {
  slug: string;
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
    description: "De la création graphique au support imprimé.",
  },
  espace: {
    label: "Espace et événementiel",
    description: "Modélisation 3D, stands et événements.",
  },
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "creation-site-web",
    group: "digital",
    title: "Création de sites web",
    summary: "Vitrine, dynamique, CMS, eCommerce",
    hero: {
      title: "Création de sites web à Fès",
      accent: "sites web",
      subtitle:
        "Sites vitrine, e-commerce, dynamiques ou CMS : une seule équipe, de l'étude à la maintenance.",
    },
    gallery: [
      {
        src: "/images/services/site-web-1.png",
        alt: "Création de site web à Fès - L'unicreative",
      },
      {
        src: "/images/services/site-web-2.png",
        alt: "Site web dynamique, vitrine ou eCommerce - L'unicreative",
      },
      {
        src: "/images/services/site-web-3.png",
        alt: "Site internet réalisé par L'unicreative",
      },
    ],
    intro: [
      "Vous cherchez une agence capable de créer un site web professionnel ? L'unicreative est une agence web basée à Fès, spécialisée dans la création de sites internet et le référencement SEO.",
      "Nous aidons les entreprises et les particuliers à tirer parti du numérique : site e-commerce, site vitrine, WordPress, blog. Chaque site adopte un design moderne, entièrement adapté aux téléphones, tablettes et ordinateurs.",
      // Scope: this figure appears on the web-design page of the old site only.
      "L'unicreative existe depuis 12 ans et compte plus de 100 réalisations réparties entre le Maroc et la France. Nous vous accompagnons à chaque étape : étude, UX/UI, conception, design, développement, hébergement et maintenance.",
    ],
    reasons: [
      {
        title: "Des sites web puissants",
        text: "Nous vous aidons à créer un site de qualité et attrayant, pour être plus visible sur Internet et développer votre présence en ligne.",
      },
      {
        title: "Un site sécurisé et rapide",
        text: "Les visiteurs sont pressés : la vitesse d'un site pèse directement sur l'expérience utilisateur. Grâce aux fonctionnalités intégrées de notre outil de développement, nous concevons des sites plus rapides.",
      },
      {
        title: "Vous restez décisionnaire",
        text: "Nous vous donnons les options, les outils et les informations pour bien choisir. Nos recommandations ne remplacent pas votre décision : chaque choix concernant votre site reste le vôtre.",
      },
    ],
    faq: [
      {
        q: "Combien coûte un site web ?",
        a: [
          "Le prix dépend du temps de travail nécessaire : fonctionnalités, nombre de pages, complexité du projet, création ou non des contenus, unicité du design, modules, outils utilisés, hébergement et nom de domaine.",
        ],
      },
      {
        q: "Comment créer un site web ?",
        a: [
          "Créer et administrer un site demande du temps et des compétences techniques. Une agence spécialisée comme L'unicreative prend en charge les aspects techniques et vous accompagne tout au long du projet.",
        ],
      },
      {
        q: "Quel est le délai de création d'un site web ?",
        a: [
          "Cela dépend du type de site. En moyenne, un site vitrine est prêt à être publié après 3 semaines à 2 mois de développement.",
          "Le délai varie selon vos besoins, les modifications à apporter et les objectifs à atteindre.",
        ],
      },
      {
        q: "Quels langages sont utilisés pour développer un site internet ?",
        a: [
          "Un site moderne combine plusieurs langages. Le front-end regroupe HTML (structure des pages), CSS (mise en forme) et JavaScript (éléments dynamiques).",
          "Le contenu des pages est déterminé à la demande côté serveur, avec des langages comme PHP, Python, Ruby, Java ou JavaScript, souvent associés à une base de données (SQL, par exemple). L'ensemble constitue le back-end.",
        ],
      },
      {
        q: "Pourquoi le référencement naturel (SEO) est-il important ?",
        a: [
          "Un site très bien fait mais que personne ne voit ne sert à rien. Le SEO, ou référencement naturel, vise la visibilité d'un site dans les résultats des moteurs de recherche, pour obtenir du trafic et donc des ventes.",
        ],
      },
    ],
    meta: {
      title: "Création de sites web à Fès | L'unicreative",
      description:
        "Agence web à Fès : sites vitrine, e-commerce, dynamiques et CMS, de l'étude à la maintenance. Plus de 100 réalisations entre le Maroc et la France.",
    },
  },
  {
    slug: "creation-application-logiciel",
    group: "digital",
    title: "Création d'applications",
    summary: "Applications web, desktop ou logiciel",
    hero: {
      title: "Création d'applications web et desktop",
      accent: "applications",
      subtitle:
        "Applications web, desktop et logiciels développés pour vos besoins.",
    },
    gallery: [],
    intro: [
      "L'unicreative développe des applications web et des applications desktop, ainsi que des logiciels adaptés à votre activité.",
    ],
    meta: {
      title: "Création d'applications web et desktop à Fès | L'unicreative",
      description:
        "Développement d'applications web, desktop et logiciels par L'unicreative, agence basée à Fès.",
    },
  },
  {
    slug: "conception-creation-graphique",
    group: "identite-impression",
    title: "Conception et création graphique",
    summary: "Logos, cartes de visite, flyers",
    hero: {
      title: "Conception et création graphique",
      accent: "création graphique",
      subtitle:
        "Identité de marque et supports de communication, pensés pour être reconnus.",
    },
    gallery: [],
    intro: [
      "Nous créons votre identité visuelle : logos, cartes de visite, flyers et documentation promotionnelle.",
    ],
    meta: {
      title: "Conception et création graphique à Fès | L'unicreative",
      description:
        "Création de logos, cartes de visite, flyers et identité visuelle à Fès par L'unicreative.",
    },
  },
  {
    slug: "impression-numerique-offset",
    group: "identite-impression",
    title: "Impression numérique et offset",
    summary: "Affiches, flyers, habillage véhicule",
    hero: {
      title: "Impression numérique et offset",
      accent: "impression",
      subtitle:
        "Affiches, flyers, habillage de véhicules et enseignes publicitaires.",
    },
    gallery: [],
    intro: [
      "Nous réalisons vos impressions numériques et offset : affiches, flyers et supports marketing, ainsi que l'habillage de véhicules et les enseignes extérieures.",
    ],
    meta: {
      title: "Impression numérique et offset à Fès | L'unicreative",
      description:
        "Impression numérique et offset, affiches, flyers, habillage véhicule et enseignes à Fès.",
    },
  },
  {
    slug: "design-creation-3d",
    group: "espace",
    title: "Design et création 3D",
    summary: "Modélisation 3D",
    hero: {
      title: "Design et création 3D",
      accent: "création 3D",
      subtitle: "Modélisation, rendu et design 3D pour visualiser vos projets.",
    },
    gallery: [],
    intro: [
      "Nous proposons la modélisation, le rendu et le design 3D pour donner forme à vos projets avant leur réalisation.",
    ],
    meta: {
      title: "Design et création 3D à Fès | L'unicreative",
      description:
        "Modélisation, rendu et design 3D par L'unicreative, agence basée à Fès.",
    },
  },
  {
    slug: "conception-evenementielle",
    group: "espace",
    title: "Événementiel",
    summary: "Stands, salons, séminaires",
    hero: {
      title: "Conception événementielle",
      accent: "événementielle",
      subtitle:
        "Stands, salons, séminaires et réceptions : du design à la production technique.",
    },
    gallery: [],
    intro: [
      "Nous concevons et organisons vos événements : stands sur mesure et modulaires pour foires et salons, séminaires, colloques et réceptions, avec la production technique audio et visuelle.",
    ],
    itemsTitle: "Nos domaines d'intervention",
    items: [
      "Foires",
      "Salons",
      "Stands",
      "Organisation de salons et séminaires",
      "Colloques",
      "Inaugurations",
      "Cocktails d'entreprise",
      "Fêtes et buffets",
    ],
    meta: {
      title: "Conception événementielle à Fès | L'unicreative",
      description:
        "Stands, foires, salons, séminaires, colloques et cocktails d'entreprise : conception événementielle à Fès.",
    },
  },
];

export const getService = (slug: string) =>
  serviceDetails.find((service) => service.slug === slug);
