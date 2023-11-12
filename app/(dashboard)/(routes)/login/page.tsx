"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ToggleTheme } from "@/components/ToggleTheme";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showArrow, setShowArrow] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center sm:px-6 pt-16 sm:pt-8 mx-auto sm:h-screen lg:py-0 relative">
			<div className="w-full sm:bg-white sm:dark:bg-soft-black rounded-xl sm:shadow-2xl sm:drop-shadow-md md:mt-0 sm:max-w-[24rem] xl:p-0">
				<div className="p-2 sm:p-6 space-y-4 sm:space-y-6 sm:px-8 py-10 sm:mb-8 sm:mt-5">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-2xl">
						Login to your account
					</h1>
					<form className="space-y-4 md:space-y-6" action="">
						<div>
							<label
								htmlFor="email"
								className="select-none cursor-pointer block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your email
							</label>
							<Input
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 dark:bg-muted-foreground/10 dark:text-white dark:border-muted-foreground/10 dark:focus:ring-indigo-600 dark:focus:border-indigo-600 outline-indigo-600 block w-full px-3 py-6"
								placeholder="Enter your email"
							/>
						</div>
						<div className="relative">
							<label
								htmlFor="password"
								className="select-none cursor-pointer block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Password
							</label>
							<Input
								type={showPassword ? "text" : "password"}
								name="password"
								id="password"
								placeholder="Enter your password"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 dark:bg-muted-foreground/10 dark:text-white dark:border-muted-foreground/10 dark:focus:ring-indigo-600 dark:focus:border-indigo-600 outline-indigo-600 block w-full px-3 py-6"
							/>
							{showPassword ? (
								<span
									className="text-lg p-2 text-black/70 dark:text-white hover:bg-indigo-500/10 rounded-full cursor-pointer absolute top-[69%] -translate-y-1/2 right-2 hover:text-indigo-600"
									onClick={() => setShowPassword(false)}
								>
									<AiOutlineEye />
								</span>
							) : (
								<span
									className="text-lg p-2 text-black/30 dark:text-white/50 hover:bg-indigo-500/10 rounded-full cursor-pointer absolute top-[69%] -translate-y-1/2 right-2 hover:text-indigo-600"
									onClick={() => setShowPassword(true)}
								>
									<AiOutlineEyeInvisible />
								</span>
							)}
						</div>
						<button
							onMouseEnter={() => setShowArrow(true)}
							onMouseLeave={() => setShowArrow(false)}
							type="submit"
							className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 text-center flex items-center gap-3 py-[.8rem]"
						>
							<span
								className={cn(
									"text-center transition-all duration-500",
									showArrow ? "w-16" : "w-full"
								)}
							>
								Login
							</span>
							<span
								className={cn(
									"ml-auto text-2xl text-white transition-all duration-500",
									showArrow
										? "scale-100 translate-x-0"
										: "scale-0 -translate-x-5"
								)}
							>
								<BsArrowRightShort />
							</span>
						</button>
					</form>
				</div>
			</div>
			<div className="absolute top-5 right-2 sm:right-5">
				<ToggleTheme />
			</div>
		</div>
	);
};

export default Login;
