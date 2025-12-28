import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string().optional(),
    location: z.string(),
    type: z.enum(['meetup', 'conference', 'webinar', "workshop"]),
    speaker: z.string().optional(),
    topic: z.string(),
    description: z.string(),
    registrationUrl: z.string().url().optional(),
    cncfEventUrl: z.string().url().optional(), // Link to CNCF Community event page
    banner: z.string().optional(), // Path to banner image in /public/events/
    image: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().url().optional(),
    order: z.number().default(999),
  }),
});

const sponsorsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tier: z.enum(['platinum', 'gold', 'silver', 'bronze', 'community']),
    logo: z.string(),
    website: z.string().url(),
    description: z.string().optional(),
    order: z.number().default(999),
  }),
});

const communityCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    link: z.string().url(),
    order: z.number().default(999),
  }),
});

export const collections = {
  events: eventsCollection,
  team: teamCollection,
  sponsors: sponsorsCollection,
  community: communityCollection,
};
