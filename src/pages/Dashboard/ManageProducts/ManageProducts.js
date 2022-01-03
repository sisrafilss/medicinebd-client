import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ManageProducts = () => {
  let i = 1;

  const allProducts = [
    {
      id: 1,
      name: "Thai Adult Diaper",
      img: "https://i.ibb.co/g6X363z/p1.png",
      catagory: "Baby & Mom Care",
      price: 900,
    },
    {
      id: 2,
      name: "Thai Adult Diaper",
      img: "https://i.ibb.co/g6X363z/p1.png",
      catagory: "Baby & Mom Care",
      price: 900,
    },
    {
      id: 3,
      name: "Thai Adult Diaper",
      img: "https://i.ibb.co/g6X363z/p1.png",
      catagory: "Baby & Mom Care",
      price: 900,
    },
    {
      id: 4,
      name: "Thai Adult Diaper",
      img: "https://i.ibb.co/g6X363z/p1.png",
      catagory: "Baby & Mom Care",
      price: 900,
    },
    {
      id: 5,
      name: "Thai Adult Diaper",
      img: "https://i.ibb.co/g6X363z/p1.png",
      catagory: "Baby & Mom Care",
      price: 900,
    },
    {
      id: 6,
      name: "Adovas",
      img: "https://i.ibb.co/NsQ4F3m/p2.png",
      catagory: "Herbal Care",
      price: 65,
    },
    {
      id: 7,
      name: "Adovas",
      img: "https://i.ibb.co/NsQ4F3m/p2.png",
      catagory: "Herbal Care",
      price: 65,
    },
    {
      id: 8,
      name: "Adovas",
      img: "https://i.ibb.co/NsQ4F3m/p2.png",
      catagory: "Herbal Care",
      price: 65,
    },
    {
      id: 9,
      name: "Adovas",
      img: "https://i.ibb.co/NsQ4F3m/p2.png",
      catagory: "Herbal Care",
      price: 65,
    },
    {
      id: 10,
      name: "Adovas",
      img: "https://i.ibb.co/NsQ4F3m/p2.png",
      catagory: "Herbal Care",
      price: 65,
    },
  ];

  const allCatagories = ["Baby & Mom Care", "Herbal Care"];
  const [catagory, setCatagory] = React.useState("");
  const [catagoryProduts, setCatagoryProducts] = React.useState([]);

  const handleChange = (event) => {
    setCatagory(event.target.value);
    const products = allProducts.filter(
      (p) => p.catagory === event.target.value
    );
    setCatagoryProducts(products);
  };

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure, you want to delete?");
    if (procced) {
      alert("Product Deleted Successfully!");
      //   setReload(!reload);
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "green" }}
        gutterBottom
      >
        Please Select Product Catagory
      </Typography>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <FormControl sx={{ m: 1, minWidth: 280 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Select Catagory
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={catagory}
            onChange={handleChange}
            autoWidth
            label="Select Catagory"
          >
            {allCatagories.map((catagory) => (
              <MenuItem key={catagory} value={catagory}>
                {catagory}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {catagoryProduts.length > 0 ? (
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
              {catagoryProduts.map((product) => (
                <TableRow
                  key={product?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i++}
                  </TableCell>
                  <TableCell align="center">{product?.name}</TableCell>
                  <TableCell align="center">{product?.catagory}</TableCell>
                  <TableCell align="center">{"Product Image"}</TableCell>
                  <TableCell align="center">BDT {product?.price}</TableCell>
                  <TableCell align="center">
                    <button
                      style={{ border: "none", marginRight: "5px" }}
                      onClick={() => handleDelete(product?.id)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </button>
                    <button style={{ border: "none" }}>
                      <EditIcon sx={{ color: "blue" }} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer></TableContainer>
      )}
    </Box>
  );
};

export default ManageProducts;
