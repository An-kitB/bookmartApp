// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// export const SubTotal = () => {
//   const CartDataSelector = useSelector((state) => state.Cart);
//   const [totalSum, setTotalSum] = useState(0);
//   console.log("comp", CartDataSelector);
//   useEffect(() => {
//     const total = [];
//     const dataTotal = CartDataSelector.map((book) => {
//       const value = book.price * book.Quantity;
//       total.push(value);
//       const sum = total.reduce((partialSum, a) => partialSum + a, 0);
//     });
//   }, [CartDataSelector, totalSum]);
//   return <div>subTotal :{totalSum}</div>;
// };
