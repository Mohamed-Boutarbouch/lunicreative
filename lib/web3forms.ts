const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

if (!WEB3FORMS_KEY) {
  throw new Error("Clé d'accès Web3Forms manquante.");
}

type Web3FormsFields = Record<
  string,
  string | number | boolean | null | undefined
>;

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export async function submitToWeb3Forms(
  fields: Web3FormsFields,
): Promise<void> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      ...fields,
    }),
  });

  let result: Web3FormsResponse;

  try {
    result = await response.json();
  } catch {
    throw new Error("Réponse invalide du service d'envoi.");
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Impossible d'envoyer le formulaire.");
  }
}
