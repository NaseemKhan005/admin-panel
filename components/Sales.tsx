"use client";

import { BiExport, BiSolidShoppingBag } from "react-icons/bi";
import { MdAnalytics } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface CardProps {
	icon: any;
	iconBg: String;
	background: String;
	totalSale: String;
	saleName: String;
	percentage: String;
}

const Card = ({
	icon: Icon,
	iconBg,
	background,
	totalSale,
	saleName,
	percentage,
}: CardProps) => {
	return (
		<div
			className={cn(
				"dark:bg-[#1c2841] py-5 px-4 w-full flex flex-col gap-4 rounded-xl",
				background
			)}
		>
			<span className={cn("rounded-full text-xl p-2 w-fit text-white", iconBg)}>
				<Icon />
			</span>
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-semibold text-blue-900 dark:text-indigo-500">
					{totalSale}
				</h2>
				<p className="text-sm capitalize text-zinc-500 dark:text-white">
					{saleName}
				</p>
				<p className="text-xs text-blue-500 font-semibold">
					{percentage}% from yesterday
				</p>
			</div>
		</div>
	);
};

const Sales = () => {
	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-soft-black dark:text-white font-semibold">
						Today&apos;s Sales
					</h2>
					<p className="text-muted-foreground/60 dark:text-white/50 text-sm">
						Sales Summery
					</p>
				</div>
				<Button
					variant="outline"
					className="flex items-center gap-1 dark:bg-transparent dark:hover:bg-muted-foreground/5 px-3 dark:text-white text-neutral-600 dark:border-white/20"
				>
					<BiExport className="text-lg mb-[.1rem]" />
					<span>Export</span>
				</Button>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
				<Card
					icon={MdAnalytics}
					iconBg="bg-orange-500"
					background="bg-orange-500/10"
					totalSale="$5k"
					saleName="Total Sales"
					percentage="+5"
				/>
				<Card
					icon={BiSolidShoppingBag}
					iconBg="bg-green-500"
					background="bg-green-500/10"
					totalSale="432"
					saleName="product sold"
					percentage="+1.2"
				/>
				<Card
					icon={FaUserPlus}
					iconBg="bg-purple-500"
					background="bg-purple-500/10"
					totalSale="54"
					saleName="new customers"
					percentage="3.8"
				/>
			</div>
		</div>
	);
};

export default Sales;
