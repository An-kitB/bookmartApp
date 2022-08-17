import React from "react";
import { CartComp } from "../cart/CartComp";
import { Navbar } from "../NavBar/navbar";

export const CartPage = () => {
  return (
    <div>
      <Navbar />
      <CartComp/>
    </div>
  );
};
