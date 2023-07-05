import React, { Component, useEffect } from "react";
import Product from "./Product";

const ShoppingCart = (props) => {
  useEffect(() => {
    props.onResetHandler();
  }, []);

  return (
    <React.StrictMode>
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={props.onResetHandler}
      >
        Reset
      </button>
      {props.products
        .filter((product) => product.isInCart === true)
        .map((product) => (
          <Product
            key={product.name}
            product={product}
            onIncrement={props.onIncrementHandler}
            onDecrement={props.onDecrementHandler}
            onDelete={props.onDeleteHandler}
          />
        ))}
      {/* {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onIncrement={this.props.onIncrementHandler}
            onDecrement={this.props.onDecrementHandler}
            onDelete={this.props.onDeleteHandler}
          />
        ))} */}
    </React.StrictMode>
  );
};

export default ShoppingCart;
