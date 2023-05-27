export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Escapism",
  description:
    "My personal website, where I write about my experiences and learnings.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
		{
			title: "About me",
			href: "/about",
		},
		{
			title: "Projects",
			href: "/projects",
		},
		{
			title: "Blog",
			href: "/blog",
		}
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/MohamedElshazly",
		docs: ""
  },
}
