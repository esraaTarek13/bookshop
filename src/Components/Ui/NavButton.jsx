import { Link } from "react-router-dom";

export default function NavButton() {
  return (
    <div className="flex justify-center md:justify-end gap-3 items-center pt-10 md:pt-0">
      <Link to="/login" className="text-(--secondary-text-color) py-2 px-2.75 lg:py-2.75 lg:px-4 rounded-(--btn-radius) outline-0 border-0 text-[12px] md:text-[14px] lg:text-[16px] bg-(--btn-color)">Log in</Link>
      <Link to="/signup" className=" py-2 px-2.75 lg:py-2.75 lg:px-4 rounded-(--btn-radius) outline-0 border-0 text-[12px] md:text-[14px] lg:text-[16px] bg-(--secondary-text-color) text-(--btn-color)">Sign Up</Link>
    </div>
  )
}
