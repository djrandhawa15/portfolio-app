import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

export const projectSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  image: z.string().url({ message: "Please enter a valid image URL" }),
  link: z.string().url({ message: "Please enter a valid project URL" }),
  keywords: z.array(z.string()).default([]),
  logo: z.string().optional().default(""),
  photos: z.array(z.string()).optional().default([]),
  videos: z.array(z.object({ url: z.string(), description: z.string() })).optional().default([]),
  links: z.array(z.object({ label: z.string(), url: z.string() })).optional().default([]),
});

export const projectUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  image: z.string().url().optional(),
  link: z.string().url().optional(),
  keywords: z.array(z.string()).optional(),
  logo: z.string().optional(),
  photos: z.array(z.string()).optional(),
  videos: z.array(z.object({ url: z.string(), description: z.string() })).optional(),
  links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
});
