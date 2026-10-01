"use client";

import { IconFileText, IconUpload, IconX } from "@tabler/icons-react";
import { Form, Field as FormischField, useForm } from "@formisch/react";
import type { SubmitHandler } from "@formisch/react";

import {
  Attachment,
  AttachmentAction,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { toast } from "@/components/ui/toast";
import { careerDefaultValues, careerSchema } from "@/lib/schemas";
import { educationLevels, genders, objectives } from "@/data/career";

export function CareerForm() {
  const form = useForm({
    schema: careerSchema,
    initialInput: careerDefaultValues,
  });

  const handleSubmit: SubmitHandler<typeof careerSchema> = (output) => {
    console.log(output);

    toast.promise(
      new Promise<typeof output>((resolve) => {
        window.setTimeout(() => resolve(output), 2000);
      }),
      {
        loading: "Envoi de votre candidature…",
        success: "Votre candidature a bien été envoyée.",
        error: "Impossible d'envoyer votre candidature.",
      },
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Rejoignez-nous</CardTitle>
        <CardDescription>
          Envoyez-nous votre candidature et présentez-nous votre parcours.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form of={form} id="career-form" onSubmit={handleSubmit}>
          <FieldGroup>
            {/* Objectif + Genre */}
            <div className="grid gap-6 sm:grid-cols-2">
              <FormischField of={form} path={["objectif"]}>
                {(field) => (
                  <Field data-invalid={field.errors !== null}>
                    <FieldLabel htmlFor="career-objectif">
                      Votre demande <span className="text-destructive">*</span>
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
                              (objective) => objective.value === field.input,
                            )?.label
                          }
                        </SelectValue>
                      </SelectTrigger>

                      <SelectContent>
                        {objectives.map((objective) => (
                          <SelectItem
                            key={objective.value}
                            value={objective.value}
                          >
                            {objective.label}
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
                    Nom et prénom <span className="text-destructive">*</span>
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
                              (level) => level.value === field.input,
                            )?.label
                          }
                        </SelectValue>
                      </SelectTrigger>

                      <SelectContent>
                        {educationLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
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

            {/* Email + Téléphone */}
            <div className="grid gap-6 sm:grid-cols-2">
              <FormischField of={form} path={["email"]}>
                {(field) => (
                  <Field data-invalid={field.errors !== null}>
                    <FieldLabel htmlFor="career-email">
                      Adresse e-mail <span className="text-destructive">*</span>
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
                      Téléphone <span className="text-destructive">*</span>
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        {...field.props}
                        id="career-telephone"
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

                            if (!selectedFile) {
                              return;
                            }

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
                              <AttachmentTitle>{file.name}</AttachmentTitle>
                              <AttachmentDescription>
                                PDF · {(file.size / 1024 / 1024).toFixed(2)} Mo
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

                                if (input) {
                                  input.value = "";
                                }
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

                            if (!selectedFile) {
                              return;
                            }

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
                              <AttachmentTitle>{file.name}</AttachmentTitle>
                              <AttachmentDescription>
                                PDF · {(file.size / 1024 / 1024).toFixed(2)} Mo
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

                                if (input) {
                                  input.value = "";
                                }
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
              <button
                type="submit"
                form="career-form"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Envoyer ma candidature
              </button>
            </div>
          </FieldGroup>
        </Form>
      </CardContent>
    </Card>
  );
}
