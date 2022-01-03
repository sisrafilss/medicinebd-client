import { Box } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
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
      <Routes>
        <Route path="make-admin" element={<MakeAdmin />} />
      </Routes>
    </Box>
  );
};

export default NestedRoutes;
