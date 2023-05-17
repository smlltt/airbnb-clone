import { create } from "zustand";

interface RegisterModalState {
  open: boolean;
  toggleRegisterModal: () => void;
}

export const useRegisterModal = create<RegisterModalState>((set) => ({
  open: false,
  toggleRegisterModal: () => set((state) => ({ open: !state.open })),
}));
