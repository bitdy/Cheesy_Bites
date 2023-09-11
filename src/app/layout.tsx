import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ورسا معدن کتاب و آموزش",
  description: "با ما  همراه  باشید با جدیدترین کتاب ها و آموزش روز",
};

export default function RootLayout({ children } : any) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <Navbar />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
