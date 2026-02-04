import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import useModalStore from "../../Stores/useModalStore";
import ProfileMenu from "./ProfileMenu";


export default function HeaderIcons() {
    // Toggle profile menu
    const openMenu = useModalStore((state) => state.toggleModal)

    return (

        <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
                {/* WishList icon*/}
                <Link to="/wishlist" className="relative">
                    <FaRegHeart className="text-xl lg:text-2xl" />
                    <span className="absolute -top-1 -right-2 w-4 h-4 lg:w-4.5 lg:h-4.5 bg-(--btn-color) border-2 border-white rounded-full"></span>
                </Link>
                {/* Cart icon*/}
                <Link to="/wishlist" className="relative">
                    <AiOutlineShoppingCart className="text-2xl lg:text-3xl" />
                    <span className="absolute -top-1 -right-2 w-4 h-4 lg:w-4.5 lg:h-4.5 bg-(--btn-color) border-2 border-white rounded-full"></span>
                </Link>

            </div>
            {/* Profile section */}
            <div onClick={openMenu}
                className="flex items-center gap-2.5 lg:gap-3.5 cursor-pointer group">
                <div className="w-7.5 lg:w-10 h-7.5 lg:h-10 relative">
                    <img src="/images/Profile.jpg" alt="Profile" className="w-full h-full rounded-full" />
                    <span className="absolute top-0 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>

                <div>
                    <h6 className="font-(--text-font-weight) text-sm lg:text-base">John Smith</h6>
                    <p className="font-light text-xs lg:text-sm">Johnsmith@gmail.com</p>
                </div>

                {/* Dropdown arrow */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MdKeyboardArrowDown className="text-(--main-text-color) md:text-(--secondary-text-color) text-2xl" />
                </span>
            </div>

            {/* Profile menu component */}
            <ProfileMenu />
        </div>
    )
}
