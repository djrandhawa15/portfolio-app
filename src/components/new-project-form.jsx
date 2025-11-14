"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const newProjectSchema = z.object({
  title: z.string().min(2, { message: "Your title is too short" }).max(200),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }).max(1000),
  img: z.string().url({ message: "Please enter a valid URL" }),
  link: z.string().url({ message: "Please enter a valid URL" }),
  keywords: z.array(z.string()).min(1, { message: "Add at least one keyword" }),
});

export default function NewProjectForm() {
  const [draftKeyword, setDraftKeyword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(newProjectSchema),
    defaultValues: {
      title: "",
      description: "",
      img: "",
      link: "",
      keywords: [],
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("img", values.img);
      formData.append("link", values.link);
      formData.append("keywords", JSON.stringify(values.keywords));

      const response = await fetch("/api/projects/new", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.ok) {
        alert("Project created successfully!");
        form.reset();
        router.push("/projects");
      } else {
        alert("Error creating project: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          {/* Title Field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="My Awesome Project" {...field} />
                </FormControl>
                <FormDescription>
                  This is the title of your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="A brief description of your project" {...field} />
                </FormControl>
                <FormDescription>
                  This is a brief description of your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image URL Field */}
          <FormField
            control={form.control}
            name="img"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/image.png" {...field} />
                </FormControl>
                <FormDescription>
                  This is the image URL of your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Link Field */}
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Link</FormLabel>
                <FormControl>
                  <Input placeholder="https://your-project-link.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is the link to your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Keywords Field */}
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => {
              const currentKeywords = field.value ?? [];

              const handleAddKeyword = () => {
                const value = draftKeyword.trim();
                if (!value || currentKeywords.includes(value)) return;

                const updated = [...currentKeywords, value];
                field.onChange(updated);
                setDraftKeyword("");
              };

              const handleRemoveKeyword = (keyword) => {
                const updated = currentKeywords.filter((k) => k !== keyword);
                field.onChange(updated);
              };

              const handleKeyDown = (event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleAddKeyword();
                }
              };

              return (
                <FormItem>
                  <FormLabel>Keywords</FormLabel>
                  <div className="space-y-3">
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          value={draftKeyword}
                          onChange={(e) => setDraftKeyword(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Add a keyword and press Enter"
                        />
                        <Button type="button" onClick={handleAddKeyword} variant="secondary">
                          Add
                        </Button>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Tag your project so it is easier to filter later.
                    </FormDescription>
                    {currentKeywords.length > 0 && (
                      <div className="flex flex-wrap gap-2 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800">
                        {currentKeywords.map((keyword) => (
                          <Badge
                            key={keyword}
                            variant="outline"
                            className="flex items-center gap-1 bg-zinc-600 text-zinc-200 hover:bg-zinc-700"
                          >
                            {keyword}
                            <button
                              type="button"
                              className="ml-1 text-xs hover:text-white"
                              onClick={() => handleRemoveKeyword(keyword)}
                              aria-label={`Remove ${keyword}`}
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1 w-full">
              {isSubmitting ? "Creating..." : "Create Project"}
            </Button>
            <Button type="button" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/projects">Cancel</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
