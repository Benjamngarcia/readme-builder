import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/ui/Navbar';
import { Footer } from "../components/ui/Footer";
import "../styles/globals.css";
import "../styles/markdown.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Readme Builder",
  description: "The best tool to create your README.md files for your projects and profiles.",
  keywords: ["readme", "builder", "markdown", "github", "profile"],
  authors: [{ url: "https://portfolio-benjamn.vercel.app/", name: "Benjamín García"}],
  openGraph: {
    title: "Readme Builder",
    description: "The best tool to create your README.md files for your projects and profiles.",
    images: "https://firebasestorage.googleapis.com/v0/b/portafolio-689ca.appspot.com/o/Captura%20de%20pantalla%202025-02-25%20122227.png?alt=media&token=94140557-1e05-484c-8222-c307cae98f2e",
    // url: "https://example.com/demo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
