export const sanitizeDialCode = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  return `+${digits}`;
};
