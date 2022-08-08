import WIN_7_STEPS from "../constants/win7.steps";
import WIN_8_STEPS from "../constants/win8.steps";

const GUIDE_CONFIG = [
	{
		label: 'Windows 8',
		link: `win8`,
		steps: WIN_8_STEPS
	},
	{
		label: 'Windows Vista/7',
		link: `win7`,
		steps: WIN_7_STEPS
	},
	{
		label:'Windows XP',
		link: `win_xp`
	},
	{
		label: 'Linux',
		link: `linux`
	},
	{
		label: 'Mac OS X',
		link: `mac_os`
	},
	{
		label: 'Amazon Kindle',
		link: `amaz_kindle`
	},
	{
		label: 'Android', 
		link: `android`
	},
	{
		label: 'Blackberry',
		link: `blackberry`
	},
	{
		label: 'iPhone',
		link: `iphone`
	},
	{
		label: 'Symbian OS',
		link: `symbian_os`
	},
	{
		label: 'Windows Mobile',
		link: `win_mobile`
	},
	{
		label: 'Windows Phone',
		link: `win_phone`
	},
];

export default GUIDE_CONFIG;