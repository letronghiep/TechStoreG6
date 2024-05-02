// Create Api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductData, ProductsData } from "~/models/data-fetching";

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
    getProductBySlug: builder.query<ProductData, string>({
      query: (slug) => `product/${slug}`,
    }),
  }),
});
export const { useGetAllProductsInHomeQuery, useGetProductBySlugQuery } =
  productApi;
