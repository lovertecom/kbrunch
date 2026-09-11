import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loverte × Lauren: K-Brunch · 4. oktoober 2026",
  description: "Rahulik pühapäevahommik brunch’i, näojooga ja Laureni K-beauty rutiiniga. 4. oktoobril kell 11–14 Blessa Stuudios.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et">
      <body className="antialiased">{children}</body>
    </html>
  );
}
