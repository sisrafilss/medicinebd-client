import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  apiResponse: {},
};

const adminDashboard = createSlice({
  name: "adminDashbord",
  initialState,
  reducers: {
    setApiResponse: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setApiResponse } = adminDashboard.actions;
export default adminDashboard.reducer;

// Action Creators
const url = "/products";

export const addProductData = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data: { data },
    onSuccess: setApiResponse.type,
  });
