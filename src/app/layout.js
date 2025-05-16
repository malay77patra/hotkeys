import { Geist, Geist_Mono, Gabarito } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/navbar"
import { getAllSoftwares } from "@/lib/render"

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
})

export const metadata = {
  title: "HOTKEYS",
  description: "Learn hotkeys, kill the mouse 🚀",
}

export default function RootLayout({ children }) {
  const softwares = getAllSoftwares()

  return (
    <html lang="en">
      <body className={`${gabarito.variable} ${gabarito.className} antialiased`}>
        <Navbar softwares={softwares} />
        <div className="p-2">{children}</div>
      </body>
    </html>
  )
}
