import HeroSection from "../../Components/HeroSection/HeroSection";
import { IoSearch } from "react-icons/io5";


export default function Home() {
  return (
    <>
      <div>
        <HeroSection className="relative"/>
        <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-12.5 bg-(--secondary-text-color) rounded-full flex items-center justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <input type="text" placeholder="Search" className=" outline-0 pl-6"/>
          <div className="bg-(--btn-color) text-(--secondary-text-color) rounded-br-full rounded-tr-full text-2xl h-full px-6 flex justify-center items-center">
          <IoSearch />
          </div>
        </div>
      </div>
    </>
  )
}
