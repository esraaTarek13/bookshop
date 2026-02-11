import { Link, useLocation } from "react-router-dom";
import useModalStore from "../../Stores/useModalStore";
import { useRef, useState } from "react";
import { useCloseMenuOnLocationChange } from "../../Hooks/UseCloseMenuOnLocationChange";
import { useCloseMenuOnScroll } from './../../Hooks/UseCloseMenuOnScroll';
import { ProfileMenuItems } from "../../Constants/ProfileMenuItems";
import { UseLogOut } from "../../Hooks/UseLogout";
import { useCloseOnOutsideClick } from "../../Hooks/UseCloseOnOutsideClick";


export default function ProfileMenu() {
    // Modal state from Zustand
    const isOpen = useModalStore((state) => state.isProfileMenuOpen);
    const close = useModalStore((state) => state.closeProfileMenu);

    const [instantClose, setInstantClose] = useState(false);
    const location = useLocation()

    // Close menu on location change or scroll
    useCloseMenuOnLocationChange(location, close, setInstantClose)
    useCloseMenuOnScroll(isOpen, close)

    // Log out mutation
    const { mutate } = UseLogOut()
    const handleLogOut = (label) => {
        if (label === "Log Out") {
            mutate()
        }
    };

    const menuRef = useRef(null);
    useCloseOnOutsideClick(menuRef, isOpen, close);


    // Profile Menu UI
    return (
        <ul
            ref={menuRef}
            className={`${isOpen ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"}
            ${instantClose ? "" : "transition-all duration-300"}
            flex flex-col gap-4 bg-(--secondary-text-color) rounded-(--btn-radius) p-6 absolute top-[15%] md:top-[160%] left-[25%] md:left-auto md:right-0 z-50`}>

            {ProfileMenuItems.map((item) => (
                <li key={item.id} className="flex items-center gap-2.5 p-3 text-(--main-text-color)">
                    <span>{item.icon}</span>
                    <Link to={item.url} className="font-(--text-font-weight)"
                        onClick={() => handleLogOut(item.label)}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
