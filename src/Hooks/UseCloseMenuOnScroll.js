import { useEffect } from "react";

// Close the menu on scroll
export function useCloseMenuOnScroll(isOpen, closeMenu) {
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) closeMenu();
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen, closeMenu]);
}
