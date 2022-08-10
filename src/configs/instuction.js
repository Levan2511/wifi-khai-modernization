import ANDROID_STEPS from "../constants/android.steps";
import IPHONE_STEPS from "../constants/iphone.steps";
import LINUX_STEPS from "../constants/linux.steps";
import MAC_STEPS from "../constants/mac.steps";
import WIN_7_STEPS from "../constants/win7.steps";
import WIN_8_STEPS from "../constants/win8.steps";
import WIN_XP_STEPS from "../constants/win_xp.steps";

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
    link: `win_xp`,
    steps: WIN_XP_STEPS
  },
  {
    label: 'Linux',
    link: `linux`,
    steps: LINUX_STEPS
  },
  {
    label: 'Mac OS X',
    link: `mac_os`,
    steps: MAC_STEPS
  },
  {
    label: 'Android', 
    link: `android`,
    steps: ANDROID_STEPS
  },
  {
    label: 'iPhone',
    link: `iphone`,
    steps: IPHONE_STEPS
  },
];

export default GUIDE_CONFIG;