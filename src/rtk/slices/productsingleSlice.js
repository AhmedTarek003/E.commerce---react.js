import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { BASE_URL } from "../../utils/apiURL";

export const fetchProductSingle = createAsyncThunk(
  "productsingle/fetch",
  async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    const data = res.json();
    return data;
  }
);

const initialState = {
  productsingle: [],
  productsingleStatus: STATUS.IDLE,
  prods: [],
  prodStatus: STATUS.IDLE,
};

const productsingleSlice = createSlice({
  name: "productsingle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductSingle.pending, (state, action) => {
      state.productsingleStatus = STATUS.LOADING;
    });
    builder.addCase(fetchProductSingle.fulfilled, (state, action) => {
      state.productsingle = action.payload;
      state.productsingleStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchProductSingle.rejected, (state, action) => {
      state.productsingleStatus = STATUS.FAILED;
    });
  },
});

export const { extraReducers } = productsingleSlice.actions;
export default productsingleSlice.reducer;

export const getProductSingle = (state) => state.singleprod.productsingle;
export const getProductSingleStatus = (state) =>
  state.singleprod.productsingleStatus;
