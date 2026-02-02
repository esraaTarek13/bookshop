import { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";



export default function InputSearch() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current) inputRef.current.focus();
    };

    return (
        <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-12.5 bg-(--secondary-text-color) rounded-full flex items-center justify-between ">
            <input type="text" id="search" placeholder="Search" className=" outline-0 pl-6 w-full" ref={inputRef}/>
            <IoMicOutline className="text-2xl text-(--main-text-color-light)"/>
            <div
                onClick={handleFocus}
                className="bg-(--btn-color) text-(--secondary-text-color) rounded-br-full rounded-tr-full text-2xl h-full px-6 flex justify-center items-center cursor-pointer ml-2">
                <IoSearch />
            </div>
        </div>
    )
}
