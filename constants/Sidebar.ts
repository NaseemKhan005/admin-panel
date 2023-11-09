import { BiSolidDashboard, BiSolidHelpCircle, BiSolidShoppingBag } from "react-icons/bi";
import { HiUsers, HiMiniCurrencyDollar } from "react-icons/hi2";
import { BsCalendarEventFill } from "react-icons/bs";

export const menuItems = [
	{
		title: "pages",
		links: [
			{
				name: "dashboard",
				path: "/dashboard",
				icon: BiSolidDashboard,
			},
			{
				name: "users",
				path: "/users",
				icon: HiUsers,
			},
			{
				name: "products",
				path: "/products",
				icon: BiSolidShoppingBag,
			},
			{
				name: "transactions",
				path: "/transactions",
				icon: HiMiniCurrencyDollar,
			},
		],
	},
	{
		title: "analytics",
		links: [
			{
				name: "revenue",
				path: "/revenue",
				icon: BsCalendarEventFill,
			},
			{
				name: "report",
				path: "/report",
				icon: HiUsers,
			},
			{
				name: "team",
				path: "/team",
				icon: BiSolidDashboard,
			},
		],
	},
	{
		title: "users",
		links: [
			{
				name: "settings",
				path: "/settings",
				icon: BiSolidDashboard,
			},
			{
				name: "help",
				path: "/help",
				icon: BiSolidHelpCircle,
			},
		],
	},
];
