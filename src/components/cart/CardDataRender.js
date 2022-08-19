import React from "react";
import { cartStyles } from "./cartStyles";

export const CardDataRender = ({
  id,
  img,
  name,
  authorName,
  Quantity,
  price,
}) => {
  return (
    <div style={cartStyles.main}>
      <div style={cartStyles.imgConatainer}>
        <img style={{ width: 250, height: 250 }} src={img} />
      </div>
      <div style={cartStyles.txtConatainer}>
        <div>
          <p style={cartStyles.txtStyle.heading}>{name}</p>
          <p>Author:{authorName}</p>
        </div>
        <div>
          <p style={cartStyles.txtStyle.Priceheading}>Price : {price}</p>
          <p> Quantity:{Quantity}</p>
        </div>
      </div>
    </div>
  );
};
