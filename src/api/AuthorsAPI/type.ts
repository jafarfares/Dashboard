import z from 'zod'
export const ItemSchema = z.object({
  author_name: z.string(),
  dec: z.string(),
})
export type Item = z.infer<typeof ItemSchema>