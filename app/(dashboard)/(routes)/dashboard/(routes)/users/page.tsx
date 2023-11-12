import Link from "next/link";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { TfiFaceSad } from "react-icons/tfi";

import Search from "@/components/common/Search";
import Avatar from "@/components/common/Avatar";
import Pagination from "@/components/common/Pagination";
import { Button } from "@/components/ui/button";
import { fetchUsers } from "@/lib/data";
import { cn } from "@/lib/utils";

const Users = async ({ searchParams }: { searchParams: any }) => {
	const q = searchParams?.q || "";
	const users = await fetchUsers(q);

	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<div className="flex items-center justify-between gap-2 w-full">
				<div className="flex-1">
					<Search placeholder="Search for user..." className="w-full" />
				</div>
				<Link href="/dashboard/users/add" className="w-fit">
					<Button className="px-3 bg-indigo-600 hover:bg-indigo-700 text-white">
						Add User
					</Button>
				</Link>
			</div>

			{users.length > 0 ? (
				<table className="text-[.8rem] 2xl:text-sm w-full text-left mt-10">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Created At</th>
							<th>Role</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td className="flex items-center gap-2 font-semibold pt-4">
									{user.image ? (
										<Image
											src={`${user.image}`}
											width={100}
											height={100}
											alt="user"
											className="w-10 aspect-square rounded-full object-cover object-top"
										/>
									) : (
										<Avatar className="text-2xl" />
									)}
									<span>{user.username}</span>
								</td>
								<td className="pt-4">{user.email}</td>
								<td className="pt-4">
									{user.createdAt?.toString().slice(4, 16)}
								</td>
								<td className="pt-4">{user.isAdmin ? "Admin" : "Client"}</td>
								<td className="pt-4 relative">
									{user.isActive ? "Active" : "Passive"}
									<span
										className={cn(
											"absolute top-[2.09rem] -left-3 block w-2 h-2 rounded-full",
											user.isActive ? "bg-green-500" : "bg-orange-500"
										)}
									/>
								</td>
								<td className="pt-4 w-fit">
									<Link href={`/dashboard/users/${user._id}`}>
										<Button
											size="icon"
											variant="ghost"
											className="bg-green-500/10 text-green-500 rounded-full text-xl w-9 h-9 hover:bg-green-500/20 hover:text-green-500 mr-2"
										>
											<FiEdit />
										</Button>
									</Link>
									<Link href="/dashboard">
										<Button
											size="icon"
											variant="ghost"
											className="bg-red-500/10 text-red-500 rounded-full text-xl w-9 h-9 hover:bg-red-500/20 hover:text-red-500"
										>
											<AiTwotoneDelete />
										</Button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className="flex items-center justify-center gap-2 mt-10 text-xl sm:text-2xl lg:text-3xl font-semibold">
					<TfiFaceSad /> <span>No Data Found!!!</span>
				</div>
			)}
			<Pagination />
		</div>
	);
};

export default Users;
