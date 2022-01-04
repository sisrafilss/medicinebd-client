import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  productAdded: false,
  bannreAdded: false,
};

const adminDashboard = createSlice({
  name: "adminDashbord",
  initialState,
  reducers: {
    // State change for successfully product added
    productAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.productAdded = true;
    },
    setProductAdded: (state, action) => {
      state.productAdded = action.payload.status;
    },
    // State chane for successfully banner added
    bannerAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.bannreAdded = true;
    },
    setBannerAdded: (state, action) => {
      state.bannreAdded = action.payload.status;
    },
  },
});

export const {
  productAddedSuccess,
  setProductAdded,
  bannerAddedSuccess,
  setBannerAdded,
} = adminDashboard.actions;
export default adminDashboard.reducer;

// Action Creators

// Save Product to DB

export const addProductData = (data) =>
  apiCallBegan({
    url: "/products",
    method: "post",
    data,
    onSuccess: productAddedSuccess.type,
  });

// Save Banner to DB
export const addBannerToDB = (data) =>
  apiCallBegan({
    url: "/banners",
    method: "post",
    data,
    onSuccess: bannerAddedSuccess.type,
  });
