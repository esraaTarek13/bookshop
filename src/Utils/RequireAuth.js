import Cookies from 'js-cookie';
import useModalStore from './../Stores/useModalStore';


export const RequireAuth = (action) => {
    const openAuthModal = useModalStore((state) => state.openAuthModal);

    const handleRequireAuth = () => {
        const token = Cookies.get("token");
        if (token) {
            action();
        } else {
            openAuthModal();
        }
    };

    return handleRequireAuth;
};
