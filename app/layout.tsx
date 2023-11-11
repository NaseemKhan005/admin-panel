import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Admin Dashboard | Naseem Khan",
	description: "A Full Stack Admin Dashboard Panel",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					poppins.className,
					"bg-[#FAFBFD] dark:bg-dark-black dark:text-white"
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
