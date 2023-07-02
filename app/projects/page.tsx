/* eslint-disable react/no-unescaped-entities */
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image'
import Link from "next/link";

const Projects = () => {
	return (
		<div className="z-20 flex flex-col items-center justify-center gap-10 font-mono">
			<h1 className='mt-16 text-3xl'>My Projects</h1>
			<div className="mb-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

				<Card className="relative mx-5 flex w-96 flex-col md:mx-0">
					<CardHeader>
						<CardTitle className="flex justify-center text-primary">Post Rock</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="mb-20 flex flex-col gap-5">
							<Image alt="p" src={"/p1.png"} width={320} height={120} />
							Post Rock is a website utilizing Spotify web API to get every song in the Post-Rock genre, it allows users to search for any post-rock band they want, and view all of their albums and tracks. Users can play the preview of the songs, then they'd be redirected to Spotify to listen to the full song with a click of a button.
						</CardDescription>
					</CardContent>
					<CardFooter className="absolute bottom-0 flex w-full justify-between">
						<Link href="https://post-rock-10e9e.web.app/" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Project</Link>
						<Link href="https://github.com/MohamedElshazly/Post-Rock" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Code</Link>
					</CardFooter>
				</Card>

				<Card className="relative mx-5 flex w-96 flex-col md:mx-0">
					<CardHeader>
						<CardTitle className="flex justify-center text-primary">Kanban board</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="mb-20 flex flex-col gap-5">
							<Image alt="p" src={"/kanban.png"} width={320} height={120} />
							Kanban board is a website that allows users to add tasks to a kanban board, and move them between columns, they can also export the tasks into JSON, and import an already existing JSON into tasks. The website is built using React.js, and React dnd.
						</CardDescription>
					</CardContent>
					<CardFooter className="absolute bottom-0 flex w-full justify-between">
						<Link href="https://mohamedelshazly.github.io/Kanban-Board/" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Project</Link>
						<Link href="https://github.com/MohamedElshazly/Kanban-Board" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Code</Link>
					</CardFooter>
				</Card>

				<Card className="relative mx-5 flex w-96 flex-col md:mx-0">
					<CardHeader>
						<CardTitle className="flex justify-center text-primary">Javascript Calculator</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="mb-20 flex flex-col gap-5">
							<Image alt="p" src={"/calculator.png"} width={320} height={120} />
							A simple calculator built using Javascript. It allows users to do simple calculations.
						</CardDescription>
					</CardContent>
					<CardFooter className="absolute bottom-0 flex w-full justify-between">
						<Link href="https://mohamedelshazly.github.io/js-Calculator/" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Project</Link>
						<Link href="https://github.com/MohamedElshazly/js-Calculator" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Code</Link>
					</CardFooter>
				</Card>

				<Card className="relative mx-5 flex w-96 flex-col md:mx-0">
					<CardHeader>
						<CardTitle className="flex justify-center text-primary">Etch a Sketch</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="mb-20 flex flex-col gap-5">
							<Image alt="p" src={"/etch.png"} width={320} height={120} />
							A recreation of the game 'Etch A Sketch' on the web, where you have two modes, drawing and deleting. You can also resize and reset the canvas however you want.
							In this project, I aimed to demonstrate my DOM manipulation skills, and design.
						</CardDescription>
					</CardContent>
					<CardFooter className="absolute bottom-0 flex w-full justify-between">
						<Link href="https://mohamedelshazly.github.io/Etch-A-Sketch/" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Project</Link>
						<Link href="https://github.com/MohamedElshazly/Etch-A-Sketch" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Code</Link>
					</CardFooter>
				</Card>

				<Card className="relative mx-5 flex w-96 flex-col md:mx-0">
					<CardHeader>
						<CardTitle className="flex justify-center text-primary">Library</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="mb-20 flex flex-col gap-5">
							<Image alt="p" src={"/library.png"} width={320} height={120} />
							Library is a website that allows users to add books to a library. Users can also delete books from the library, mark them as read or not, etc.
						</CardDescription>
					</CardContent>
					<CardFooter className="absolute bottom-0 flex w-full justify-between">
						<Link href="https://mohamedelshazly.github.io/Library/" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Project</Link>
						<Link href="https://github.com/MohamedElshazly/Library" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Code</Link>
					</CardFooter>
				</Card>

				<Card className="relative mx-5 flex w-96 flex-col md:mx-0">
					<CardHeader>
						<CardTitle className="flex justify-center text-primary">Tic Tac Toe</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="mb-20 flex flex-col gap-5">
							<Image alt="p" src={"/tic.png"} width={320} height={120} />
							Simple Tic Tac Toe game built using Javascript.
						</CardDescription>
					</CardContent>
					<CardFooter className="absolute bottom-0 flex w-full justify-between">
						<Link href="https://mohamedelshazly.github.io/Tic-Tac-Toe/" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Project</Link>
						<Link href="https://github.com/MohamedElshazly/Tic-Tac-Toe" target="_blank" className={buttonVariants({ variant: "outline", size: "sm", className: "bg-primary dark:bg-secondary dark:hover:bg-secondary-foreground dark:hover:text-primary" })}>View Code</Link>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}

export default Projects;