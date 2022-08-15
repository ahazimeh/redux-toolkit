import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const YOUR_APP_KEY = "c95fc1146837a691f3fb5035731b33b0";
const YOUR_APP_ID = "80702712";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "htpps://api.edamam.com/" }),
  endpoints: (builder) => ({
    getRecipes: builder.mutation({
      query: ({ query, health }) => {
        return {
          url: `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${health}`,
        };
      },
    }),
  }),
});

export const { useGetRecipesMutation } = recipeApi;
