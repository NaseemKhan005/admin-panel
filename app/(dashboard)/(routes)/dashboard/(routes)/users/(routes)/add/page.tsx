"use client";

import { useState } from "react";

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
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AddUser = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<h2 className="text-soft-black capitalize dark:text-white font-semibold mb-5">
				Add New User
			</h2>

			<form action="">
				<div className="flex items-start justify-between gap-2 mb-2">
					<div className="w-full flex flex-col gap-2">
						<Input
							type="text"
							placeholder="Username"
							name="username"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<div className="relative">
							<Input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								name="password"
								required
								className="py-[1.6rem] dark:bg-muted-foreground/5"
							/>
							{showPassword ? (
								<span
									className="text-lg p-2 text-black/70 dark:text-white hover:bg-indigo-500/10 rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 hover:text-indigo-600"
									onClick={() => setShowPassword(false)}
								>
									<AiOutlineEye />
								</span>
							) : (
								<span
									className="text-lg p-2 text-black/30 dark:text-white/50 hover:bg-indigo-500/10 rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 hover:text-indigo-600"
									onClick={() => setShowPassword(true)}
								>
									<AiOutlineEyeInvisible />
								</span>
							)}
						</div>
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
						<Input
							type="email"
							placeholder="Email"
							name="email"
							required
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
						<Input
							type="number"
							placeholder="Phone"
							name="phone"
							className="py-[1.6rem] dark:bg-muted-foreground/5"
						/>
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

				<Textarea
					name="address"
					id="address"
					placeholder="Address"
					rows={8}
					className="dark:bg-muted-foreground/5 pt-3"
				/>
				<Button className="px-3 py-[1.3rem] mt-3 bg-indigo-600 hover:bg-indigo-700 text-white">
					Add User
				</Button>
			</form>
		</div>
	);
};

export default AddUser;
