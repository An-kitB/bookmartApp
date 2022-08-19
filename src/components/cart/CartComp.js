import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BillingForm } from "../billingForm/billingForm";
import { Checkout } from "../checkout/checkout";
import { BottomBtns } from "./BottomBtns";
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
            <div
              style={{
                padding: (15, 15),
              }}
            >
              {CartDataSelector.map((book) => (
                <div>
                  <div
                    style={{
                      padding: (15, 15),
                    }}
                  >
                    <CardDataRender {...book} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginLeft: window.innerWidth / 6}}>
              <BillingForm />
            </div>
          </div>
          <div>
            <BottomBtns />
          </div>
        </div>
      ) : (
        <h1>Nothing to show</h1>
      )}
    </div>
  );
};
