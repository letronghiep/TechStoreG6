import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAllSelector = useSelector.withTypes<RootState>();
