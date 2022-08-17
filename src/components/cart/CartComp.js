import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantityAction,
  RmvQuantityAction,
} from "../../redux/actions/action";
import { BillingForm } from "../billingForm/billingForm";
import { Checkout } from "../checkout/checkout";
import { CardDataRender } from "./CardDataRender";

export const CartComp = () => {
  const CartDataSelector = useSelector((state) => state.Cart);

  const [totalSum, setTotalSum] = useState(0);
  const [num, setNum] = useState(0);
  const numberToBeUsed = Number(num);
  console.log("comp", CartDataSelector);
  useEffect(() => {
    const total = [];
    const dataTotal = CartDataSelector.map((book) => {
      const value = book.price * book.Quantity;
      total.push(value);
      const sum = total.reduce((partialSum, a) => partialSum + a, 0);
      setTotalSum(sum);
    });
  }, [num]);

  const dispatch = useDispatch();
  const handleAdd = (id) => {
    setNum((prv) => (prv += 1));
    dispatch(addQuantityAction(id, numberToBeUsed));
  };

  const handleSub = (id) => {
    setNum((prv) => (prv -= 1));
    dispatch(RmvQuantityAction(id, numberToBeUsed));
  };

  return (
    <div style={{ marginLeft: 90 }}>
      <h1>Cart</h1>
      {CartDataSelector.length > 0 ? (
        <div>
          <div style={{ display: "flex" }}>
            <div>
              {CartDataSelector.map((book) => (
                <div>
                  <div>
                    <CardDataRender {...book} />
                    <button
                      onClick={() => {
                        handleAdd(book.id);
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        handleSub(book.id);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
              <div>subTotal :{totalSum}</div>
            </div>

            <div style={{ marginLeft: window.innerWidth / 3 }}>
              <BillingForm />
            </div>
          </div>
          <div style={{marginTop:40}}>
          <Checkout />
        </div>
        </div>
      ) : (
        <h1>Nothing to show</h1>
      )}
    </div>
  );
};
