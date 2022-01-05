import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const ManageUsers = () => {
  let i = 1;
  const allUsers = [
    {
      id: 1,
      name: "Najmul Ovi",
      email: "najmul@gmail.com",
      img: "Najmul_Ovi.jpg",
      role: "",
    },
    {
      id: 2,
      name: "Najmul Ovi",
      email: "najmul@gmail.com",
      img: "Najmul_Ovi.jpg",
      role: "admin",
    },
    {
      id: 3,
      name: "Najmul Ovi",
      email: "najmul@gmail.com",
      img: "Najmul_Ovi.jpg",
      role: "",
    },
    {
      id: 4,
      name: "Najmul Ovi",
      email: "najmul@gmail.com",
      img: "Najmul_Ovi.jpg",
      role: "admin",
    },
    {
      id: 5,
      name: "Najmul Ovi",
      email: "najmul@gmail.com",
      img: "Najmul_Ovi.jpg",
      role: "",
    },
  ];

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "User has been deleted.", "success");
        //   setReload(!reload);
      }
    });
  };

  return (
    <Box>
      <Typography
        variant="h4"
        style={{ textAlign: "center", color: "green" }}
        gutterBottom
      >
        {allUsers.length > 0 && "All Registered Users"}
      </Typography>
      {allUsers.length > 0 ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Role</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((user) => (
                <TableRow
                  key={user?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i++}
                  </TableCell>
                  <TableCell align="center">{user?.name}</TableCell>
                  <TableCell align="center">{user?.email}</TableCell>
                  <TableCell align="center">{user?.img}</TableCell>
                  <TableCell align="center">
                    {user?.role ? (
                      <span
                        style={{
                          color: "#fff",
                          backgroundColor: "green",
                          padding: "5px",
                          borderRadius: "5px",
                        }}
                      >
                        Admin
                      </span>
                    ) : (
                      <span
                        style={{
                          color: "#fff",
                          backgroundColor: "red",
                          padding: "5px",
                          borderRadius: "5px",
                        }}
                      >
                        Not Admin
                      </span>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <button
                      style={{ border: "none" }}
                      onClick={() => handleDelete(user?.id)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ mt: 8 }}>
          <Typography
            sx={{
              fontWeight: 700,
              mt: 1,
              color: "red",
              textAlign: "center",
            }}
            variant="h4"
            component="div"
          >
            No User Found!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ManageUsers;
