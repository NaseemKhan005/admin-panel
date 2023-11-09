import Sales from "@/components/Sales";
import TotalRevenue from "@/components/TotalRevenue";
import Transactions from "@/components/Transactions";
import WeeklyRevenue from "@/components/WeeklyRevenue";

const Dashboard = () => {
	return (
		<div className="mt-6 flex items-start gap-5">
			<div className="flex-[2.5] w-full flex flex-col gap-5">
				<Sales />
				<Transactions />
				<WeeklyRevenue />
			</div>
			<div className="flex-[1] w-full">
				<TotalRevenue />
			</div>
		</div>
	);
};

export default Dashboard;
