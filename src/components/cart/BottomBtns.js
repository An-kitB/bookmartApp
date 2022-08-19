import React from "react";
import { Checkout } from "../checkout/checkout";

export const BottomBtns = () => {
  return (
    <div style={styles.main}>
     

      <Checkout />
    </div>
  );
};

const styles = {
  main: {
    dispaly: "flex",
    flexDirection: "row",
  },
};
