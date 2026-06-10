import type { Metadata } from "next";
import "./globals.css";

import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

export const metadata: Metadata = {
  title: "Rajkot Airport x Mukesh Arts",
  description: "Premium Airport Advertising Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="day">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}