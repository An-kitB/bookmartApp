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
    dispatch(addQuantityAction(id, numberToBeUsed));
    setNum((prv) => (prv += 1));
  };

  const handleSub = (id) => {
    setNum((prv) => (prv -= 1));
    dispatch(RmvQuantityAction(id, numberToBeUsed));
  };
  const CartDataSelector = useSelector((state) => state.Cart);
  const QuDataSelector = useSelector((state) => state.Qu);
  const [totalSum, setTotalSum] = useState(0);
  const [num, setNum] = useState(0);

  function getDifference(array1, array2) {
    return array1.filter((object1) => {
      return array2.some((object2) => {
        return object1.id === object2.id;
      });
    });
  }

  const numberToBeUsed = Number(num);
  useEffect(() => {
    const total = [];
    const data = getDifference(QuDataSelector, CartDataSelector);

    const dataTotal = data.map((book) => {
      const value = book.price * book.Quantity;
      total.push(value);
      const sum = total.reduce((partialSum, a) => partialSum + a, 0);
      setTotalSum(sum);

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
