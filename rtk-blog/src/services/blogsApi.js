import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"; // if you don't include /react then you won't be able to export those hooks at the end
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

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
    addBlog: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(db, "blogs"), {
            ...data,
            timestamp: serverTimestamp(),
          });
          return { data: "ok" }; // to remove error from console
        } catch (err) {
          return { error: err };
        }
      },
    }),
  }),
});

export const { useFetchBlogsQuery, useAddBlogMutation } = blogsApi;
