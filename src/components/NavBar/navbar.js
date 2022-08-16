import React from "react";
import { NavLink } from "react-router-dom";
import { linkStyle, mainDivStyleNavBar } from "./navbarStyles";

export const Navbar = () => {
  return (
    <div style={mainDivStyleNavBar}>
      <NavLink style={linkStyle} to="/home">Home</NavLink>

      <NavLink style={linkStyle} to="/cart">Cart</NavLink>

      <NavLink style={linkStyle} to="/books">Books</NavLink>

      <NavLink style={linkStyle} to="/Author">Author</NavLink>
    </div>
  );
};
