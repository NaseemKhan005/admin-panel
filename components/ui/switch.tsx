"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
	const { theme, setTheme } = useTheme();

	return (
		<SwitchPrimitives.Root
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className={cn(
				"peer inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
				className,
				theme === "light" && "data-[state=unchecked]"
					? "bg-input"
					: "bg-green-600"
			)}
			{...props}
			ref={ref}
		>
			<SwitchPrimitives.Thumb
				className={cn(
					"pointer-events-none block h-[16px] w-[16px] rounded-full bg-background shadow-lg ring-0 transition-transform dark:bg-white dark:text-white",
					theme === "light" && "data-[state=unchecked]"
						? "translate-x-0"
						: "translate-x-5"
				)}
			/>
		</SwitchPrimitives.Root>
	);
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
