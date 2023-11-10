import Link from "next/link";
import Image from "next/image";
import { AiFillEye, AiTwotoneDelete } from "react-icons/ai";

import Search from "@/components/common/Search";
import Pagination from "@/components/common/Pagination";
import { Button } from "@/components/ui/button";

const Products = () => {
	const product = true;

	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<div className="flex items-center justify-between gap-2 w-full">
				<div className="flex-1">
					<Search placeholder="Search for product..." className="w-full" />
				</div>
				<Link href="/dashboard/products/add" className="w-fit">
					<Button className="px-3 bg-indigo-600 hover:bg-indigo-700 text-white">
						Add Product
					</Button>
				</Link>
			</div>

			<table className="text-[.8rem] 2xl:text-sm w-full text-left mt-10">
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Created At</th>
						<th>Stock</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className="flex items-center gap-2 font-semibold pt-4">
							{product ? (
								<Image
									src="/product.jpg"
									width={100}
									height={100}
									alt="product"
									className="w-11 aspect-square rounded-full object-cover object-center bg-muted-foreground/20"
								/>
							) : (
								<Image
									src="/product-not-found.jpg"
									width={100}
									height={100}
									alt="product"
									className="w-11 aspect-square rounded-full object-contain object-center bg-muted-foreground/20"
								/>
							)}
							<span>IPhone</span>
						</td>
						<td className="pt-4">description</td>
						<td className="pt-4 font-semibold">$599.00</td>
						<td className="pt-4 capitalize">Nov 05, 2023</td>
						<td className="pt-4 font-semibold">Out of stock</td>
						<td className="pt-4 w-fit">
							<Link href="/dashboard">
								<Button
									size="icon"
									variant="ghost"
									className="bg-green-500/10 text-green-500 rounded-full text-xl w-9 h-9 hover:bg-green-500/20 hover:text-green-500 mr-2"
								>
									<AiFillEye />
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
				</tbody>
			</table>
			<Pagination />
		</div>
	);
};

export default Products;
