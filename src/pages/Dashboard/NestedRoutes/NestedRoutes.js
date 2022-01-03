import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageBanner from "../ManageBanner/ManageBanner";
import ManageProducts from "../ManageProducts/ManageProducts";

const NestedRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="add-product" element={<AddProduct />} />
      </Routes>
      <Routes>
        <Route path="manage-banner" element={<ManageBanner />} />
      </Routes>
      <Routes>
        <Route path="manage-product" element={<ManageProducts />} />
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
