import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/apiURL";
import { STATUS } from "../../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
};

export const fetechProducts = createAsyncThunk(
  "products/fetch",
  async (limit) => {
    const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
    const data = await res.json();
    return data;
  }
);

const porductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetechProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(fetechProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productsStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetechProducts.rejected, (state, action) => {
      state.products = action.payload;
      state.productsStatus = STATUS.FAILED;
    });
  },
});

export const { extraReducers } = porductsSlice.actions;
export default porductsSlice.reducer;

export const getAllProducts = (state) => state.products.products.products;
export const getPorductsStatus = (state) => state.products.productsStatus;
