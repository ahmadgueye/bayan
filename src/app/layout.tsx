import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const bluuNext = localFont({
  src: [
    {
      path: "../fonts/bluu-next/bluunext-bold-webfont.woff2",
      weight: "400 800",
      style: "normal",
    },
    {
      path: "../fonts/bluu-next/bluunext-bolditalic-webfont.woff2",
      weight: "400 800",
      style: "italic",
    },
  ],
  variable: "--font-bluu",
  display: "swap",
});

const bluuNextTitling = localFont({
  src: "../fonts/bluu-next/bluunext-titling.woff2",
  variable: "--font-bluu-titling",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Bayān | Apprendre avec clarté",
  description:
    "Un parcours structuré en lecture arabe, mémorisation du Qur'an et sciences islamiques, pensé pour les débutants et les convertis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${bluuNext.variable} ${bluuNextTitling.variable} ${manrope.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
