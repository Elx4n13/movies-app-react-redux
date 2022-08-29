import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  watchList: JSON.parse(localStorage.getItem("WATCHLIST")) || [],
};
const watchList = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addWatchList: (state, action) => {
      state.watchList = [action.payload, ...state.watchList];
      localStorage.setItem("WATCHLIST", JSON.stringify(state.watchList));
    },
    deleteWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("WATCHLIST", JSON.stringify(state.watchList));
    },
  },
});
export const { addWatchList, deleteWatchList } = watchList.actions;

export default watchList.reducer;
