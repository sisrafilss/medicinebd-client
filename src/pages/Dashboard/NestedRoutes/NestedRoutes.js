import { Box } from '@mui/system';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';

const NestedRoutes = () => {
    return (
        <Box>
          <Routes>
            <Route path="add-product" element={<AddProduct />} />
          </Routes>
        </Box>
    );
};

export default NestedRoutes;