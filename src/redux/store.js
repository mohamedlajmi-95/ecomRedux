import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articleSlice";
import categoriesReducer from "../features/categorieSlice";
import scategoriesReducer from "../features/scategorieSlice";
import cartReducer from "../features/cartSlice"
const store = configureStore({
  reducer: {
    storearticles: articlesReducer,
    storecategories: categoriesReducer,
    storescategories: scategoriesReducer,
    storecart : cartReducer,
  },
});
export default store;
