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
			className={cn(poppins.className, "flex items-start gap-5 bg-[#FAFBFD]")}
		>
			<div className="flex-[1]">
				<Sidebar />
			</div>

			<div className="flex-[3.2]">
				<Navbar />
				{children}
			</div>
		</div>
	);
}
