import Link from "next/link";
import { IconBrandFacebook, IconMail, IconPhone } from "@tabler/icons-react";
import { contactLinks } from "@/data/footer";

export function FooterContactLinks() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Contact
      </p>

      <ul className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-2.5">
        <li>
          <Link
            href={contactLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="L’unicreative sur Facebook"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <IconBrandFacebook className="size-4" />
            <span>Facebook</span>
          </Link>
        </li>

        <li>
          <Link
            href={contactLinks[1].href}
            aria-label={`Appeler ${contactLinks[1].label}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <IconPhone className="size-4" />
            <span>{contactLinks[1].label}</span>
          </Link>
        </li>

        <li>
          <Link
            href={contactLinks[2].href}
            aria-label={`Envoyer un email à ${contactLinks[2].label}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <IconMail className="size-4" />
            <span>{contactLinks[2].label}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
