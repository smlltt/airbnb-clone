import { create } from "zustand";

interface RentModalState {
  open: boolean;
  toggleRentModal: () => void;
}

export const useRentModal = create<RentModalState>((set) => ({
  open: false,
  toggleRentModal: () => set((state) => ({ open: !state.open })),
}));
