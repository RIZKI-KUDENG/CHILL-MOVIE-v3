import { create } from "zustand";
import apiClient from "../lib/axios";
import bcrypt from "bcryptjs";

export const useAuthStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("users")) || null,
  token: null,
  isLoading: false,
  error: null,

  register: async (username, password) => {
    set({ isLoading: true });
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const userData = { username, password: hashedPassword };
      await apiClient.post("/users", userData);
      set({ isLoading: false });
      return true;
    } catch (err) {
      const errorMessage = err.response.data.message || err.message;
      set({ isLoading: false, error: errorMessage });
      return false;
    }
  },
  login: async (username, password) => {
    set({ isLoading: true });
    try {
      const user = await apiClient.get(`/users`, { params: { username } });
      if (user.data.length === 0) {
        throw new Error("User not found");
      }
      const foundUser = user.data[0];
      const isPasswordMatch = bcrypt.compareSync(password, foundUser.password);
      if (isPasswordMatch) {
        const fakeToken = `fake-token-for ${foundUser.id}` 
        localStorage.setItem("user", JSON.stringify(foundUser));
        set({ user: foundUser,token: fakeToken, isLoading: false, error: null });
      } else {
        throw new Error("Password salah");
      }
    } catch (err) {
      const errorMessage = err.message;
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },
}));

