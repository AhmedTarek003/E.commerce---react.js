import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/apiURL";
import { STATUS } from "../../utils/status";

export const fetchSearch = createAsyncThunk("search/fetch", async (search) => {
  const res = await fetch(`${BASE_URL}/products/search?q=${search}`);
  const data = await res.json();
  return data;
});

const initialState = {
  searcharr: [],
  searchStatus: STATUS.IDLE,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.searchStatus = STATUS.LOADING;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.searcharr = action.payload;
      state.searchStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.searchStatus = STATUS.FAILED;
    });
  },
});

export const { extraReducers } = searchSlice.actions;
export default searchSlice.reducer;

export const getAllSearch = (state) => state.search.searcharr.products;
export const getSearchStatus = (state) => state.search.searchStatus;
