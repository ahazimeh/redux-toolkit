import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      queryFn() {
        return {
          data: "ok",
        };
      },
    }),
  }),
});

export const { useFetchBlogsQuery } = blogsApi;
