import Card from "@/components/Card";
import RightSidebar from "@/components/RightSidebar";
import Sales from "@/components/Sales";

const Dashboard = () => {
	return (
		<div className="mt-6 flex items-start gap-5">
			<div className="flex-[2.5] w-full">
				<div>
					<Sales />
				</div>
			</div>
			<div className="flex-[1] w-full">
				<RightSidebar />
			</div>
		</div>
	);
};

export default Dashboard;
