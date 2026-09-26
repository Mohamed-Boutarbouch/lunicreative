"use client";

import { Form, Field as FormischField, useForm } from "@formisch/react";
import type { SubmitHandler } from "@formisch/react";
import * as v from "valibot";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/toast";

const services = [
  {
    value: "conception-creation-graphique",
    label: "Conception & création graphique",
  },
  {
    value: "impression-numerique-offset",
    label: "Impression numérique & offset",
  },
  {
    value: "creation-sites-web",
    label: "Création de sites web",
  },
  {
    value: "design-creation-3d",
    label: "Design & création 3D",
  },
  {
    value: "conception-evenementielle",
    label: "Conception événementielle",
  },
  {
    value: "autre",
    label: "Autre",
  },
] as const;

const FormSchema = v.object({
  nom: v.pipe(
    v.string(),
    v.minLength(2, "Le nom doit contenir au moins 2 caractères."),
  ),
  prenom: v.pipe(
    v.string(),
    v.minLength(2, "Le prénom doit contenir au moins 2 caractères."),
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

export function ContactUsForm() {
  const form = useForm({
    schema: FormSchema,
    initialInput: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      service: "",
      message: "",
    },
  });

  const handleSubmit: SubmitHandler<typeof FormSchema> = (output) => {
    console.log(JSON.stringify(output, null, 2));

    toast.promise(
      new Promise<typeof output>((resolve) => {
        window.setTimeout(() => resolve(output), 2000);
      }),
      {
        loading: "Envoi du message…",
        success: "Votre message a bien été envoyé.",
        error: "Impossible d'envoyer le message.",
      },
    );
  };

  return (
    <Form of={form} id="contact-form" onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormischField of={form} path={["nom"]}>
            {(field) => (
              <Field data-invalid={field.errors !== null}>
                <FieldLabel htmlFor="contact-nom">Nom</FieldLabel>
                <Input
                  {...field.props}
                  id="contact-nom"
                  value={field.input ?? ""}
                  aria-invalid={field.errors !== null}
                  placeholder="Votre nom"
                  autoComplete="family-name"
                />
                {field.errors && (
                  <FieldError
                    errors={field.errors.map((message) => ({ message }))}
                  />
                )}
              </Field>
            )}
          </FormischField>

          <FormischField of={form} path={["prenom"]}>
            {(field) => (
              <Field data-invalid={field.errors !== null}>
                <FieldLabel htmlFor="contact-prenom">Prénom</FieldLabel>
                <Input
                  {...field.props}
                  id="contact-prenom"
                  value={field.input ?? ""}
                  aria-invalid={field.errors !== null}
                  placeholder="Votre prénom"
                  autoComplete="given-name"
                />
                {field.errors && (
                  <FieldError
                    errors={field.errors.map((message) => ({ message }))}
                  />
                )}
              </Field>
            )}
          </FormischField>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormischField of={form} path={["email"]}>
            {(field) => (
              <Field data-invalid={field.errors !== null}>
                <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                <Input
                  {...field.props}
                  id="contact-email"
                  type="email"
                  value={field.input ?? ""}
                  aria-invalid={field.errors !== null}
                  placeholder="vous@exemple.com"
                  autoComplete="email"
                />
                {field.errors && (
                  <FieldError
                    errors={field.errors.map((message) => ({ message }))}
                  />
                )}
              </Field>
            )}
          </FormischField>

          <FormischField of={form} path={["telephone"]}>
            {(field) => (
              <Field data-invalid={field.errors !== null}>
                <FieldLabel htmlFor="contact-telephone">Téléphone</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    {...field.props}
                    id="contact-telephone"
                    type="tel"
                    inputMode="numeric"
                    value={field.input ?? ""}
                    aria-invalid={field.errors !== null}
                    placeholder="6 XX XX XX XX"
                    autoComplete="tel-national"
                    maxLength={9}
                  />
                  <InputGroupAddon>+212</InputGroupAddon>
                </InputGroup>

                {field.errors && (
                  <FieldError
                    errors={field.errors.map((message) => ({ message }))}
                  />
                )}
              </Field>
            )}
          </FormischField>
        </div>

        <FormischField of={form} path={["service"]}>
          {(field) => (
            <Field data-invalid={field.errors !== null}>
              <FieldLabel htmlFor="contact-service">Service</FieldLabel>

              <Select
                value={field.input ?? ""}
                onValueChange={(value) => field.onChange(value ?? undefined)}
              >
                <SelectTrigger
                  id="contact-service"
                  aria-invalid={field.errors !== null}
                  className="w-full"
                >
                  <SelectValue placeholder="Sélectionnez un service">
                    {
                      services.find((service) => service.value === field.input)
                        ?.label
                    }
                  </SelectValue>
                </SelectTrigger>

                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {field.errors && (
                <FieldError
                  errors={field.errors.map((message) => ({ message }))}
                />
              )}
            </Field>
          )}
        </FormischField>

        <FormischField of={form} path={["message"]}>
          {(field) => (
            <Field data-invalid={field.errors !== null}>
              <FieldLabel htmlFor="contact-message">Message</FieldLabel>

              <InputGroup>
                <InputGroupTextarea
                  {...field.props}
                  id="contact-message"
                  value={field.input ?? ""}
                  aria-invalid={field.errors !== null}
                  placeholder="Parlez-nous de votre projet..."
                  rows={7}
                  className="min-h-40 resize-none"
                />

                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">
                    {(field.input ?? "").length}/1000
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              {field.errors && (
                <FieldError
                  errors={field.errors.map((message) => ({ message }))}
                />
              )}
            </Field>
          )}
        </FormischField>

        <Button type="submit" form="contact-form" className="w-full sm:w-auto">
          Collaborons
        </Button>
      </FieldGroup>
    </Form>
  );
}
