import Link from "next/link";
import type { LegalBlock, LegalDocument, LegalSlug } from "@/data/legal-docs";
import { legalNavItems } from "@/data/legal-docs";

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
        }

        return part;
      })}
    </>
  );
}

function LegalBlockView({ block, index }: { block: LegalBlock; index: number }) {
  if (block.type === "paragraph") {
    return (
      <p>
        <InlineText text={block.text} />
      </p>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3>
        <InlineText text={block.text} />
      </h3>
    );
  }

  const List = block.ordered ? "ol" : "ul";

  return (
    <List>
      {block.items.map((item, itemIndex) => (
        <li key={`${index}-${itemIndex}`}>
          <InlineText text={item} />
        </li>
      ))}
    </List>
  );
}

function getIntroMeta(document: LegalDocument) {
  const introBlock = document.sections
    .find((section) => section.id === "intro")
    ?.blocks.find((block) => block.type === "paragraph");
  const introText = introBlock?.type === "paragraph" ? introBlock.text : undefined;

  const effectiveFromIntro = introText?.match(/Effective date:\*\*\s*([^*]+)/i)?.[1]?.trim();
  const versionFromIntro = introText?.match(/Version:\*\*\s*([^*]+)/i)?.[1]?.trim();

  return {
    effectiveDate: document.meta.effective_date ?? effectiveFromIntro,
    version: document.meta.version ?? versionFromIntro,
  };
}

export function LegalRenderer({ document }: { document: LegalDocument }) {
  const { effectiveDate, version } = getIntroMeta(document);
  const titledSections = document.sections.filter((section) => section.title);

  return (
    <>
      <section className="legal-hero">
        <div className="wrap">
          <Link href="/" className="back">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M12 5l-5 5 5 5M7 10h9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to home
          </Link>
          <h1>{document.title}</h1>
          <div className="legal-meta">
            {effectiveDate ? (
              <span>
                Effective <b>{effectiveDate}</b>
              </span>
            ) : null}
            {version ? (
              <span>
                Version <b>{version}</b>
              </span>
            ) : null}
            <span>
              Contact <b>support@kanbanify.org</b>
            </span>
          </div>
        </div>
      </section>

      <div className="wrap legal-doc-grid">
        <aside className="legal-doc-nav" aria-label="Legal navigation">
          <div className="legal-doc-switcher">
            <h2>Legal documents</h2>
            {legalNavItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}/`}
                className={item.slug === document.slug ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="legal-doc-toc">
            <h2>On this page</h2>
            {titledSections.slice(0, 16).map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </div>
        </aside>

        <article className="legal-doc">
          <div className="legal-card">
            {document.sections.map((section) => (
              <section key={section.id} id={section.id}>
                {section.title ? <h2>{section.title}</h2> : null}
                {section.blocks.length ? (
                  section.blocks.map((block, index) => (
                    <LegalBlockView key={`${section.id}-${index}`} block={block} index={index} />
                  ))
                ) : (
                  <p className="legal-empty-note">This heading is intentionally reserved in the agreement.</p>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

export function isLegalSlug(slug: string): slug is LegalSlug {
  return legalNavItems.some((item) => item.slug === slug);
}
