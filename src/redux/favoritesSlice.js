import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   toggleFavorite: (state, action) => {
      const recipe = action.payload;
      if (!recipe) return;
      const id = recipe.idFood;
      const index = state.favoriterecipes.findIndex((r) => r.idFood === id);
      if (index >= 0) {
        state.favoriterecipes.splice(index, 1);
      } else {
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
