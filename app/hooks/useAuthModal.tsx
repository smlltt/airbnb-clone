import { create } from "zustand";

interface AuthModalState {
  open: boolean;
  toggleAuthModal: () => void;
}

export const useAuthModal = create<AuthModalState>((set) => ({
  open: false,
  toggleAuthModal: () => set((state) => ({ open: !state.open })),
}));
