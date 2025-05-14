import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HOTKEYS",
  description: "Learn hotkeys, throw the mouse 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="p-2">
          {children}
        </div>
      </body>
    </html>
  );
}
