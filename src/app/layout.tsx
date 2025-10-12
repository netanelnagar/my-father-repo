import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "מנופי רמון - מנופים איכותיים לחיי השניך",
  description: "מנופי רמון מספקת מנופים איכותיים ואמינים ללקוחות בערב הסעודית. מנופי תקרה ומנופים פנאומטיים עם שירות מקצועי ואמינות גבוהה.",
  keywords: "מנופים, מנופי תקרה, מנופים פנאומטיים, ערב סעודית, איכות, אמינות",
  openGraph: {
    title: "מנופי רמון",
    description: "מנופים איכותיים ואמינים לחיי השניך",
    type: "website",
    locale: "he_IL",
  }
};

// TODO: add div and put here a header and footer
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased font-heebo">
        {children}
      </body>
    </html>
  );
}
