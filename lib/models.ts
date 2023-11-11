import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		phone: {
			type: String,
			unique: true,
			min: 11,
			max: 11,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		address: {
			type: String,
		},
	},
	{ timestamps: true }
);

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			min: 3,
		},
		category: {
			type: String,
			required: true,
			unique: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		image: {
			type: String,
			required: true,
		},
		stock: {
			type: String,
			required: true,
		},
		color: {
			type: String,
		},
		size: {
			type: String,
		},
		desc: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
	mongoose.models.Product || mongoose.model("Product", productSchema);
