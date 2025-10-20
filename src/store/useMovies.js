import { create } from "zustand";
import apiClient from "../lib/axios";

export const useMovies = create((set, get) => ({
  movies: [],
  isLoading: false,
  error: null,
  getMovies: async () => {
    set({ isLoading: true });
    try {
      const response = await apiClient.get("/movies");
      if (!response) {
        throw new Error("Failed to fetch movies");
      }
      set({ isLoading: false, movies: response.data });
      return true;
    } catch (err) {
      const errorMessage = err.response.data.message || err.message;
      set({ isLoading: false, error: errorMessage });
      return false;
    }
  },
  addMovie: async (newMovie) => {
    set({ isLoading: true });
    try {
      const response = await apiClient.post("/movies", newMovie);
      if (!response) {
        throw new Error("Failed to add movie");
      }
      set({ isLoading: false });
      return true;
    } catch (err) {
      const errorMessage = err.response.data.message || err.message;
      set({ isLoading: false, error: errorMessage });
      return false;
    }
  },
  updateMovie: async (movieId, updateData) => {
    set({ isLoading: true, error: null });
    try {
      await apiClient.put(`/movies/${movieId}`, updateData);

      await get().getMovies();
      return true;
    } catch (err) {
      if (err.response && err.response.status === 404) {
        set({
          isLoading: false,
          error: "Gagal: Film tidak ditemukan. Mungkin sudah dihapus.",
        });
      } else {
        const errorMessage = err.response?.data?.message || err.message;
        set({ isLoading: false, error: errorMessage });
      }
      return false;
    }
  },
  deleteMovie: async (movieId) => {
    set({ isLoading: true });
    try {
      await apiClient.delete(`/movies/${movieId}`);
      await get().getMovies();
      return true;
    } catch (err) {
      const errorMessage = err.response.data.message || err.message;
      set({ isLoading: false, error: errorMessage });
      return false;
    }
  }
}));
