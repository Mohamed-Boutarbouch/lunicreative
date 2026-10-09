"use client";

import { useCallback, useRef, useState } from "react";
import type HCaptcha from "@hcaptcha/react-hcaptcha";

export function useWeb3FormsProtection() {
  const captchaRef = useRef<HCaptcha>(null);
  const botcheckRef = useRef<HTMLInputElement>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resetCaptcha = useCallback(() => {
    captchaRef.current?.resetCaptcha();
    setToken(null);
  }, []);

  const onVerify = useCallback((value: string) => {
    setToken(value);
    setError(null);
  }, []);

  const onExpire = useCallback(() => setToken(null), []);

  const onError = useCallback(() => {
    setToken(null);
    setError("Le captcha n'a pas pu se charger. Réessayez.");
  }, []);

  /**
   * Returns the fields to merge into the Web3Forms payload,
   * or null (and shows an error) if the captcha isn't solved.
   */
  const getProtectionFields = useCallback(() => {
    if (!token) {
      setError("Veuillez valider le captcha avant d'envoyer.");
      return null;
    }

    return {
      // Only sent when the honeypot was actually ticked
      ...(botcheckRef.current?.checked ? { botcheck: true } : {}),
      "h-captcha-response": token,
    };
  }, [token]);

  return {
    captchaRef,
    botcheckRef,
    error,
    resetCaptcha,
    getProtectionFields,
    captchaHandlers: { onVerify, onExpire, onError },
  };
}

export type Web3FormsProtection = ReturnType<typeof useWeb3FormsProtection>;
