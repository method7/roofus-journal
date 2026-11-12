import type { z } from "astro/zod";

export declare const STATUSES: readonly ["proposed", "accepted", "superseded"];

/** One entry's frontmatter, after the schema has parsed it. */
export interface JournalEntryData {
  title: string;
  date: Date;
  status?: (typeof STATUSES)[number];
  /** Four digits, for example "0007". */
  supersededBy?: string;
  tags: string[];
  summary: string;
  draft: boolean;
}

/**
 * Build the journal schema with the site's own Zod, for example
 * `schema: journalSchema(z)` with `z` from "astro:content".
 */
export declare function journalSchema(
  zod: typeof z,
): z.ZodType<JournalEntryData, any, any>;
