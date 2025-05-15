import { Geist, Geist_Mono } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/navbar"
import { getAllSoftwares } from "@/lib/render"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "HOTKEYS",
  description: "Learn hotkeys, throw the mouse 🚀",
}

export default function RootLayout({ children }) {
  const softwares = getAllSoftwares()

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar softwares={softwares} />
        <div className="p-2">{children}</div>
      </body>
    </html>
  )
}
