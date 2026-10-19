"use client";

import { useField, useForm } from "@formisch/react";
import type { FormStore } from "@formisch/react";
import type * as v from "valibot";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";

type PhoneSchema = v.ObjectSchema<
  {
    readonly indicatif: v.StringSchema<undefined>;
    readonly telephone: v.StringSchema<undefined>;
  },
  undefined
>;

type FormSchema = Parameters<typeof useForm>[0]["schema"];

const sanitizeDialCode = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  return `+${digits}`;
};

type PhoneFieldProps<TSchema extends FormSchema> = {
  form: FormStore<TSchema>;
  idPrefix: string;
  required?: boolean;
};

export function PhoneField<TSchema extends FormSchema>({
  form,
  idPrefix,
  required,
}: PhoneFieldProps<TSchema>) {
  // Single boundary cast: every caller's schema has these two string fields.
  const phoneForm = form as unknown as FormStore<PhoneSchema>;

  const dial = useField(phoneForm, { path: ["indicatif"] });
  const tel = useField(phoneForm, { path: ["telephone"] });

  const errors = [...(dial.errors ?? []), ...(tel.errors ?? [])];
  const invalid = errors.length > 0;
  const isMorocco = dial.input === "+212";

  return (
    <Field data-invalid={invalid}>
      <FieldLabel htmlFor={`${idPrefix}-telephone`}>
        Téléphone {required && <span className="text-destructive">*</span>}
      </FieldLabel>

      <InputGroup>
        <InputGroupInput
          {...dial.props}
          id={`${idPrefix}-indicatif`}
          aria-label="Indicatif du pays"
          type="tel"
          inputMode="tel"
          autoComplete="tel-country-code"
          value={dial.input ?? ""}
          onChange={(event) =>
            dial.onChange(sanitizeDialCode(event.target.value))
          }
          aria-invalid={dial.errors !== null}
          maxLength={5}
          className="w-16 flex-none pr-0 text-center"
        />

        <div aria-hidden className="h-4 w-px shrink-0 bg-border" />

        <InputGroupInput
          {...tel.props}
          id={`${idPrefix}-telephone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={tel.input ?? ""}
          aria-invalid={tel.errors !== null}
          placeholder={isMorocco ? "6 XX XX XX XX" : "Numéro de téléphone"}
          maxLength={15}
        />
      </InputGroup>

      {invalid && (
        <FieldError errors={errors.map((message) => ({ message }))} />
      )}
    </Field>
  );
}
