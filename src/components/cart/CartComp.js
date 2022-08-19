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

  const totalSumSelector = useSelector((state) => state.TotalSum);

  useEffect(() => {
    console.log("bfcuwegu", totalSumSelector);
  }, [totalSumSelector]);

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
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginLeft: window.innerWidth / 3 }}>
              <BillingForm />
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <Checkout />
          </div>
        </div>
      ) : (
        <h1>Nothing to show</h1>
      )}
    </div>
  );
};
