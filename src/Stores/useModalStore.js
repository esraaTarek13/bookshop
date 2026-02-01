import { create } from "zustand";

const useModalStore = create((set) => ({
    isAuthModalOpen: false,

    openAuthModal: () => set({ isAuthModalOpen: true }),
    closeAuthModal: () => set({ isAuthModalOpen: false }),
    toggleAuthModal: () =>
        set((state) => ({ isAuthModalOpen: !state.isAuthModalOpen })),
}))

export default useModalStore;
