import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, rmvFromCartAction } from "../redux/actions/action";

export const Addtocart = () => {
  const numberOfCopy = useSelector((state) => state.Quantity);
  const [copyNumber, setCopyNumber] = useState(numberOfCopy);
  const num = Number(copyNumber);
  const dispatch = useDispatch();


  useEffect(() => {
    setCopyNumber(numberOfCopy);
  }, [numberOfCopy]);



  const handleAdd = () => {
    dispatch(addToCartAction());
  };

  const handleRmv = () => {
    numberOfCopy > 1 && dispatch(rmvFromCartAction());
  };

  return (
    <div>
      <p>How many you wanna purchase </p>
      <button onClick={handleRmv}>-</button>
      {num}
      <button onClick={handleAdd}>+</button>
    
    </div>


  );
};
