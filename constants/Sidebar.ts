import { MdAnalytics, MdOutlineAnalytics } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import {
	BiHelpCircle,
	BiSolidDashboard,
	BiSolidHelpCircle,
} from "react-icons/bi";
import {
	HiUsers,
	HiMiniUserGroup,
	HiOutlineUsers,
	HiOutlineUserGroup,
} from "react-icons/hi2";
import {
	AiFillDollarCircle,
	AiFillSetting,
	AiFillShopping,
	AiOutlineDollarCircle,
	AiOutlineSetting,
	AiOutlineShopping,
} from "react-icons/ai";

export const menuItems = [
	{
		title: "pages",
		links: [
			{
				name: "dashboard",
				path: "/dashboard",
				icon: RxDashboard,
				activeIcon: BiSolidDashboard,
			},
			{
				name: "users",
				path: "/dashboard/users",
				icon: HiOutlineUsers,
				activeIcon: HiUsers,
			},
			{
				name: "products",
				path: "/dashboard/products",
				icon: AiOutlineShopping,
				activeIcon: AiFillShopping,
			},
			{
				name: "transactions",
				path: "/dashboard/transactions",
				icon: AiOutlineDollarCircle,
				activeIcon: AiFillDollarCircle,
			},
		],
	},
	{
		title: "analytics",
		links: [
			{
				name: "revenue",
				path: "/dashboard/revenue",
				icon: TbBrandGoogleAnalytics,
				activeIcon: SiGoogleanalytics,
			},
			{
				name: "report",
				path: "/dashboard/report",
				icon: MdOutlineAnalytics,
				activeIcon: MdAnalytics,
			},
			{
				name: "team",
				path: "/dashboard/team",
				icon: HiOutlineUserGroup,
				activeIcon: HiMiniUserGroup,
			},
		],
	},
	{
		title: "users",
		links: [
			{
				name: "settings",
				path: "/dashboard/settings",
				icon: AiOutlineSetting,
				activeIcon: AiFillSetting,
			},
			{
				name: "help",
				path: "/dashboard/help",
				icon: BiHelpCircle,
				activeIcon: BiSolidHelpCircle,
			},
		],
	},
];
