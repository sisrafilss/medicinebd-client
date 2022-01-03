import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [reload, setReload] = useState(false);
  let i = 1;

  //Get all products
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, [reload]);

  console.log(allProducts);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure, you want to delete?");
    if (procced) {
      alert("Product Deleted Successfully!");
      setReload(!reload);
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "green" }}
        gutterBottom
      >
        ALL PRODUCTS
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProducts.map((product) => (
              <TableRow
                key={product?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i++}
                </TableCell>
                <TableCell align="center">{product?.name}</TableCell>
                <TableCell align="center">{product?.cat_name}</TableCell>
                <TableCell align="center">{"Product Image"}</TableCell>
                <TableCell align="center">BDT {product?.price}</TableCell>
                <TableCell align="center">
                  <button
                    onClick={() => handleDelete(product?.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageProducts;
