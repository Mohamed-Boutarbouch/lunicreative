import * as v from "valibot";

export const contactUsSchema = v.object({
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
    v.maxLength(1000, "Le message doit contenir au maximum 1000 caractères."),
  ),
});

export const contactUsDefaultValues = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  service: "",
  message: "",
};
