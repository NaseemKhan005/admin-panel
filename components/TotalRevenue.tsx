"use client";

import { data } from "@/constants/Charts";
import {
	BarChart,
	Bar,
	Rectangle,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

// const data = [
// 	{
// 		name: "Page A",
// 		uv: 4000,
// 		pv: 2400,
// 		amt: 2400,
// 	},
// 	{
// 		name: "Page B",
// 		uv: 3000,
// 		pv: 1398,
// 		amt: 2210,
// 	},
// 	{
// 		name: "Page C",
// 		uv: 2000,
// 		pv: 9800,
// 		amt: 2290,
// 	},
// 	{
// 		name: "Page D",
// 		uv: 2780,
// 		pv: 3908,
// 		amt: 2000,
// 	},
// 	{
// 		name: "Page E",
// 		uv: 1890,
// 		pv: 4800,
// 		amt: 2181,
// 	},
// 	{
// 		name: "Page F",
// 		uv: 2390,
// 		pv: 3800,
// 		amt: 2500,
// 	},
// 	{
// 		name: "Page G",
// 		uv: 3490,
// 		pv: 4300,
// 		amt: 2100,
// 	},
// ];

const TotalRevenue = () => {
	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<h2 className="text-soft-black capitalize dark:text-white font-semibold text-lg">
				Total Revenue
			</h2>

			<div className="h-[195px] 2xl:h-[400px] mt-8 text-xs dark:text-white">
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
