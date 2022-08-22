import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantityAction,
  addToCartAction,
  rmvFromCartAction,
} from "../redux/actions/action";

export const Addtocart = ({ id }) => {
  const quantityCart = useSelector((state) => state.Qu);
  // console.log("whbfre", quantityCart[id - 1].Quantity);
  const dispatch = useDispatch();

  const [copyNumber, setCopyNumber] = useState(1);
  const num = Number(copyNumber);

  useEffect(() => {}, [copyNumber]);

  const handleAdd = () => {
    dispatch(addQuantityAction(id));
    setCopyNumber((prv) => (prv += 1));
  };

  const handleRmv = () => {
    // numberOfCopy > 1 && dispatch(rmvFromCartAction());
  };

  return (
    <div>
      <p>How many you wanna purchase </p>
      <button onClick={handleRmv}>-</button>
      {quantityCart.length > 0 && quantityCart[id - 1].Quantity}
      <button onClick={handleAdd}>+</button>
    </div>
  );
};
