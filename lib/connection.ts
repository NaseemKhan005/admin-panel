import mongoose from "mongoose";

interface ConnectionStatus {
	isConnected?: number;
}

const connection: ConnectionStatus = {};

export const connectToDB = async () => {
	try {
		if (connection.isConnected !== undefined) return;

		const db = await mongoose.connect(`${process.env.MONGO}`);
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		throw new Error(String(error));
	}
};
