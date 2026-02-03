import { BiUser } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi";

// Progile Menu data
export const ProfileMenuItems = [
    {
        icon: <BiUser />,
        label: "Profile",
        url: "/profile"

    },
    {
        icon: <MdOutlineWatchLater />,
        label: "Order History",
        url: "/order-history"

    },
    {
        icon: <CiLocationOn />,
        label: "Address",
        url: "#"

    },
    {
        icon: <HiOutlineExclamationCircle />,
        label: "Help",
        url: "#"

    },
    {
        icon: <FaArrowRightFromBracket />,
        label: "Log Out",
        url: "/login"

    },
];
