"use client";

import { forwardRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

/**
 * Public sitekey used by Web3Forms' free hCaptcha integration.
 * Confirm it against https://docs.web3forms.com (hCaptcha / React section)
 * before shipping, in case it has changed.
 */
const WEB3FORMS_HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

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
    return (
      <HCaptcha
        ref={ref}
        sitekey={WEB3FORMS_HCAPTCHA_SITEKEY}
        languageOverride="fr"
        reCaptchaCompat={false}
        onVerify={onVerify}
        onExpire={onExpire}
        onError={onError}
      />
    );
  },
);
