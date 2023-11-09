import { FiSearch } from "react-icons/fi";

import { Input } from "./ui/input";
import { MdOutlineMessage } from "react-icons/md";
import { BiSolidBell } from "react-icons/bi";
import { ToggleTheme } from "./ToggleTheme";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between bg-white dark:bg-soft-black px-5 py-4 rounded-lg">
			<div>
				<h2 className="text-xl font-semibold">Dashboard</h2>
			</div>

			<div className="flex items-center gap-2">
				<div className="relative">
					<Input
						placeholder="Search here..."
						className="w-72 pl-8 border-none bg-muted-foreground/5 py-[1.4rem] dark:bg-muted-foreground/10"
					/>
					<FiSearch className="text-indigo-500 dark:text-indigo-400 absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
				</div>
        <div className="flex items-center">
					<Button variant="ghost" size="icon">
						<MdOutlineMessage className="text-xl" />
					</Button>
					<Button variant="ghost" size="icon">
						<BiSolidBell className="text-xl" />
					</Button>
					<ToggleTheme />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
