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
		<>
			<main>
			<div ref={ref1} id="blob" className=" absolute left-[50%] top-[50%] aspect-[1/1] h-[25vmax] translate-x-[-50%] translate-y-[-50%] animate-rotate rounded-[50%] bg-white bg-gradient-to-r from-[#7FFFD4] to-[#4916af]"></div>
			<div className="absolute z-10 h-[100%] w-[100%] overflow-hidden backdrop-blur-[9vmax]"></div>
				{children}
			</main>
		</>
	)
}