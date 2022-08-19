//Add quantity chng name later
export const addToCartAction = () => {
  return {
    type: "addToCart",
  };
};
//Add quantity chng name later
export const rmvFromCartAction = () => {
  return {
    type: "rmvFromCart",
  };
};

export const resetQuantityction = () => {
  return {
    type: "Reset",
  };
};

export const addBookToCartAction = (payload) => {
  console.log("action ", payload);
  return {
    type: "add",
    payload,
  };
};

export const addQuantityAction = (id, num) => {
  return {
    type: "addQuantity",
    id,
    num,
  };
};

export const RmvQuantityAction = (id, num) => {
  return {
    type: "rmvQuantity",
    id,
    num,
  };
};

export const addAddressAction = (payload, name) => {
  // console.log("action adderss", payload);

  return {
    type: "addAddress",
    payload,
    name,
  };
};

export const addTotalAction = (totalSum) => {
  console.log("action adderssSumsdjcbewbc ", totalSum);

  return {
    type: "addTotal",
    totalSum,
  };
};
