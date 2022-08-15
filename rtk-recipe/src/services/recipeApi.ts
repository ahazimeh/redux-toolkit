import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const YOUR_APP_KEY = "994dedbf24dedd34a37dc7e07dad007d";
const YOUR_APP_ID = "bc8ac880";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.edamam.com/" }),
  endpoints: (builder) => ({
    getRecipes: builder.mutation({
      query: ({ query, health }) => {
        return {
          url: `search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${health}`,
          method: "get",
        };
      },
    }),
  }),
});

export const { useGetRecipesMutation } = recipeApi;
