/* eslint-disable react/no-unescaped-entities */
'use client'

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react";

export default function IndexPage() {
	const [interval1, _] = useState<any>(null);
	const [interval2, __] = useState<any>(null);


	const ref1 = useRef<HTMLDivElement>(null);
	const ref2 = useRef<HTMLHeadingElement>(null);
	const ref3 = useRef<HTMLHeadingElement>(null);
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	const move = (element: any, x: number, y: number) => {
		function frame() {
			element.animate({
				left: `${x}px`,
				top: `${y}px`,
			}, { duration: 5000, fill: 'forwards' })
		}
		frame();
	}

	const hackerEffect = (interval: any, element: any, e: any) => {
		console.log(e.target.dataset.value);
		let iterations = 0;
		clearInterval(interval);
		interval = setInterval(() => {
			element.innerText = element.innerText.split('').map((_: any, i: number) => i < iterations ? e?.target?.dataset?.value[i] : letters[Math.floor(Math.random() * letters.length)]).join('');
			if (iterations >= e.target.dataset.value?.length) {
				clearInterval(interval);
			}
			iterations += 1 / 3;
		}, 50);
	}
	useEffect(() => {
		const blob = ref1.current as HTMLDivElement;
		const h1 = ref2.current as HTMLHeadingElement;
		const h2 = ref3.current as HTMLHeadingElement;
		// const p = ref3.current as HTMLParagraphElement;
		document.addEventListener('mousemove', (e) => {
			const { clientX, clientY } = e;
			move(blob, clientX, clientY);
		}
		);
		h1.onmouseover = (e) => {
			hackerEffect(interval1, h1, e);
		};

		h2.onmouseover = (e) => {
			hackerEffect(interval2, h2, e);
		};

	}, [interval1, interval2]);

	return (
		<>
			<div ref={ref1} id="blob" className="absolute left-[50%] top-[50%] aspect-[1/1] h-[25vmax] translate-x-[-50%] translate-y-[-50%] animate-rotate rounded-[50%] bg-white bg-gradient-to-r from-[#7FFFD4] to-[#4916af]"></div>
			<div className="absolute z-10 h-[100%] w-[100%] overflow-hidden backdrop-blur-[9vmax]"></div>
			<div className="absolute left-[50%] top-[50%]  z-20 flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center py-0 font-future">
				<h1 data-value="HI, I'M SHAZLY" ref={ref2} className="mb-4 text-4xl">HI, I'M SHAZLY</h1>
				<h2 data-value="I'M A WEB DEVELOPER" ref={ref3}>I'M A WEB DEVELOPER</h2>
			</div>
				<div className="absolute left-[43%] top-[60%] z-20">
					<Link href="/about" className={buttonVariants({ variant: "outline", size: "lg", className: "bg-secondary font-future hover:border-primary" })}>About me!</Link>
				</div>
		</>
	)
}
