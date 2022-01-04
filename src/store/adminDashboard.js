import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  productAdded: false,
};

const adminDashboard = createSlice({
  name: "adminDashbord",
  initialState,
  reducers: {
    productAddedSuccess: (state, action) => {
      if (action.payload.insertedId) {
        state.productAdded = true;
      }
    },
    setProductAdded: (state, action) => {
      state.productAdded = action.payload.status;
    },
  },
});

export const { productAddedSuccess, setProductAdded } = adminDashboard.actions;
export default adminDashboard.reducer;

// Action Creators
const url = "/products";

export const addProductData = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
    onSuccess: productAddedSuccess.type,
  });
