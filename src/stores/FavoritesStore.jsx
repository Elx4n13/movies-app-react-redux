import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: JSON.parse(localStorage.getItem("FAVORITES")) || [],
};
const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites = [action.payload, ...state.favorites];
      localStorage.setItem("FAVORITES", JSON.stringify(state.favorites));
    },
    deleteFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("FAVORITES", JSON.stringify(state.favorites));
    },
  },
});
export const { addFavorites, deleteFavorites } = favorites.actions;

export default favorites.reducer;
