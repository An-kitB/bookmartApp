import React from "react";
import { useSelector } from "react-redux";

export const SubTotal = () => {
  const CartDataSelector = useSelector((state) => state.Cart);
  console.log("ejhfnfennejgn", CartDataSelector);
  const dataLength = CartDataSelector.length;
  const num = Number(dataLength);
//   const calcFun = () => {
//     return (
//       Number(CartDataSelector[0].price) * Number(CartDataSelector[0].Quantity)
//     );
//   };
  const total = [];
  const dataTotal = CartDataSelector.map((book) => {
    const value = book.price * book.Quantity;
    total.push(value);
  });
  const sum = total.reduce((partialSum, a) => partialSum + a, 0);
  console.log("totla arry", sum);

  return <div>subTotal :{sum}</div>;
};
