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
			className={cn(poppins.className, "flex items-start gap-3 bg-[#FAFBFD] dark:bg-dark-black dark:text-white")}
		>
			<div className="flex-[1]">
				<Sidebar />
			</div>

			<div className="flex-[3.5] pr-3 py-3">
				<Navbar />
				{children}
			</div>
		</div>
	);
}
