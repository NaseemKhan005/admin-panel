"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

import { data } from "@/constants/Charts";

const WeeklyRevenue = () => {
	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<h2 className="text-soft-black capitalize dark:text-white font-semibold text-lg">
				Weekly Revenue
			</h2>

			<div className="h-[350px] 2xl:h-[400px] mt-8 text-xs dark:text-white">
				<ResponsiveContainer width="100%" height="95%">
					<LineChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="click"
							stroke="#8884d8"
							activeDot={{ r: 8 }}
						/>
						<Line type="monotone" dataKey="visit" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default WeeklyRevenue;
