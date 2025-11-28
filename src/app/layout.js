import { Geist, Geist_Mono } from "next/font/google";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import MyNavBar from "@/components/my-nav";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dilraj Randhawa Portfilio",
  description: "Portfilio website of Dilraj Randhawa, a software developer that is learning at BCIT for full stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Auth0Provider>
          <MyNavBar />
          {children}
          <Toaster richColors position="top-right" />
        </Auth0Provider>
      </body>
    </html>
  );
}
