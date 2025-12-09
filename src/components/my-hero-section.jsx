import { getHero } from "@/lib/db";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HERO_PLACEHOLDER_AVATAR = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";
const defaultHeroContent = {
  avatar: HERO_PLACEHOLDER_AVATAR,
  fullName: "Your Name",
  shortDescription: "Your short bio goes here",
  longDescription: "Your longer description goes here. Tell us about yourself!",
};

export default async function MyHeroSection() {
  let hero = null;

  try {
    hero = await getHero();
  } catch (error) {
    console.error("Error fetching hero:", error);
  }

  // Fallback to defaults if no hero data
  const heroData = hero || defaultHeroContent;

  // Use placeholder avatar if current avatar is empty or the transparent placeholder
  const displayAvatar =
    heroData.avatar && heroData.avatar !== HERO_PLACEHOLDER_AVATAR
      ? heroData.avatar
      : HERO_PLACEHOLDER_AVATAR;

  const displayFullName = heroData.fullName || defaultHeroContent.fullName;
  const displayShortDesc = heroData.shortDescription || defaultHeroContent.shortDescription;
  const displayLongDesc = heroData.longDescription || defaultHeroContent.longDescription;

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            {displayAvatar && displayAvatar !== HERO_PLACEHOLDER_AVATAR ? (
              <img
                src={displayAvatar}
                alt={displayFullName}
                className="h-32 w-32 rounded-full object-cover border-4 border-zinc-200 dark:border-zinc-800 shadow-lg"
              />
            ) : (
              <div className="h-32 w-32 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-zinc-300 dark:border-zinc-700 shadow-lg flex items-center justify-center">
                <span className="text-4xl text-zinc-400 dark:text-zinc-600">👤</span>
              </div>
            )}
          </div>

          {/* Full Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            {displayFullName}
          </h1>

          {/* Short Description */}
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
            {displayShortDesc}
          </p>

          {/* Long Description */}
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-3xl mx-auto">
            {displayLongDesc}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                <Mail className="w-4 h-4" />
                Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/projects">
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
