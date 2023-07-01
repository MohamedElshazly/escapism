import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans, fontMono } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from '@next/font/local'
import { CoolEffect } from "@/components/CoolEffect"
import { IsClientCtxProvider } from "@/lib/context/isClientCtx"


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
}

const futureFont = localFont({
	src: [
		{
			path: '../public/fonts/future.otf',
			weight: '400'
		},
	],
	variable: '--font-future'
})

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang="en" suppressHydrationWarning className={`${futureFont.variable} font-sans`}>
				<head />
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased",
						fontMono.variable
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<IsClientCtxProvider>
							<div className="relative flex min-h-screen flex-col">
								<CoolEffect>
									<SiteHeader />
									<div className="flex items-center justify-center">{children}</div>
								</CoolEffect>
							</div>
							<TailwindIndicator />
						</IsClientCtxProvider>
					</ThemeProvider>
				</body>
			</html>
		</>
	)
}
