import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abed Abu-Hijleh",
  description: "Abed Abu-Hijleh's personal website",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>{children}</body>
      </html>
    </>
  );
}
