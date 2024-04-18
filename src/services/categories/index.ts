// Create Api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArrayData } from "~/models/data-fetching";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<ArrayData, void>({
      query: () => "category",
    }),
  }),
});
export const { useGetAllCategoriesQuery } = categoryApi;
