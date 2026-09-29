"use client";

import { Form, Field as FormischField, useForm } from "@formisch/react";
import type { SubmitHandler } from "@formisch/react";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
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
import { contactUsDefaultValues, contactUsSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import { services } from "@/data/contact";
import { CtaButton } from "./cta-button";

export function ContactUsForm() {
  const form = useForm({
    schema: contactUsSchema,
    initialInput: contactUsDefaultValues,
  });

  const handleSubmit: SubmitHandler<typeof contactUsSchema> = (output) => {
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

        <div className="flex w-full justify-center sm:justify-end">
          <CtaButton type="submit" form="contact-form">
            Envoyer
          </CtaButton>
        </div>
      </FieldGroup>
    </Form>
  );
}
