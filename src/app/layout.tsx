import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';
import { QueryProvider } from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: {
    default: "בית | מנופי רמון",
    template: "%s | מנופי רמון",
  },
  description: "מנופי רמון מספקת מנופים איכותיים ואמינים ללקוחות בערב הסעודית. מנופי תקרה ומנופים פנאומטיים עם שירות מקצועי ואמינות גבוהה.",
  keywords: ["מנופים סעודיים", "מנופי תקרה", "מנופים פנאומטיים", "מנופים לאנשים סעודיים"],
  openGraph: {
    title: "מנופי רמון",
    description: "מנופים איכותיים ואמינים לחיי השניך",
    type: "website",
    locale: "he_IL",
  }
};
// TODO: להטסיף נגישותיות
// check if need image optimizations
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <QueryProvider>
          <div
            className="min-h-dvh overflow-y-auto overflow-x-hidden flex flex-col bg-white"
            style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
            <Header />
            <div className="flex-1 flex flex-col mt-12 md:mt-10">
              {children}
            </div>
            <Footer />
            <Toaster
              className="sonner-toast"
              position="top-center"
              toastOptions={{
                style: {
                  background: '#fff',
                  color: '#111618',
                  border: '1px solid #dbe2e6',
                  borderRadius: 8,
                  fontFamily: 'Heebo, sans-serif',
                },
              }}
            />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
