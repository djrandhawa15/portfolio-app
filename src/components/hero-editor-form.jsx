"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Upload, User } from "lucide-react";

const heroFormSchema = z.object({
  avatar: z.string().trim().min(1, "Avatar is required"),
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").max(200),
  shortDescription: z
    .string()
    .trim()
    .min(2, "Short description must be at least 2 characters")
    .max(120, "Short description must be at most 120 characters"),
  longDescription: z
    .string()
    .trim()
    .min(10, "Long description must be at least 10 characters")
    .max(5000, "Long description must be at most 5000 characters"),
});

export default function HeroEditorForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const form = useForm({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      avatar: "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
      fullName: "",
      shortDescription: "",
      longDescription: "",
    },
  });

  // Fetch current hero data on mount
  useEffect(() => {
    async function fetchHero() {
      try {
        const response = await fetch("/api/hero");
        if (!response.ok) throw new Error("Failed to fetch hero data");
        const { data } = await response.json();

        if (data) {
          form.reset({
            avatar: data.avatar || "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
            fullName: data.fullName || "",
            shortDescription: data.shortDescription || "",
            longDescription: data.longDescription || "",
          });
          setPreviewUrl(data.avatar || "");
        }
      } catch (error) {
        console.error("Error fetching hero:", error);
        toast.error("Failed to load hero data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchHero();
  }, [form]);

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (1MB limit)
    if (file.size > 1024 * 1024) {
      toast.error("Avatar must be smaller than 1MB");
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast.error("Avatar must be an image file");
      return;
    }

    setAvatarFile(file);

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (values) => {
    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append("avatar", values.avatar);
      formData.append("fullName", values.fullName);
      formData.append("shortDescription", values.shortDescription);
      formData.append("longDescription", values.longDescription);

      if (avatarFile) {
        formData.append("avatarFile", avatarFile);
      }

      const response = await fetch("/api/hero", {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update hero");
      }

      const { data } = await response.json();

      form.reset({
        avatar: data.avatar,
        fullName: data.fullName,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
      });

      setPreviewUrl(data.avatar);
      setAvatarFile(null);
      toast.success("Hero section updated successfully!");
    } catch (error) {
      console.error("Error updating hero:", error);
      toast.error(error.message || "Failed to update hero section");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Edit Hero Section
        </CardTitle>
        <CardDescription>Update your portfolio hero section content and avatar</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Avatar Upload */}
          <div className="space-y-2">
            <Label htmlFor="avatarFile">Avatar Image</Label>
            <div className="flex items-start gap-4">
              {previewUrl && (
                <div className="flex-shrink-0">
                  <img
                    src={previewUrl}
                    alt="Avatar preview"
                    className="h-24 w-24 rounded-full object-cover border-2 border-border"
                  />
                </div>
              )}
              <div className="flex-1 space-y-2">
                <Input
                  id="avatarFile"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="cursor-pointer"
                />
                <p className="text-xs text-muted-foreground">
                  Upload an image (max 1MB). Supported formats: JPG, PNG, GIF, WebP
                </p>
              </div>
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Your full name"
              {...form.register("fullName")}
            />
            {form.formState.errors.fullName && (
              <p className="text-sm text-destructive">
                {form.formState.errors.fullName.message}
              </p>
            )}
          </div>

          {/* Short Description */}
          <div className="space-y-2">
            <Label htmlFor="shortDescription">
              Short Description ({form.watch("shortDescription")?.length || 0}/120)
            </Label>
            <Input
              id="shortDescription"
              placeholder="A brief tagline or role"
              maxLength={120}
              {...form.register("shortDescription")}
            />
            {form.formState.errors.shortDescription && (
              <p className="text-sm text-destructive">
                {form.formState.errors.shortDescription.message}
              </p>
            )}
          </div>

          {/* Long Description */}
          <div className="space-y-2">
            <Label htmlFor="longDescription">
              Long Description ({form.watch("longDescription")?.length || 0}/5000)
            </Label>
            <Textarea
              id="longDescription"
              placeholder="Tell visitors about yourself, your experience, and what you do..."
              rows={6}
              maxLength={5000}
              {...form.register("longDescription")}
            />
            {form.formState.errors.longDescription && (
              <p className="text-sm text-destructive">
                {form.formState.errors.longDescription.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={isSaving}
            >
              Reset
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
