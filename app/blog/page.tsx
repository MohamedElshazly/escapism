/* eslint-disable react/no-unescaped-entities */
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';


const Blog = () => {
	return (
		<div className="z-30 flex h-screen flex-col items-center justify-center gap-5 ">
			<h1>Blog is coming soon...</h1>
			<Link href="/" className={buttonVariants({ variant: "outline", size: "lg", className: "bg-secondary  hover:border-primary" })}>Home</Link>
		</div>
	);
}

export default Blog;