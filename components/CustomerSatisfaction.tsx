"use client";

import {
	AreaChart,
	Area,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import { data } from "@/constants/Charts";

const CustomerSatisfaction = () => {
	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<h2 className="text-soft-black capitalize dark:text-white font-semibold">
				Customer Satisfaction
			</h2>

			<div className="h-[240px] mt-8 text-xs dark:text-white">
				<ResponsiveContainer width="100%" height="95%">
					<AreaChart
						width={500}
						height={400}
						data={data}
						margin={{
							top: 5,
							right: 0,
							left: 0,
							bottom: 0,
						}}
					>
						<Tooltip />
						<Legend />

						<Area
							type="monotone"
							dataKey="click"
							stackId="1"
							stroke="blue"
							fill="#009DFF"
						/>
						<Area
							type="monotone"
							dataKey="visit"
							stackId="1"
							stroke="green"
							fill="#00E096"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default CustomerSatisfaction;
