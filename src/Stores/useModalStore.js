import { create } from "zustand";

const useModalStore = create((set) => ({
    isAuthModalOpen: false,
    isProfileMenuOpen: false,

    openAuthModal: () => set({ isAuthModalOpen: true }),
    closeAuthModal: () => set({ isAuthModalOpen: false }),

    openProfileMenu: () => set({ isProfileMenuOpen: true }),
    closeProfileMenu: () => set({ isProfileMenuOpen: false }),

    toggleModal: () => set((state) => ({isProfileMenuOpen: !state.isProfileMenuOpen}))
}))

export default useModalStore;
