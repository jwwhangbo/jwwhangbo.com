import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "jwwhangbo.github.io",
  description: "Jongwook's personal website",
};


export default function RootLayout({ children, } : Readonly <{ children: React.ReactNode; }>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
