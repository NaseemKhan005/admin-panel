import { connectToDB } from "./connection";
import { User, Product } from "./models";

export const fetchUsers = async (q: any) => {
	// for every single letter we want to fetch users so we need regex matching with case insensitive
	const regex = new RegExp(q, "i");

	try {
		connectToDB();
		const users = await User.find({ username: { $regex: regex } });

		return users;
	} catch (error) {
		console.log("Failed to fetch users!", error);
		throw new Error(String(error));
	}
};

export const fetchProducts = async (q: any) => {
	const regex = new RegExp(q, "i");

	try {
		connectToDB();
		const products = await Product.find({ name: { $regex: regex } });

		return products;
	} catch (error) {
		console.log("Failed to fetch Products!", error);
		throw new Error(String(error));
	}
};
