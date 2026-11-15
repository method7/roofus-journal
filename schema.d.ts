import type { z } from "astro/zod";

export declare const STATUSES: readonly ["proposed", "accepted", "superseded"];

/** One entry's frontmatter, after the schema has parsed it. */
export interface JournalEntryData {
  title: string;
  date: Date;
  status?: (typeof STATUSES)[number];
  /** The decision that replaced this one. Four digits, for example "0007". */
  supersededBy?: string;
  /**
   * The later decisions that changed part of this one, oldest first.
   * Four digits each, for example ["0020", "0021"].
   */
  updatedBy?: string[];
  tags: string[];
  summary: string;
  draft: boolean;
}

/** A decision number as four digits: 7 and "7" both become "0007". */
export declare function decisionNumber(value: string | number): string;

/**
 * Build the journal schema with the site's own Zod, for example
 * `schema: journalSchema(z)` with `z` from "astro:content".
 */
export declare function journalSchema(
  zod: typeof z,
): z.ZodType<JournalEntryData, any, any>;
