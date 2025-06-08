import { defineCollection, z } from 'astro:content';

// Documentation collection schema
const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    author: z.string().optional(),
    publishedDate: z.date().optional(),
    lastModified: z.date().optional(),
    featured: z.boolean().default(false),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  docs: docsCollection,
};
