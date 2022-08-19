import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addQuantityAction,
  addTotalAction,
  RmvQuantityAction,
} from "../../redux/actions/action";
import { AddSubQuantityStyles } from "./cartStyles";

export const AddSubQuantity = ({ id }) => {
  const dispatch = useDispatch();
  const handleAdd = (id) => {
    setNum((prv) => (prv += 1));
    dispatch(addQuantityAction(id, numberToBeUsed));
  };

  const handleSub = (id) => {
    setNum((prv) => (prv -= 1));
    dispatch(RmvQuantityAction(id, numberToBeUsed));
  };
  const CartDataSelector = useSelector((state) => state.Cart);

  const [totalSum, setTotalSum] = useState(0);
  const [num, setNum] = useState(0);
  const [bookQuantity, setBookQuantity] = useState(0);

  const numberToBeUsed = Number(num);
  useEffect(() => {
    const total = [];
    const dataTotal = CartDataSelector.map((book) => {
      const value = book.price * book.Quantity;
      total.push(value);
      const sum = total.reduce((partialSum, a) => partialSum + a, 0);
      setTotalSum(sum);
      setBookQuantity(book.Quantity);
      dispatch(addTotalAction(sum));
    });
  }, [num]);

  return (
    <div style={AddSubQuantityStyles.main}>
      <button
        style={AddSubQuantityStyles.btn}
        onClick={() => {
          handleAdd(id);
        }}
      >
        +
      </button>
      <button
        style={AddSubQuantityStyles.btn}
        onClick={() => {
          handleSub(id);
        }}
      >
        -
      </button>
    </div>
  );
};
