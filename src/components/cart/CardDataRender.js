import React from "react";
import { useDispatch } from "react-redux";
import { addQuantityAction } from "../../redux/actions/action";

export const CardDataRender = ({
  id,
  img,
  name,
  authorName,
  Quantity,
  price,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 500 }}>
        <h1>{name}</h1>
        <h2>{authorName}</h2>
        <h3>{price}</h3>
        <h4>{Quantity}</h4>
      </div>

      <div style={{ marginLeft: 50 }}>
        <img src={img} />
      </div>
    </div>
  );
};
