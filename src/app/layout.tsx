import { ConvexClientProvider, ThemeProvider } from "@/components/providers";
import { LocalStorageKey, Route } from "@/lib/enum";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Form Builder",
  description:
    "Say goodbye to static forms!  Our dynamic form builder empowers you to create interactive forms that change based on user input.  Increase engagement, improve data accuracy, and streamline your workflow with conditional logic, a variety of question types, and a user-friendly interface.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "logo-light",
        href: Route.LOGO_LIGHT,
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "logo-dark",
        href: Route.LOGO_DARK,
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute={"class"}
            defaultTheme={"system"}
            enableSystem
            disableTransitionOnChange
            storageKey={LocalStorageKey.THEME}
          >
            <Toaster position={"bottom-center"} richColors={true} />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
