"use client";

import { FiSearch } from "react-icons/fi";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
	placeholder: String;
	className?: String;
}

const Search = ({ placeholder, className }: SearchProps) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((e: any) => {
		const params = new URLSearchParams(searchParams);
		if (e.target.value) {
			e.target.value.length > 2
				? params.set("q", e.target.value)
				: params.delete("q");
		} else {
			params.delete("q");
			replace(pathname);
		}
		replace(`${pathname}?${params}`);
	}, 300);

	return (
		<div className="relative">
			<Input
				placeholder={`${placeholder}`}
				className={cn(
					"w-72 pl-8 border-none bg-muted-foreground/5 py-[1.4rem] dark:bg-muted-foreground/5",
					className
				)}
				onChange={handleSearch}
			/>
			<FiSearch className="text-indigo-500 dark:text-indigo-400 absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
		</div>
	);
};

export default Search;
