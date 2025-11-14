import Link from "next/link";

export default function MyNavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Dilraj Randhawa
          </Link>
          <div className="flex gap-6">
            <Link href="/#about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Projects
            </Link>
            <Link href="/#skills" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Skills
            </Link>
            <Link href="/#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
