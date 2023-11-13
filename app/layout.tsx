import type { Metadata } from "next"
import "@/styles/globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
   title: "Car Rental",
   description: "A car rental website built with Next.js and Tailwind CSS.",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className="relative">
            <Toaster />
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   )
}
