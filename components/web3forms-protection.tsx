"use client";

import { forwardRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import { Field, FieldError } from "@/components/ui/field";
import type { Web3FormsProtection } from "@/hooks/use-web3forms-protection";

/** Hidden checkbox. Humans never see it; naive bots tick it. */
export const Honeypot = forwardRef<HTMLInputElement>(
  function Honeypot(_props, ref) {
    return (
      <input
        ref={ref}
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
    );
  },
);

type Web3FormsCaptchaProps = {
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
};

export const Web3FormsCaptcha = forwardRef<HCaptcha, Web3FormsCaptchaProps>(
  function Web3FormsCaptcha({ onVerify, onExpire, onError }, ref) {
    const sitekey = process.env.NEXT_PUBLIC_WEB3FORMS_HCAPTCHA_SITEKEY;

    if (!sitekey) {
      throw new Error(
        "Missing NEXT_PUBLIC_WEB3FORMS_HCAPTCHA_SITEKEY environment variable",
      );
    }

    return (
      <HCaptcha
        ref={ref}
        sitekey={sitekey}
        languageOverride="fr"
        reCaptchaCompat={false}
        onVerify={onVerify}
        onExpire={onExpire}
        onError={onError}
      />
    );
  },
);

export function ProtectionFields({
  protection,
}: {
  protection: Web3FormsProtection;
}) {
  const { captchaRef, botcheckRef, error, captchaHandlers } = protection;

  return (
    <>
      <Honeypot ref={botcheckRef} />

      <Field data-invalid={error !== null}>
        <div className="flex justify-center sm:justify-end">
          <Web3FormsCaptcha ref={captchaRef} {...captchaHandlers} />
        </div>

        {error && (
          <FieldError
            className="text-center sm:text-right"
            errors={[{ message: error }]}
          />
        )}
      </Field>
    </>
  );
}
