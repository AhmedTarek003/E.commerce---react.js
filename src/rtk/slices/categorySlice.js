import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { BASE_URL } from "../../utils/apiURL";

export const categoryfetch = createAsyncThunk("category/fetch", async () => {
  const res = await fetch(`${BASE_URL}/products/categories`);
  const data = res.json();
  return data;
});

export const fetchSingleCategory = createAsyncThunk(
  "singlecategory/fetch",
  async (category) => {
    const res = await fetch(`${BASE_URL}/products/category/${category}`);
    const data = res.json();
    return data;
  }
);

const initialState = {
  category: [],
  categoryStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductStatus: STATUS.IDLE,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoryfetch.pending, (state, action) => {
      state.categoryStatus = STATUS.LOADING;
    });
    builder.addCase(categoryfetch.fulfilled, (state, action) => {
      state.category = action.payload;
      state.categoryStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(categoryfetch.rejected, (state, action) => {
      state.categoryStatus = STATUS.FAILED;
    });
    builder.addCase(fetchSingleCategory.pending, (state, action) => {
      state.categoryStatus = STATUS.LOADING;
    });
    builder.addCase(fetchSingleCategory.fulfilled, (state, action) => {
      state.categoryProducts = action.payload;
      state.categoryStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchSingleCategory.rejected, (state, action) => {
      state.categoryStatus = STATUS.FAILED;
    });
  },
});

export const { extraReducers } = categorySlice.actions;
export default categorySlice.reducer;

export const getAllCategory = (state) => state.category.category;
export const getCategoryStatus = (state) => state.category.categoryStatus;

export const getCategoryProducts = (state) =>
  state.category.categoryProducts.products;
export const getCategoryProductsStatus = (state) =>
  state.category.categoryStatus;
