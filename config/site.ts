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
    },
  ],
  links: {
    twitter: "https://twitter.com/SillyFarts9000",
    github: "https://github.com/MohamedElshazly",
    linkedin: "https://www.linkedin.com/in/mohamed-elshazly-4b1429148",
    docs: "",
  },
}
