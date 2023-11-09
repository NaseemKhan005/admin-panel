import CustomerSatisfaction from "@/components/CustomerSatisfaction";
import Sales from "@/components/Sales";
import TotalRevenue from "@/components/TotalRevenue";
import Transactions from "@/components/Transactions";
import VisitorInsights from "@/components/VisitorInsights";
import WeeklyRevenue from "@/components/WeeklyRevenue";

const Dashboard = () => {
	return (
		<div className="mt-6 flex items-start gap-5">
			<div className="flex-[2.5] w-full flex flex-col gap-5">
				<Sales />
				<Transactions />
				<WeeklyRevenue />
			</div>
			<div className="flex-[1] w-full flex flex-col gap-5">
				<TotalRevenue />
				<CustomerSatisfaction />
				<VisitorInsights />
			</div>
		</div>
	);
};

export default Dashboard;
