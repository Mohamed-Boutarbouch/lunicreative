import * as v from "valibot";

export const contactSchema = v.object({
  prenom: v.pipe(
    v.string(),
    v.minLength(2, "Le prénom doit contenir au moins 2 caractères."),
  ),
  nom: v.pipe(
    v.string(),
    v.minLength(2, "Le nom doit contenir au moins 2 caractères."),
  ),
  email: v.pipe(
    v.string(),
    v.email("Veuillez saisir une adresse email valide."),
  ),
  telephone: v.pipe(
    v.string(),
    v.regex(/^(?:6|7)\d{8}$/, "Veuillez saisir un numéro valide."),
  ),
  service: v.pipe(
    v.string(),
    v.minLength(1, "Veuillez sélectionner un service."),
  ),
  message: v.pipe(
    v.string(),
    v.minLength(10, "Le message doit contenir au moins 10 caractères."),
    v.maxLength(2500, "Le message doit contenir au maximum 2500 caractères."),
  ),
});

export const contactDefaultValues = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  service: "",
  message: "",
};

export const careerSchema = v.object({
  objectif: v.pipe(
    v.string(),
    v.minLength(1, "Veuillez sélectionner votre demande."),
  ),

  genre: v.pipe(
    v.string(),
    v.minLength(1, "Veuillez sélectionner votre genre."),
  ),

  nomPrenom: v.pipe(
    v.string(),
    v.minLength(2, "Veuillez renseigner votre nom et prénom."),
  ),

  ecole: v.pipe(
    v.string(),
    v.minLength(2, "Veuillez renseigner votre établissement."),
  ),

  niveau: v.optional(v.string()),

  specialite: v.pipe(
    v.string(),
    v.minLength(2, "Veuillez renseigner votre spécialité."),
  ),

  email: v.pipe(
    v.string(),
    v.email("Veuillez renseigner une adresse e-mail valide."),
  ),

  telephone: v.pipe(
    v.string(),
    v.minLength(9, "Veuillez renseigner un numéro de téléphone valide."),
  ),

  cv: v.pipe(
    v.instance(File, "Veuillez joindre votre CV."),
    v.mimeType(["application/pdf"], "Le CV doit être au format PDF."),
    v.maxSize(2 * 1024 * 1024, "Le CV ne doit pas dépasser 2 Mo."),
  ),

  lettreMotivation: v.optional(
    v.pipe(
      v.instance(File),
      v.mimeType(
        ["application/pdf"],
        "La lettre de motivation doit être au format PDF.",
      ),
      v.maxSize(
        2 * 1024 * 1024,
        "La lettre de motivation ne doit pas dépasser 2 Mo.",
      ),
    ),
  ),
});

export const careerDefaultValues = {
  objectif: "",
  genre: "",
  nomPrenom: "",
  ecole: "",
  niveau: "",
  specialite: "",
  email: "",
  telephone: "",
  cv: undefined,
  lettreMotivation: undefined,
};

export const quoteSchema = v.object({
  nomPrenom: v.pipe(
    v.string(),
    v.nonEmpty("Veuillez renseigner votre nom et prénom."),
    v.minLength(2, "Le nom doit contenir au moins 2 caractères."),
  ),

  email: v.pipe(
    v.string(),
    v.nonEmpty("Veuillez renseigner votre adresse e-mail."),
    v.email("Veuillez renseigner une adresse e-mail valide."),
  ),

  telephone: v.pipe(
    v.string(),
    v.nonEmpty("Veuillez renseigner votre numéro de téléphone."),
    v.regex(
      /^[5-7]\d{8}$/,
      "Veuillez renseigner un numéro de téléphone marocain valide.",
    ),
  ),

  service: v.pipe(v.string(), v.nonEmpty("Veuillez sélectionner un service.")),

  projet: v.pipe(
    v.string(),
    v.nonEmpty("Veuillez décrire votre projet."),
    v.minLength(
      20,
      "Veuillez donner quelques détails supplémentaires sur votre projet.",
    ),
    v.maxLength(2500, "Le projet doit contenir au maximum 2500 caractères."),
  ),
});

export const quoteDefaultValues = {
  nomPrenom: "",
  email: "",
  telephone: "",
  service: "",
  projet: "",
};
