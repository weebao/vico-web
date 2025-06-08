import { defineCollection, z } from 'astro:content';

// Documentation collection schema
const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['getting-started', 'guides', 'api', 'tutorials', 'research']),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    publishedDate: z.date().optional(),
    lastModified: z.date().optional(),
    featured: z.boolean().default(false),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    draft: z.boolean().default(false),
  }),
});

// Blog/Research Articles collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishedDate: z.date(),
    lastModified: z.date().optional(),
    tags: z.array(z.string()).optional(),
    category: z.enum(['research', 'technical', 'announcement', 'tutorial']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

// FAQ collection schema
const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    category: z.enum(['general', 'technical', 'installation', 'troubleshooting']),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    lastModified: z.date().optional(),
  }),
});

// API Reference collection schema
const apiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['agents', 'environment', 'simulation', 'utilities']),
    version: z.string().optional(),
    deprecated: z.boolean().default(false),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
    lastModified: z.date().optional(),
  }),
});

export const collections = {
  docs: docsCollection,
  blog: blogCollection,
  faq: faqCollection,
  api: apiCollection,
};
