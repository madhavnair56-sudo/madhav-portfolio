import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    year: z.number(),
    period: z.string().optional(),
    role: z.string(),
    team: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    published: z.boolean().default(false),
    order: z.number().default(999),
    accent: z.string().default('#DCD8CE'),
    confidentiality: z.string().optional(),
    decisions: z.array(z.object({
      label: z.string(),
      before: z.string().optional(),
      after: z.string().optional(),
      rationale: z.string()
    })).default([]),
    outcomes: z.array(z.string()).default([])
  })
});

export const collections = { work };
