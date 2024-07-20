import { LocalStorageKey, ThemeArray, ThemeEnum } from "@/lib";
import { BackendProvider, ThemeProvider } from "@/providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Form Builder",
  description:
    "Create dynamic, interactive forms with ease using our drag-and-drop form builder. Elevate your data collection, streamline workflows, and gain valuable insights",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "favicon-dark",
        href: "/images/favicon-dark.png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "favicon-light",
        href: "/images/favicon-light.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={nunito.className}>
        <BackendProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme={ThemeEnum.SLATE}
            enableSystem
            themes={ThemeArray}
            disableTransitionOnChange
            storageKey={LocalStorageKey.THEME}
          >
            {children}
          </ThemeProvider>
        </BackendProvider>
      </body>
    </html>
  );
}
