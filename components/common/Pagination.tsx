import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";

const Pagination = () => {
	const prev = true;

	return (
		<div className="flex items-center justify-between mt-8">
			<Button
				disabled={prev}
				className="pl-1 pr-3 bg-muted-foreground/10 hover:bg-muted-foreground/20 text-black dark:text-white"
			>
				<RiArrowLeftSLine className="text-xl" />
				<span className="text-[.8rem]">Previous</span>
			</Button>
			<Button className="pr-1 pl-3 bg-muted-foreground/10 hover:bg-muted-foreground/20 text-black dark:text-white">
				<span className="text-[.8rem]">Next</span>
				<RiArrowRightSLine className="text-xl" />
			</Button>
		</div>
	);
};

export default Pagination;
