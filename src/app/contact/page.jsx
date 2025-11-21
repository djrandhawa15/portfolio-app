import ContactForm from "@/components/contact-form";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export const metadata = {
  title: "Contact Me | Dilraj Randhawa",
  description: "Get in touch with me for collaboration, opportunities, or just to say hello.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Send a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Contact Information
            </h2>

            <div className="bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Email</h3>
                  <a
                    href="mailto:your-email@example.com"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors"
                  >
                    your-email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Location</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Vancouver, BC, Canada
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50 mb-4">
                  Connect with me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
