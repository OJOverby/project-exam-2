import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setAuth: (userData) =>
    set({
      user: userData,
      token: userData.accessToken
    }),

  clearAuth: () =>
    set({
      user: null,
      token: null
    })
}));