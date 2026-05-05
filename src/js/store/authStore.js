import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setAuth: (userData) =>
    set({
      user: {
        name: userData.name,
        email: userData.email,
        avatar: userData.avatar,
        venueManager: userData.venueManager,
      },
      token: userData.accessToken,
    }),

  clearAuth: () =>
    set({
      user: null,
      token: null,
    }),
}));
