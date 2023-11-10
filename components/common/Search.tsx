import { FiSearch } from "react-icons/fi";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchProps {
	placeholder: String;
	className?: String;
}

const Search = ({ placeholder, className }: SearchProps) => {
	return (
		<div className="relative">
			<Input
				placeholder={`${placeholder}`}
				className={cn(
					"w-72 pl-8 border-none bg-muted-foreground/5 py-[1.4rem] dark:bg-muted-foreground/5",
					className
				)}
			/>
			<FiSearch className="text-indigo-500 dark:text-indigo-400 absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
		</div>
	);
};

export default Search;
