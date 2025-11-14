import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const createSlug = (str) =>
  str.toLowerCase().trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove non-word characters
    .replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
