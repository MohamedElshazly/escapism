/* eslint-disable react/no-unescaped-entities */
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';

const About = () => {
	return (
		<div className="z-30 mt-24 flex h-full flex-col items-center justify-center gap-8 md:w-2/3 md:flex-row">
			<Image src="/me.jpg" width={300} height={300} alt='pic of me' className="hidden rounded-3xl md:flex" />
			<Image src="/me2.jpeg" width={300} height={300} alt='pic of me' className="flex rounded-full md:hidden" />
			<div className="flex flex-col items-center justify-center gap-4">
				<p className='mx-10 text-center text-base font-bold md:text-lg'>
					I'm a <span className='text-primary'>Junior Developer</span> with a strong
					eye for innovative design and a
					keen understanding of new
					techniques, and skills. I'm a Fullstack web developer with
					experience in building websites
					and web applications. I specialize
					in Javascript and have experience
					with React.js, and the rest of the
					MERN stack. I also have some
					experience in other frameworks
					like Django and Flask.
				</p>
				<div className="mb-10 flex items-center justify-center gap-5">
					<Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg", className: "bg-secondary font-mono hover:border-primary" })}>My Projects!</Link>
					<Link href="/cv.pdf" download={"cv"} className={buttonVariants({ variant: "outline", size: "lg", className: "bg-secondary font-mono hover:border-primary" })}>CV</Link>
				</div>
			</div>
		</div>
	);
}

export default About;