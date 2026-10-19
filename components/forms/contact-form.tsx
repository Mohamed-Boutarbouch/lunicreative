"use client";

import { Form, Field as FormischField, reset, useForm } from "@formisch/react";
import type { SubmitHandler } from "@formisch/react";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactDefaultValues, contactSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { PhoneField } from "@/components/forms/phone-field";
import { toast, Toaster } from "@/components/ui/toast";
import { Textarea } from "@/components/ui/textarea";
import { CtaButton } from "@/components/cta-button";
import { ProtectionFields } from "@/components/forms/web3forms-protection";
import { services } from "@/data/services";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { useWeb3FormsProtection } from "@/hooks/use-web3forms-protection";

export function ContactForm() {
  const form = useForm({
    schema: contactSchema,
    initialInput: contactDefaultValues,
  });

  const protection = useWeb3FormsProtection();

  const handleSubmit: SubmitHandler<typeof contactSchema> = async (output) => {
    const protectionFields = protection.getProtectionFields();
    if (!protectionFields) return;

    const serviceLabel =
      services.find((service) => service.value === output.service)?.title ??
      output.service;

    const submission = submitToWeb3Forms({
      subject: "Nouveau message — L’unicreative",
      from_name: "L’unicreative — Formulaire de contact",

      prenom: output.prenom,
      nom: output.nom,
      email: output.email,
      telephone: `${output.indicatif} ${output.telephone}`,
      service: serviceLabel,
      message: output.message,

      replyto: output.email,
      ...protectionFields,
    });

    toast.promise(submission, {
      loading: "Envoi du message…",
      success: "Votre message a bien été envoyé.",
      error: "Impossible d'envoyer le message.",
    });

    try {
      await submission;
      reset(form);
    } catch {
      // toast.promise already shows the error
    } finally {
      protection.resetCaptcha();
    }
  };

  return (
    <>
      <Form of={form} id="contact-form" onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="grid gap-6 sm:grid-cols-2">
            <FormischField of={form} path={["prenom"]}>
              {(field) => (
                <Field data-invalid={field.errors !== null}>
                  <FieldLabel htmlFor="contact-prenom">
                    Prénom <span className="text-destructive">*</span>
                  </FieldLabel>
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
                  <FieldLabel htmlFor="contact-nom">
                    Nom <span className="text-destructive">*</span>
                  </FieldLabel>
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
                  <FieldLabel htmlFor="contact-email">
                    Email <span className="text-destructive">*</span>
                  </FieldLabel>
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

            <PhoneField form={form} idPrefix="contact" required />
          </div>

          <FormischField of={form} path={["service"]}>
            {(field) => (
              <Field data-invalid={field.errors !== null}>
                <FieldLabel htmlFor="contact-service">
                  Service <span className="text-destructive">*</span>
                </FieldLabel>

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
                        services.find(
                          (service) => service.value === field.input,
                        )?.title
                      }
                    </SelectValue>
                  </SelectTrigger>

                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.title}
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
                <FieldLabel htmlFor="contact-message">
                  Message <span className="text-destructive">*</span>
                </FieldLabel>

                <Textarea
                  {...field.props}
                  id="contact-message"
                  value={field.input ?? ""}
                  aria-invalid={field.errors !== null}
                  placeholder="Parlez-nous de votre projet..."
                  rows={7}
                  className="min-h-40 resize-none"
                />

                {field.errors && (
                  <FieldError
                    errors={field.errors.map((message) => ({ message }))}
                  />
                )}
              </Field>
            )}
          </FormischField>

          <ProtectionFields protection={protection} />

          <div className="flex w-full justify-center sm:justify-end">
            <CtaButton type="submit" form="contact-form">
              Envoyer
            </CtaButton>
          </div>
        </FieldGroup>
      </Form>
      <Toaster />
    </>
  );
}
