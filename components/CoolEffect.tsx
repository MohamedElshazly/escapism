'use client'
import { move } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface LayoutProps {
	children: React.ReactNode
}


export function CoolEffect({ children }: LayoutProps) {
	const ref1 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const blob = ref1.current as HTMLDivElement;

		document.addEventListener('mousemove', (e) => {
			const { clientX, clientY } = e;
			move(blob, clientX, clientY);
		}
		);

	}, []);

	return (
		<main className="">
			<div ref={ref1} id="blob" className="absolute left-[50%] top-[50%] hidden aspect-[1/1] h-[25vmax] translate-x-[-50%] translate-y-[-50%] animate-rotate rounded-[50%] bg-white bg-gradient-to-r from-[#7FFFD4] to-[#4916af] md:flex"></div>
			<div className="absolute z-10 hidden h-full w-full overflow-hidden backdrop-blur-[9vmax] md:flex"></div>
			{children}
		</main>
	)
}