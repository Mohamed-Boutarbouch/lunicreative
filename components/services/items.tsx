export function ServiceItems({
  title = "Nos domaines d'intervention",
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <section aria-labelledby="items-heading">
      <h2
        id="items-heading"
        className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      <ul className="mt-6 grid border-t border-border sm:grid-cols-2 sm:gap-x-10">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-border py-4 text-base text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
