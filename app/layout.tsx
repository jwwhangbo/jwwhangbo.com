import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import Sidelink from "./ui/sidelink";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "jwwhangbo.github.io",
  description: "Jongwook's personal website",
};


export default function RootLayout({ children, } : Readonly <{ children: React.ReactNode; }>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>
        <Navbar />
          {children}
        <Sidelink />
        <Footer />
      </body>
    </html>
  );
}
