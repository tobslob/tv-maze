import { z } from "zod";

const ImageSchema = z
  .object({
    medium: z.string().nullable(),
    original: z.string().nullable(),
  })
  .nullable();

const PersonSchema = z.object({
  person: z.object({
    id: z.number(),
    name: z.string(),
    image: ImageSchema,
  }),
  character: z.object({
    name: z.string(),
  }),
});

export const RatingSchema = z.object({
  average: z.number(),
});

export const ShowSchema = z.object({
  id: z.number(),
  name: z.string(),
  summary: z.string(),
  rating: RatingSchema,
  image: ImageSchema,
  genres: z.array(z.string()),
  status: z.string(),
  schedule: z.object({
    time: z.string(),
    days: z.array(z.string()),
  }),
  runtime: z.number().nullable(),
  officialSite: z.string().nullable(),
  network: z
    .object({
      name: z.string(),
    })
    .nullable(),
  _embedded: z
    .object({
      cast: z.array(PersonSchema),
    })
    .optional(),
});

export const EpisodeSchema = z.object({
  id: z.number(),
  number: z.number().nullable(),
  show: ShowSchema,
});

export type Show = z.infer<typeof ShowSchema>;
export type Person = z.infer<typeof PersonSchema>;
export type Episode = z.infer<typeof EpisodeSchema>;
export type Rating = z.infer<typeof RatingSchema>;
