import { useNavigate } from "react-router-dom";
import AuthModal from "../../Ui/AuthModal";
import { RequireAuth } from "../../../Utils/RequireAuth";


export default function ShopButton() {
    const navigate = useNavigate();
    const handleClick = RequireAuth(() => navigate("/books"))

    return (
        <>
            <button onClick={handleClick} className="bg-(--btn-color) py-2 px-9 md:py-3 md:px-12 rounded-(--btn-radius) font-(--text-font-weight) text-[16px] md:text-[18px] cursor-pointer border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500">
                Shop now
            </button>
            <AuthModal />
        </>
    )
}
