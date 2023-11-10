import { FiSearch } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import { Input } from "./ui/input";
import { BiSolidBell } from "react-icons/bi";
import { ToggleTheme } from "./ToggleTheme";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between bg-white dark:bg-soft-black px-5 py-3 rounded-lg">
			<div className="flex items-center gap-1">
				<span className="block lg:hidden text-xl cursor-pointer hover:bg-muted-foreground/10 p-2 rounded-full">
					<IoMenu />
				</span>
				<h2 className="text-xl font-semibold">Dashboard</h2>
			</div>

			<div className="flex items-center gap-2">
				<div className="relative">
					<Input
						placeholder="Search here..."
						className="w-72 pl-8 border-none bg-muted-foreground/5 py-[1.4rem] dark:bg-muted-foreground/5"
					/>
					<FiSearch className="text-indigo-500 dark:text-indigo-400 absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
				</div>
				<div className="flex items-center gap-1">
					<Button
						variant="ghost"
						size="icon"
						className="bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500"
					>
						<MdOutlineMessage className="text-xl" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 hover:text-orange-500"
					>
						<BiSolidBell className="text-xl" />
					</Button>
					<ToggleTheme />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
