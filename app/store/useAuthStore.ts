import { create } from "zustand";

type Store = {
  ShowAuth: boolean;
  ShowRegister: boolean;
  showEmail: boolean;
  setShowAuth: (value: boolean) => void;
  setShowRegister: (value: boolean) => void;
  setShowEmail: (value: boolean) => void;
  showOnly: (view: "auth" | "register" | "email") => void;
};

export const useAuthStore = create<Store>((set) => ({
  ShowAuth: true,
  ShowRegister: false,
  showEmail: false,

  setShowAuth: (value) => set({ ShowAuth: value }),
  setShowRegister: (value) => set({ ShowRegister: value }),
  setShowEmail: (value) => set({ showEmail: value }),

  showOnly: (view) => {
    set({
      ShowAuth: view === "auth",
      ShowRegister: view === "register",
      showEmail: view === "email",
    });
  },
}));
