// Create Api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsData } from "~/models/data-fetching";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  endpoints: (builder) => ({
    getAllProductsInHome: builder.query<ProductsData, void>({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
    getProductById: builder.query<ProductsData, void>({
      query: (id) => ({
        url: `product/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllProductsInHomeQuery, useGetProductByIdQuery } = productApi;
