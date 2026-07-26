import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["admin", "editor", "viewer"]).optional(),
})

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  role: z.enum(["admin", "editor", "viewer"]).optional(),
  isActive: z.boolean().optional(),
})

export const createPortfolioItemSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),
  description: z.string().optional(),
  content: z.string().optional(),
  category: z.string().optional(),
  thumbnail: z.string().url().optional(),
  images: z.array(z.object({ url: z.string().url(), caption: z.string().optional() })).optional(),
  links: z.record(z.string().url()).optional(),
  tags: z.array(z.string()).optional(),
})

export const createBlogPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),
  excerpt: z.string().optional(),
  content: z.string().min(10, "Content must be at least 10 characters"),
  featuredImage: z.string().url().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export const createPageSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),
  description: z.string().optional(),
  content: z.string().optional(),
  featuredImage: z.string().url().optional(),
})

export const createSeoMetadataSchema = z.object({
  pageType: z.string(),
  entityId: z.string(),
  title: z.string().max(160).optional(),
  description: z.string().max(160).optional(),
  keywords: z.string().optional(),
  ogImage: z.string().url().optional(),
  ogTitle: z.string().max(160).optional(),
  ogDescription: z.string().max(160).optional(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>
export type CreatePortfolioItemInput = z.infer<typeof createPortfolioItemSchema>
export type CreateBlogPostInput = z.infer<typeof createBlogPostSchema>
export type CreatePageInput = z.infer<typeof createPageSchema>
export type CreateSeoMetadataInput = z.infer<typeof createSeoMetadataSchema>
