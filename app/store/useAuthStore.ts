import { create } from "zustand";

type Store = {
  ShowAuth: boolean;
  setShowAuth: (value: boolean) => void;
};

export const useAuthStore = create<Store>((set) => ({
  ShowAuth: true,
  setShowAuth: (value) => set({ ShowAuth: value }),
}));
