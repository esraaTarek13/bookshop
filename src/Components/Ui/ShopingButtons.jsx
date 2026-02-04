import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { RequireAuth } from "../../Utils/RequireAuth";


// Auth-protected shopping buttons
export default function ShopingButtons() {
    const handleCartBtn = RequireAuth()
    const handleWishListBtn = RequireAuth()

    return (
        <div className="flex items-center gap-4 pt-4">
            <button
                onClick={handleCartBtn}
                className="w-full py-3.25 flex items-center justify-center gap-2.5 bg-(--btn-color) rounded-(--btn-radius) text-(--secondary-text-color) font-(--text-font-weight) border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500 cursor-pointer">
                Add To Cart
                <span className="text-2xl"><IoCartOutline /></span>
            </button>
            <button
                onClick={handleWishListBtn}
                className="w-fit p-3.5 text-lg bg-(--secondary-text-color) text-(--btn-color) border border-(--btn-color) rounded-(--btn-radius) outline-0 cursor-pointer">
                <FaRegHeart />
            </button>
        </div>
    )
}
