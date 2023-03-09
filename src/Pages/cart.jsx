import React from "react";
const Cart = (props) => {
  const style = props.product.isInCart
    ? { color: "black", cursor: "pointer" }
    : { color: "gray", cursor: "pointer" };
  return (
    <i
      style={style}
      className="fa-sharp fa-solid fa-cart-plus"
      onClick={() => props.ProductOnChange(props.product)}
    ></i>
  );
};

export default Cart;
