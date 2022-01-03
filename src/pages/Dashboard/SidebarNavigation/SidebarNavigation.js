import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SidebarNavigation = () => {
  return (
    <>
      <ListItem button>
        <Link to="add-product" className="nav-link text-secondary">
          Add Product
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="manage-product" className="nav-link text-secondary">
          Manage Product
        </Link>
      </ListItem>
    </>
  );
};

export default SidebarNavigation;
