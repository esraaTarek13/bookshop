import { useLocation } from "react-router-dom"

export default function AuthButton() {
    const location = useLocation();

    let buttonText;
    switch (location.pathname) {
        case "/login":
            buttonText = "Log in";
            break;
        case "/signup":
            buttonText = "Sign Up";
            break;
        case "/forget-password":
            buttonText = "Send reset code";
            break;
        default:
            buttonText = "Reset password";
    }

    return (
        <>
            <button type="submit" className="w-full mt-10 cursor-pointer p-4 rounded-(--btn-radius) bg-(--btn-color) text-(--secondary-text-color) font-(--text-font-weight) md:text-lg border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500">
                {buttonText}
            </button>
        </>
    )
}
