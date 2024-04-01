import { Inter } from "next/font/google";

import "./globals.css";

import Footer from "@/components/Global/Footer/Footer";
import Nav from "@/components/Global/TopNavigation/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "USA Underwriter",
  description: "Daniyal Technologies Practical Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="max-w-7xl mx-auto min-h-screen px-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
