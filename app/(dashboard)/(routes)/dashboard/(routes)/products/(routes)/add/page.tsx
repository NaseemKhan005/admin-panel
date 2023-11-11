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

const AddProduct = () => {
	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<h2 className="text-soft-black capitalize dark:text-white font-semibold mb-5">
				Add New Product
			</h2>

			<form action="">
				<div className="flex items-start justify-between gap-2 mb-2">
					<div className="w-full flex flex-col gap-2">
						<Input
							type="text"
							placeholder="Name"
							name="name"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<Input
							type="number"
							placeholder="Price"
							name="price"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<Input
							type="text"
							placeholder="Color"
							name="color"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
					</div>

					<div className="w-full flex flex-col gap-2">
						<Select name="category">
							<SelectTrigger
								className="w-full py-[1.6rem] dark:bg-muted-foreground/5"
								aria-required
							>
								<SelectValue
									defaultValue="general"
									placeholder="Choose a Category"
								/>
							</SelectTrigger>
							<SelectContent className="dark:bg-soft-black">
								<SelectItem value="electronics">Electronics</SelectItem>
								<SelectItem value="kitchen">Kitchen</SelectItem>
								<SelectItem value="toys">Toys</SelectItem>
								<SelectItem value="computer">Computer</SelectItem>
								<SelectItem value="phone">Phone</SelectItem>
							</SelectContent>
						</Select>
						<Input
							type="text"
							placeholder="Stock"
							name="stock"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<Input
							type="text"
							placeholder="Size"
							name="size"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
					</div>
				</div>

				<Textarea
					name="desc"
					id="desc"
					placeholder="Description"
					rows={8}
					className="dark:bg-muted-foreground/5 pt-3"
				/>
				<Button className="px-3 py-[1.3rem] mt-3 bg-indigo-600 hover:bg-indigo-700 text-white">
					Add Product
				</Button>
			</form>
		</div>
	);
};

export default AddProduct;
