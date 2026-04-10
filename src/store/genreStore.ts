import type Genre from "@/entities/Genre";
import { create } from "zustand";

interface GenresState {
  genres: Genre[];
  setGenreAtIndex: (index: number, genre: Genre) => void;
  setInitialGenres: (genres: Genre[]) => void;
}

const useGenresStore = create<GenresState>((set) => ({
  genres: [],
  setGenreAtIndex: (index: number, genre: Genre) =>
    set((state) => {
      const updated = [...state.genres];
      updated[index] = genre;
      return { genres: updated };
    }),
  setInitialGenres: (genres) => set({ genres: genres }),
}));

export default useGenresStore;
