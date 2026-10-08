"use client";

import { useRef, useState } from "react";
import type HCaptcha from "@hcaptcha/react-hcaptcha";
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
import { contactDefaultValues, contactSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "@/components/ui/toast";
import { CtaButton } from "@/components/cta-button";
import { Honeypot, Web3FormsCaptcha } from "@/components/web3forms-protection";
import { services } from "@/data/services";
import { submitToWeb3Forms } from "@/lib/web3forms";

export function ContactForm() {
  const form = useForm({
    schema: contactSchema,
    initialInput: contactDefaultValues,
  });

  const captchaRef = useRef<HCaptcha>(null);
  const botcheckRef = useRef<HTMLInputElement>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const resetCaptcha = () => {
    captchaRef.current?.resetCaptcha();
    setCaptchaToken(null);
  };

  const handleSubmit: SubmitHandler<typeof contactSchema> = async (output) => {
    if (!captchaToken) {
      setCaptchaError("Veuillez valider le captcha avant d'envoyer.");
      return;
    }

    const serviceLabel =
      services.find((service) => service.value === output.service)?.title ??
      output.service;

    const submission = submitToWeb3Forms({
      subject: "Nouveau message — L’unicreative",
      from_name: "L’unicreative — Formulaire de contact",

      prenom: output.prenom,
      nom: output.nom,
      email: output.email,
      telephone: `+212 ${output.telephone}`,
      service: serviceLabel,
      message: output.message,

      replyto: output.email,

      // Spam protection
      botcheck: botcheckRef.current?.checked ?? false,
      "h-captcha-response": captchaToken,
    });

    toast.promise(submission, {
      loading: "Envoi du message…",
      success: "Votre message a bien été envoyé.",
      error: "Impossible d'envoyer le message.",
    });

    try {
      await submission;
    } catch {
      // The error toast is already shown by toast.promise.
    } finally {
      // hCaptcha tokens are single-use.
      resetCaptcha();
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

          {/* Spam protection */}
          <Honeypot ref={botcheckRef} />

          <Field data-invalid={captchaError !== null}>
            <div className="flex justify-center sm:justify-end">
              <Web3FormsCaptcha
                ref={captchaRef}
                onVerify={(token) => {
                  setCaptchaToken(token);
                  setCaptchaError(null);
                }}
                onExpire={() => setCaptchaToken(null)}
                onError={() => {
                  setCaptchaToken(null);
                  setCaptchaError(
                    "Le captcha n'a pas pu se charger. Réessayez.",
                  );
                }}
              />
            </div>

            {captchaError && (
              <FieldError
                className="text-center sm:text-right"
                errors={[{ message: captchaError }]}
              />
            )}
          </Field>

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
