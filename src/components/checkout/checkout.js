import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const AddressSelector = useSelector((state) => state.Address);
  const totalSumSelector = useSelector((state) => state.TotalSum);

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const navigate = useNavigate();

  console.log(isCheckingOut);
  const handleCheckout = () => {

    AddressSelector.length > 0 ? navigate("/Checkout") : alert("need address");
  };
  return (
    <div style={{ width: window.innerWidth/2, display: "flex", justifyContent: "space-between" }}>
      <button onClick={handleCheckout}>Checkout</button>
      <p> subTotal : {totalSumSelector}</p>{" "}
    </div>
  );
};




