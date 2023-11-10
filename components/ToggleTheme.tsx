"use client";

import * as React from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-500"
		>
			<RiSunFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<RiMoonClearFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
