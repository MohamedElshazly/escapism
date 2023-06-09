import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Titillium_Web as FontTit,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontTitRegular = FontTit({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tit",
})
