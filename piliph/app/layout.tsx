import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PiliPH",
  description: "A platform for comparing and choosing the best politicians.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-900">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
