"use client";

import { useState } from "react";
import { IconFileText, IconSend, IconUpload, IconX } from "@tabler/icons-react";
import { Form, Field as FormischField, useForm } from "@formisch/react";
import type { SubmitHandler } from "@formisch/react";
import type { InferOutput } from "valibot";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Attachment,
  AttachmentAction,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FuseReveal } from "@/components/animations/fuse-reveal";
import { Reveal } from "@/components/animations/reveal";
import { Toaster } from "@/components/ui/toast";
import { educationLevels, genders, objectives } from "@/data/career";
import { careerDefaultValues, careerSchema } from "@/lib/schemas";

const CAREER_EMAIL = "lunicreative.maroc@gmail.com";

type CareerApplication = InferOutput<typeof careerSchema>;

export function CareerForm() {
  const form = useForm({
    schema: careerSchema,
    initialInput: careerDefaultValues,
  });

  const [pendingApplication, setPendingApplication] =
    useState<CareerApplication | null>(null);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit: SubmitHandler<typeof careerSchema> = (output) => {
    setPendingApplication(output);
    setDialogOpen(true);
  };

  const handleContinueToEmail = () => {
    if (!pendingApplication) return;

    const output = pendingApplication;

    const objective =
      objectives.find((item) => item.value === output.objectif)?.label ??
      output.objectif;

    const level =
      educationLevels.find((item) => item.value === output.niveau)?.label ||
      "Non précisé";

    const body = [
      "Bonjour,",
      "",
      "Je vous adresse ma candidature.",
      "",
      `Demande : ${objective}`,
      `Nom et prénom : ${output.nomPrenom}`,
      `École / établissement : ${output.ecole}`,
      `Niveau d'études : ${level}`,
      `Spécialité : ${output.specialite}`,
      `Genre : ${output.genre}`,
      `Email : ${output.email}`,
      `Téléphone : +212 ${output.telephone}`,
      "",
      "Documents à joindre manuellement avant l'envoi :",
      `- CV : ${output.cv.name}`,
      ...(output.lettreMotivation
        ? [`- Lettre de motivation : ${output.lettreMotivation.name}`]
        : []),
      "",
      "Cordialement,",
      output.nomPrenom,
    ].join("\n");

    const subject = `Candidature — ${objective} — ${output.nomPrenom}`;

    const mailtoUrl = new URL(`mailto:${CAREER_EMAIL}`);
    mailtoUrl.searchParams.set("subject", subject);
    mailtoUrl.searchParams.set("body", body);

    setDialogOpen(false);
    window.location.href = mailtoUrl.toString();
  };

  return (
    <Reveal
      variant="fadeUp"
      className="mx-auto mt-24 max-w-4xl md:mt-32"
      delay={0.2}
    >
      <section id="candidature" className="mb-20 md:mb-28 lg:mb-36">
        <div className="mx-auto mb-10 w-full max-w-3xl text-left sm:mb-14 sm:text-center">
          <FuseReveal
            as="h2"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            parts={[
              "Déposez votre ",
              {
                text: "candidature",
                className:
                  "font-serif font-semibold tracking-wider text-primary",
              },
            ]}
          />

          <Reveal
            as="p"
            variant="blurIn"
            delay={1.2}
            className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Remplissez le formulaire et joignez vos documents au format PDF.
            Votre application e-mail s&apos;ouvrira pour finaliser l&apos;envoi
            de votre candidature.
          </Reveal>
        </div>

        <Reveal variant="fadeUp" delay={0.4}>
          <Card className="w-full">
            <CardContent>
              <Form of={form} id="career-form" onSubmit={handleSubmit}>
                <FieldGroup>
                  {/* Demande + Genre */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormischField of={form} path={["objectif"]}>
                      {(field) => (
                        <Field data-invalid={field.errors !== null}>
                          <FieldLabel htmlFor="career-objectif">
                            Votre demande{" "}
                            <span className="text-destructive">*</span>
                          </FieldLabel>

                          <Select
                            value={field.input ?? ""}
                            onValueChange={(value) =>
                              field.onChange(value ?? undefined)
                            }
                          >
                            <SelectTrigger
                              id="career-objectif"
                              aria-invalid={field.errors !== null}
                              className="w-full"
                            >
                              <SelectValue placeholder="Sélectionnez votre demande">
                                {
                                  objectives.find(
                                    (item) => item.value === field.input,
                                  )?.label
                                }
                              </SelectValue>
                            </SelectTrigger>

                            <SelectContent>
                              {objectives.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
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

                    <FormischField of={form} path={["genre"]}>
                      {(field) => (
                        <FieldSet data-invalid={field.errors !== null}>
                          <FieldLabel>
                            Genre <span className="text-destructive">*</span>
                          </FieldLabel>

                          <RadioGroup
                            value={field.input ?? ""}
                            onValueChange={(value) => field.onChange(value)}
                            aria-invalid={field.errors !== null}
                            className="flex h-10 items-center gap-6"
                          >
                            {genders.map((gender) => (
                              <Field
                                key={gender.value}
                                orientation="horizontal"
                                className="w-auto"
                              >
                                <RadioGroupItem
                                  id={`career-genre-${gender.value}`}
                                  value={gender.value}
                                />
                                <FieldLabel
                                  htmlFor={`career-genre-${gender.value}`}
                                  className="font-normal"
                                >
                                  {gender.label}
                                </FieldLabel>
                              </Field>
                            ))}
                          </RadioGroup>

                          {field.errors && (
                            <FieldError
                              errors={field.errors.map((message) => ({
                                message,
                              }))}
                            />
                          )}
                        </FieldSet>
                      )}
                    </FormischField>
                  </div>

                  {/* Nom + Prénom */}
                  <FormischField of={form} path={["nomPrenom"]}>
                    {(field) => (
                      <Field data-invalid={field.errors !== null}>
                        <FieldLabel htmlFor="career-nom-prenom">
                          Nom et prénom{" "}
                          <span className="text-destructive">*</span>
                        </FieldLabel>

                        <Input
                          {...field.props}
                          id="career-nom-prenom"
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

                  {/* École + Niveau */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormischField of={form} path={["ecole"]}>
                      {(field) => (
                        <Field data-invalid={field.errors !== null}>
                          <FieldLabel htmlFor="career-ecole">
                            École / établissement{" "}
                            <span className="text-destructive">*</span>
                          </FieldLabel>

                          <Input
                            {...field.props}
                            id="career-ecole"
                            value={field.input ?? ""}
                            aria-invalid={field.errors !== null}
                            placeholder="Nom de votre établissement"
                            autoComplete="organization"
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

                    <FormischField of={form} path={["niveau"]}>
                      {(field) => (
                        <Field data-invalid={field.errors !== null}>
                          <FieldLabel htmlFor="career-niveau">
                            Niveau d&apos;études
                          </FieldLabel>

                          <Select
                            value={field.input ?? ""}
                            onValueChange={(value) =>
                              field.onChange(value ?? undefined)
                            }
                          >
                            <SelectTrigger
                              id="career-niveau"
                              aria-invalid={field.errors !== null}
                              className="w-full"
                            >
                              <SelectValue placeholder="Sélectionnez votre niveau">
                                {
                                  educationLevels.find(
                                    (item) => item.value === field.input,
                                  )?.label
                                }
                              </SelectValue>
                            </SelectTrigger>

                            <SelectContent>
                              {educationLevels.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
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
                  </div>

                  {/* Spécialité */}
                  <FormischField of={form} path={["specialite"]}>
                    {(field) => (
                      <Field data-invalid={field.errors !== null}>
                        <FieldLabel htmlFor="career-specialite">
                          Spécialité <span className="text-destructive">*</span>
                        </FieldLabel>

                        <Input
                          {...field.props}
                          id="career-specialite"
                          value={field.input ?? ""}
                          aria-invalid={field.errors !== null}
                          placeholder="Ex. Développement web, Marketing, Design..."
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

                  {/* E-mail + Téléphone */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormischField of={form} path={["email"]}>
                      {(field) => (
                        <Field data-invalid={field.errors !== null}>
                          <FieldLabel htmlFor="career-email">
                            Adresse e-mail{" "}
                            <span className="text-destructive">*</span>
                          </FieldLabel>

                          <Input
                            {...field.props}
                            id="career-email"
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
                          <FieldLabel htmlFor="career-telephone">
                            Téléphone{" "}
                            <span className="text-destructive">*</span>
                          </FieldLabel>

                          <InputGroup>
                            <InputGroupInput
                              {...field.props}
                              id="career-telephone"
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

                  {/* Documents */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormischField of={form} path={["cv"]}>
                      {(field) => {
                        const file = field.input as File | undefined;
                        const maxFileSize = 2 * 1024 * 1024;

                        return (
                          <Field data-invalid={field.errors !== null}>
                            <FieldLabel htmlFor="career-cv">
                              CV <span className="text-destructive">*</span>
                            </FieldLabel>

                            <div className="relative">
                              <input
                                {...field.props}
                                id="career-cv"
                                type="file"
                                accept="application/pdf"
                                className="sr-only"
                                onChange={(event) => {
                                  const selectedFile = event.target.files?.[0];

                                  if (!selectedFile) return;

                                  if (selectedFile.size > maxFileSize) {
                                    field.onChange(undefined);
                                    event.target.value = "";
                                    return;
                                  }

                                  field.onChange(selectedFile);
                                }}
                              />

                              {file ? (
                                <Attachment size="sm">
                                  <AttachmentMedia>
                                    <IconFileText />
                                  </AttachmentMedia>

                                  <AttachmentContent>
                                    <AttachmentTitle>
                                      {file.name}
                                    </AttachmentTitle>
                                    <AttachmentDescription>
                                      PDF ·{" "}
                                      {(file.size / 1024 / 1024).toFixed(2)} Mo
                                    </AttachmentDescription>
                                  </AttachmentContent>

                                  <AttachmentAction
                                    type="button"
                                    aria-label={`Supprimer ${file.name}`}
                                    onClick={() => {
                                      field.onChange(undefined);

                                      const input = document.getElementById(
                                        "career-cv",
                                      ) as HTMLInputElement | null;

                                      if (input) input.value = "";
                                    }}
                                  >
                                    <IconX />
                                  </AttachmentAction>
                                </Attachment>
                              ) : (
                                <label
                                  htmlFor="career-cv"
                                  className="flex min-h-20 cursor-pointer items-center justify-center rounded-lg border border-dashed p-4 transition-colors hover:bg-muted/50"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="flex size-9 items-center justify-center rounded-md border bg-background">
                                      <IconUpload className="size-4" />
                                    </div>

                                    <div>
                                      <p className="text-sm font-medium">
                                        Ajouter votre CV
                                      </p>
                                      <p className="text-muted-foreground text-xs">
                                        PDF uniquement · 2 Mo maximum
                                      </p>
                                    </div>
                                  </div>
                                </label>
                              )}
                            </div>

                            {field.errors && (
                              <FieldError
                                errors={field.errors.map((message) => ({
                                  message,
                                }))}
                              />
                            )}
                          </Field>
                        );
                      }}
                    </FormischField>

                    <FormischField of={form} path={["lettreMotivation"]}>
                      {(field) => {
                        const file = field.input as File | undefined;
                        const maxFileSize = 2 * 1024 * 1024;

                        return (
                          <Field data-invalid={field.errors !== null}>
                            <FieldLabel htmlFor="career-lettre-motivation">
                              Lettre de motivation
                            </FieldLabel>

                            <div className="relative">
                              <input
                                {...field.props}
                                id="career-lettre-motivation"
                                type="file"
                                accept="application/pdf"
                                className="sr-only"
                                onChange={(event) => {
                                  const selectedFile = event.target.files?.[0];

                                  if (!selectedFile) return;

                                  if (selectedFile.size > maxFileSize) {
                                    field.onChange(undefined);
                                    event.target.value = "";
                                    return;
                                  }

                                  field.onChange(selectedFile);
                                }}
                              />

                              {file ? (
                                <Attachment size="sm">
                                  <AttachmentMedia>
                                    <IconFileText />
                                  </AttachmentMedia>

                                  <AttachmentContent>
                                    <AttachmentTitle>
                                      {file.name}
                                    </AttachmentTitle>
                                    <AttachmentDescription>
                                      PDF ·{" "}
                                      {(file.size / 1024 / 1024).toFixed(2)} Mo
                                    </AttachmentDescription>
                                  </AttachmentContent>

                                  <AttachmentAction
                                    type="button"
                                    aria-label={`Supprimer ${file.name}`}
                                    onClick={() => {
                                      field.onChange(undefined);

                                      const input = document.getElementById(
                                        "career-lettre-motivation",
                                      ) as HTMLInputElement | null;

                                      if (input) input.value = "";
                                    }}
                                  >
                                    <IconX />
                                  </AttachmentAction>
                                </Attachment>
                              ) : (
                                <label
                                  htmlFor="career-lettre-motivation"
                                  className="flex min-h-20 cursor-pointer items-center justify-center rounded-lg border border-dashed p-4 transition-colors hover:bg-muted/50"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="flex size-9 items-center justify-center rounded-md border bg-background">
                                      <IconUpload className="size-4" />
                                    </div>

                                    <div>
                                      <p className="text-sm font-medium">
                                        Ajouter une lettre de motivation
                                      </p>
                                      <p className="text-muted-foreground text-xs">
                                        PDF uniquement · 2 Mo maximum
                                      </p>
                                    </div>
                                  </div>
                                </label>
                              )}
                            </div>

                            {field.errors && (
                              <FieldError
                                errors={field.errors.map((message) => ({
                                  message,
                                }))}
                              />
                            )}
                          </Field>
                        );
                      }}
                    </FormischField>
                  </div>

                  <div className="flex justify-center pt-2 sm:justify-end">
                    <Button type="submit" form="career-form">
                      Postuler
                      <IconSend data-icon="inline-end" />
                    </Button>
                  </div>
                </FieldGroup>
              </Form>

              <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Finaliser votre candidature
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                      <span className="block">
                        L&apos;envoi automatique des candidatures avec pièces
                        jointes n&apos;est pas disponible actuellement.
                      </span>

                      <span className="mt-3 block">
                        Nous allons ouvrir votre application e-mail avec les
                        informations de votre candidature préremplies.
                      </span>

                      <span className="mt-3 block font-medium text-foreground">
                        Vous devrez joindre manuellement votre CV
                        {pendingApplication?.lettreMotivation
                          ? " et votre lettre de motivation"
                          : ""}{" "}
                        au format PDF avant d&apos;envoyer le message.
                      </span>

                      <span className="mt-3 block">
                        Votre candidature ne sera envoyée qu&apos;après avoir
                        cliqué sur « Envoyer » dans votre application e-mail.
                      </span>
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>

                    <AlertDialogAction onClick={handleContinueToEmail}>
                      Continuer vers l&apos;e-mail
                      <IconSend data-icon="inline-end" />
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      <Toaster />
    </Reveal>
  );
}
