import { HiMiniUser } from "react-icons/hi2";

import { cn } from "@/lib/utils";

const Avatar = ({ className }: { className?: String }) => {
	return (
		<div
			className={cn(
				"bg-neutral-400 dark:bg-white dark:text-neutral-600 w-fit rounded-full p-2 text-white text-3xl",
				className
			)}
		>
			<HiMiniUser />
		</div>
	);
};

export default Avatar;
