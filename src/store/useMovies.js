import { create } from "zustand";
import apiClient from "../lib/axios";

export const useMovies = create((set)=> ({
    movies: [],
    isLoading: false,
    error: null,
    getMovies: async () => {
        set({isLoading: true})
        try {
            const response = await apiClient.get("/movies");
            if(!response){
                throw new Error("Failed to fetch movies")
            }
            set({isLoading: false, movies: response.data})
            return true
        }catch (err){
            const errorMessage = err.response.data.message || err.message;
            set({isLoading: false, error: errorMessage})
            return false
        }
    }
}))