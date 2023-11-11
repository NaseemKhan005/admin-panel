import Link from "next/link";
import Image from "next/image";
import { AiFillEye, AiTwotoneDelete } from "react-icons/ai";

import Search from "@/components/common/Search";
import Avatar from "@/components/common/Avatar";
import Pagination from "@/components/common/Pagination";

const Transactions = () => {
	const user = true;

	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<div className="flex items-center justify-between gap-2 w-full">
				<div className="flex-1">
					<Search placeholder="Search for user..." className="w-full" />
				</div>
			</div>

			<table className="w-full capitalize text-left text-[.8rem] 2xl:text-sm mt-8">
				<thead>
					<tr>
						<th>Name</th>
						<th>Status</th>
						<th>Date</th>
						<th>Amount</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className="flex items-center gap-2 font-semibold pt-4">
							{user ? (
								<Image
									src="/user.jpg"
									width={100}
									height={100}
									alt="user"
									className="w-10 aspect-square rounded-full object-contain object-top"
								/>
							) : (
								<Avatar className="text-lg" />
							)}{" "}
							<div className="flex flex-col gap-0">
								<span>Naseem Khan</span>
								<span className="text-[.8rem] -mt-1 font-[500] text-neutral-500 dark:text-neutral-400">
									admin
								</span>
							</div>
						</td>
						<td className="pt-4">
							<span className="bg-green-500 w-fit rounded-sm text-xs p-1 font-[500] text-white">
								done
							</span>
						</td>
						<td className="pt-4">25/11/2023</td>
						<td className="pt-4 font-semibold">$500.00</td>
					</tr>
					<tr>
						<td className="flex items-center gap-2 font-semibold pt-4">
							{user ? (
								<Image
									src="/user.jpg"
									width={100}
									height={100}
									alt="user"
									className="w-10 aspect-square rounded-full object-contain object-top"
								/>
							) : (
								<Avatar className="text-lg" />
							)}{" "}
							<div className="flex flex-col gap-0">
								<span>Naseem Khan</span>
								<span className="text-[.8rem] -mt-1 font-[500] text-neutral-500 dark:text-neutral-400">
									Manager
								</span>
							</div>
						</td>
						<td className="pt-4">
							<span className="bg-red-500 w-fit rounded-sm text-xs p-1 font-[500] text-white">
								canelled
							</span>
						</td>
						<td className="pt-4">25/11/2023</td>
						<td className="pt-4 font-semibold">$500.00</td>
					</tr>
					<tr>
						<td className="flex items-center gap-2 font-semibold pt-4">
							{user ? (
								<Image
									src="/user.jpg"
									width={100}
									height={100}
									alt="user"
									className="w-10 aspect-square rounded-full object-contain object-top"
								/>
							) : (
								<Avatar className="text-lg" />
							)}{" "}
							<div className="flex flex-col gap-0">
								<span>Naseem Khan</span>
								<span className="text-[.8rem] -mt-1 font-[500] text-neutral-500 dark:text-neutral-400">
									customer
								</span>
							</div>
						</td>
						<td className="pt-4">
							<span className="bg-orange-500 w-fit rounded-sm text-xs p-1 font-[500] text-white">
								pending
							</span>
						</td>
						<td className="pt-4">25/11/2023</td>
						<td className="pt-4 font-semibold">$500.00</td>
					</tr>
					<tr>
						<td className="flex items-center gap-2 font-semibold pt-4">
							{user ? (
								<Image
									src="/user.jpg"
									width={100}
									height={100}
									alt="user"
									className="w-10 aspect-square rounded-full object-contain object-top"
								/>
							) : (
								<Avatar className="text-lg" />
							)}{" "}
							<div className="flex flex-col gap-0">
								<span>Naseem Khan</span>
								<span className="text-[.8rem] -mt-1 font-[500] text-neutral-500 dark:text-neutral-400">
									member
								</span>
							</div>
						</td>
						<td className="pt-4">
							<span className="bg-green-500 w-fit rounded-sm text-xs p-1 font-[500] text-white">
								done
							</span>
						</td>
						<td className="pt-4">25/11/2023</td>
						<td className="pt-4 font-semibold">$500.00</td>
					</tr>
				</tbody>
			</table>
			<Pagination />
		</div>
	);
};

export default Transactions;
