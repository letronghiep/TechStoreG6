import { RootState } from "./../store/index";
import { Category } from "./../models/category.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CategoriesState {
  categories: Category[];
}
const initialState: CategoriesState = {
  categories: [],
};
const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addParentCategories(state, action: PayloadAction<Category>) {
      state.categories.push(action.payload);
    },

    addCategories(state, action: PayloadAction<Category>) {
      state.categories.push(action.payload);
    },
  },
});
export const { addParentCategories, addCategories } = categorySlice.actions;
export const selectCategories = (state: RootState) =>
  state.categories.categories;
export default categorySlice.reducer;
