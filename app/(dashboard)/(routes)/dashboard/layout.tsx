import { Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className={cn(
				poppins.className,
				"bg-[#FAFBFD] dark:bg-dark-black dark:text-white"
			)}
		>
			<div className="">
				<Sidebar />
			</div>

			<div className="p-3 ml-[17rem] min-h-screen h-full">
				<Navbar />
				{children}
			</div>
		</div>
	);
}
