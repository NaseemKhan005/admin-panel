"use client";

import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

import { data } from "@/constants/Charts";

const VisitorInsights = () => {
	return (
		<div className="bg-white dark:bg-soft-black rounded-xl p-5 shadow-white">
			<h2 className="text-soft-black capitalize dark:text-white font-semibold">
				Visitor Insights
			</h2>

			<div className="h-[350px] 2xl:h-[400px] mt-8 text-xs dark:text-white">
				<ResponsiveContainer width="100%" height="95%">
					<BarChart
						width={500}
						height={400}
						data={data}
						margin={{
							top: 10,
							right: 0,
							left: 0,
							bottom: 0,
						}}
					>
						<Tooltip />
						<Legend />
						<Bar dataKey="visit" stackId="a" fill="#00E096" />
						<Bar dataKey="click" stackId="a" fill="#0095FF" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default VisitorInsights;
