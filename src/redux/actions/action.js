
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

export const addBookToCartAction = payload =>{
  console.log('action ', payload)
  return{
    type:'add',
    payload
  }
}