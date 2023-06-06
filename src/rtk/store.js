import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import productSlice from "./slices/productSlice";
import categorySlice from "./slices/categorySlice";
import productsingleSlice from "./slices/productsingleSlice";
import cartpageSlice from "./slices/cartSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    products: productSlice,
    category: categorySlice,
    singleprod: productsingleSlice,
    cart: cartpageSlice,
    search: searchSlice,
  },
});
