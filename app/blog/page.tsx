/* eslint-disable react/no-unescaped-entities */
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';


const About = () => {
	return (
		<div className="z-30 flex h-screen flex-col items-center justify-center gap-5 font-mono">
			<h1>Blog is coming soon...</h1>
			<Link href="/" className={buttonVariants({ variant: "outline", size: "lg", className: "bg-secondary font-mono hover:border-primary" })}>Home</Link>
		</div>
	);
}

export default About;