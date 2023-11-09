import Image from "next/image";
import Avatar from "./common/Avatar";

const Transactions = () => {
	const user = true;

	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<h2 className="text-soft-black capitalize dark:text-white font-semibold text-lg mb-5">
				latest Transactions
			</h2>

			<table className="w-full capitalize text-left text-sm">
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
								<span className="text-[.8rem] -mt-1 font-[500] text-neutral-500 dark:text-neutral-400">admin</span>
							</div>
						</td>
						<td className="pt-4">
							<span className="bg-green-500 w-fit rounded-sm text-xs p-1 font-semibold text-white">
								done
							</span>
						</td>
						<td className="pt-4">25/11/2023</td>
						<td className="pt-4 font-[500]">$500.00</td>
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
								<span className="text-[.8rem] -mt-1 font-[500] text-neutral-500 dark:text-neutral-400">Manager</span>
							</div>
						</td>
						<td className="pt-4">
							<span className="bg-red-500 w-fit rounded-sm text-xs p-1 font-semibold text-white">
								canelled
							</span>
						</td>
						<td className="pt-4">25/11/2023</td>
						<td className="pt-4 font-[500]">$500.00</td>
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
								<span className="text-[.8rem] -mt-1 font-[500] text-neutral-500 dark:text-neutral-400">customer</span>
							</div>
						</td>
						<td className="pt-4">
							<span className="bg-orange-500 w-fit rounded-sm text-xs p-1 font-semibold text-white">
								pending
							</span>
						</td>
						<td className="pt-4">25/11/2023</td>
						<td className="pt-4 font-[500]">$500.00</td>
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
								<span className="text-[.8rem] -mt-1 font-[500] text-neutral-500 dark:text-neutral-400">member</span>
							</div>
						</td>
						<td className="pt-4">
							<span className="bg-green-500 w-fit rounded-sm text-xs p-1 font-semibold text-white">
								done
							</span>
						</td>
						<td className="pt-4">25/11/2023</td>
						<td className="pt-4 font-[500]">$500.00</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Transactions;
