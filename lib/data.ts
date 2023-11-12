import { connectToDB } from "./connection";
import { User, Product } from "./models";

export const fetchUsers = async () => {
	try {
		connectToDB();
		const users = await User.find();

		return users;
	} catch (error) {
		console.log("Failed to fetch users!", error);
		throw new Error(String(error));
	}
};

export const fetchProducts = async () => {
	try {
		connectToDB();
		const products = await Product.find();

		return products;
	} catch (error) {
		console.log("Failed to fetch Products!", error);
		throw new Error(String(error));
	}
};
