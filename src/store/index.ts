import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "~/contexts/categorySlice";
import { categoryApi } from "~/services/categories";
import { newsApi } from "~/services/news";
import { productApi } from "~/services/products";
export const store = configureStore({
  reducer: {
    categories: categorySlice,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      productApi.middleware,
      newsApi.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
