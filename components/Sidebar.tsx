"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniUser } from "react-icons/hi2";

import { menuItems } from "@/constants/Sidebar";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="bg-white dark:bg-soft-black dark:text-white w-full h-screen overflow-y-scroll py-6 px-3">
			<div className="flex items-center gap-2">
				<div className="bg-black/60 dark:bg-white dark:text-black w-fit rounded-full p-2 text-white text-3xl">
					<HiMiniUser />
				</div>
				<div className="capitalize ">
					<p className="text-[.8rem] font-semibold dark:text-white">
						naseem khan
					</p>
					<p className="text-[.7rem] text-black/70 dark:text-neutral-300">
						administrator
					</p>
				</div>
			</div>

			<div>
				<ul className="flex flex-col gap-8 capitalize text-sm mt-5">
					{menuItems.map((item) => (
						<li key={item.title}>
							<span className="text-black/50 dark:text-neutral-300 font-semibold">
								{item.title}
							</span>
							<div className="flex flex-col gap-1">
								{item.links.map((link) => (
									<Link
										href={link.path}
										key={link.path}
										className={cn(
											"flex items-center text-[.9rem] gap-2 px-4 py-3.5 rounded-lg first:mt-2",
											pathname === link.path
												? "bg-indigo-600 hover:bg-indigo-700 text-white"
												: "hover:bg-indigo-600 text-black hover:text-white dark:text-white"
										)}
									>
										<span className="text-xl">
											{pathname === link.path ? (
												<link.activeIcon />
											) : (
												<link.icon />
											)}
										</span>
										<span>{link.name}</span>
									</Link>
								))}
							</div>
						</li>
					))}
					<div className="flex items-center justify-between">
						<span>Light</span>
						<Switch />
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
