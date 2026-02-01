import { Link } from "react-router-dom";

export default function NavButton() {
  return (
    <div className="flex justify-center md:justify-end gap-3 items-center pt-10 md:pt-0">
      <Link to="/login" className="text-(--secondary-text-color) py-2 px-2.75 lg:py-2.75 lg:px-4 rounded-(--btn-radius) outline-0 text-[12px] md:text-[14px] lg:text-[16px] bg-(--btn-color) border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500">Log in</Link>
      <Link to="/signup" className=" py-2 px-2.75 lg:py-2.75 lg:px-4 bg-(--secondary-text-color) text-(--btn-color) border border-(--btn-color) rounded-(--btn-radius) outline-0 text-[12px] md:text-[14px] lg:text-[16px]">Sign Up</Link>
    </div>
  )
}
