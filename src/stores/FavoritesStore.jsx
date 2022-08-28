import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: [],
};
const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites = [action.payload, ...state.favorites];
    },
  },
});
export const { addFavorites } = favorites.actions;

export default favorites.reducer;
