import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function HeaderIcons() {
    return (
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
                <FaRegHeart  className="text-2xl"/>
                <AiOutlineShoppingCart className="text-2xl" />
            </div>
            <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img src="/images/Profile.jpg" alt="Profile" className="w-full h-full"/>
                </div>
                <div>
                    <h6 className="font-(--text-font-weight)">John Smith</h6>
                    <p className="font-light text-[14px]">Johnsmith@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
