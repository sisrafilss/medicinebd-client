import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SidebarNavigation = () => {
  return (
    <>
      <ListItem button>
        <Link to="add-product" className="nav-link">
          Add Product
        </Link>
        <br />
        <Link to="manage-product" className="nav-link">
          Manage Product
        </Link>
      </ListItem>
    </>
  );
};

export default SidebarNavigation;
