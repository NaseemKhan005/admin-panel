"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

import { menuItems } from "@/constants/Sidebar";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import Avatar from "./common/Avatar";

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="fixed top-0 left-0 max-w-[17rem] w-full bg-white dark:bg-soft-black dark:text-white h-screen overflow-y-scroll py-7 px-3">
			<div className="flex items-center gap-2">
				<Avatar />
				<div className="capitalize ">
					<p className="font-semibold dark:text-white">
						naseem khan
					</p>
					<p className="text-[.8rem] -mt-1 text-black/70 dark:text-neutral-300">
						administrator
					</p>
				</div>
			</div>

			<div>
				<ul className="flex flex-col gap-8 capitalize text-sm mt-8">
					{menuItems.map((item) => (
						<li key={item.title}>
							<span className="text-black/50 dark:text-neutral-300 font-semibold text-[.8rem] 2xl:text-sm">
								{item.title}
							</span>
							<div className="flex flex-col gap-0.5">
								{item.links.map((link) => (
									<Link
										href={link.path}
										key={link.path}
										className={cn(
											"flex items-center text-[.8rem] 2xl:text-[.9rem] gap-2 px-4 py-3.5 rounded-lg first:mt-2",
											pathname === link.path
												? "bg-indigo-600 hover:bg-indigo-700 text-white"
												: "hover:bg-indigo-600 text-black hover:text-white dark:text-white"
										)}
									>
										<span className="text-lg 2xl:text-xl">
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
					<button className="-mt-7 capitalize hover:bg-indigo-600 flex items-center justify-start gap-2 px-4 py-3.5 hover:text-white dark:text-white rounded-lg">
						<span className="text-xl">
							<FiLogOut />
						</span>
						<span className="text-[.9rem]">logout</span>
					</button>

					<div className="flex items-center justify-between text-[.9rem] font-semibold bg-muted-foreground/5 py-4 px-5 rounded-md">
						<span>Dark</span>
						<Switch />
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
