"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/djrandhawa15",
    icon: Github,
    label: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dilrajr/",
    icon: Linkedin,
    label: "Connect with me on LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:dilrajran@gmail.com",
    icon: Mail,
    label: "Send me an email",
  },
];

export function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.name !== "Email" ? "_blank" : undefined}
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:bg-blue-400"
          >
            <Icon className="h-5 w-5" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
              {link.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
