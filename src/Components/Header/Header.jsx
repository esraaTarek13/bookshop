import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavButton from "../Ui/NavButton";
import { FaListUl } from "react-icons/fa";
import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-(--nav-bg) absolute  w-full z-30 ">
      <div className="container flex justify-between md:gap-6 items-center py-7.5 font-(--text-font-weight) text-(--secondary-text-color) texr-[18px]">

        <div >
          <Link to="/"><img src="/images/logo.png" alt="Logo" className="md:border-r md:border-[#FFFFFF4D] md:px-6" /></Link>
        </div>

        <div className={`${isOpen ? "translate-y-0 " : "translate-x-[-150%]"} md:translate-0 p-10 md:p-0 absolute z-50 md:relative right-0 top-full bg-white md:bg-transparent text-(--main-text-color) md:text-inherit md:flex justify-center md:justify-between items-center w-full transition-transform duration-700`}>
          <ul className="flex flex-col md:flex-row gap-6 items-center">
            <NavLinks />
          </ul>
          <NavButton />
        </div>
        <FaListUl className="text-2xl block md:hidden cursor-pointer" onClick={() => {setIsOpen(!isOpen)}}/>
      </div>
    </div>
  )
}

