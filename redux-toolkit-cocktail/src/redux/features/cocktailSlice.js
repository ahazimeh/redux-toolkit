import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktail = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res) => res.json());
  }
);

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktailSlice: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drink;
    },
    [fetchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cocktailSlice.reducer;
