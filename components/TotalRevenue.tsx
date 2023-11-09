"use client";

import {
	BarChart,
	Bar,
	Rectangle,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

import { data } from "@/constants/Charts";

const TotalRevenue = () => {
	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<h2 className="text-soft-black capitalize dark:text-white font-semibold">
				Total Revenue
			</h2>

			<div className="h-[195px] mt-8 text-xs dark:text-white">
				<ResponsiveContainer width="100%" height="95%">
					<BarChart
						width={500}
						height={300}
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
						<Bar
							dataKey="visit"
							fill="#00E096"
							activeBar={<Rectangle fill="gold" stroke="green" />}
						/>
						<Bar
							dataKey="click"
							fill="#FFCF00"
							activeBar={<Rectangle fill="gold" stroke="orange" />}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default TotalRevenue;
