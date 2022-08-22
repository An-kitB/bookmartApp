import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AddSubQuantity } from "./AddSubQuantity";
import { cartStyles } from "./cartStyles";

export const CardDataRender = ({ id, img, name, authorName, price }) => {

  const stateSel = useSelector((state) => state.Qu);
const [num, setNum ]= useState(1)

useEffect(()=>{
  stateSel[id - 1].Quantity !== 1 && setNum(stateSel[id - 1].Quantity)
}, [stateSel[id - 1].Quantity])
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
          <p> Quantity:{num}</p>
          <div style={cartStyles.btnStyleDiv}>
            <AddSubQuantity id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};


