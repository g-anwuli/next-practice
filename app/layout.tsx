import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://next-practicee.netlify.app/'),
  title: "Home Page",
  description: "This is the home page Practice",
  openGraph: {
    title: "home Page",
    description: `This is the home page Practice`,
    images: [`https://robohash.org/HomePage`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <nav className="w-full h-[60px] border-b flex justify-end items-center gap-8">
            <Link href={"/api"}>404</Link>
            <Link href={"/"}>home</Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
