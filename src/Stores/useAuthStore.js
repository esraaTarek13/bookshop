import { create } from "zustand";
import Cookies from "js-cookie";

export const useAuthStore = create((set) => {
    return {
        token: Cookies.get("token") || null,

        login: (token, rememberMe = false) => {
            Cookies.set("token", token, {
                expires: rememberMe ? 30 : 1,
                secure: true,
                sameSite: "Strict",
            });
            set({ token });
        },

        logout: () => {
            set({ token: null });
            Cookies.remove("token");
        },
    };
});
