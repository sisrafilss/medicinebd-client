import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";

const NestedRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="add-product" element={<AddProduct />} />
      </Routes>
      <Routes>
        <Route path="add-product" element={<ManageProducts />} />
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
