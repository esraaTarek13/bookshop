import { MdKeyboardArrowDown } from "react-icons/md";
import ProfileMenu from "./ProfileMenu";
import useModalStore from './../../Stores/useModalStore';
import { useAuthStore } from "../../Stores/useAuthStore";


export default function ProfileSection() {
    const user = useAuthStore((state) => state.user); // Fetch user profile data
    console.log(user);
    
    const openMenu = useModalStore((state) => state.toggleModal); // Toggle profile menu

    return (
        <>
            {/* Profile section */}
            <div onClick={openMenu}
                className="flex items-center gap-2.5 lg:gap-3.5 cursor-pointer group">
                <div className="w-7.5 lg:w-10 h-7.5 lg:h-10 relative">
                    <img src="/images/Profile.jpg" alt="Profile" className="w-full h-full rounded-full" />
                    <span className="absolute top-0 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>

                <div>
                    <h6 className="font-(--text-font-weight) text-sm lg:text-base">{user?.first_name} {user?.last_name}</h6>
                    <p className="font-light text-xs lg:text-sm">{user?.email}</p>
                </div>

                {/* Dropdown arrow */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MdKeyboardArrowDown className="text-(--main-text-color) md:text-(--secondary-text-color) text-2xl" />
                </span>
            </div>

            {/* Profile menu component */}
            <ProfileMenu />
        </>
    )
}
