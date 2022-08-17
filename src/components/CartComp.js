import React from "react";
import { useSelector } from "react-redux";
import { BillingForm } from "./billingForm/billingForm";
import BookCard from "./BookCard";
import { SubTotal } from "./helper/subTotal";

export const CartComp = () => {
  const CartDataSelector = useSelector((state) => state.Cart);
  return (
    <div style={{ marginLeft: 90 }}>
      <h1>Cart</h1>
      {CartDataSelector.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div>
            {CartDataSelector.map((book) => (
              <div>
                <div>
                  <BookCard {...book} />
                  Quantity - {book.Quantity}
                </div>
              </div>
            ))}
            <SubTotal />
          </div>
          <div style={{ marginLeft: window.innerWidth / 3 }}>
            <BillingForm />
          </div>
        </div>
      ) : (
        <h1>Nothing to show</h1>
      )}
    </div>
  );
};
