import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AddSubQuantity } from "./AddSubQuantity";
import { cartStyles } from "./cartStyles";

export const CardDataRender = ({ id, img, name, authorName, price }) => {
  const stateSel = useSelector((state) => state.Qu);
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
          <p> Quantity:{stateSel[id-1].Quantity}</p>
          <div style={cartStyles.btnStyleDiv}>
            <AddSubQuantity id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
