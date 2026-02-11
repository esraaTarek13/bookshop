import { IoCartOutline } from "react-icons/io5";

// Add to cart button 
export default function SaleProductCartButton() {
    return (
        <div className='pt-6 flex justify-end'>
            <div className='w-12 h-12 bg-(--btn-color) rounded-(--btn-radius) flex justify-center items-center border border-(--btn-color) hover:bg-transparent text-2xl text-(--secondary-text-color) hover:text-(--btn-color) transition duration-500 cursor-pointer'>
                <IoCartOutline />
            </div>
        </div>
    )
}
