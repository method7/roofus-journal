// The frontmatter every published Roofus journal entry carries, as described
// in journal/README.md in the Roofus repository.
//
// The function takes the site's own `z` (from "astro:content" or "astro/zod")
// rather than importing Zod, so this package has no Zod of its own and can
// never clash with the version the site uses.

export const STATUSES = ["proposed", "accepted", "superseded"];

// YAML reads an unquoted 0007 as the number 7, so a decision number may
// arrive as either. This hands the site the four-digit form the file names
// use, for example "0007".
export function decisionNumber(value) {
  return String(value).padStart(4, "0");
}

/**
 * @param {typeof import("astro/zod").z} z
 */
export function journalSchema(z) {
  const number = z
    .union([z.string(), z.number().int().nonnegative()])
    .transform(decisionNumber);
  return z.object({
    title: z.string(),
    // YAML reads an unquoted 2026-11-12 as a date already.
    date: z.date(),
    // Decisions only.
    status: z.enum(STATUSES).optional(),
    // Decisions only: the later decision that replaced all of this one.
    supersededBy: number.optional(),
    // Decisions only: the later decisions that changed part of this one,
    // oldest first. The rest of it still stands, so its status stays
    // "accepted".
    updatedBy: z.array(number).optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean(),
  });
}
