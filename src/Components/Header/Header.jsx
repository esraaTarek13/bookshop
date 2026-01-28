import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavButton from "../Ui/NavButton";
import { FaListUl } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-(--nav-bg) absolute  w-full z-30 ">
      <div className="container flex justify-between md:gap-6 items-center py-7.5 font-(--text-font-weight) text-(--secondary-text-color) text-[18px]">

        <div className="w-50">
          <Link to="/"><img src="/images/logo.png" alt="Logo" className="md:border-r md:border-[#FFFFFF4D] md:px-6 h-full w-full object-contain" /></Link>
        </div>

        <div className={`${isOpen ? "translate-y-0 opacity-[1]" : "translate-y-[150%]"} h-screen md:h-fit md:translate-0  p-10 md:p-0 fixed z-50 md:relative right-0 top-0 bg-(--main-color) md:bg-transparent text-(--main-text-color) md:text-inherit flex flex-col md:flex-row md:justify-between w-full transition-transform md:transition-none duration-700`}>
          <IoCloseSharp onClick={() => { setIsOpen(!isOpen) }} className="md:hidden self-end mb-12 text-3xl cursor-pointer"/>
          <ul className="flex flex-col md:flex-row gap-10 md:gap-6 items-center">
            <NavLinks />
          </ul>
          <NavButton />
        </div>
        <FaListUl className="text-2xl block md:hidden cursor-pointer" onClick={() => { setIsOpen(!isOpen) }} />
      </div>
    </div>
  )
}

