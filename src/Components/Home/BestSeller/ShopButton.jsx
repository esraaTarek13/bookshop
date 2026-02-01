import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import useModalStore from "../../../Stores/useModalStore";
import AuthModal from "../../Ui/AuthModal";


export default function ShopButton() {
    const navigate = useNavigate();
    const openAuthModal = useModalStore((state) => state.openAuthModal);

    const handleShopNow = () => {
        const token = Cookies.get("token");
        if (token) {
            navigate("/books");
        } else {
            openAuthModal();
        }
    }

    return (
        <>
            <button onClick={handleShopNow} className="bg-(--btn-color) py-2 px-9 md:py-3 md:px-12 rounded-(--btn-radius) font-(--text-font-weight) text-[16px] md:text-[18px] cursor-pointer border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) transition duration-500">
                Shop now
            </button>
            <AuthModal />
        </>
    )
}
