import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const AddressSelector = useSelector((state) => state.Address);

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  console.log("inside checkout useEffect", AddressSelector);

  const navigate = useNavigate();
  console.log("jsur  a numnehbr", AddressSelector.length);

  console.log(isCheckingOut);
  const handleCheckout = () => {
    AddressSelector.length > 0 ? navigate("/Checkout") : alert("need address");
  };
  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};
