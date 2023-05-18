import { create } from "zustand";

interface LoginModalState {
  open: boolean;
  toggleLoginModal: () => void;
}

export const useLoginModal = create<LoginModalState>((set) => ({
  open: false,
  toggleLoginModal: () => set((state) => ({ open: !state.open })),
}));
