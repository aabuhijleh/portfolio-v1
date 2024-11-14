import type { Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abed Abu-Hijleh",
  description: "Abed Abu-Hijleh's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
