import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super Mario — NewEra Edition",
  description: "A Super Mario-style platformer built with Next.js",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black overflow-hidden touch-none select-none">
        {children}
      </body>
    </html>
  );
}
