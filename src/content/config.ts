import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    creationDate: z.coerce.date(),
    order: z.number(),
    heroImage: z.string().optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
    'projects': projectCollection,
}