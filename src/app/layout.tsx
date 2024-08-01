import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.scss"

const rubik = Rubik({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Robert Tolstov",
  description: "Hello, I'm Robert Tolstov and I'm builing minimalistic, modern and best-looking interfaces",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  )
}
