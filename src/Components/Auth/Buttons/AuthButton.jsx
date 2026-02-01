import { useLocation } from "react-router-dom"

export default function AuthButton() {
    const location = useLocation();
    return (
        <>
            <button type="submit" className="w-full mt-10 cursor-pointer p-4 rounded-(--btn-radius) bg-(--btn-color) text-(--secondary-text-color) font-(--text-font-weight) text-[18px] border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500">
                {location.pathname === "/login" ? "Log in" : "Sign Up"} 
            </button>
        </>
    )
}
