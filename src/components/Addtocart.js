import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction, rmvFromCartAction } from "../redux/actions/action";

export const Addtocart = () => {
  const numberOfCopy = useSelector((state) => state);
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
      Addtocart
      <button onClick={handleAdd}>+</button>
      {num}
      <button onClick={handleRmv}>-</button>
    </div>
  );
};
