import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth0.getSession();
  if (!session?.user) redirect("/api/auth/login");

  return (
    <section className="min-h-screen flex flex-col items-center gap-6 px-4 py-16">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="w-full max-w-2xl bg-card rounded-lg border p-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
          <p className="text-muted-foreground">
            Logged in as: <span className="font-medium text-foreground">{session.user.email}</span>
          </p>
        </div>
        <div className="border-t pt-4">
          <h3 className="text-lg font-medium mb-2">Admin Features</h3>
          <p className="text-sm text-muted-foreground">
            Future labs will let you edit the hero from here. For now, you can:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
            <li>Manage your projects (add, edit, delete)</li>
            <li>View your profile information</li>
            <li>Access protected admin areas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
