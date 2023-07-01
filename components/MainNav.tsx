'use client'

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { useIsClient } from "@/lib/context/isClientCtx"
import { useEffect } from "react"
import { buttonVariants } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"

interface MainNavProps {
	items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
	const isClient = useIsClient();
	useEffect(() => {
		if (isClient) {
			const menuButton = isClient && document.querySelector('.hamburger');
			const mobileNav = isClient && document.querySelector('#mobile-nav');
			const mobileNavLink = isClient && document.querySelectorAll('#mobile-nav-link');
			menuButton?.addEventListener('click', () => {
				menuButton.classList.toggle('is-active');
				mobileNav?.classList.toggle('is-mobile-nav-active');
			});
			mobileNavLink.forEach((link) => {
				link.addEventListener('click', () => {
					menuButton?.classList.remove('is-active');
					mobileNav?.classList.remove('is-mobile-nav-active');
				});
			});
		}
	})
	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="flex items-center space-x-2">
				<Icons.logo className="h-6 w-6" />
				<span className="font-bold ">
					{siteConfig.name}
				</span>
			</Link>
			{items?.length ? (
				<>
					<nav id="mobile-nav" className="fixed left-full top-0 z-50 flex min-h-full w-full flex-col items-center justify-center gap-10 bg-secondary md:hidden" style={{ transition: "0.4s" }}>
						{items?.map(
							(item, index) =>
								item.href && (
									<Link
										id="mobile-nav-link"
										key={index}
										href={item.href}
										className={cn(
											"light:text-primary flex items-center text-lg font-semibold hover:text-primary dark:text-primary-foreground sm:text-sm",
											item.disabled && "cursor-not-allowed opacity-80"
										)}
									>
										{item.title}
									</Link>
								)
						)}
						<div className="flex gap-10">
							<Link
								href={siteConfig.links.github}
								target="_blank"
								rel="noreferrer"
							>
								<div
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
										className: "hover:text-primary"
									})}
								>
									<Icons.gitHub className="h-5 w-5" />
									<span className="sr-only">GitHub</span>
								</div>
							</Link>
							<Link
								href={siteConfig.links.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<div
									className={buttonVariants({
										size: "sm",
										variant: "ghost",
										className: "hover:text-primary"
									})}
								>
									<Icons.twitter className="h-5 w-5 fill-current" />
									<span className="sr-only">Twitter</span>
								</div>
							</Link>
							<ThemeToggle />
						</div>
					</nav>
					<nav className="hidden gap-6 md:flex">
						{items?.map(
							(item, index) =>
								item.href && (
									<Link
										key={index}
										href={item.href}
										className={cn(
											"flex items-center text-lg font-semibold text-muted-foreground hover:text-primary sm:text-sm",
											item.disabled && "cursor-not-allowed opacity-80"
										)}
									>
										{item.title}
									</Link>
								)
						)}
					</nav>
				</>
			) : null}
		</div>
	)
}
