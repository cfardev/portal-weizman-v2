import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { Locale, defaultLocale } from "@/lib/i18n";
import { QueryProvider } from "@/components/providers/query-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weizman Portal",
  description: "Weizman Portal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value || defaultLocale) as Locale;

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} antialiased bg-slate-100`}>
        <QueryProvider>
          <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
