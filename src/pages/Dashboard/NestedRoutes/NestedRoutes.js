import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageBanner from "../ManageBanner/ManageBanner";
import MyOrders from "../MyOrders/MyOrders";

import ManageProducts from "../ManageProducts/ManageProducts";
import Review from "../Review/Review";

const NestedRoutes = () => {
  return (
    <Box>
      {/* Admin Routes */}
      <Routes>
        <Route path="add-product" element={<AddProduct />} />
      </Routes>
      <Routes>
        <Route path="manage-banner" element={<ManageBanner />} />
      </Routes>
      <Routes>
        <Route path="manage-product" element={<ManageProducts />} />
      </Routes>
      <Routes>
        <Route path="make-admin" element={<MakeAdmin />} />
      </Routes>
      <Routes>
        <Route path="my-orders" element={<MyOrders />} />
      </Routes>
      <Routes>
        <Route path="review" element={<Review />} />
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
