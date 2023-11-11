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

const EditUser = () => {
	const user = true;

	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<div className="flex items-center flex-col gap-2 font-semibold mb-4">
				{user ? (
					<Image
						src="/user.jpg"
						width={100}
						height={100}
						alt="user"
						className="w-52 aspect-square rounded-full object-cover object-top"
					/>
				) : (
					<Avatar className="text-[12rem]" />
				)}
				<span className="text-xl lg:text-2xl">Naseem Khan</span>
			</div>

			<form action="">
				<div className="flex items-start justify-between gap-2 mb-4">
					<div className="w-full flex flex-col gap-2">
						<label htmlFor="username" className="text-[.8rem] font-[500] mt-2">
							Username
						</label>
						<Input
							type="text"
							placeholder="Naseem Khan"
							name="username"
							id="username"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<label htmlFor="password" className="text-[.8rem] font-[500] mt-2">
							Password
						</label>
						<Input
							type="password"
							placeholder="Password"
							name="password"
							id="password"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>

						<label htmlFor="isAdmin" className="text-[.8rem] font-[500] mt-2">
							Is Admin
						</label>
						<Select name="isAdmin">
							<SelectTrigger
								className="w-full py-[1.6rem] dark:bg-muted-foreground/5"
								aria-required
							>
								<SelectValue defaultValue="false" placeholder="Is Admin" />
							</SelectTrigger>
							<SelectContent className="dark:bg-soft-black">
								<SelectItem value="true">Yes</SelectItem>
								<SelectItem value="false">No</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="w-full flex flex-col gap-2">
						<label htmlFor="email" className="text-[.8rem] font-[500] mt-2">
							Email
						</label>
						<Input
							type="email"
							placeholder="naseemkhan@gmail.com"
							name="email"
							id="email"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<label htmlFor="phone" className="text-[.8rem] font-[500] mt-2">
							Phone
						</label>
						<Input
							type="number"
							placeholder="+12 345 6789 0"
							name="phone"
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<label htmlFor="isActive" className="text-[.8rem] font-[500] mt-2">
							Is Active
						</label>
						<Select name="isActive">
							<SelectTrigger
								className="w-full py-[1.6rem] dark:bg-muted-foreground/5"
								aria-required
							>
								<SelectValue defaultValue="true" placeholder="Is Active" />
							</SelectTrigger>
							<SelectContent className="dark:bg-soft-black">
								<SelectItem value="true">Yes</SelectItem>
								<SelectItem value="false">No</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<label htmlFor="address" className="text-[.8rem] font-[500]">
					Address
				</label>
				<Textarea
					name="address"
					id="address"
					placeholder="Address"
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

export default EditUser;
