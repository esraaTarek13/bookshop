import { Link, useLocation } from "react-router-dom";
import useModalStore from "../../Stores/useModalStore";
import { useEffect, useState } from "react";
import { ProfileMenuItems } from "../../Constants/ProfilemenuItems";
import { useCloseMenuOnLocationChange } from "../../Hooks/UseCloseMenuOnLocationChange";
import { useCloseMenuOnScroll } from './../../Hooks/UseCloseMenuOnScroll';


export default function ProfileMenu() {
    const isOpen = useModalStore((state) => state.isProfileMenuOpen);
    const close = useModalStore((state) => state.closeProfileMenu);
    const [instantClose, setInstantClose] = useState(false);
    const location = useLocation()

    useCloseMenuOnLocationChange(location, close, setInstantClose)
    useCloseMenuOnScroll(isOpen, close)


    // Profile Menu
    return (
        <ul className={`${isOpen ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"}
        ${instantClose ? "" : "transition-all duration-300"}
         flex flex-col gap-4 bg-(--secondary-text-color) rounded-(--btn-radius) p-6 absolute top-[160%] right-0 z-50`}>

            {ProfileMenuItems.map((item) => (
                <li key={item.id} className="flex items-center gap-2.5 p-3 text-(--main-text-color)">
                    <span>{item.icon}</span>
                    <Link to={item.url} className="font-(--text-font-weight)">{item.label}</Link>
                </li>
            ))}
        </ul>
    )
}
