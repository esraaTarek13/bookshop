import { create } from "zustand";
import Cookies from 'js-cookie';


export const useAuthStore = create((set) => ({
    token: Cookies.get("token") || null,

    login: (token) => {
        Cookies.set("token", token, {
            expires: 7,
            secure: true,
            sameSite: "Strict"
        });
        set({ token });
    },

    logout: () => {
        Cookies.remove("token");
        set({ token: null });
    },
}));