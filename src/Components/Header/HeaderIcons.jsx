import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProfileSection from "./ProfileSection";


export default function HeaderIcons() {
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

            <ProfileSection />
        </div>
    )
}
