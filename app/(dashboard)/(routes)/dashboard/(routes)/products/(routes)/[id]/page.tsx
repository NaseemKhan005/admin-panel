import Image from "next/image";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/common/Avatar";

const EditProduct = () => {
	const product = true;

	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<div className="flex items-center flex-col gap-2 font-semibold mb-4">
				{product ? (
					<Image
						src="/product.jpg"
						width={100}
						height={100}
						alt="product"
						className="w-52 aspect-square rounded-full object-cover object-top"
					/>
				) : (
					<Image
						src="/product-not-found.jpg"
						width={100}
						height={100}
						alt="product"
						className="w-52 aspect-square rounded-full object-contain object-top"
					/>
				)}
				<span className="text-xl lg:text-2xl">IPhone</span>
			</div>

			<form action="">
				<div className="flex items-start justify-between gap-2 mb-4">
					<div className="w-full flex flex-col gap-2">
						<label htmlFor="name" className="text-[.8rem] font-[500] mt-2">
							Name
						</label>
						<Input
							type="text"
							placeholder="IPhone"
							name="name"
							id="name"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<label htmlFor="price" className="text-[.8rem] font-[500] mt-2">
							Price
						</label>
						<Input
							type="number"
							placeholder="500"
							name="price"
							id="price"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<label htmlFor="color" className="text-[.8rem] font-[500] mt-2">
							Color
						</label>
						<Input
							type="text"
							placeholder="Black"
							name="color"
							id="color"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
					</div>

					<div className="w-full flex flex-col gap-2">
						<label htmlFor="category" className="text-[.8rem] font-[500] mt-2">
							Category
						</label>
						<Select name="category">
							<SelectTrigger
								className="w-full py-[1.6rem] dark:bg-muted-foreground/5"
								aria-required
							>
								<SelectValue defaultValue="general" placeholder="Electronics" />
							</SelectTrigger>
							<SelectContent className="dark:bg-soft-black">
								<SelectItem value="electronics">Electronics</SelectItem>
								<SelectItem value="kitchen">Kitchen</SelectItem>
								<SelectItem value="toys">Toys</SelectItem>
								<SelectItem value="computer">Computer</SelectItem>
								<SelectItem value="phone">Phone</SelectItem>
							</SelectContent>
						</Select>
						<label htmlFor="stock" className="text-[.8rem] font-[500] mt-2">
							Stock
						</label>
						<Input
							type="text"
							placeholder="43"
							name="stock"
							id="stock"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<label htmlFor="size" className="text-[.8rem] font-[500] mt-2">
							Size
						</label>
						<Input
							type="text"
							placeholder="xl"
							name="size"
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
					</div>
				</div>

				<label htmlFor="desc" className="text-[.8rem] font-[500]">
					Description
				</label>
				<Textarea
					name="desc"
					id="desc"
					placeholder="Description"
					rows={8}
					className="dark:bg-muted-foreground/5 pt-3 mt-2"
				/>
				<Button className="w-full py-6 px-3 mt-3 bg-indigo-600 hover:bg-indigo-700 text-white">
					Update
				</Button>
			</form>
		</div>
	);
};

export default EditProduct;
