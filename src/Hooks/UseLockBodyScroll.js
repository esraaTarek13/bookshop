import { useLayoutEffect } from "react";


// Hook to lock body scroll when a modal is open
export default function useLockBodyScroll(isLocked) {
    useLayoutEffect(() => {
        if (isLocked) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isLocked]);
}
