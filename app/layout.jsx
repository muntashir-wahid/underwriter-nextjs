import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Shared/TopNavigation/Nav";
import Footer from "@/components/Shared/Footer/Footer";

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
        <main className="max-w-7xl mx-auto min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
