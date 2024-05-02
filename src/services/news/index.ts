// Create Api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArrayData } from "~/models/data-fetching";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query<ArrayData, void>({
      query: () => "news",
    }),
  }),
});
export const { useGetAllNewsQuery } = newsApi;