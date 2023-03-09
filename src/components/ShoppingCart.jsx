import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  render() {
    return (
      <React.StrictMode>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.props.onResetHandler}
        >
          Reset
        </button>
        {this.props.products
          .filter((product) => product.isInCart === true)
          .map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={this.props.onIncrementHandler}
              onDecrement={this.props.onDecrementHandler}
              onDelete={this.props.onDeleteHandler}
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
  }
}

export default ShoppingCart;
