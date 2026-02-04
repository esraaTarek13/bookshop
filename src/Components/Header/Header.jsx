import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaListUl } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavButton from './NavButton';
import HeaderIcons from "./HeaderIcons";
import { useAuthStore } from "../../Stores/useAuthStore";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);  // Mobile menu open state
  const token = useAuthStore((state) => state.token)  // Check if user is logged in
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location]);


  return (
    <header className="bg-(--nav-bg) absolute  w-full z-30 ">
      <div className="Custom-container flex justify-between md:gap-6 items-center py-7.5 font-(--text-font-weight) text-(--secondary-text-color) text-[18px]">

        <div className="md:w-50">
          <Link to="/"><img src="/images/logo.png" alt="Logo" className="md:border-r md:border-[#FFFFFF4D] md:px-6 h-full w-full object-contain" /></Link>
        </div>

        {/* Navigation menu */}
        <div className={`${isOpen ? "translate-y-0 opacity-[1]" : "translate-y-[150%]"} h-screen md:h-fit md:translate-0 pt-15 px-5 md:p-0 fixed z-20 md:relative right-0 top-0 bg-(--main-color) md:bg-transparent text-(--main-text-color) md:text-inherit flex flex-col-reverse md:flex-row items-center justify-end md:justify-between w-full transition-transform md:transition-none duration-700`}>
          <ul className="flex flex-col md:flex-row gap-10 md:gap-6 items-center">
            <NavLinks />
          </ul>
          <div className="w-full md:w-fit flex md:block justify-between items-center mb-20 md:mb-0">
            {token ? <HeaderIcons /> : <NavButton />}

            <IoCloseSharp onClick={() => { setIsOpen(!isOpen) }} className="md:hidden text-3xl cursor-pointer" />
          </div>
        </div>
        <FaListUl className="text-2xl block md:hidden cursor-pointer" onClick={() => { setIsOpen(!isOpen) }} />
      </div>
    </header>
  )
}

