import cookies from "./legal/kanbanify-cookies.json";
import dpa from "./legal/kanbanify-dpa.json";
import privacy from "./legal/kanbanify-privacy.json";
import terms from "./legal/kanbanify-terms.json";

export type LegalSlug = "cookies" | "dpa" | "privacy" | "terms";

export type LegalBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "list";
      ordered?: boolean;
      items: string[];
    };

export type LegalSection = {
  id: string;
  title: string | null;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: LegalSlug;
  title: string;
  meta: {
    effective_date?: string;
    version?: string;
  };
  sections: LegalSection[];
};

export const legalDocuments = {
  cookies: cookies as LegalDocument,
  dpa: dpa as LegalDocument,
  privacy: privacy as LegalDocument,
  terms: terms as LegalDocument,
} satisfies Record<LegalSlug, LegalDocument>;

export const legalNavItems: Array<{ slug: LegalSlug; label: string }> = [
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "terms", label: "Terms" },
  { slug: "cookies", label: "Cookie Policy" },
  { slug: "dpa", label: "DPA" },
];

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments[slug as LegalSlug];
}
