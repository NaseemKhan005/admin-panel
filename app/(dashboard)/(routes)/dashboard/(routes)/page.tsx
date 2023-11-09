import RightSidebar from "@/components/RightSidebar";
import Sales from "@/components/Sales";
import Transactions from "@/components/Transactions";

const Dashboard = () => {
	return (
		<div className="mt-6 flex items-start gap-5">
			<div className="flex-[2.5] w-full flex flex-col gap-5">
				<Sales />
				<Transactions />
			</div>
			<div className="flex-[1] w-full">
				<RightSidebar />
			</div>
		</div>
	);
};

export default Dashboard;
