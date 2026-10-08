"use client";

import { Form, Field as FormischField, reset, useForm } from "@formisch/react";
import { useRef, useState } from "react";
import type HCaptcha from "@hcaptcha/react-hcaptcha";
import { IconSend } from "@tabler/icons-react";
import type { SubmitHandler } from "@formisch/react";

import { Reveal } from "@/components/animations/reveal";
import { Card, CardContent } from "@/components/ui/card";
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
} from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "@/components/ui/toast";
import { Honeypot, Web3FormsCaptcha } from "@/components/web3forms-protection";
import { quoteServices } from "@/data/quote";
import { quoteDefaultValues, quoteSchema } from "@/lib/schemas";
import { ServiceGroup, serviceGroups } from "@/data/services";
import { useSearchParams } from "next/navigation";
import { submitToWeb3Forms } from "@/lib/web3forms";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const form = useForm({
    schema: quoteSchema,
    initialInput: {
      ...quoteDefaultValues,
      service: service ?? quoteDefaultValues.service,
    },
  });

  const captchaRef = useRef<HCaptcha>(null);
  const botcheckRef = useRef<HTMLInputElement>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const resetCaptcha = () => {
    captchaRef.current?.resetCaptcha();
    setCaptchaToken(null);
  };

  const handleSubmit: SubmitHandler<typeof quoteSchema> = async (output) => {
    if (!captchaToken) {
      setCaptchaError("Veuillez valider le captcha avant d'envoyer.");
      return;
    }

    const serviceLabel =
      quoteServices.find((service) => service.value === output.service)
        ?.label ?? output.service;

    const submission = submitToWeb3Forms({
      subject: "Nouvelle demande de devis — L’unicreative",
      from_name: "L’unicreative — Demande de devis",

      nomPrenom: output.nomPrenom,
      email: output.email,
      telephone: `+212 ${output.telephone}`,
      service: serviceLabel,
      projet: output.projet,

      replyto: output.email,

      // Spam protection
      botcheck: botcheckRef.current?.checked ?? false,
      "h-captcha-response": captchaToken,
    });

    toast.promise(submission, {
      loading: "Envoi de votre demande…",
      success: "Votre demande de devis a bien été envoyée.",
      error: "Impossible d'envoyer votre demande de devis.",
    });

    try {
      await submission;

      reset(form);
      resetCaptcha();
    } catch {
      // The error toast is already shown by toast.promise.
    }
  };

  return (
    <Reveal
      variant="fadeUp"
      className="mx-auto mt-12 max-w-4xl md:mt-16"
      delay={0.2}
    >
      <section id="devis" className="mb-20 md:mb-28 lg:mb-36">
        <Reveal variant="fadeUp" delay={0.4}>
          <Card className="w-full">
            <CardContent>
              <Form
                of={form}
                id="quote-form"
                aria-labelledby="quote-form-title"
                onSubmit={handleSubmit}
              >
                <FieldGroup>
                  {/* Nom et prénom */}
                  <FormischField of={form} path={["nomPrenom"]}>
                    {(field) => (
                      <Field data-invalid={field.errors !== null}>
                        <FieldLabel htmlFor="quote-nom-prenom">
                          Nom et prénom{" "}
                          <span className="text-destructive">*</span>
                        </FieldLabel>

                        <Input
                          {...field.props}
                          id="quote-nom-prenom"
                          value={field.input ?? ""}
                          aria-invalid={field.errors !== null}
                          placeholder="Votre nom et prénom"
                          autoComplete="name"
                        />

                        {field.errors && (
                          <FieldError
                            errors={field.errors.map((message) => ({
                              message,
                            }))}
                          />
                        )}
                      </Field>
                    )}
                  </FormischField>

                  {/* Email + Téléphone */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormischField of={form} path={["email"]}>
                      {(field) => (
                        <Field data-invalid={field.errors !== null}>
                          <FieldLabel htmlFor="quote-email">
                            Adresse e-mail{" "}
                            <span className="text-destructive">*</span>
                          </FieldLabel>

                          <Input
                            {...field.props}
                            id="quote-email"
                            type="email"
                            value={field.input ?? ""}
                            aria-invalid={field.errors !== null}
                            placeholder="vous@exemple.com"
                            autoComplete="email"
                          />

                          {field.errors && (
                            <FieldError
                              errors={field.errors.map((message) => ({
                                message,
                              }))}
                            />
                          )}
                        </Field>
                      )}
                    </FormischField>

                    <FormischField of={form} path={["telephone"]}>
                      {(field) => (
                        <Field data-invalid={field.errors !== null}>
                          <FieldLabel htmlFor="quote-telephone">
                            Téléphone{" "}
                            <span className="text-destructive">*</span>
                          </FieldLabel>

                          <InputGroup>
                            <InputGroupInput
                              {...field.props}
                              id="quote-telephone"
                              name="telephone"
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              value={field.input ?? ""}
                              aria-invalid={field.errors !== null}
                              placeholder="6 XX XX XX XX"
                              maxLength={9}
                            />
                            <InputGroupAddon>+212</InputGroupAddon>
                          </InputGroup>

                          {field.errors && (
                            <FieldError
                              errors={field.errors.map((message) => ({
                                message,
                              }))}
                            />
                          )}
                        </Field>
                      )}
                    </FormischField>
                  </div>

                  {/* Service */}
                  <FormischField of={form} path={["service"]}>
                    {(field) => (
                      <Field data-invalid={field.errors !== null}>
                        <FieldLabel htmlFor="quote-service">
                          Service souhaité{" "}
                          <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Select
                          value={field.input ?? ""}
                          onValueChange={(value) =>
                            field.onChange(value ?? undefined)
                          }
                        >
                          <SelectTrigger
                            id="quote-service"
                            aria-invalid={field.errors !== null}
                            className="w-full"
                          >
                            <SelectValue placeholder="Sélectionnez un service">
                              {
                                quoteServices.find(
                                  (service) => service.value === field.input,
                                )?.label
                              }
                            </SelectValue>
                          </SelectTrigger>

                          <SelectContent>
                            {(Object.keys(serviceGroups) as ServiceGroup[]).map(
                              (group) => {
                                const services = quoteServices.filter(
                                  (service) => service.group === group,
                                );

                                return (
                                  <SelectGroup key={group}>
                                    <SelectLabel>
                                      {serviceGroups[group].label}
                                    </SelectLabel>

                                    {services.map((service) => (
                                      <SelectItem
                                        key={service.value}
                                        value={service.value}
                                      >
                                        {service.label}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                );
                              },
                            )}
                          </SelectContent>
                        </Select>

                        {field.errors && (
                          <FieldError
                            errors={field.errors.map((message) => ({
                              message,
                            }))}
                          />
                        )}
                      </Field>
                    )}
                  </FormischField>

                  {/* Projet */}
                  <FormischField of={form} path={["projet"]}>
                    {(field) => (
                      <Field data-invalid={field.errors !== null}>
                        <FieldLabel htmlFor="quote-projet">
                          Expliquez-nous votre projet{" "}
                          <span className="text-destructive">*</span>
                        </FieldLabel>

                        <Textarea
                          {...field.props}
                          id="quote-projet"
                          value={field.input ?? ""}
                          aria-invalid={field.errors !== null}
                          placeholder="Décrivez votre projet, vos besoins, vos objectifs, les délais souhaités..."
                          className="min-h-40 resize-y"
                        />

                        {field.errors && (
                          <FieldError
                            errors={field.errors.map((message) => ({
                              message,
                            }))}
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

                  <div className="flex justify-center pt-2 sm:justify-end">
                    <Button type="submit" form="quote-form">
                      Demander un devis
                      <IconSend data-icon="inline-end" />
                    </Button>
                  </div>
                </FieldGroup>
              </Form>
            </CardContent>
          </Card>
        </Reveal>
      </section>
      <Toaster />
    </Reveal>
  );
}
