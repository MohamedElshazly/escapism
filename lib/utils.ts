import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const move = (element: any, x: number, y: number) => {
	function frame() {
		element.animate({
			left: `${x}px`,
			top: `${y}px`,
		}, { duration: 5000, fill: 'forwards' })
	}
	frame();
}
