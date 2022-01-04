import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  products: {
    productAdded: false,
  },
  banners: {
    allBanner: [],
    bannreAdded: false,
  },
};

const adminDashboard = createSlice({
  name: "adminDashbord",
  initialState,
  reducers: {
    // State change for successfully product added
    productAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.products.productAdded = true;
    },
    setProductAdded: (state, action) => {
      state.products.productAdded = action.payload.status;
    },
    // State chane for successfully banner added
    bannerAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.banners.bannreAdded = true;
    },
    setBannerAdded: (state, action) => {
      state.banners.bannreAdded = action.payload.status;
    },
    // Set All banner to banners.allBanner
    setAllBanner: (state, action) => {
      state.banners.allBanner = action.payload;
    },
  },
});

export const {
  productAddedSuccess,
  setProductAdded,
  bannerAddedSuccess,
  setBannerAdded,
  setAllBanner,
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

// Load Banners form Database
export const loadBanners = () =>
  apiCallBegan({
    url: "/banners",
    onSuccess: setAllBanner.type,
  });

// Save Banner to DB
export const addBannerToDB = (data) =>
  apiCallBegan({
    url: "/banners",
    method: "post",
    data,
    onSuccess: bannerAddedSuccess.type,
  });
